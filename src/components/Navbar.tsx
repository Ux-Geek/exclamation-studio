import React from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import logoMark from '../assets/eexxxccllaamm.ai7.svg';

export const Navbar: React.FC = () => {
  const contactRef = useMagnetic(0.15);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-bg/55 border-b border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="brand opacity-90 flex items-center">
          <img src={logoMark} alt="Exclamation" className="h-7 w-auto" />
        </div>
        <nav className="flex items-center gap-6">
          <a href="#work" className="text-fg/80 hover:text-fg transition-opacity">Work</a>
          <a href="#about" className="text-fg/80 hover:text-fg transition-opacity">About</a>
          <a
            ref={contactRef}
            href="#contact"
            className="px-4 py-2 border border-stroke-strong rounded-full text-fg/80 hover:text-fg transition-all"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
