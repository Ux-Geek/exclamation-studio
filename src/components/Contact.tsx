import React, { useState, useRef, useEffect } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import gsap from 'gsap';

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  const questions = [
    {
      q: "What do you actually deliver?",
      a: "Brand system + web/product UI + component library + motion rules. You get a kit your team can use, not a one-off vibe."
    },
    {
      q: "Do you do “just a logo”?",
      a: "Only if the logo is part of a broader system. Standalone marks usually fail when the company scales."
    },
    {
      q: "How fast can we move?",
      a: "If inputs are ready, we can ship meaningful work in 2–4 weeks. Bigger systems take longer — but stay coherent."
    },
    {
      q: "What makes you selective?",
      a: "Fit. Teams who value systems, clarity, and long-term consistency. If it’s just a quick aesthetic flip, we’re not your studio."
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
    <div className="faq-list border-stroke" data-faq>
      {questions.map((item, i) => (
        <React.Fragment key={i}>
          <button
            className="faq-q touch-bloom flex justify-between gap-4 font-medium"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.q}</span>
            <span className="faq-icon font-mono">{openIndex === i ? '–' : '+'}</span>
          </button>
          <div
            className="faq-a"
            ref={el => panelsRef.current[i] = el}
            style={{ height: 0 }}
          >
            <p className="py-4">{item.a}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export const Contact: React.FC = () => {
  const emailBtnRef = useMagnetic(0.22);
  const sendBtnRef = useMagnetic(0.22);
  const openIntakeBtnRef = useMagnetic(0.12);

  const [intakeOpen, setIntakeOpen] = useState(false);
  const intakeBodyRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (intakeBodyRef.current) {
      gsap.to(intakeBodyRef.current, {
        height: intakeOpen ? "auto" : 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  }, [intakeOpen]);

  useEffect(() => {
    // Optional: auto-open on desktop hover for “unfold” feel (subtle)
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || window.innerWidth <= 900) return;

    const shell = shellRef.current;
    if (!shell) return;

    const handleEnter = () => {
      if (!intakeOpen) {
        setIntakeOpen(true);
      }
    };

    shell.addEventListener("mouseenter", handleEnter, { passive: true });
    return () => shell.removeEventListener("mouseenter", handleEnter);
  }, [intakeOpen]);

  return (
    <section className="cta w-full" id="contact">
      <div className="unfold w-full">
        <div className="paper-edge" aria-hidden="true"></div>
        <div className="fold-hinge" aria-hidden="true"></div>
        <div className="fold-seam" aria-hidden="true"></div>
        <div className="max-w-[1200px] mx-auto px-6 container relative z-10 py-24">
          <div className="cta-shell reveal" ref={shellRef}>
            <div className="cta-left pr-4">
              <p className="eyebrow tracking-[0.12em] uppercase text-xs text-muted mb-4">Availability</p>
              <h2 className="cta-title">A small number of projects.<br />High signal only.</h2>
              <p className="cta-sub">If you’re building for the long term, we’ll move quickly once the fit is clear.</p>

              <div className="cta-actions">
                <a
                  className="btn primary touch-bloom font-medium"
                  href="mailto:hello@exclamationstudios.com"
                  ref={emailBtnRef as React.RefObject<HTMLAnchorElement>}
                >
                  <span>Email the studio</span>
                  <span className="spark" aria-hidden="true"></span>
                </a>
                <button
                  className="btn ghost touch-bloom font-medium"
                  type="button"
                  onClick={() => setIntakeOpen(!intakeOpen)}
                  ref={openIntakeBtnRef as React.RefObject<HTMLButtonElement>}
                >
                  <span>{intakeOpen ? "Close intake" : "Open intake"}</span>
                </button>
              </div>

              <p className="cta-micro">Response within 48 hours. No decks. No theatre.</p>
            </div>

            {/* Unfold / Collapse Intake */}
            <div className="cta-right">
              <div className="intake-card touch-bloom group">
                <div className="intake-top">
                  <div className="intake-title">Quick Intake</div>
                  <div className="intake-hint">Unfolds. Takes 30 seconds.</div>
                </div>

                <div className="intake-body" ref={intakeBodyRef} style={{ height: 0 }}>
                  <div className="intake-body-content">
                    <div className="intake-row">
                      <input className="w-full p-4 rounded-xl border border-stroke bg-fg/[0.02] text-fg outline-none focus:border-fg/25 focus:ring-4 focus:ring-fg/[0.06] transition-all" placeholder="Name" />
                      <input className="w-full p-4 rounded-xl border border-stroke bg-fg/[0.02] text-fg outline-none focus:border-fg/25 focus:ring-4 focus:ring-fg/[0.06] transition-all" placeholder="Company / Role" />
                    </div>
                    <div className="intake-row">
                      <select className="appearance-none w-full p-4 rounded-xl border border-stroke bg-fg/[0.02] text-fg outline-none focus:border-fg/25 focus:ring-4 focus:ring-fg/[0.06] transition-all">
                        <option>Budget Range</option>
                        <option>£2k–£5k</option>
                        <option>£5k–£15k</option>
                        <option>£15k+</option>
                      </select>
                      <select className="appearance-none w-full p-4 rounded-xl border border-stroke bg-fg/[0.02] text-fg outline-none focus:border-fg/25 focus:ring-4 focus:ring-fg/[0.06] transition-all">
                        <option>Timeline</option>
                        <option>2–4 weeks</option>
                        <option>4–8 weeks</option>
                        <option>8+ weeks</option>
                      </select>
                    </div>
                    <textarea
                      className="w-full min-h-[100px] p-4 rounded-xl border border-stroke bg-fg/[0.02] text-fg outline-none focus:border-fg/25 focus:ring-4 focus:ring-fg/[0.06] transition-all resize-y"
                      placeholder="Project overview (short)"
                    />
                    <button
                      className="btn primary touch-bloom w-full font-medium"
                      type="button"
                      ref={sendBtnRef as React.RefObject<HTMLButtonElement>}
                    >
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="faq reveal">
            <div className="section-head tight mb-6">
              <h2 className="text-2xl font-normal tracking-tight mb-2">FAQs</h2>
              <p className="text-muted leading-relaxed">Clean answers. No fluff.</p>
            </div>
            <Faqs />
          </div>

        </div>
      </div>
    </section>
  );
};
