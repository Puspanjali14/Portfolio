import React from 'react';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

const Skills = () => {
  const skillsData = [
    { skill: 'HTML5', icon: <FaHtml5 /> },
    { skill: 'CSS3', icon: <FaCss3Alt /> },
    { skill: 'JavaScript', icon: <FaJsSquare /> },
    { skill: 'React', icon: <FaReact /> }
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="icon">{skill.icon}</div>
            <h2>{skill.skill}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
