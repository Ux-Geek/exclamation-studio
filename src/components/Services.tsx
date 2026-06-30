import React from 'react';

const services = [
  {
    title: "Brand Identity",
    description: "Naming, logo design, typography systems, color palettes, and comprehensive brand guidelines.",
  },
  {
    title: "Visual Systems",
    description: "Design systems, component libraries, asset frameworks, and modular visual kits for scalable brands.",
  },
  {
    title: "Creative Direction",
    description: "Visual language, campaign art direction, photography direction, and establishing cohesive brand expression.",
  },
  {
    title: "Digital Design",
    description: "Websites, product UI, responsive design systems, and digital-first brand experiences.",
  },
  {
    title: "Motion & 3D",
    description: "Brand motion language, micro-animations, interactive experiences, and dimensional brand worlds.",
  },
  {
    title: "Launch Strategy",
    description: "Go-to-market rollout kits, conversion-focused landing pages, and content system templates.",
  }
];

export const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header reveal">
          <h2>Services</h2>
          <p>From positioning to execution — everything built to stay coherent as you grow.</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <span className="service-number">0{i + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
