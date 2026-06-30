import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkGrid } from './components/WorkGrid';
import { About } from './components/About';
import { Services } from './components/Services';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { CaseStudy } from './components/CaseStudy';
import { useReveal } from './hooks/useReveal';
import { AnimatePresence } from 'motion/react';
import type { Project } from './components/WorkGrid';
import logoIcon from './assets/eexxxccllaamm 66copy.svg';

export default function App() {
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);
  useReveal();

  return (
    <div className="relative min-h-screen">
      {/* Grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Custom cursor */}
      <CustomCursor />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <WorkGrid onOpenProject={setActiveProject} />
        <About />
        <Services />
        <Resources />
        <Contact />
      </main>

      <AnimatePresence>
        {activeProject && (
          <CaseStudy project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>

      <footer className="footer-stage" id="footer">
        <div className="footer-stage-inner">
          <div className="footer-big">
            <div className="footer-big-line">
              <span className="footer-word">EXCLAMATION</span>
            </div>
            <div className="footer-big-line">
              <span className="footer-word">STUDIO</span>
              <span className="footer-punct">
                <img src={logoIcon} alt="!" className="h-[1.6em] w-auto inline-block -mt-6 -ml-4" style={{ filter: 'brightness(0.3)' }} />
              </span>
            </div>
          </div>

          <div className="footer-actions">
            <a className="footer-link" href="#work">Work</a>
            <a className="footer-link" href="#about">About</a>
            <a className="footer-link" href="#services">Services</a>
            <a className="footer-link" href="mailto:hello@exclamationstudios.com">Email</a>
          </div>

          <div className="footer-meta">
            <span>© {new Date().getFullYear()} Exclamation Studio</span>
            <span>Brand identity for ambitious brands.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
