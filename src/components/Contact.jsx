import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        
        <div className="contact-grid">
          {/* Quick Info & Social Actions */}
          <div className="contact-info-card glass-panel" id="contact-info">
            <h3 className="contact-card-title">Recruiter Quick Actions</h3>
            <p className="contact-card-desc">
              I am open to software engineering opportunities, research collaboration, or consultations. Select one of the quick actions below to connect instantly:
            </p>
            
            <div className="quick-action-buttons">
              <a 
                href="mailto:your_email@example.com?subject=Portfolio%20Inquiry" 
                className="btn btn-primary quick-btn"
                id="btn-quick-email"
              >
                📧 Direct Email
              </a>
              <a 
                href="https://linkedin.com/in/your-profile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary quick-btn"
                id="btn-quick-linkedin"
              >
                💼 LinkedIn Profile
              </a>
              <a 
                href="https://calendly.com/your-username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary quick-btn"
                id="btn-quick-schedule"
              >
                📅 Schedule a Call
              </a>
              <a 
                href="/resume.pdf" 
                download
                className="btn btn-secondary quick-btn"
                id="btn-quick-resume"
              >
                📄 Download Resume
              </a>
            </div>
            
            <div className="location-tag" id="location-badge">
              <span>📍 Location: India (Remote / Hybrid / On-site)</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card glass-panel" id="contact-form-container">
            <h3 className="contact-card-title">Send a Message</h3>
            
            {submitted ? (
              <div className="form-success glass-panel" id="contact-success-msg">
                <p>🎉 Thank you! Your message has been sent successfully. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
                <div className="form-group">
                  <label htmlFor="name-input">Name</label>
                  <input 
                    type="text" 
                    id="name-input" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your name" 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email-input">Email Address</label>
                  <input 
                    type="email" 
                    id="email-input" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="Enter your email address" 
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message-input">Message</label>
                  <textarea 
                    id="message-input" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    rows="5" 
                    placeholder="Write your message here..." 
                    className="form-input form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-submit" id="btn-submit-contact">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
