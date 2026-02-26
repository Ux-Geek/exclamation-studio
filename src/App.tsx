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
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { useReveal } from './hooks/useReveal';

export default function App() {
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
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="py-12 border-t border-stroke">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center text-xs text-muted uppercase tracking-widest">
          <span>© 2026 Exclamation Studios</span>
          <span>Built with restraint</span>
        </div>
      </footer>
    </div>
  );
}

