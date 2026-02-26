import React from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

export const Hero: React.FC = () => {
  const btnRef = useMagnetic(0.22);

  return (
    <section className="min-h-screen flex items-center pt-18">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <p className="eyebrow reveal mb-4 text-muted tracking-[0.12em] uppercase text-xs">
          Cultural Design Partner
        </p>
        <h1 className="hero-title reveal text-[clamp(44px,6vw,76px)] leading-[1.02] tracking-tight font-medium">
          Design that reads like strategy.<br/>
          Looks like restraint.<br/>
          Ships like product.
        </h1>
        <p className="hero-sub reveal mt-4 max-w-[58ch] text-muted text-lg leading-relaxed">
          We build brand systems and digital experiences for teams with long timelines.
        </p>

        <div className="hero-actions reveal mt-7 flex items-center gap-4">
          <a 
            ref={btnRef}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-stroke-strong bg-fg/5 text-fg hover:bg-fg/10 hover:border-fg/25 transition-all" 
            href="#contact"
          >
            Start a project
          </a>
          <a className="text-fg/80 border-b border-fg/25 pb-0.5 hover:text-fg transition-opacity" href="#work">
            View selected work
          </a>
        </div>

        <p className="micro reveal mt-7 text-fg/55 text-[13px]">
          Brand Systems • Digital Products • Campaign Direction • Motion & 3D
        </p>
      </div>
    </section>
  );
};
