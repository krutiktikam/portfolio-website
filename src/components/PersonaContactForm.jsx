import React, { useState } from 'react';

export const PersonaContactForm = ({ contactConfig, personaId, personaTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: contactConfig.subjectOptions[0] || 'General Inquiry',
    technicalDetails: '',
    timeline: 'Immediate (1-2 weeks)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link as reliable client fallback
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${personaTitle}] ${formData.inquiryType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Persona Context: ${personaTitle} (${personaId})\n` +
      `Inquiry Category: ${formData.inquiryType}\n` +
      `Timeline / Urgency: ${formData.timeline}\n` +
      (formData.technicalDetails ? `Technical Context / Repo: ${formData.technicalDetails}\n` : '') +
      `\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:krutiktikam7@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="persona-contact-card" id="contact-section">
      <div className="contact-header-block">
        <span className="contact-badge-pill">{contactConfig.badge}</span>
        <h3 className="contact-heading">{contactConfig.heading}</h3>
        <p className="contact-subheading">{contactConfig.subheading}</p>
      </div>

      {submitted ? (
        <div className="contact-success-banner">
          <span className="success-icon">✓</span>
          <div>
            <h4>Inquiry Prepared & Email Client Opened!</h4>
            <p>Thank you for reaching out. If your mail client didn't open automatically, you can write directly to <strong>krutiktikam7@gmail.com</strong>.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="persona-form">
          <div className="form-row-duo">
            <div className="form-group">
              <label htmlFor="contact-name">Your Name / Organization *</label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="e.g. Sarah Jenkins (Tech Lead @ Scale)"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address *</label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="sarah@company.ai"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="form-row-duo">
            <div className="form-group">
              <label htmlFor="contact-inquiry">Inquiry Category ({contactConfig.badge.split(' ')[0]})</label>
              <select
                id="contact-inquiry"
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              >
                {contactConfig.subjectOptions.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-timeline">Target Timeline / Start Window</label>
              <select
                id="contact-timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              >
                <option value="Immediate (1-2 weeks)">Immediate (1-2 weeks)</option>
                <option value="Next Month (Q3/Q4)">Next Month (Q3/Q4)</option>
                <option value="Exploring Options / General Networking">Exploring Options / General Networking</option>
              </select>
            </div>
          </div>

          {/* Persona-specific technical context field */}
          {personaId === 'agentic' && (
            <div className="form-group">
              <label htmlFor="contact-tech">Target Stack / Agentic Scope (Optional)</label>
              <input
                id="contact-tech"
                type="text"
                placeholder="e.g. MCP Server for existing database, local SLM inference, WebSocket streaming..."
                value={formData.technicalDetails}
                onChange={(e) => setFormData({ ...formData, technicalDetails: e.target.value })}
              />
            </div>
          )}

          {personaId === 'cv_rl' && (
            <div className="form-group">
              <label htmlFor="contact-tech">Vision / Simulation Hardware & Frameworks (Optional)</label>
              <input
                id="contact-tech"
                type="text"
                placeholder="e.g. YOLO real-time tracking, headless Gym simulation, PyTorch EEG pipeline..."
                value={formData.technicalDetails}
                onChange={(e) => setFormData({ ...formData, technicalDetails: e.target.value })}
              />
            </div>
          )}

          {personaId === 'fullstack' && (
            <div className="form-group">
              <label htmlFor="contact-tech">Product Scope / Architecture (Optional)</label>
              <input
                id="contact-tech"
                type="text"
                placeholder="e.g. Full-stack React 18 + FastAPI app, generative AI integration, database migration..."
                value={formData.technicalDetails}
                onChange={(e) => setFormData({ ...formData, technicalDetails: e.target.value })}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="contact-message">Project Details / Message *</label>
            <textarea
              id="contact-message"
              rows={4}
              required
              placeholder={contactConfig.placeholderMessage}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="form-actions-row">
            <button type="submit" className="btn-submit-inquiry">
              <span>Send Priority Message</span>
              <span className="arrow-icon">→</span>
            </button>
            <span className="direct-mail-note">
              Direct Contact: <a href="mailto:krutiktikam7@gmail.com">krutiktikam7@gmail.com</a> • +91 9284236446
            </span>
          </div>
        </form>
      )}
    </div>
  );
};

export default PersonaContactForm;
