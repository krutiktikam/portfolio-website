import React from 'react';

export const PersonaSwitcher = ({ currentPersona, onSelectPersona, variant = "pill" }) => {
  const personas = [
    {
      id: "agentic",
      index: "01",
      label: "AI Backend & Agents",
      code: "Resume A",
      tag: "Agentic & High-Throughput",
      color: "#00f5a0"
    },
    {
      id: "cv_rl",
      index: "02",
      label: "Vision, RL & Signals",
      code: "Resume B",
      tag: "CV, 850 FPS RL, EEG AI",
      color: "#ff9f1c"
    },
    {
      id: "fullstack",
      index: "03",
      label: "Full-Stack AI Engineer",
      code: "Resume C",
      tag: "End-to-End & Deployed",
      color: "#3b82f6"
    }
  ];

  if (variant === "hero-banner" || variant === "context-bar") {
    return (
      <div className="editorial-context-switcher">
        <div className="context-switcher-header">
          <span className="live-dot pulse" />
          <span className="context-switcher-title">ACTIVE TARGET ARCHITECTURE // SELECT RECRUITER VIEW:</span>
        </div>
        <div className="context-switcher-grid" role="radiogroup" aria-label="Target Architecture Selector">
          {personas.map((p) => {
            const isActive = currentPersona === p.id;
            return (
              <button
                key={p.id}
                type="button"
                className={`context-persona-card ${isActive ? 'active' : ''}`}
                onClick={() => onSelectPersona(p.id)}
                role="radio"
                aria-checked={isActive}
              >
                <div className="card-indicator-line" style={{ background: p.color }} />
                <div className="context-card-body">
                  <div className="context-meta-row">
                    <span className="context-index">({p.index})</span>
                    <span className="context-code">{p.code}</span>
                    {isActive && <span className="context-status-pill">ACTIVE</span>}
                  </div>
                  <div className="context-title">{p.label}</div>
                  <div className="context-tag">{p.tag}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Default compact header segmented pill
  return (
    <div className="header-persona-switcher" role="radiogroup" aria-label="Resume Persona Switcher">
      {personas.map((p) => {
        const isActive = currentPersona === p.id;
        return (
          <button
            key={p.id}
            type="button"
            className={`persona-pill-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectPersona(p.id)}
            role="radio"
            aria-checked={isActive}
            title={`Switch to ${p.label} (${p.code})`}
          >
            <span className="pill-code">{p.index}</span>
            <span className="pill-label">{p.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PersonaSwitcher;
