import React, { useRef } from 'react';
import { Layers, Lightbulb, Box, Monitor, Component, Rocket } from 'lucide-react';

const services = [
  {
    title: "Brand Strategy",
    description: "Positioning, messaging, and narrative frameworks that set you apart.",
    icon: <Lightbulb size={28} />
  },
  {
    title: "Visual Identity",
    description: "Logo design, typography, and cohesive visual systems.",
    icon: <Layers size={28} />
  },
  {
    title: "Digital Design",
    description: "Websites and product UI with a focus on polished interactions.",
    icon: <Monitor size={28} />
  },
  {
    title: "Design Systems",
    description: "Component libraries and asset frameworks for scalable brands.",
    icon: <Component size={28} />
  },
  {
    title: "Motion & 3D",
    description: "Brand motion language and dimensional brand worlds.",
    icon: <Box size={28} />
  },
  {
    title: "Go-to-Market",
    description: "Launch kits, landing pages, and content systems.",
    icon: <Rocket size={28} />
  }
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      className="service-card reveal" 
      style={{ transitionDelay: `${index * 0.05}s` }}
      onMouseMove={handleMouseMove}
    >
      <div className="service-icon-wrap">
        {service.icon}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header reveal">
        <h2>How We Help</h2>
        <p>From positioning to execution — everything built to stay coherent as you grow.</p>
      </div>

      <div className="services-grid">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </div>
    </section>
  );
};
