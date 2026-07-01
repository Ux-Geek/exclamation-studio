import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (reduceMotion || isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - (isHovering ? 24 : 6));
      cursorY.set(e.clientY - (isHovering ? 24 : 6));
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });

    const hoverIn = () => {
      setIsHovering(true);
      cursorX.set(mousePosition.x - 24);
      cursorY.set(mousePosition.y - 24);
    };
    const hoverOut = () => {
      setIsHovering(false);
      cursorX.set(mousePosition.x - 6);
      cursorY.set(mousePosition.y - 6);
    };

    const attachListeners = () => {
      const hoverables = document.querySelectorAll("a, button, .work-card, input, textarea, select");
      hoverables.forEach(el => {
        el.addEventListener("mouseenter", hoverIn);
        el.addEventListener("mouseleave", hoverOut);
      });
    };

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    attachListeners();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isHovering, mousePosition]);

  return (
    <motion.div
      className={`custom-cursor hidden md:block ${isHovering ? 'is-hovering' : ''}`}
      style={{
        x: cursorX,
        y: cursorY,
      }}
      aria-hidden="true"
    />
  );
};
