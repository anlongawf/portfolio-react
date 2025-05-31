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
  <div className="projects-section d-flex flex-column align-items-center justify-content-center container mt-5">
    <h2 className="projects-title mt-4" id="projects">My Projects</h2>
    <div className="projects-wrapper">
      <button className="scroll-btn prev" onClick={() => scrollProjects(-300)}>&lt;</button>

      <div className="projects-scroll" ref={scrollRef}>
       {projects.map((project, index) => (
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="target project-card"
                key={index}
            >
                <img src={project.image} alt={project.title} className="project-image" />
                <p className="project-title">{project.title}</p>
            </a>
            ))}

      </div>

      <button className="scroll-btn next" onClick={() => scrollProjects(300)}>&gt;</button>
    </div>
  </div>
);

}
