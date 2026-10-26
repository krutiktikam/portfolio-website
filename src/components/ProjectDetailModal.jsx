import React, { useEffect, useRef } from 'react';

export const ProjectDetailModal = ({ project, onClose, triggerRef }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const triggerEl = triggerRef?.current;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Focus the close button or modal container on open
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Return focus to trigger element
      if (triggerEl) {
        triggerEl.focus();
      }
    };
  }, [onClose, triggerRef]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div 
        className="project-modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        tabIndex={-1}
        ref={modalRef}
      >
        <div className="project-modal-header">
          <div>
            <span className="spec-tag">SPECIFICATION & LIMITATIONS</span>
            <h3 id="modal-project-title" className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close project details"
          >
            ✕
          </button>
        </div>

        <div className="project-modal-body">
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-desc">{project.description}</p>
          </div>

          {project.specs && (
            <div className="modal-section">
              <h4 className="modal-section-title">Technical Specifications</h4>
              <dl className="modal-specs-list">
                <div className="modal-spec-row">
                  <dt>Stack</dt>
                  <dd>{project.specs.stack}</dd>
                </div>
                <div className="modal-spec-row">
                  <dt>Focus</dt>
                  <dd>{project.specs.focus}</dd>
                </div>
                <div className="modal-spec-row">
                  <dt>Result</dt>
                  <dd>{project.specs.result}</dd>
                </div>
                <div className="modal-spec-row">
                  <dt>Status</dt>
                  <dd>{project.specs.status}</dd>
                </div>
              </dl>
            </div>
          )}

          {project.limitations && (
            <div className="modal-limitations-box">
              <span className="limitations-badge">Limitations and next steps</span>
              <p className="limitations-content">{project.limitations}</p>
            </div>
          )}
        </div>

        <div className="project-modal-footer">
          {project.gitUrl && (
            <a 
              href={project.gitUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-btn-primary"
            >
              View Repository ↗
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-btn-secondary"
            >
              Live Demo ↗
            </a>
          )}
          <button 
            type="button" 
            className="modal-btn-text" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
