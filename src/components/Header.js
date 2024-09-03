import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/about"><FaUser /> About</Link></li>
          <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
          <li><Link to="/skills"><FaTools /> Skills</Link></li>
          <li><Link to="/contact"><FaEnvelope /> Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
