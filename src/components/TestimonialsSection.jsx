import React from 'react';

export const TestimonialsSection = ({ testimonials, personaId, personaTitle }) => {
  return (
    <div className="testimonials-section-container">
      <div className="testimonials-header">
        <span className="section-pill">PEER REVIEWS & ENDORSEMENTS</span>
        <h3 className="testimonials-heading">
          Technical Endorsements: <span className="highlight-text">{personaTitle}</span>
        </h3>
        <p className="testimonials-subheading">
          Feedback from technical evaluators, open-source collaborators, and production leads.
        </p>
      </div>

      <div className={`testimonials-grid layout-${personaId}`}>
        {testimonials.map((item, idx) => (
          <div key={idx} className="testimonial-card">
            <div className="quote-mark">“</div>
            <p className="testimonial-quote">{item.quote}</p>
            <div className="testimonial-footer">
              <div className="avatar-placeholder">
                {item.author.charAt(0)}
              </div>
              <div className="author-info">
                <span className="author-name">{item.author}</span>
                <span className="author-relation">{item.relation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
