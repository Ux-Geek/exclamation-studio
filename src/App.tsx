import React, { useEffect, useRef } from 'react';
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
import { useUnfold } from './hooks/useUnfold';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [activeProject, setActiveProject] = React.useState<any>(null);
  const footerRef = useRef<HTMLElement>(null);
  useReveal();
  useUnfold();

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      const el = (e.target as HTMLElement).closest(".touch-bloom") as HTMLElement;
      if (!el) return;

      const r = el.getBoundingClientRect();
      el.style.setProperty("--tx", `${e.clientX - r.left}px`);
      el.style.setProperty("--ty", `${e.clientY - r.top}px`);
      el.classList.add("is-pressed");
    };

    const handlePointerUp = () => {
      document.querySelectorAll(".touch-bloom.is-pressed")
        .forEach(el => el.classList.remove("is-pressed"));
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointercancel", handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, []);

  useEffect(() => {
    // Footer light reveal follows cursor
    const footer = footerRef.current;
    if (!footer) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const r = footer.getBoundingClientRect();
      const fx = ((e.clientX - r.left) / r.width) * 100;
      const fy = ((e.clientY - r.top) / r.height) * 100;
      footer.style.setProperty("--fx", `${fx}%`);
      footer.style.setProperty("--fy", `${fy}%`);
    };

    footer.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => footer.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

      <footer className="footer2 mt-12 bg-bg border-stroke z-10" ref={footerRef}>
        <div className="footer-light" aria-hidden="true"></div>

        <div className="max-w-[1200px] mx-auto px-6 footer2-inner">
          <div className="footer2-left text-left">
            <div className="footer2-mark">
              <span className="footer-dot" aria-hidden="true"></span>
              <span className="footer-name text-lg font-medium tracking-tight">Exclamation Studios</span>
            </div>
            <p className="footer2-sub">Cultural design partner. Systems over noise.</p>
          </div>

          <div className="footer2-right">
            <a href="#work" className="touch-bloom">Work</a>
            <a href="#about" className="touch-bloom">About</a>
            <a href="mailto:hello@exclamationstudios.com" className="touch-bloom">Email</a>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 footer2-bottom mt-16 text-muted">
          <span>© <span id="year">{new Date().getFullYear()}</span> Exclamation Studios</span>
          <span className="footer2-sig tracking-wide">Built with restraint. Signed with “!”</span>
        </div>
      </footer>
    </div>
  );
}
