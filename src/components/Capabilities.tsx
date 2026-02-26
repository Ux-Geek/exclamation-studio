import React from 'react';

export const Capabilities: React.FC = () => {
  return (
    <section className="py-24 md:py-32 border-t border-stroke" id="capabilities">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="section-head reveal grid md:grid-cols-2 gap-6 items-end mb-11">
          <h2 className="text-2xl tracking-tight font-medium">Capabilities</h2>
          <p className="text-muted max-w-[60ch] leading-relaxed">
            From positioning to execution — so the work stays coherent as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <article className="card touch-bloom reveal border border-stroke rounded-[18px] p-6 bg-fg/[0.03]">
            <h3 className="text-base font-medium mb-2">Brand Systems</h3>
            <p className="text-muted leading-relaxed">Naming, identity, typography, guidelines, modular assets.</p>
          </article>
          <article className="card touch-bloom reveal border border-stroke rounded-[18px] p-6 bg-fg/[0.03]">
            <h3 className="text-base font-medium mb-2">Digital Design</h3>
            <p className="text-muted leading-relaxed">Websites, product UI, design systems, responsive frameworks.</p>
          </article>
          <article className="card touch-bloom reveal border border-stroke rounded-[18px] p-6 bg-fg/[0.03]">
            <h3 className="text-base font-medium mb-2">Motion & 3D</h3>
            <p className="text-muted leading-relaxed">Micro-animations, interactive scenes, real-time visuals.</p>
          </article>
        </div>
      </div>
    </section>
  );
};
