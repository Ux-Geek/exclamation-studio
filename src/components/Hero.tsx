import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { Magnetic } from './Magnetic';

export const Hero: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    }
  };

  const titleWords = "Strategy that ships. Design that endures.".split(" ");

  return (
    <section className="hero-section" id="hero">
      <div className="hero-glow"></div>
      
      <motion.div 
        ref={ref}
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={item} className="hero-eyebrow">
          Branding & Product Design Studio
        </motion.div>

        <h1 className="hero-title">
          {titleWords.map((word, index) => (
            <motion.span 
              key={index} 
              variants={item} 
              className={index >= 3 ? "text-gradient inline-block mr-4" : "inline-block mr-4"}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p variants={item} className="hero-sub">
          We transform ideas into flawless digital solutions. From crafting unique icons 
          to developing complete brand systems and web applications, we bring your vision to life.
        </motion.p>

        <motion.div variants={item}>
          <Magnetic>
            <a href="#contact" className="hero-cta">
              Start a project
              <span aria-hidden="true">→</span>
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
};
