import React, { useEffect, useState, useRef } from 'react';

export default function Project() {
  const [projects, setProjects] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("./projects.json")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  // Hàm scroll với ref
  const scrollProjects = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
  <section className="project-section" id="projects">
    <div className="project-container">
      <h2 className="projects-title">My Projects</h2>
      <p className="project-desc-intro">Some of my products, scroll to see more!</p>

      <div className="project-wrapper">
        <button className="scroll-btn left" onClick={() => scrollProjects(-350)}>◀</button>

        <div className="project-scroll" ref={scrollRef}>
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img src={p.image} alt={p.title} className="project-img" />
              <div className="project-info">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
              </div>
            </a>
          ))}

        </div>

        <button className="scroll-btn right" onClick={() => scrollProjects(350)}>▶</button>
      </div>
    </div>
  </section>
);

}