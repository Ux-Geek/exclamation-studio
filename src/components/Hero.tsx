import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !heroRef.current) return;

    const elements = heroRef.current.querySelectorAll('.hero-reveal');
    gsap.fromTo(elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="hero-section" id="hero">
      <div className="hero-glow"></div>
      
      <div className="hero-inner">
        <div className="hero-eyebrow hero-reveal" style={{ opacity: 0 }}>
          Branding & Product Design Studio
        </div>

        <h1 className="hero-title hero-reveal" style={{ opacity: 0 }}>
          Strategy that ships.<br />
          <span className="text-gradient">Design that endures.</span>
        </h1>

        <p className="hero-sub hero-reveal" style={{ opacity: 0 }}>
          We transform ideas into flawless digital solutions. From crafting unique icons 
          to developing complete brand systems and web applications, we bring your vision to life.
        </p>

        <div className="hero-reveal" style={{ opacity: 0 }}>
          <a href="#contact" className="hero-cta">
            Start a project
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
