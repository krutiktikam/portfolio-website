import React from 'react';

export const PersonaSwitcher = ({ currentPersona, onSelectPersona, variant = "pill" }) => {
  const personas = [
    {
      id: "agentic",
      label: "⚡ AI Backend & Agents",
      code: "Resume A",
      tag: "Agentic & High-Throughput",
      color: "#00f5a0"
    },
    {
      id: "cv_rl",
      label: "👁️ Vision, RL & Signals",
      code: "Resume B",
      tag: "CV, 850 FPS RL, EEG AI",
      color: "#ff9f1c"
    },
    {
      id: "fullstack",
      label: "🌐 Full-Stack AI Engineer",
      code: "Resume C",
      tag: "End-to-End & Deployed",
      color: "#3b82f6"
    }
  ];

  if (variant === "hero-banner") {
    return (
      <div className="hero-persona-selector-container">
        <div className="hero-persona-label">
          <span className="live-dot pulse"></span>
          <span>SELECT RECRUITER VIEW // TARGET ARCHITECTURE:</span>
        </div>
        <div className="hero-persona-buttons">
          {personas.map((p) => {
            const isActive = currentPersona === p.id;
            return (
              <button
                key={p.id}
                type="button"
                className={`hero-persona-btn ${isActive ? 'active' : ''}`}
                onClick={() => onSelectPersona(p.id)}
                aria-pressed={isActive}
              >
                <div className="btn-glow-bar" style={{ background: p.color }}></div>
                <div className="btn-content">
                  <span className="persona-code-badge">{p.code}</span>
                  <span className="persona-title-text">{p.label}</span>
                  <span className="persona-tag-text">{p.tag}</span>
                </div>
                {isActive && <span className="active-check">✓ ACTIVE</span>}
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
            <span className="pill-code">{p.code.split('_')[1] || p.code}</span>
            <span className="pill-label">{p.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PersonaSwitcher;
