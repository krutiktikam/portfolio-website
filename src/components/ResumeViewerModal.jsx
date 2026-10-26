import React, { useState, useEffect, useRef } from 'react';

const RESUME_VERSION = "20261026";

export const ResumeViewerModal = ({ isOpen, onClose, initialView = "ai", triggerRef = null }) => {
  const [activeTab, setActiveTab] = useState(initialView);
  const modalRef = useRef(null);

  // Screen width detection via matchMedia (<= 767px vs >= 768px)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia("(max-width: 767px)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia("(max-width: 767px)");
    
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    if (mql.addEventListener) {
      mql.addEventListener("change", handleMediaChange);
    } else {
      mql.addListener(handleMediaChange);
    }
    setIsMobile(mql.matches);

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleMediaChange);
      } else {
        mql.removeListener(handleMediaChange);
      }
    };
  }, []);

  // Background scroll lock
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Sync active tab on open and focus modal
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialView);
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }
  }, [isOpen, initialView]);

  // Escape key handler & focus restoration
  useEffect(() => {
    const triggerEl = triggerRef?.current;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (triggerEl) {
        triggerEl.focus();
      }
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  const resumeConfigs = {
    ai: {
      code: "AI / Backend",
      label: "AI & Backend Resume",
      shortLabel: "AI / Backend",
      path: "./resumes/resume-ai-backend.pdf",
      fileName: "Krutik_Tikam_AI_Backend_Resume.pdf",
      description: "Focused on Local LLMs, RAG, Computer Vision, and Backend Engineering."
    },
    data: {
      code: "Data / Analytics",
      label: "Data & Analytics Resume",
      shortLabel: "Data / Analytics",
      path: "./resumes/resume-data-analytics.pdf",
      fileName: "Krutik_Tikam_Data_Analyst_Resume.pdf",
      description: "Focused on Data Analytics, SQL, Python, ETL, and Sports Telemetry."
    }
  };

  const currentConfig = resumeConfigs[activeTab] || resumeConfigs.ai;
  const viewUrl = `${currentConfig.path}?v=${RESUME_VERSION}`;

  return (
    <div className="modal-backdrop resume-modal-backdrop" onClick={onClose} role="presentation">
      <div 
        className="resume-modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-dialog-title"
        tabIndex={-1}
        ref={modalRef}
      >
        {/* Header Bar with Segmented Control Tabs */}
        <div className="resume-modal-header">
          <div className="resume-segmented-tabs" role="group" id="resume-dialog-title" aria-label="Resume variant selector">
            {Object.entries(resumeConfigs).map(([key, config]) => {
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  type="button"
                  className={`resume-segmented-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveTab(key)}
                  aria-pressed={isSelected}
                  aria-label={config.label}
                >
                  <span className="tab-label-text">{config.shortLabel}</span>
                </button>
              );
            })}
          </div>

          <div className="resume-modal-actions">
            {!isMobile && (
              <>
                <a 
                  href={currentConfig.path} 
                  download={currentConfig.fileName}
                  className="btn-download-resume"
                  title={`Download ${currentConfig.fileName}`}
                >
                  Download PDF
                </a>
                <a
                  href={viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-open-external"
                  title="Open in new window"
                >
                  Open in Tab ↗
                </a>
              </>
            )}
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Close resume viewer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Small Screen Layout: Clean Card (No embedded iframe) */}
        {isMobile ? (
          <div className="resume-mobile-card">
            <div className="resume-mobile-info">
              <span className="resume-mobile-badge">{currentConfig.code}</span>
              <h3 className="resume-mobile-title">{currentConfig.label}</h3>
              <p className="resume-mobile-meta">1 page, PDF</p>
              <p className="resume-mobile-desc">{currentConfig.description}</p>
            </div>

            <div className="resume-mobile-actions">
              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-mobile-btn-primary"
              >
                Open resume ↗
              </a>
              <a
                href={currentConfig.path}
                download={currentConfig.fileName}
                className="resume-mobile-btn-secondary"
              >
                Download
              </a>
            </div>
          </div>
        ) : (
          /* Desktop Screen Layout: In-page PDF Viewer with 70vh height */
          <>
            <div className="resume-modal-subbar">
              <span className="active-badge">{currentConfig.code}</span>
              <span className="active-desc">{currentConfig.description}</span>
            </div>

            <div className="resume-iframe-wrapper">
              <iframe
                src={`${viewUrl}#toolbar=1&navpanes=0`}
                title={`Krutik Tikam ${currentConfig.label}`}
                className="resume-pdf-frame"
                loading="lazy"
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
          </>
        )}
      </div>
    </div>
  );
};

export default ResumeViewerModal;
