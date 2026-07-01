import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import projectBante from '../assets/project-bante.png';
import projectMonument from '../assets/project-monument.png';
import projectMadesongs from '../assets/project-madesongs.png';
import projectArgent from '../assets/project-argent.png';
import projectGeometric from '../assets/project-geometric.png';

export interface Project {
  id: string;
  title: string;
  meta: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "bante",
    title: "Banté Grill & Cuisine",
    meta: "Brand Identity / Restaurant",
    category: "Brand Identity",
    image: projectBante,
    description: "Full brand identity system for an upscale West African-inspired grill and cuisine experience. From logo design through menu systems, stationery, and environmental graphics — built around warmth, heritage, and modern refinement.",
    tags: ["Logo Design", "Brand System", "Menu Design", "Stationery", "Art Direction"]
  },
  {
    id: "monument",
    title: "Monument Designs",
    meta: "Brand Identity / Architecture",
    category: "Brand Identity",
    image: projectMonument,
    description: "Architectural studio identity built on precision and structural clarity. The logomark mirrors the studio's philosophy — clean lines, deliberate negative space, and a sense of monumental presence.",
    tags: ["Logo Design", "Visual Identity", "Print Collateral", "Brand Guidelines"]
  },
  {
    id: "madesongs",
    title: "Made Songs",
    meta: "Brand Identity / Music",
    category: "Brand Identity",
    image: projectMadesongs,
    description: "Vibrant brand identity for an independent music label. Bold duotone aesthetic in red and electric blue, applied across vinyl packaging, merchandise, and digital presence — capturing the energy of live performance.",
    tags: ["Logo Design", "Packaging", "Merchandise", "Digital Assets"]
  },
  {
    id: "argent",
    title: "ARGENT",
    meta: "Brand Identity / Fashion",
    category: "Visual Identity",
    image: projectArgent,
    description: "Luxury brand identity for a premium fashion and lifestyle house. Silver foil stamping on matte black, expressed through packaging, shopping bags, and a restrained typographic system that communicates quiet confidence.",
    tags: ["Visual Identity", "Packaging", "Typography", "Art Direction"]
  },
  {
    id: "geometric",
    title: "Articulate Studio",
    meta: "Brand Identity / Design",
    category: "Brand Identity",
    image: projectGeometric,
    description: "Bold geometric identity for a contemporary design studio. The interlocking diamond mark creates a sense of precision and dynamism, scaled from gallery signage to refined stationery.",
    tags: ["Logo Design", "Signage", "Environmental Graphics", "Brand System"]
  }
];

const WorkCard = ({ project, index, onOpenProject }: { project: Project, index: number, onOpenProject: (p: Project) => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // For mouse tracking glow via CSS variables
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);

    // For image parallax
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setMousePos({ x: (x - centerX) / centerX, y: (y - centerY) / centerY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      layoutId={`project-card-${project.id}`}
      className="work-card reveal"
      onClick={() => onOpenProject(project)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <div className="work-card-image-wrapper">
        <motion.img
          src={project.image}
          alt={project.title}
          className="work-card-image"
          loading={index > 1 ? "lazy" : "eager"}
          animate={{
            x: mousePos.x * -15,
            y: mousePos.y * -15,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
        />
      </div>
      
      <div className="work-card-info">
        <div className="flex justify-between items-start">
          <div>
            <div className="work-card-title">{project.title}</div>
            <div className="work-card-meta">{project.meta}</div>
          </div>
          <div className="bg-white text-black p-2 rounded-full shadow-sm">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface WorkGridProps {
  onOpenProject: (project: Project) => void;
}

export const WorkGrid: React.FC<WorkGridProps> = ({ onOpenProject }) => {
  return (
    <section className="work-section" id="work">
      <div className="work-header reveal">
        <h2>Selected Work</h2>
        <p>A curated selection of brand identities and visual systems for ambitious clients.</p>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <WorkCard 
            key={project.id} 
            project={project} 
            index={index} 
            onOpenProject={onOpenProject} 
          />
        ))}
      </div>
    </section>
  );
};
