import React, { useState } from 'react';

type CapabilityKey = 'brand' | 'digital' | 'art' | 'motion' | 'launch';

const copyMap: Record<CapabilityKey, string> = {
  brand: "Brand Systems — built to scale without drift.",
  digital: "Digital Design — systems-first UI that stays coherent.",
  art: "Art Direction — visual language with discipline, not noise.",
  motion: "Motion & 3D — interaction that feels expensive, not gimmicky.",
  launch: "Launch & Activation — rollouts designed for conversion and consistency."
};

export const Capabilities: React.FC = () => {
  const [activeCap, setActiveCap] = useState<CapabilityKey>('brand');

  const capabilities: { key: CapabilityKey; title: string; tag: string; description: string }[] = [
    { key: 'brand', title: 'Brand Systems', tag: 'Identity • Type • Guidelines', description: 'Naming, identity, typography, guidelines, modular assets.' },
    { key: 'digital', title: 'Digital Design', tag: 'Web • UI • Systems', description: 'Websites, product UI, design systems, responsive frameworks.' },
    { key: 'art', title: 'Art Direction', tag: 'Visual language • Campaigns', description: 'Visual language, campaigns, photography direction, motion rules.' },
    { key: 'motion', title: 'Motion & 3D', tag: 'Interaction • Real-time', description: 'Micro-animations, interactive scenes, product worlds.' },
    { key: 'launch', title: 'Launch & Activation', tag: 'GTM • Conversion', description: 'Landing conversion, rollout kits, content systems.' },
  ];

  return (
    <section className="w-full" id="capabilities">
      <div className="unfold w-full">
        <div className="paper-edge" aria-hidden="true"></div>
        <div className="fold-hinge" aria-hidden="true"></div>
        <div className="fold-seam" aria-hidden="true"></div>

        <div className="max-w-[1200px] mx-auto px-6 container relative z-10 py-24 md:py-32">
          <div className="cap-wrap border-stroke">
            <div className="section-head tight reveal mb-11">
              <h2 className="text-2xl tracking-tight font-normal mb-2">Capabilities</h2>
              <p className="text-muted max-w-[60ch] leading-relaxed">From positioning to execution — so the work stays coherent as you grow.</p>
            </div>

            <div className="cap-layout">
              {/* LEFT: vertical cards */}
              <div className="cap-list" data-cap-list>
                {capabilities.map(cap => (
                  <button
                    key={cap.key}
                    className="cap-card touch-bloom reveal"
                    data-cap={cap.key}
                    onMouseEnter={() => setActiveCap(cap.key)}
                    onFocus={() => setActiveCap(cap.key)}
                    onClick={() => setActiveCap(cap.key)}
                  >
                    <div className="cap-top">
                      <h3>{cap.title}</h3>
                      <span className="cap-tag">{cap.tag}</span>
                    </div>
                    <p>{cap.description}</p>
                    <span className="cap-arrow" aria-hidden="true">→</span>
                  </button>
                ))}

                <p className="cap-micro reveal">Built for teams that need clarity now — and consistency later.</p>
              </div>

              {/* RIGHT: mural stage (top-right, changes on hover) */}
              <aside className="cap-mural reveal" aria-hidden="true">
                <div className="mural-frame">
                  {(Object.keys(copyMap) as CapabilityKey[]).map(key => (
                    <div
                      key={key}
                      className={`mural mural-${key} ${activeCap === key ? 'is-active' : ''}`}
                      data-mural={key}
                    ></div>
                  ))}

                  <div className="mural-gloss"></div>
                  <div className="mural-grain"></div>
                </div>

                <div className="mural-caption" data-mural-caption>
                  {copyMap[activeCap]}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
