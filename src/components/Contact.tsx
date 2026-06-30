import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
          <form className="intake-form" onSubmit={(e) => e.preventDefault()}>
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
            <button type="submit" className="btn-submit">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
