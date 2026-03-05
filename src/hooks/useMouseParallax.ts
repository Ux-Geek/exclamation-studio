import { useEffect, RefObject } from 'react';

interface ParallaxOptions {
    strength?: number;
    invert?: boolean;
}

export const useMouseParallax = (ref: RefObject<HTMLElement | null>, options: ParallaxOptions = {}) => {
    const { strength = 15, invert = true } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;

        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        let rafId: number;

        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth) * 2 - 1;
            const y = (e.clientY / innerHeight) * 2 - 1;

            const dir = invert ? -1 : 1;
            targetX = x * strength * dir;
            targetY = y * strength * dir;
        };

        const animate = () => {
            // Lerp (linear interpolation) with configurable ease factor
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;

            el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(1.05)`;
            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, [ref, strength, invert]);
};
