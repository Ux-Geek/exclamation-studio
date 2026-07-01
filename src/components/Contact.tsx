import React, { useState, useRef } from 'react';
import { Magnetic } from './Magnetic';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLFormElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    formRef.current.style.setProperty('--mouse-x', `${x}px`);
    formRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-left reveal">
          <h2>Get a free<br />project check-up</h2>
          <p>
            Whether it's branding, UI/UX, or development, we transform ideas into flawless digital solutions.
          </p>
        </div>

        <div className="reveal">
          <form 
            ref={formRef}
            className="intake-form glow-card" 
            onSubmit={(e) => e.preventDefault()}
            onMouseMove={handleMouseMove}
          >
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-row" style={{ gridTemplateColumns: '1fr' }}>
              <select name="budget" value={formData.budget} onChange={handleChange}>
                <option value="">Select a budget range...</option>
                <option value="2k-5k">$2,500 - $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k+">$15,000+</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project goals..."
              value={formData.message}
              onChange={handleChange}
            />
            
            <div className="text-center md:text-left mt-4">
              <Magnetic>
                <button type="submit" className="btn-submit" style={{ padding: '18px 48px', width: 'auto' }}>
                  Submit Request
                </button>
              </Magnetic>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
