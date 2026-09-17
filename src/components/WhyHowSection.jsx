import React from 'react';
import SectionLabel from './SectionLabel.jsx';

export const WhyHowSection = ({ persona }) => {
  if (!persona || !persona.about) return null;

  const motif = persona.visualMotif || 'circuits';

  return (
    <section className="why-how-section" id="about">
      <SectionLabel index="02" label="ENGINEERING PHILOSOPHY" badge={persona.about.tag} />

      <div className="why-how-editorial-grid">
        {/* Left Column: Icon & Lead Headline */}
        <div className="why-how-lead-col">
          <div className="editorial-icon-badge">
            {motif === 'circuits' && (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="2" strokeDasharray="2 2" />
                <circle cx="8" cy="8" r="2" />
                <circle cx="16" cy="16" r="2" />
                <circle cx="16" cy="8" r="2" />
                <path d="M8 10v6h6" />
                <path d="M10 8h4" />
              </svg>
            )}
            {motif === 'reticle' && (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="4" strokeDasharray="3 3" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
              </svg>
            )}
            {motif === 'layers' && (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            )}
          </div>

          <h2 className="editorial-headline">
            {persona.about.headline}
          </h2>

          <p className="editorial-lead-para">
            {persona.about.leadParagraph}
          </p>

          <div className="editorial-quote-frame">
            <span className="quote-mark">“</span>
            <p className="quote-body">{persona.about.quote}</p>
          </div>
        </div>

        {/* Right Column: Detailed Body & Technical Execution Principles */}
        <div className="why-how-spec-col">
          <p className="editorial-body-para">
            {persona.about.bodyParagraph}
          </p>

          <div className="technical-focus-container">
            <span className="focus-header-label">ARCHITECTURAL SPECIFICATIONS & FOCUS:</span>
            
            <div className="technical-focus-list">
              {persona.about.technicalFocus.map((item, idx) => (
                <div key={idx} className="focus-list-row">
                  <span className="focus-row-index">0{idx + 1}</span>
                  <span className="focus-row-sep">//</span>
                  <span className="focus-row-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHowSection;
