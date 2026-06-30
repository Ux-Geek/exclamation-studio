import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <p className="about-label reveal">Availability</p>
          <h2 className="reveal">Let's build<br />something together.</h2>
          <p className="reveal">
            We take on a small number of projects at a time. 
            If you're building for the long term, we'd love to hear from you.
          </p>
          <a href="mailto:hello@exclamationstudios.com" className="contact-email reveal">
            <span>hello@exclamationstudios.com</span>
            <span className="arrow">→</span>
          </a>
          <p className="reveal" style={{ marginTop: '16px', fontSize: '13px', color: 'var(--color-muted)' }}>
            Response within 48 hours. No decks. No theatre.
          </p>
        </div>

        <div className="reveal">
          <form className="intake-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company / Role"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <select name="budget" value={formData.budget} onChange={handleChange}>
                <option value="">Budget range</option>
                <option value="2k-5k">£2k – £5k</option>
                <option value="5k-15k">£5k – £15k</option>
                <option value="15k+">£15k+</option>
              </select>
              <select name="timeline" value={formData.timeline} onChange={handleChange}>
                <option value="">Timeline</option>
                <option value="2-4w">2–4 weeks</option>
                <option value="4-8w">4–8 weeks</option>
                <option value="8w+">8+ weeks</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="btn-submit">
              <span>Send inquiry</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
