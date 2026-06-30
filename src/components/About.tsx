import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-left reveal">
          <h2 className="about-statement">
            We build brand languages that scale across product, marketing, and time.
          </h2>
          <p className="hero-sub" style={{ fontSize: '18px', maxWidth: '500px', marginBottom: 0 }}>
            Exclamation Studio is a branding and creative direction studio focused on identity systems for ambitious brands. We believe restraint is the surface — and systems are the engine.
          </p>
        </div>

        <div className="about-values reveal">
          <div className="about-value">
            <span className="about-value-number">01</span>
            <span className="about-value-text">Clarity over complexity</span>
          </div>
          <div className="about-value">
            <span className="about-value-number">02</span>
            <span className="about-value-text">Systems over aesthetics</span>
          </div>
          <div className="about-value">
            <span className="about-value-number">03</span>
            <span className="about-value-text">Endurance over novelty</span>
          </div>
        </div>
      </div>
    </section>
  );
};
