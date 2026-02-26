import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface CaseStudyProps {
    project: any;
    onClose: () => void;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ project, onClose }) => {
    // Lock body scroll when overlay is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 overflow-y-auto bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                layoutId={`project-${project.id}`}
                className="relative w-full max-w-[1000px] min-h-[80vh] bg-[#111216] border border-stroke rounded-3xl overflow-hidden flex flex-col my-auto origin-center mt-20 md:mt-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-fg/[0.05] hover:bg-fg/10 text-fg transition-colors"
                    onClick={onClose}
                    aria-label="Close case study"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-16 border-b border-stroke flex-1">
                    <motion.div layoutId={`meta-${project.id}`} className="text-muted tracking-[0.1em] uppercase text-xs mb-4">
                        {project.meta}
                    </motion.div>
                    <motion.h2 layoutId={`title-${project.id}`} className="text-[clamp(32px,5vw,64px)] font-medium tracking-tight mb-8">
                        {project.title}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="prose prose-invert max-w-none text-muted text-lg leading-relaxed space-y-6"
                    >
                        <p>
                            This is a placeholder for the case study deep dive. It demonstrates the seamless transition
                            from the index list into an immersive reading environment.
                        </p>
                        <p>
                            Restraint is a strategy. Here we would break down the strategic insights, the design system,
                            and the final application of the brand across digital and physical touchpoints.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-fg/[0.02] p-8 md:p-16 aspect-video flex-shrink-0 flex items-center justify-center text-muted"
                >
                    [ Featured Media / Images ]
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
