import React, { useEffect, useRef, useState, useCallback } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const moveCursor = useCallback((e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX - 7}px, ${e.clientY - 7}px)`;
    }
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    if (reduceMotion || isMobile || !cursorRef.current) return;

    window.addEventListener('mousemove', moveCursor, { passive: true });

    const hoverIn = () => setIsHovering(true);
    const hoverOut = () => setIsHovering(false);

    const observer = new MutationObserver(() => {
      const hoverables = document.querySelectorAll("a, button, .work-card, input, textarea, select");
      hoverables.forEach(el => {
        el.addEventListener("mouseenter", hoverIn);
        el.addEventListener("mouseleave", hoverOut);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial bind
    const hoverables = document.querySelectorAll("a, button, .work-card, input, textarea, select");
    hoverables.forEach(el => {
      el.addEventListener("mouseenter", hoverIn);
      el.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, [moveCursor]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor hidden md:block ${isHovering ? 'is-hovering' : ''}`}
      aria-hidden="true"
    />
  );
};
