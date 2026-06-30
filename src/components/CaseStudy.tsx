import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';
import type { Project } from './WorkGrid';

interface CaseStudyProps {
  project: Project;
  onClose: () => void;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ project, onClose }) => {
  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="case-study-overlay"
      onClick={onClose}
    >
      <button
        className="case-study-close"
        onClick={onClose}
        aria-label="Close case study"
      >
        <X size={18} />
      </button>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="case-study-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="case-study-hero">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="case-study-content">
          <div className="case-study-meta">{project.meta}</div>
          <h2 className="case-study-title">{project.title}</h2>

          <div className="case-study-body">
            <p>{project.description}</p>
          </div>

          <div className="case-study-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="case-study-tag">{tag}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
