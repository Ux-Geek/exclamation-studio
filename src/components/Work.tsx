import React from 'react';
import { motion } from 'motion/react';

interface WorkProps {
  onOpenProject: (project: any) => void;
}

export const Work: React.FC<WorkProps> = ({ onOpenProject }) => {
  const works = [
    { id: "project-1", title: "Project Name", meta: "Brand System / Web" },
    { id: "project-2", title: "Project Name", meta: "Art Direction" },
  ];

  return (
    <section className="w-full" id="work">
      <div className="unfold w-full">
        <div className="paper-edge" aria-hidden="true"></div>
        <div className="fold-hinge" aria-hidden="true"></div>
        <div className="fold-seam" aria-hidden="true"></div>
        <div className="max-w-[1200px] mx-auto px-6 container relative z-10 py-24 md:py-32">
          <div className="section-head reveal grid md:grid-cols-2 gap-6 items-end mb-11">
            <h2 className="text-2xl tracking-tight font-normal">Selected Work</h2>
            <p className="text-muted max-w-[60ch] leading-relaxed">
              A few examples of direction turning into outcomes.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {works.map((work) => (
              <motion.a
                key={work.id}
                layoutId={`project-${work.id}`}
                onClick={(e) => { e.preventDefault(); onOpenProject(work); }}
                href="#"
                className="work-item touch-bloom reveal flex justify-between items-center p-5 border border-stroke rounded-2xl bg-fg/[0.02] hover:bg-fg/[0.05] hover:border-fg/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <motion.span layoutId={`title-${work.id}`} className="work-title font-normal">{work.title}</motion.span>
                <motion.span layoutId={`meta-${work.id}`} className="work-meta text-muted text-sm">{work.meta}</motion.span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
