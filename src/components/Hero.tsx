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

    // Scroll hint fade on scroll
    const hint = heroRef.current.querySelector('.hero-scroll-hint');
    if (hint) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        (hint as HTMLElement).style.opacity = `${Math.max(0, 1 - scrollY / 200)}`;
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section ref={heroRef} className="hero-section relative" id="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow hero-reveal" style={{ opacity: 0 }}>
          Branding Studio
        </p>

        <h1 className="hero-title hero-reveal" style={{ opacity: 0 }}>
          Brand identity for <em>bold,</em><br />
          ambitious brands.
        </h1>

        <p className="hero-sub hero-reveal" style={{ opacity: 0 }}>
          We specialise in brand identity, visual expression, and creative 
          direction — building systems that scale with your ambition.
        </p>

        <div className="hero-services hero-reveal" style={{ opacity: 0 }}>
          <span>Brand Identity</span>
          <span>Visual Systems</span>
          <span>Creative Direction</span>
          <span>Digital Design</span>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};
