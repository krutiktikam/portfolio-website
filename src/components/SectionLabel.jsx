import React from 'react';

/**
 * Editorial Section Label (EX8-inspired)
 * e.g., "(01) // FEATURED ARCHITECTURE"
 */
export const SectionLabel = ({ 
  index = "01", 
  label = "SECTION", 
  align = "left", 
  badge = null 
}) => {
  return (
    <div className={`editorial-section-label align-${align}`}>
      <div className="label-track">
        <span className="label-index">({index})</span>
        <span className="label-sep">//</span>
        <span className="label-text">{label}</span>
        {badge && <span className="label-badge">{badge}</span>}
      </div>
      <div className="label-hairline" aria-hidden="true" />
    </div>
  );
};

export default SectionLabel;
