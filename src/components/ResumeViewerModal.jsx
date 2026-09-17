import React, { useState, useEffect } from 'react';

export const ResumeViewerModal = ({ isOpen, onClose, initialPersona = "agentic" }) => {
  const [activeTab, setActiveTab] = useState(initialPersona);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialPersona);
    }
  }, [isOpen, initialPersona]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumeConfigs = {
    agentic: {
      code: "Resume A",
      label: "⚡ AI Backend & Agentic Systems",
      path: "./resumes/resume-a-ai-backend-agentic.pdf",
      fileName: "Krutik_Tikam_Resume_A__AI_Backend___Agentic_Systems_.pdf",
      summary: "Specialized for AI Systems Engineer, Distributed Backend, Agentic Workflows (MCP), and High-Throughput RAG roles."
    },
    cv_rl: {
      code: "Resume B",
      label: "👁️ Vision, RL & Signal Processing",
      path: "./resumes/resume-b-computer-vision-rl-signals.pdf",
      fileName: "Krutik_Tikam_Resume_B_Applied_Computer_Vision__Reinforcement_Learning__and_Signal_Processing.pdf",
      summary: "Specialized for Computer Vision, Robotics Simulation (Gymnasium/PPO), Active Learning, and Biomedical Signal AI (EEGNet) roles."
    },
    fullstack: {
      code: "Resume C",
      label: "🌐 End-to-End AI Software Engineer",
      path: "./resumes/resume-c-end-to-end-ai-engineer.pdf",
      fileName: "Krutik_Tikam_Resume_C_End_to_End_AI_Software_Engineer.pdf",
      summary: "Specialized for Full-Stack AI Software Engineering, Production Cloud Deployments, and End-to-End Generative AI Applications."
    }
  };

  const currentConfig = resumeConfigs[activeTab] || resumeConfigs.agentic;

  return (
    <div className="modal-backdrop resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top bar with 3 resume tabs */}
        <div className="resume-modal-header">
          <div className="resume-tabs-row" role="tablist">
            {Object.entries(resumeConfigs).map(([key, config]) => {
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  className={`resume-tab-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                  role="tab"
                  aria-selected={isSelected}
                >
                  <span className="tab-code-tag">{config.code}</span>
                  <span className="tab-label-text">{config.label}</span>
                </button>
              );
            })}
          </div>

          <div className="resume-modal-actions">
            <a 
              href={currentConfig.path} 
              download={currentConfig.fileName}
              className="btn-download-resume"
              title={`Download ${currentConfig.fileName}`}
            >
              📥 Download PDF
            </a>
            <a
              href={currentConfig.path}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-open-external"
              title="Open in new window"
            >
              ↗ Open Tab
            </a>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Informational sub-header */}
        <div className="resume-modal-subbar">
          <span className="active-badge">ACTIVE: {currentConfig.code.toUpperCase()}</span>
          <span className="active-desc">{currentConfig.summary}</span>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="resume-iframe-wrapper">
          <iframe
            src={`${currentConfig.path}#toolbar=1&navpanes=0`}
            title={`Krutik Tikam ${currentConfig.label}`}
            className="resume-pdf-frame"
          />
        </div>

        {/* Mobile download fallback footer */}
        <div className="resume-modal-footer">
          <span>Viewing on mobile or browser blocking PDF embedding?</span>
          <a 
            href={currentConfig.path} 
            download={currentConfig.fileName}
            className="mobile-download-link"
          >
            Direct Download {currentConfig.code} (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewerModal;
