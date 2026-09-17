import React from 'react';
import SectionLabel from './SectionLabel.jsx';

export const FeaturedArchitecture = ({ persona, allProjects, onSelectProject }) => {
  if (!persona) return null;

  // Find flagship project (first in spotlightProjectIds)
  const flagshipId = persona.spotlightProjectIds && persona.spotlightProjectIds[0];
  const project = allProjects.find(p => p.id === flagshipId) || allProjects[0];

  if (!project) return null;

  const motif = persona.visualMotif || 'circuits';

  return (
    <section className="featured-architecture-section" id="featured">
      <SectionLabel index="01" label="FLAGSHIP ARCHITECTURE" badge="PRIMARY FOCUS" />

      <div className="featured-arch-card">
        {/* Left Column: Visual Schematic & Domain Motif */}
        <div className="featured-arch-visual">
          <div className="schematic-header">
            <span className="schematic-tag">SPEC_ID // {project.id.toUpperCase()}</span>
            <span className="schematic-status">
              <span className="live-dot pulse" /> DEPLOYED_PROD
            </span>
          </div>

          <div className="schematic-canvas-box">
            {motif === 'circuits' && (
              <div className="motif-graphic motif-circuits">
                <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="motif-svg">
                  {/* Grid Lines */}
                  <line x1="20" y1="40" x2="380" y2="40" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="3 3" />
                  <line x1="20" y1="120" x2="380" y2="120" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="3 3" />
                  <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="3 3" />
                  {/* Nodes & Data Bus */}
                  <rect x="30" y="90" width="80" height="60" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(0,0,0,0.4)" />
                  <text x="70" y="125" fill="currentColor" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">TAURI RUST</text>
                  
                  <path d="M110 120 H160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
                  
                  <rect x="160" y="80" width="90" height="80" rx="2" stroke="currentColor" strokeWidth="2" fill="rgba(0,0,0,0.5)" />
                  <text x="205" y="115" fill="currentColor" fontSize="11" fontFamily="var(--font-mono)" fontWeight="bold" textAnchor="middle">MCP SERVER</text>
                  <text x="205" y="135" fill="currentColor" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">24+ TOOLS</text>
                  
                  <path d="M250 120 H300" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
                  
                  <rect x="300" y="90" width="80" height="60" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(0,0,0,0.4)" />
                  <text x="340" y="125" fill="currentColor" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">LOCAL SLM</text>
                  
                  {/* Telemetry labels */}
                  <circle cx="205" cy="40" r="3" fill="currentColor" />
                  <line x1="205" y1="40" x2="205" y2="80" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
                  <text x="205" y="30" fill="currentColor" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">LATENCY &lt; 3.0s</text>
                </svg>
              </div>
            )}

            {motif === 'reticle' && (
              <div className="motif-graphic motif-reticle">
                <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="motif-svg">
                  {/* Reticle Crosshairs */}
                  <circle cx="200" cy="120" r="70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" />
                  <circle cx="200" cy="120" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
                  <circle cx="200" cy="120" r="3" fill="currentColor" />
                  
                  <line x1="50" y1="120" x2="350" y2="120" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                  <line x1="200" y1="20" x2="200" y2="220" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                  
                  {/* Bounding Box 1 */}
                  <rect x="130" y="65" width="60" height="90" stroke="currentColor" strokeWidth="1.5" fill="rgba(255,159,28,0.06)" />
                  <text x="132" y="60" fill="currentColor" fontSize="8" fontFamily="var(--font-mono)">PLAYER_07 [0.94]</text>
                  
                  {/* Bounding Box 2 (Ball) */}
                  <rect x="250" y="100" width="30" height="30" stroke="currentColor" strokeWidth="1.5" fill="rgba(255,159,28,0.06)" />
                  <text x="252" y="95" fill="currentColor" fontSize="8" fontFamily="var(--font-mono)">BALL [0.98]</text>

                  {/* Corner Reticle Accents */}
                  <path d="M 40 50 L 40 30 L 60 30" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 360 50 L 360 30 L 340 30" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 40 190 L 40 210 L 60 210" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M 360 190 L 360 210 L 340 210" stroke="currentColor" strokeWidth="1.5" />

                  <text x="50" y="225" fill="currentColor" fontSize="8" fontFamily="var(--font-mono)">FPS: 850 // KINEMATIC_RIG: LOCKED</text>
                </svg>
              </div>
            )}

            {motif === 'layers' && (
              <div className="motif-graphic motif-layers">
                <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="motif-svg">
                  {/* Tier 1: Client Edge */}
                  <rect x="60" y="30" width="280" height="42" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" />
                  <text x="80" y="56" fill="currentColor" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">REACT 18 + TS PWA</text>
                  <text x="320" y="56" fill="currentColor" fontSize="8" fontFamily="var(--font-mono)" textAnchor="end">VERCEL EDGE</text>
                  
                  <line x1="200" y1="72" x2="200" y2="96" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Tier 2: Microservice Backend */}
                  <rect x="60" y="98" width="280" height="44" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(139,92,246,0.08)" />
                  <text x="80" y="125" fill="currentColor" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">ASYNC FASTAPI ENGINE</text>
                  <text x="320" y="125" fill="currentColor" fontSize="8" fontFamily="var(--font-mono)" textAnchor="end">RENDER CLUSTER</text>
                  
                  <line x1="200" y1="142" x2="200" y2="166" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Tier 3: Neural & Database Layer */}
                  <rect x="60" y="168" width="280" height="42" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(59,130,246,0.08)" />
                  <text x="80" y="194" fill="currentColor" fontSize="10" fontFamily="var(--font-mono)" fontWeight="bold">POSTGRES + PYTORCH SDPA</text>
                  <text x="320" y="194" fill="currentColor" fontSize="8" fontFamily="var(--font-mono)" textAnchor="end">ZERO-OOM 4GB</text>
                </svg>
              </div>
            )}
          </div>

          <div className="schematic-footer-meta">
            <span className="spec-label">SYSTEM_ROLE:</span>
            <span className="spec-val">{project.badge}</span>
            <span className="spec-sep">|</span>
            <span className="spec-label">VERIFIED_METRIC:</span>
            <span className="spec-val highlight">{project.metricText}</span>
          </div>
        </div>

        {/* Right Column: Architectural Narrative & Direct CTAs */}
        <div className="featured-arch-content">
          <div className="arch-badge-row">
            <span className="arch-category-chip">{project.badge}</span>
            <span className="arch-persona-code">{persona.code}</span>
          </div>

          <h2 className="arch-title">{project.title}</h2>
          <p className="arch-tagline">{project.tagline}</p>

          <p className="arch-persona-desc">
            {persona.featuredDescription}
          </p>

          <div className="arch-spec-box">
            <span className="spec-box-title">SYSTEM ARCHITECTURE HIGHLIGHT</span>
            <p className="spec-box-text">{project.architecture}</p>
          </div>

          <div className="arch-tech-row">
            {project.tech.map((t, idx) => (
              <span key={idx} className="tech-chip-sharp">{t}</span>
            ))}
          </div>

          <div className="arch-actions-row">
            <button
              type="button"
              className="arch-action-btn primary"
              onClick={() => onSelectProject(project)}
            >
              <span>Inspect Architecture Specs</span>
              <span>→</span>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="arch-action-btn secondary"
              >
                <span>Live System</span>
                <span>↗</span>
              </a>
            )}

            {project.gitUrl && (
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="arch-action-btn ghost"
              >
                <span>GitHub Source</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArchitecture;
