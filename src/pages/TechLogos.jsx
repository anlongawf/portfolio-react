import React, { useEffect, useState } from 'react';

export default function TechLogos() {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( ()=> {
        fetch("/TechLogos.json")
        .then(res => res.json())
        .then(data => {
            setTechs(data);
            setLoading(false);
        })
        .catch(err => {
            console.log("Fetch Error: ", err);
            setLoading(false);
        });
    }, [])

    if (loading) return <p>Loading...</p>;

     return (
    <div className="tech-box container d-flex flex-column align-items-center text-center">
      <h1 className="tech-text" id="skills">Tools & Technologies</h1>
      <div className="tech-logos">
        <div className="d-flex justify-content-center flex-nowrap">
          {techs.map((tech) => (
            <div key={tech.id} className="col-3 col-md-2">
              <img src={tech.image} alt= "Tech" className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}