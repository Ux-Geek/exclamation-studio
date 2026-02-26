/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ThreeBackground } from './components/ThreeBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Approach } from './components/Approach';
import { Work } from './components/Work';
import { CaseStudy } from './components/CaseStudy';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { useReveal } from './hooks/useReveal';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [activeProject, setActiveProject] = React.useState<any>(null);
  useReveal();

  return (
    <div className="relative min-h-screen">
      {/* Grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Three.js background */}
      <ThreeBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Capabilities />
        <Approach />
        <Work onOpenProject={setActiveProject} />
        <About />
        <Contact />
      </main>

      <AnimatePresence>
        {activeProject && (
          <CaseStudy project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>

      <footer className="py-12 border-t border-stroke">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center text-xs text-muted uppercase tracking-widest">
          <span>© 2026 Exclamation Studios</span>
          <span>Built with restraint</span>
        </div>
      </footer>
    </div>
  );
}

