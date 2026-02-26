import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useUnfold = () => {
    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;

        gsap.registerPlugin(ScrollTrigger);

        const unfolds = gsap.utils.toArray(".unfold") as HTMLElement[];

        const triggers: ScrollTrigger[] = [];

        unfolds.forEach((wrap) => {
            const seam = wrap.querySelector(".fold-seam");
            const hinge = wrap.querySelector(".fold-hinge");
            const edge = wrap.querySelector(".paper-edge");

            gsap.set(wrap, { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" });
            if (seam) gsap.set(seam, { scaleX: 0, opacity: 0 });
            if (hinge) gsap.set(hinge, { scaleX: 0, opacity: 0 });
            if (edge) gsap.set(edge, { opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrap,
                    start: "top 78%",
                    end: "top 35%",
                    scrub: true
                }
            });

            // Mask reveal (panel opens)
            tl.to(wrap, {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                ease: "none"
            }, 0);

            // Hinge appears first (bend illusion)
            if (hinge) {
                tl.to(hinge, {
                    opacity: 1,
                    scaleX: 1,
                    ease: "none"
                }, 0.10);
            }

            // Seam draws over hinge
            if (seam) {
                tl.to(seam, {
                    opacity: 1,
                    scaleX: 1,
                    ease: "none"
                }, 0.16);
            }

            // Paper edge comes in after
            if (edge) {
                tl.to(edge, {
                    opacity: 1,
                    ease: "none"
                }, 0.26);
            }

            // Pin moment
            triggers.push(ScrollTrigger.create({
                trigger: wrap,
                start: "top top+=90",
                end: "+=320",
                pin: true,
                pinSpacing: true,
                anticipatePin: 1
            }));

            // Micro settle
            gsap.fromTo(
                wrap,
                { y: 12, filter: "blur(2px)" },
                {
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: wrap,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            const show = () => wrap.classList.add("is-open");
            const hide = () => wrap.classList.remove("is-open");

            triggers.push(ScrollTrigger.create({
                trigger: wrap,
                start: "top 75%",
                end: "bottom 30%",
                onEnter: show,
                onEnterBack: show,
                onLeave: hide,
                onLeaveBack: hide
            }));
        });

        return () => {
            triggers.forEach(t => t.kill());
        };
    }, []);
};
