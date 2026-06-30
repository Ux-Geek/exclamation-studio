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
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <WorkGrid onOpenProject={setActiveProject} />
        <Services />
        <Resources />
        <About />
        <Contact />
      </main>

      <AnimatePresence>
        {activeProject && (
          <CaseStudy project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>

      <footer className="footer-stage" id="footer">
        <div className="footer-glow"></div>
        <div className="footer-stage-inner">
          <div className="footer-big">
            EXCLAMATION
          </div>

          <div className="footer-actions">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="mailto:hello@exclamationstudios.com">Contact</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>

          <div className="footer-meta">
            <span>© {new Date().getFullYear()} Exclamation Studio</span>
            <span>Design that endures.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
