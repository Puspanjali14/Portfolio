import React from 'react';
import '../styles/Projects.css';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaGamepad } from 'react-icons/fa';

const Projects = () => {
  const projectData = [
    { title: 'Web Development', icon: <FaLaptopCode />, description: 'Responsive websites built with React and Tailwind CSS.' },
    { title: 'Mobile Apps', icon: <FaMobileAlt />, description: 'Cross-platform mobile apps using React Native.' },
    { title: 'Backend Systems', icon: <FaDatabase />, description: 'Server-side systems built with Node.js and Express.' },
    { title: 'Game Development', icon: <FaGamepad />, description: 'Simple 2D games built using JavaScript and Unity.' }
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-box" key={index}>
            <div className="icon">{project.icon}</div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
