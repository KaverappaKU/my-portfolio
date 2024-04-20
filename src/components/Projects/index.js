import React from "react";
import { useEffect, useState } from "react";
import "./projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://portfolio-backend-5lfy.onrender.com/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div>
      <section className="projects" id="projects">
        <div className="project-heading">
          <h1>My Projects</h1>
        </div>
        <div className="project-cards">
          {projects.map((project) => (
            <div key={project._id} className="card">
              <div className="card-body">
                <h5 className="card-title">{project.projectName}</h5>
                <p className="card-text">{project.projectDesc}</p>
                <a href={project.projectLink} className="btn btn-primary">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
