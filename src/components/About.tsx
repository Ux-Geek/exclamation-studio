import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const Folds = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  const items = [
    {
      title: "Clarity",
      meta: "Define the decision criteria",
      content: "We translate ambition into constraints: audience, positioning, hierarchy, and what must never change. Strategy becomes a system the team can actually ship."
    },
    {
      title: "Craft",
      meta: "Build a system, not a mood",
      content: "Typography, grid, spacing, components, motion rules. Everything earns its place. The output is coherent even when the team grows."
    },
    {
      title: "Activation",
      meta: "Package it for speed",
      content: "We deliver a usable kit: components, tokens, templates, motion language, and guidance that prevents drift. The goal is less friction and faster production."
    }
  ];

  useEffect(() => {
    panelsRef.current.forEach((panel, i) => {
      if (!panel) return;
      if (i === openIndex) {
        gsap.to(panel, {
          height: "auto",
          duration: 0.45,
          ease: "power2.out"
        });
      } else {
        gsap.to(panel, {
          height: 0,
          duration: 0.35,
          ease: "power2.out"
        });
      }
    });
  }, [openIndex]);

  return (
    <div className="folds">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <button
            className="fold touch-bloom reveal"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="fold-title">{item.title}</span>
            <span className="fold-meta">{item.meta}</span>
            <span className="fold-icon font-mono" aria-hidden="true">{openIndex === i ? '–' : '+'}</span>
          </button>
          <div
            className="fold-panel"
            ref={el => panelsRef.current[i] = el}
            style={{ height: 0 }}
          >
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export const About: React.FC = () => {
  return (
    <section className="about w-full" id="about">
      <div className="unfold w-full">
        <div className="paper-edge" aria-hidden="true"></div>
        <div className="fold-hinge" aria-hidden="true"></div>
        <div className="fold-seam" aria-hidden="true"></div>
        <div className="max-w-[1200px] mx-auto px-6 container relative z-10 py-24 md:py-32">
          <div className="about-grid">

            {/* BIG exclamation motif */}
            <div className="about-mark reveal">
              <div className="excl-wrap flex items-center justify-center">
                <div className="excl font-normal">!</div>
                <div className="excl-glow" aria-hidden="true"></div>
              </div>
              <p className="about-mark-note">Restraint is the surface. Systems are the engine.</p>
            </div>

            {/* Unfolding philosophy */}
            <div className="about-body">
              <div className="section-head tight reveal">
                <h2 className="text-2xl font-normal tracking-tight">Studio Philosophy</h2>
                <p className="text-muted leading-relaxed max-w-[50ch]">
                  We don’t sell aesthetics. We build languages that scale across product, marketing, and time.
                </p>
              </div>

              <Folds />

              <div className="founder-note reveal">
                <div className="label">Founder Note</div>
                <p>
                  Exclamation exists for teams building beyond launch week.
                  We stay selective so the partnership stays serious — and the output stays sharp.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
