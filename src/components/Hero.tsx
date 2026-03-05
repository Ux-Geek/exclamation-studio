import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DiamondButton } from './DiamondButton';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const ww3Scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const ww3Y = useTransform(scrollYProgress, [0, 1], ["0vh", "49vh"]);

  const slideUpVariants = {
    initial: { y: "100%" },
    animate: { y: "0%" }
  };

  const ww3Variants = {
    initial: { y: 300, opacity: 1 },
    animate: { y: 0, opacity: 1 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section ref={containerRef} className="hero-section relative w-full h-[98vh] overflow-hidden bg-bg">
      {/* Background Graphic Text Parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10 overflow-hidden"
        style={{ scale: ww3Scale, y: ww3Y }}
      >
        <motion.div
          variants={ww3Variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(6rem,15vw,20rem)] font-serif whitespace-nowrap opacity-[0.03] select-none text-fg"
        >
          EXCLAMATION
        </motion.div>
      </motion.div>

      <div className="relative h-full flex items-center w-full">
        <div className="hero-aura" aria-hidden="true" />

        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-4"
          >
            <p className="inline-block text-muted tracking-[0.12em] uppercase text-xs">
              Cultural Design Partner
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="hero-kinetic flex flex-col gap-2 mt-2"
          >
            <div className="overflow-hidden">
              <motion.div
                variants={slideUpVariants}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-serif font-normal text-[clamp(44px,6vw,76px)] leading-[1.02] tracking-[-0.01em] text-fg mix-blend-difference"
              >
                Design that reads like strategy.
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={slideUpVariants}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-serif font-normal text-[clamp(44px,6vw,76px)] leading-[1.02] tracking-[-0.01em] text-fg mix-blend-difference"
              >
                Looks like restraint.
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={slideUpVariants}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-serif font-normal text-[clamp(44px,6vw,76px)] leading-[1.02] tracking-[-0.01em] text-fg mix-blend-difference"
              >
                Ships like product.
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            className="mt-6"
          >
            <p className="max-w-[58ch] text-muted text-lg leading-relaxed mix-blend-difference">
              We build brand systems and digital experiences for teams with long timelines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            className="hero-actions mt-10 flex items-center gap-6 mix-blend-difference"
          >
            <DiamondButton href="#contact">
              <span className="text-sm tracking-wide">Start a project</span>
            </DiamondButton>

            <a className="text-fg/80 border-b border-fg/25 pb-0.5 hover:text-fg transition-opacity text-sm" href="#work">
              View selected work
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="micro mt-10 text-fg/55 text-[13px] mix-blend-difference"
          >
            Brand Systems • Digital Products • Campaign Direction • Motion & 3D
          </motion.p>
        </div>
      </div>
    </section>
  );
};
