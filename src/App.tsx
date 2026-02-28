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
import gsap from 'gsap';
import logoIcon from './assets/eexxxccllaamm 66copy.svg';

export default function App() {
  const [activeProject, setActiveProject] = React.useState<any>(null);
  const footerRef = useRef<HTMLElement>(null);
  const footerParallaxRef = useRef<HTMLDivElement>(null);
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
    // Footer Stage: violet cursor-follow + subtle type parallax
    const footerStage = footerRef.current;
    if (!footerStage) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const parallaxWords = footerParallaxRef.current?.querySelectorAll(".footer-word, .footer-punct");

    const rootMouse = (e: MouseEvent) => {
      const r = footerStage.getBoundingClientRect();
      const fx = ((e.clientX - r.left) / r.width) * 100;
      const fy = ((e.clientY - r.top) / r.height) * 100;
      footerStage.style.setProperty("--fx", `${fx}%`);
      footerStage.style.setProperty("--fy", `${fy}%`);

      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;

      if (parallaxWords) {
        parallaxWords.forEach((el, i) => {
          const depth = (i + 1) * 4; // keep subtle
          gsap.to(el, {
            x: nx * depth,
            y: ny * (depth * 0.5),
            duration: 0.6,
            ease: "power2.out"
          });
        });
      }
    };

    const rootTouch = (e: TouchEvent) => {
      if (!e.touches?.length) return;
      const t = e.touches[0];
      const r = footerStage.getBoundingClientRect();
      const tx = ((t.clientX - r.left) / r.width) * 100;
      const ty = ((t.clientY - r.top) / r.height) * 100;
      footerStage.style.setProperty("--fx", `${tx}%`);
      footerStage.style.setProperty("--fy", `${ty}%`);
    };

    footerStage.addEventListener("mousemove", rootMouse, { passive: true });
    footerStage.addEventListener("touchmove", rootTouch, { passive: true });

    // Reveal trigger
    if (footerParallaxRef.current) {
      gsap.fromTo(
        footerStage.querySelectorAll(".footer-big-line"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.10,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerStage,
            start: "top 70%"
          }
        }
      );

      gsap.fromTo(
        footerStage.querySelectorAll(".footer-actions, .footer-meta"),
        { y: 10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerStage,
            start: "top 55%"
          }
        }
      );
    }

    return () => {
      footerStage.removeEventListener("mousemove", rootMouse);
      footerStage.removeEventListener("touchmove", rootTouch);
    };
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

      <footer className="footer-stage mt-12 z-10" id="footer" ref={footerRef}>
        <div className="footer-violet" aria-hidden="true"></div>
        <div className="footer-grain" aria-hidden="true"></div>

        <div className="max-w-[1200px] mx-auto px-6 footer-stage-inner w-full">
          <div className="footer-big" ref={footerParallaxRef}>
            <div className="footer-big-line">
              <span className="footer-word">EXCLAMATION</span>
            </div>
            <div className="footer-big-line">
              <span className="footer-word">STUDIOS</span>
              <span className="footer-punct translate-y-2 inline-flex items-center">
                <img src={logoIcon} alt="!" className="h-[1.8em] w-auto -ml-8 -mt-10" style={{ fill: 'currentColor' }} />
              </span>
            </div>
          </div>

          <div className="footer-actions">
            <a className="footer-link touch-bloom" href="#work">Work</a>
            <a className="footer-link touch-bloom" href="#about">About</a>
            <a className="footer-link footer-link-strong touch-bloom" href="mailto:hello@exclamationstudios.com">Email</a>
          </div>

          <div className="footer-meta">
            <span>© <span id="year">{new Date().getFullYear()}</span> Exclamation Studios</span>
            <span className="footer-meta-right">Built with restraint. Accented with violet.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
