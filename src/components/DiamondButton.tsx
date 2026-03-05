import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface DiamondButtonProps {
    children: React.ReactNode;
    href?: string;
}

export const DiamondButton: React.FC<DiamondButtonProps> = ({ children, href }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonContent = (
        <div
            className="relative flex items-center h-12 cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <svg
                width="16"
                height="48"
                viewBox="0 0 16 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 ease-out z-10"
                style={{
                    transform: isHovered ? 'scaleX(0)' : 'scaleX(1)',
                    transformOrigin: 'right',
                    opacity: isHovered ? 0 : 1,
                }}
            >
                <path d="M16 0L0 24L16 48V0Z" fill="rgba(69, 69, 69, 0.06)" className="group-hover:fill-[rgba(69,69,69,0.08)] transition-colors border-stroke" stroke="var(--color-stroke-strong)" strokeWidth="1" />
            </svg>

            <div
                className="h-full flex items-center justify-center px-4 bg-[rgba(69,69,69,0.06)] border-y border-stroke-strong text-fg transition-all duration-300 group-hover:bg-[rgba(69,69,69,0.08)] font-medium z-10"
                style={{
                    clipPath: isHovered
                        ? 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 50%)'
                        : 'polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 50%)',
                }}
            >
                {children}
            </div>

            <svg
                width="16"
                height="48"
                viewBox="0 0 16 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 ease-out z-10"
                style={{
                    transform: isHovered ? 'scaleX(0)' : 'scaleX(1)',
                    transformOrigin: 'left',
                    opacity: isHovered ? 0 : 1,
                }}
            >
                <path d="M0 0L16 24L0 48V0Z" fill="rgba(69, 69, 69, 0.06)" className="group-hover:fill-[rgba(69,69,69,0.08)] transition-colors" stroke="var(--color-stroke-strong)" strokeWidth="1" />
            </svg>
        </div>
    );

    return href ? <a href={href} className="inline-block">{buttonContent}</a> : <div className="inline-block">{buttonContent}</div>;
};
