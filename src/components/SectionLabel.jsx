import React from 'react';

/**
 * Clean pill badge displayed above section titles
 */
export const SectionLabel = ({ label }) => {
  return (
    <div className="section-pill-wrapper">
      <span className="section-pill-badge">{label}</span>
    </div>
  );
};

export default SectionLabel;
