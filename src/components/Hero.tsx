import React, { useEffect, useRef } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const btnRef = useMagnetic(0.22);
  const heroRef = useRef<HTMLElement>(null);
  const kineticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const setVars = (x: number, y: number) => {
      const px = (x / window.innerWidth) * 100;
      const py = (y / window.innerHeight) * 100;

      hero.style.setProperty("--px", `${px}%`);
      hero.style.setProperty("--py", `${py}%`);

      hero.style.setProperty("--mx", `${(x - window.innerWidth / 2) * 0.02}px`);
      hero.style.setProperty("--my", `${(y - window.innerHeight / 2) * 0.02}px`);
    };

    const handleMouseMove = (e: MouseEvent) => setVars(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (!e.touches?.length) return;
      setVars(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Kinetic lines GSAP logic
    const lines = kineticRef.current?.querySelectorAll("[data-line]");
    let hx = 0, hy = 0;
    const kineticMouseMove = (e: MouseEvent) => {
      hx = (e.clientX / window.innerWidth) * 2 - 1;
      hy = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", kineticMouseMove, { passive: true });

    const kineticTicker = () => {
      if (lines) {
        lines.forEach((line, i) => {
          const depth = (i + 1) * 6;
          gsap.to(line, {
            x: hx * depth,
            y: hy * (depth * 0.35),
            duration: 0.6,
            ease: "power2.out"
          });
        });
      }
    };
    gsap.ticker.add(kineticTicker);

    if (lines) {
      gsap.fromTo(lines, { y: 14, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.05
      });
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mousemove", kineticMouseMove);
      gsap.ticker.remove(kineticTicker);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section relative w-full pt-4">
      <div className="unfold relative min-h-[calc(100vh-2rem)] flex items-center w-full">
        <div className="paper-edge" aria-hidden="true"></div>
        <div className="fold-hinge" aria-hidden="true"></div>
        <div className="fold-seam" aria-hidden="true"></div>
        <div className="hero-aura" aria-hidden="true" />

        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 container py-24">
          <p className="eyebrow reveal mb-4 text-muted tracking-[0.12em] uppercase text-xs">
            Cultural Design Partner
          </p>

          <div className="hero-kinetic reveal" data-hero-kinetic ref={kineticRef}>
            <div className="hero-line hero-title-interactive font-medium" data-line>Design that reads like strategy.</div>
            <div className="hero-line hero-title-interactive font-medium" data-line>Looks like restraint.</div>
            <div className="hero-line hero-title-interactive font-medium" data-line>Ships like product.</div>
          </div>

          <p className="hero-sub reveal mt-4 max-w-[58ch] text-muted text-lg leading-relaxed">
            We build brand systems and digital experiences for teams with long timelines.
          </p>

          <div className="hero-actions reveal mt-7 flex items-center gap-4">
            <a
              ref={btnRef as React.RefObject<HTMLAnchorElement>}
              className="btn touch-bloom font-medium"
              href="#contact"
            >
              <span>Start a project</span>
            </a>
            <a className="text-fg/80 border-b border-fg/25 pb-0.5 hover:text-fg transition-opacity ml-2" href="#work">
              View selected work
            </a>
          </div>

          <p className="micro reveal mt-7 text-fg/55 text-[13px]">
            Brand Systems • Digital Products • Campaign Direction • Motion & 3D
          </p>
        </div>
      </div>
    </section>
  );
};
