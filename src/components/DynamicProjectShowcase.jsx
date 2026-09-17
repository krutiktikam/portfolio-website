import React, { useState, useEffect, useMemo, useRef } from 'react';
import SectionLabel from './SectionLabel.jsx';

export const DynamicProjectShowcase = ({ 
  allProjects, 
  spotlightIds = [], 
  personaId = 'agentic', 
  personaTitle = '',
  layoutDefault = 'grid',
  onSelectProject 
}) => {
  const [viewMode, setViewMode] = useState(layoutDefault); // 'grid' | 'carousel'
  const [filterMode, setFilterMode] = useState('spotlight'); // 'spotlight' | 'all'
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const carouselRef = useRef(null);

  // Sync viewMode when persona changes layoutDefault
  useEffect(() => {
    if (layoutDefault) {
      setViewMode(layoutDefault);
    }
  }, [personaId, layoutDefault]);

  // Derive available categories
  const categories = useMemo(() => {
    const cats = new Set(["All"]);
    allProjects.forEach(p => p.categories.forEach(c => cats.add(c)));
    return Array.from(cats);
  }, [allProjects]);

  // Compute sorted & filtered projects
  const displayedProjects = useMemo(() => {
    let list = [...allProjects];

    // If spotlight mode is active, prioritize persona's spotlight IDs first
    if (filterMode === 'spotlight') {
      list = list.filter(p => spotlightIds.includes(p.id));
    } else {
      // Sort by persona relevance score descending
      list.sort((a, b) => {
        const scoreA = (a.personaRelevance && a.personaRelevance[personaId]) || 0;
        const scoreB = (b.personaRelevance && b.personaRelevance[personaId]) || 0;
        return scoreB - scoreA;
      });
    }

    if (selectedCategory !== 'All') {
      list = list.filter(p => p.categories.includes(selectedCategory));
    }

    return list;
  }, [allProjects, spotlightIds, filterMode, selectedCategory, personaId]);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="dynamic-project-showcase" id="projects-section">
      <SectionLabel 
        index="04" 
        label="PRODUCTION SYSTEMS & RESEARCH" 
        badge={`${filterMode === 'spotlight' ? 'SPOTLIGHT ARCHITECTURE' : 'COMPLETE REPOSITORY'} // ${displayedProjects.length} SYSTEMS`} 
      />

      <div className="showcase-header-row">
        <div>
          <h3 className="showcase-main-title">
            Featured Systems: <span className="highlight-text">{personaTitle}</span>
          </h3>
          <p className="showcase-main-desc">
            Hardened backends, real-time computer vision pipelines, headless robotics environments, and deployed full-stack AI applications.
          </p>
        </div>

        {/* View mode toggle (Grid vs Carousel) & Filter Scope */}
        <div className="showcase-view-controls">
          <div className="view-toggle-group">
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              ⊞ Grid
            </button>
            <button
              type="button"
              className={`view-toggle-btn ${viewMode === 'carousel' ? 'active' : ''}`}
              onClick={() => setViewMode('carousel')}
              title="Carousel Horizontal View"
            >
              ↔ Carousel
            </button>
          </div>

          <div className="filter-scope-group">
            <button
              type="button"
              className={`filter-scope-btn ${filterMode === 'spotlight' ? 'active' : ''}`}
              onClick={() => setFilterMode('spotlight')}
            >
              ★ Persona Spotlight ({spotlightIds.length})
            </button>
            <button
              type="button"
              className={`filter-scope-btn ${filterMode === 'all' ? 'active' : ''}`}
              onClick={() => setFilterMode('all')}
            >
              All Systems ({allProjects.length})
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills (when in All Systems view) */}
      {filterMode === 'all' && (
        <div className="categories-filter-bar">
          {categories.map((cat, i) => (
            <button
              key={i}
              type="button"
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Carousel navigation buttons (if carousel mode) */}
      {viewMode === 'carousel' && (
        <div className="carousel-nav-arrows">
          <button 
            type="button" 
            className="carousel-arrow left"
            onClick={() => scrollCarousel('left')}
            aria-label="Scroll left"
          >
            ‹
          </button>
          <span className="carousel-hint">Swipe or click arrows to explore {displayedProjects.length} systems in horizontal timeline format</span>
          <button 
            type="button" 
            className="carousel-arrow right"
            onClick={() => scrollCarousel('right')}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      )}

      {/* Projects Container (Grid or Carousel) */}
      <div 
        ref={carouselRef}
        className={`projects-display-container ${viewMode === 'carousel' ? 'carousel-mode' : 'grid-mode'}`}
      >
        {displayedProjects.map((project, idx) => {
          const isSpotlight = spotlightIds.includes(project.id);
          const indexNum = (idx + 1).toString().padStart(2, '0');
          return (
            <div 
              key={project.id} 
              className={`project-card ${isSpotlight ? 'is-spotlight' : ''}`}
              onClick={() => onSelectProject(project)}
            >
              <div className="card-top-header">
                <span className="card-index-tag">[{indexNum}]</span>
                <span className="project-badge">{project.badge}</span>
                {isSpotlight && <span className="spotlight-tag">★ SPOTLIGHT</span>}
              </div>

              <h4 className="project-title">{project.title}</h4>
              <p className="project-tagline">{project.tagline}</p>

              <div className="project-problem-box">
                <span className="box-label">ARCHITECTURE HIGHLIGHT:</span>
                <p>{project.architecture.slice(0, 140)}...</p>
              </div>

              <div className="project-tech-chips">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-chip">{t}</span>
                ))}
              </div>

              <div className="project-metric-callout">
                <span className="metric-icon">🎯</span>
                <span className="metric-text">{project.metricText}</span>
              </div>

              <div className="project-card-footer" onClick={(e) => e.stopPropagation()}>
                {project.gitUrl && (
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link-btn"
                  >
                    <span>GitHub</span>
                    <span className="external-arrow">↗</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link-btn live"
                  >
                    <span>Live App</span>
                    <span className="external-arrow">↗</span>
                  </a>
                )}
                <button
                  type="button"
                  className="card-details-btn"
                  onClick={() => onSelectProject(project)}
                >
                  Specs →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DynamicProjectShowcase;
