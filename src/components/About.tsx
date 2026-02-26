import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="py-24 md:py-32 border-t border-stroke" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="section-head reveal grid md:grid-cols-2 gap-6 items-end">
          <h2 className="text-2xl tracking-tight font-medium">About</h2>
          <p className="text-muted max-w-[60ch] leading-relaxed">
            Restraint is a strategy. Systems beat aesthetics. Everything earns its place.
          </p>
        </div>
      </div>
    </section>
  );
};
