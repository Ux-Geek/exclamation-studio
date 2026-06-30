import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-left">
          <p className="about-label reveal">About the Studio</p>
          <h2 className="about-statement reveal">
            We build brand languages that scale across product, marketing, and time.
          </h2>
        </div>

        <div className="about-body">
          <p className="reveal">
            Exclamation Studio is a branding and creative direction studio 
            focused on identity systems for ambitious brands. We believe restraint 
            is the surface — and systems are the engine.
          </p>
          <p className="reveal">
            Every project begins with positioning: understanding your audience, 
            your narrative, and the constraints that will shape the work. From there, 
            we build — typography, grid, spacing, motion rules, components — until 
            every element earns its place.
          </p>
          <p className="reveal">
            We stay selective so the partnership stays serious, and the output stays sharp. 
            Our clients are teams building beyond launch week — teams who value coherence 
            over trends.
          </p>

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
      </div>
    </section>
  );
};
