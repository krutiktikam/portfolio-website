import React, { useState, useEffect } from 'react';

export const ResumeViewerModal = ({ isOpen, onClose, initialView = "ai" }) => {
  const [activeTab, setActiveTab] = useState(initialView);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialView);
    }
  }, [isOpen, initialView]);

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
    ai: {
      code: "AI / Backend",
      label: "AI & Backend Resume",
      path: "./resumes/resume-ai-backend.pdf",
      fileName: "Krutik_Tikam_Resume_AI_Backend.pdf",
      description: "Focused on Local LLMs, RAG, Computer Vision, and Backend Engineering."
    },
    data: {
      code: "Data / Analytics",
      label: "Data & Analytics Resume",
      path: "./resumes/resume-data-analytics.pdf",
      fileName: "Krutik_Tikam_Resume_Data_Analytics.pdf",
      description: "Focused on Data Analytics, SQL, Python, ETL, and Sports Telemetry."
    }
  };

  const currentConfig = resumeConfigs[activeTab] || resumeConfigs.ai;

  return (
    <div className="modal-backdrop resume-modal-backdrop" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
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
              Download PDF
            </a>
            <a
              href={currentConfig.path}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-open-external"
              title="Open in new window"
            >
              Open in Tab ↗
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

        <div className="resume-modal-subbar">
          <span className="active-badge">{currentConfig.code}</span>
          <span className="active-desc">{currentConfig.description}</span>
        </div>

        <div className="resume-iframe-wrapper">
          <iframe
            src={`${currentConfig.path}#toolbar=1&navpanes=0`}
            title={`Krutik Tikam ${currentConfig.label}`}
            className="resume-pdf-frame"
          />
        </div>

        <div className="resume-modal-footer">
          <span>Need a direct copy?</span>
          <a 
            href={currentConfig.path} 
            download={currentConfig.fileName}
            className="mobile-download-link"
          >
            Download {currentConfig.label} (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeViewerModal;
