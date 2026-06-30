import React, { useEffect, useState } from 'react';
import logoMark from '../assets/eexxxccllaamm 66copy.svg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll past 90vh (roughly the hero), switch to light navbar
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'is-light' : 'is-dark'}`} id="navbar">
      <a href="#" className="navbar-logo">
        <img src={logoMark} alt="Exclamation Studio" />
      </a>
      <nav className="navbar-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact" className="nav-cta">Get in touch</a>
      </nav>
    </header>
  );
};
