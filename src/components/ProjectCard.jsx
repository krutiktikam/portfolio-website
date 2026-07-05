import React from 'react';

const ProjectCard = ({ title, description, tech, gitUrl, liveUrl }) => {
  // Generate a unique ID for selenium/testing validation
  const elementId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="project-card glass-panel" id={`card-${elementId}`}>
      <h3 className="project-title" id={`title-${elementId}`}>{title}</h3>
      <p className="project-desc" id={`desc-${elementId}`}>{description}</p>
      <div className="project-tech-tags">
        {tech.map((t, idx) => (
          <span key={idx} className="tech-tag" id={`tag-${elementId}-${t.toLowerCase().replace(/\s+/g, '-')}`}>
            {t}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a 
          href={gitUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link-btn code-btn"
          id={`link-code-${elementId}`}
        >
          Source Code
        </a>
        {liveUrl && (
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link-btn demo-btn"
            id={`link-demo-${elementId}`}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
