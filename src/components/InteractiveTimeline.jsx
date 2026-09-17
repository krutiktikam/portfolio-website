import React, { useState } from 'react';

export const InteractiveTimeline = ({ timelineData, personaTitle }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="interactive-timeline-container">
      <div className="timeline-header">
        <span className="section-pill">EVOLUTION & MILESTONES</span>
        <h3 className="timeline-heading">
          Career Evolution: <span className="highlight-text">{personaTitle}</span>
        </h3>
        <p className="timeline-subheading">
          Chronological progression of technical leadership, architectural breakthroughs, and deployed systems.
        </p>
      </div>

      <div className="timeline-grid">
        {/* Left milestone selector pills */}
        <div className="timeline-nav-list" role="tablist">
          {timelineData.map((item, idx) => {
            const isSelected = activeItem === idx;
            return (
              <button
                key={idx}
                type="button"
                className={`timeline-nav-item ${isSelected ? 'active' : ''}`}
                onClick={() => setActiveItem(idx)}
                role="tab"
                aria-selected={isSelected}
              >
                <div className="timeline-nav-indicator">
                  <span className="dot"></span>
                  {idx < timelineData.length - 1 && <span className="line"></span>}
                </div>
                <div className="timeline-nav-text">
                  <span className="nav-period">{item.period}</span>
                  <span className="nav-role">{item.role}</span>
                  <span className="nav-org">{item.organization}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right active milestone detail card */}
        <div className="timeline-detail-card">
          {timelineData[activeItem] && (
            <div className="detail-card-content">
              <div className="detail-meta-row">
                <span className="detail-badge">{timelineData[activeItem].badge}</span>
                <span className="detail-period">{timelineData[activeItem].period}</span>
                <span className="detail-location">{timelineData[activeItem].location}</span>
              </div>
              
              <h4 className="detail-role">{timelineData[activeItem].role}</h4>
              <h5 className="detail-org">{timelineData[activeItem].organization}</h5>
              
              <p className="detail-highlight">
                {timelineData[activeItem].highlight}
              </p>

              <div className="detail-footer-type">
                <span className="type-tag">DOMAIN: {timelineData[activeItem].type.toUpperCase()}</span>
                <span className="milestone-status">VERIFIED PRODUCTION MILESTONE</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTimeline;
