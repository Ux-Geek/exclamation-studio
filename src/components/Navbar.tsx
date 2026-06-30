import React from 'react';
import logoMark from '../assets/eexxxccllaamm.ai7.svg';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar" id="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <img src={logoMark} alt="Exclamation Studio" />
        </a>
        <nav className="navbar-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact" className="nav-cta">Get in touch</a>
        </nav>
      </div>
    </header>
  );
};
