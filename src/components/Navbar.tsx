import React from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import logoMark from '../assets/eexxxccllaamm.ai7.svg';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const contactRef = useMagnetic(0.15);

  const navVariants = {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <motion.header
      variants={navVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-bg/55 border-b border-stroke"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between"
      >
        <motion.div variants={navVariants} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }} className="brand opacity-90 flex items-center">
          <img src={logoMark} alt="Exclamation" className="h-14 w-auto -ml-4" />
        </motion.div>

        <motion.nav
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex items-center gap-6"
        >
          <motion.a variants={navVariants} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }} href="#work" className="text-fg/80 hover:text-fg transition-opacity">Work</motion.a>
          <motion.a variants={navVariants} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }} href="#about" className="text-fg/80 hover:text-fg transition-opacity">About</motion.a>
          <motion.a
            variants={navVariants} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            ref={contactRef as any}
            href="#contact"
            className="px-4 py-2 border border-stroke-strong rounded-full text-fg/80 hover:text-fg transition-all cursor-pointer inline-block"
          >
            Contact
          </motion.a>
        </motion.nav>
      </motion.div>
    </motion.header>
  );
};
