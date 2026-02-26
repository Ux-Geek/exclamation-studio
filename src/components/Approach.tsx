import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        title: "Discovery",
        desc: "Understanding context, constraints, and long-term goals before laying the groundwork."
    },
    {
        title: "Strategy",
        desc: "Defining the system. Finding the core narrative and visualizing the positioning."
    },
    {
        title: "Execution",
        desc: "Building the product. Ship-ready design that translates seamlessly to development."
    }
];

export const Approach: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const stepsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion || !sectionRef.current || !progressRef.current || !stepsContainerRef.current) return;

        // Pin the section and animate progress and steps
        const st = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%", // 200% of viewport height to scroll through
            pin: true,
            scrub: 1,
            animation: gsap.timeline()
                .to(progressRef.current, { scaleY: 1, ease: "none" }, 0)
                .to(stepsContainerRef.current, {
                    y: () => -(stepsContainerRef.current!.scrollHeight - window.innerHeight * 0.5),
                    ease: "none"
                }, 0)
        });

        return () => {
            st.kill();
        };
    }, []);

    return (
        <section ref={sectionRef} className="h-screen bg-bg relative border-t border-stroke overflow-hidden flex flex-col justify-center" id="approach">
            <div className="max-w-[1200px] mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-24 h-[60vh]">

                {/* Left: Sticky Intro & Progress */}
                <div className="relative flex flex-col justify-center h-full">
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-stroke rounded-full hidden md:block">
                        <div
                            ref={progressRef}
                            className="w-full bg-fg origin-top"
                            style={{ height: '100%', transform: 'scaleY(0)' }}
                        />
                    </div>
                    <div className="md:pl-10">
                        <p className="eyebrow reveal mb-4 text-muted tracking-[0.12em] uppercase text-xs">Our Process</p>
                        <h2 className="text-[clamp(32px,4vw,48px)] tracking-tight font-medium leading-[1.1] mb-6 reveal">
                            An approach built<br />for endurance.
                        </h2>
                        <p className="text-muted text-lg max-w-[40ch] reveal">
                            We don't do isolated deliverables. Everything is built as a scalable system.
                        </p>
                    </div>
                </div>

                {/* Right: Scrolling Steps Container */}
                <div className="relative h-full overflow-hidden mask-vertical">
                    <div ref={stepsContainerRef} className="pt-[10vh] pb-[40vh] flex flex-col gap-24">
                        {steps.map((step, i) => (
                            <div key={i} className="reveal">
                                <div className="text-muted mb-4 font-mono text-sm">0{i + 1}</div>
                                <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                                <p className="text-muted text-lg max-w-[35ch]">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
