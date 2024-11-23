import React from 'react';
import '../styles/components/Projects.css';

const Projects = () => (
  <section id="projects" className="projects">
    <h2>My Projects</h2>
    <div className="project-list">
      <div className="project">
        <h3>Project 1</h3>
        <p>Short description of Project 1. <a href="https://github.com" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Short description of Project 2. <a href="https://github.com" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>
      </div>
    </div>
  </section>
);

export default Projects;
