import React from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

export const Contact: React.FC = () => {
  const btnRef = useMagnetic(0.22);

  return (
    <section className="py-24 md:py-32 border-t border-stroke" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="section-head reveal grid md:grid-cols-2 gap-6 items-end mb-11">
          <h2 className="text-2xl tracking-tight font-medium">Contact</h2>
          <p className="text-muted max-w-[60ch] leading-relaxed">
            We take on a small number of projects per quarter.
          </p>
        </div>

        <form className="form reveal grid gap-3 max-w-[560px]">
          <input 
            className="w-full p-4 rounded-xl border border-stroke bg-fg/[0.02] text-fg outline-none focus:border-fg/25 focus:ring-4 focus:ring-fg/[0.06] transition-all" 
            placeholder="Name" 
          />
          <input 
            className="w-full p-4 rounded-xl border border-stroke bg-fg/[0.02] text-fg outline-none focus:border-fg/25 focus:ring-4 focus:ring-fg/[0.06] transition-all" 
            placeholder="Company / Role" 
          />
          <select className="w-full p-4 rounded-xl border border-stroke bg-fg/[0.02] text-fg outline-none focus:border-fg/25 focus:ring-4 focus:ring-fg/[0.06] transition-all appearance-none">
            <option>Budget Range</option>
            <option>£2k–£5k</option>
            <option>£5k–£15k</option>
            <option>£15k+</option>
          </select>
          <textarea 
            className="w-full p-4 rounded-xl border border-stroke bg-fg/[0.02] text-fg outline-none focus:border-fg/25 focus:ring-4 focus:ring-fg/[0.06] transition-all min-h-[120px] resize-y" 
            placeholder="Project overview (short)"
          ></textarea>
          <button 
            ref={btnRef}
            className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-stroke-strong bg-fg/5 text-fg hover:bg-fg/10 hover:border-fg/25 transition-all cursor-pointer" 
            type="button"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
