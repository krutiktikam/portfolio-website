import React from 'react';
import SectionLabel from './SectionLabel.jsx';

export const MetricsBand = ({ metrics, personaCode }) => {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section className="metrics-band-section">
      <SectionLabel index="03" label="VERIFIED METRICS" badge={`AUDITED // ${personaCode || 'SYSTEM'}`} />

      <div className="metrics-band-grid">
        {metrics.map((metric, idx) => (
          <div key={idx} className="metric-band-cell">
            <div className="metric-cell-top">
              <span className="metric-cell-index">M_0{idx + 1}</span>
              <span className="metric-cell-status">VERIFIED</span>
            </div>
            <div className="metric-cell-val">{metric.value}</div>
            <div className="metric-cell-label">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsBand;
