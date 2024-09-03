import React from 'react';
import '../styles/About.css';
import profilePic from '../assets/pp.JPG'; // Ensure the path is correct

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>I’m a passionate Frontend Developer and Web Designer with expertise in React, CSS, and JavaScript. I love creating visually appealing and functional websites.</p>
        <a href="/assets/mycv.pdf" download className="cv-button">Download CV</a>
      </div>
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="animated-profile-pic" />
      </div>
    </div>
  );
};

export default About;
