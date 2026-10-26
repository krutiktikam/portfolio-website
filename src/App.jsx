import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { featuredProjects, moreProjects } from './data/allProjects.js';
import { viewsData, howIWorkSteps, contactInfo } from './data/viewsData.js';

import SectionLabel from './components/SectionLabel.jsx';
import ResumeViewerModal from './components/ResumeViewerModal.jsx';
import ProjectDetailModal from './components/ProjectDetailModal.jsx';
import HeroWireframe from './components/HeroWireframe.jsx';
import { SportsAnalyserDiagram, OmniMathDiagram, AuraHudDiagram } from './components/ProjectDiagrams.jsx';

function App() {
  // Dual-view routing ('ai' | 'data') based on URL hash
  const getInitialView = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#data') return 'data';
    return 'ai'; // Default to 'ai' for #ai or any unknown hash
  };

  const [currentView, setCurrentView] = useState(getInitialView);
  const [activeNav, setActiveNav] = useState('projects');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals state & trigger refs for accessible focus restoration
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [activeProjectDetail, setActiveProjectDetail] = useState(null);
  
  const resumeTriggerRef = useRef(null);
  const projectDetailTriggerRef = useRef(null);

  // Sync with window.location.hash on load and change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#data') {
        setCurrentView('data');
      } else if (hash === '#ai') {
        setCurrentView('ai');
      } else if (hash) {
        // If hash matches a section anchor (#projects, #skills, #experience, #contact)
        const targetId = hash.replace('#', '');
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Unknown hash falls back to AI view without error
          setCurrentView('ai');
        }
      } else {
        setCurrentView('ai');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title and body data-attributes
  useEffect(() => {
    document.body.setAttribute('data-view', currentView);
    document.title = `Krutik Tikam | ${viewsData[currentView].label}`;
  }, [currentView]);

  // Scroll Spy for Header Nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [mobileMenuOpen]);

  const view = viewsData[currentView];

  const handleOpenResume = (e) => {
    resumeTriggerRef.current = e.currentTarget;
    setShowResumeModal(true);
  };

  const handleOpenProjectDetail = (project, e) => {
    projectDetailTriggerRef.current = e.currentTarget;
    setActiveProjectDetail(project);
  };

  // Helper to render featured project SVG diagram
  const renderProjectDiagram = (projectId) => {
    switch (projectId) {
      case 'sports-analyser':
        return <SportsAnalyserDiagram />;
      case 'omnimath-local':
        return <OmniMathDiagram />;
      case 'aura-hud':
        return <AuraHudDiagram />;
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-app">
      {/* 1. Header Navigation */}
      <header className="site-header">
        <div className="header-container">
          {/* Monogram mark */}
          <a 
            href="#ai" 
            className="header-monogram" 
            onClick={() => { setCurrentView('ai'); window.location.hash = '#ai'; }}
            aria-label="Krutik Tikam home"
          >
            <div className="monogram-box">
              <span className="monogram-text">KT</span>
            </div>
            <span className="brand-name">KRUTIK TIKAM</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="header-nav-links" aria-label="Main Navigation">
            <a href="#projects" className={activeNav === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#skills" className={activeNav === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#experience" className={activeNav === 'experience' ? 'active' : ''}>Experience</a>
            <a href="#contact" className={activeNav === 'contact' ? 'active' : ''}>Contact</a>
          </nav>

          {/* Header Controls: Segmented View Switch & Resume */}
          <div className="header-actions-group">
            {/* View Switch Segmented Control */}
            <div className="segmented-view-control" role="group" aria-label="Role View Switcher">
              <button
                type="button"
                className={`segmented-btn ${currentView === 'ai' ? 'is-active' : ''}`}
                onClick={() => { setCurrentView('ai'); window.location.hash = '#ai'; }}
                aria-pressed={currentView === 'ai'}
              >
                AI / Backend
              </button>
              <button
                type="button"
                className={`segmented-btn ${currentView === 'data' ? 'is-active' : ''}`}
                onClick={() => { setCurrentView('data'); window.location.hash = '#data'; }}
                aria-pressed={currentView === 'data'}
              >
                Data Analyst
              </button>
            </div>

            {/* Direct Resume Download */}
            <a
              href={view.resumeFile}
              download={view.resumeDownloadName}
              className="btn-header-resume"
              title={`Download ${view.resumeLabel}`}
            >
              Download resume
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="menu-btn-text">{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="mobile-nav-drawer" aria-label="Mobile Navigation">
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a 
              href={view.resumeFile} 
              download={view.resumeDownloadName} 
              className="mobile-resume-download"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download Resume (PDF)
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* 2. Hero Section */}
        <section className="hero-section" id="hero">
          <div className="hero-grid">
            <div className="hero-text-column">
              <div className="hero-view-indicator">
                <span className="status-dot" aria-hidden="true"></span>
                <span className="status-label">VIEW // {view.label.toUpperCase()}</span>
              </div>

              <h1 className="hero-pixel-headline">
                {view.headline}
              </h1>

              <p className="hero-subline">
                {view.subheadline}
              </p>

              <div className="hero-action-buttons">
                <a href="#projects" className="btn-hero-primary">
                  View projects
                </a>
                <button 
                  type="button" 
                  className="btn-hero-secondary"
                  onClick={handleOpenResume}
                  ref={resumeTriggerRef}
                >
                  Resume
                </button>
              </div>
            </div>

            {/* Right: Animated Wireframe Cubes & Faceted Shape Graphic */}
            <div className="hero-graphic-column">
              <HeroWireframe />
            </div>
          </div>
        </section>

        {/* Dotted Section Divider */}
        <hr className="dotted-divider" />

        {/* 3. Stats Band */}
        <section className="stats-band-section" aria-label="Key Performance Indicators">
          <div className="stats-band-grid">
            {view.stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-caption">{stat.caption}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Dotted Section Divider */}
        <hr className="dotted-divider" />

        {/* 4. Featured Projects (Spec-Sheet Style) */}
        <section className="featured-section" id="projects">
          <SectionLabel label="FEATURED WORK" />
          <h2 className="pixel-section-title">FEATURED SYSTEMS</h2>

          <div className="featured-rows-stack">
            {featuredProjects.map(project => (
              <article key={project.id} className="featured-row-card">
                {/* Rotated Badge */}
                <div className="featured-rotated-tag" aria-hidden="true">
                  FEATURED
                </div>

                {/* Left: Original SVG Architectural Diagram */}
                <div className="featured-media-box">
                  {renderProjectDiagram(project.id)}
                </div>

                {/* Right: Spec Sheet */}
                <div className="featured-specs-box">
                  <h3 className="featured-project-title">
                    {project.title}
                    <span className="title-underline" aria-hidden="true"></span>
                  </h3>
                  <p className="featured-tagline">{project.tagline}</p>
                  <p className="featured-desc">{project.description}</p>

                  {/* Spec List with SVG Icons */}
                  <div className="specs-list">
                    <div className="spec-item">
                      <span className="spec-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="2" y="2" width="12" height="4" rx="1" />
                          <rect x="2" y="10" width="12" height="4" rx="1" />
                        </svg>
                      </span>
                      <span className="spec-name">Stack:</span>
                      <span className="spec-val">{project.specs.stack}</span>
                    </div>

                    <div className="spec-item">
                      <span className="spec-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="8" cy="8" r="5" />
                          <circle cx="8" cy="8" r="1.5" />
                        </svg>
                      </span>
                      <span className="spec-name">Focus:</span>
                      <span className="spec-val">{project.specs.focus}</span>
                    </div>

                    <div className="spec-item">
                      <span className="spec-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M2 12 L6 8 L9 11 L14 4" />
                        </svg>
                      </span>
                      <span className="spec-name">Result:</span>
                      <span className="spec-val">{project.specs.result}</span>
                    </div>

                    <div className="spec-item">
                      <span className="spec-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="8" cy="8" r="6" />
                          <path d="M5 8 L7 10 L11 6" />
                        </svg>
                      </span>
                      <span className="spec-name">Status:</span>
                      <span className="spec-val">{project.specs.status}</span>
                    </div>
                  </div>

                  {/* Actions: View repo & Details modal */}
                  <div className="featured-actions-row">
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-view-repo"
                    >
                      View repo
                    </a>
                    <button
                      type="button"
                      className="btn-details-link"
                      onClick={(e) => handleOpenProjectDetail(project, e)}
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Dotted Section Divider */}
        <hr className="dotted-divider" />

        {/* 5. About Section */}
        <section className="about-section" id="about">
          <SectionLabel label="ABOUT" />
          <div className="about-card">
            {/* Pixel Monogram Graphic */}
            <div className="about-monogram-graphic" aria-hidden="true">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="4" fill="#111113" stroke="rgba(255,255,255,0.12)" />
                <rect x="8" y="10" width="4" height="24" fill="#f2f2f2" />
                <rect x="12" y="20" width="4" height="4" fill="#f2f2f2" />
                <rect x="16" y="16" width="4" height="4" fill="#f2f2f2" />
                <rect x="20" y="12" width="4" height="4" fill="#f2f2f2" />
                <rect x="16" y="24" width="4" height="4" fill="#f2f2f2" />
                <rect x="20" y="28" width="4" height="4" fill="#f2f2f2" />
                <rect x="26" y="10" width="12" height="4" fill="#f2f2f2" />
                <rect x="30" y="14" width="4" height="20" fill="#f2f2f2" />
              </svg>
            </div>

            <p className="about-statement">
              I build AI systems that run on modest hardware, and I measure what I build.
            </p>

            <button 
              type="button" 
              className="about-resume-link"
              onClick={handleOpenResume}
            >
              Inspect Resume (PDF) →
            </button>
          </div>
        </section>

        {/* Dotted Section Divider */}
        <hr className="dotted-divider" />

        {/* 6. How I Work Section */}
        <section className="how-i-work-section" id="process">
          <SectionLabel label="ENGINEERING PRINCIPLES" />
          <h2 className="pixel-section-title">HOW I WORK</h2>

          <div className="how-i-work-grid">
            {howIWorkSteps.map(step => (
              <div key={step.step} className="glow-card step-card">
                <div className="step-card-header">
                  <span className="step-pill-badge">{step.badge}</span>
                  <span className="step-number">{step.step}</span>
                </div>
                <p className="step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dotted Section Divider */}
        <hr className="dotted-divider" />

        {/* 7. More Projects Section */}
        <section className="more-projects-section" id="more-projects">
          <SectionLabel label="ARCHIVE" />
          <h2 className="pixel-section-title">MORE PROJECTS</h2>

          <div className="more-projects-grid">
            {moreProjects.map(project => (
              <article key={project.id} className="glow-card compact-project-card">
                <div className="compact-top">
                  <span className="compact-badge">{project.badge}</span>
                </div>
                <h3 className="compact-title">{project.title}</h3>
                <p className="compact-desc">{project.description}</p>

                <div className="compact-links">
                  {project.gitUrl && (
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="compact-link"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="compact-link live"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Dotted Section Divider */}
        <hr className="dotted-divider" />

        {/* 8. Skills Section */}
        <section className="skills-section" id="skills">
          <SectionLabel label="TECHNICAL COMPETENCIES" />
          <h2 className="pixel-section-title">SKILLS & CERTIFICATIONS</h2>

          {/* Three Icon Cards with Rounded Square Icons */}
          <div className="skills-cards-grid">
            {view.skillsGroups.map((group, idx) => (
              <div key={idx} className="glow-card skill-icon-card">
                <div className="icon-rounded-square" aria-hidden="true">
                  {idx === 0 && (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2 L12 6" />
                      <path d="M12 18 L12 22" />
                      <path d="M4.93 4.93 L7.76 7.76" />
                      <path d="M16.24 16.24 L19.07 19.07" />
                      <path d="M2 12 L6 12" />
                      <path d="M18 12 L22 12" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <rect x="2" y="3" width="20" height="6" rx="1" />
                      <rect x="2" y="15" width="20" height="6" rx="1" />
                      <circle cx="6" cy="6" r="1" fill="currentColor" />
                      <circle cx="6" cy="18" r="1" fill="currentColor" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  )}
                </div>
                <h3 className="skill-card-heading">{group.category}</h3>
                <p className="skill-card-body">{group.skills}</p>
              </div>
            ))}
          </div>

          {/* Certifications List as Chips */}
          <div className="certifications-container">
            <h3 className="certifications-label">Certifications</h3>
            <div className="certifications-chips-row">
              {view.certifications.map((cert, idx) => (
                <span key={idx} className="cert-chip">{cert}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Dotted Section Divider */}
        <hr className="dotted-divider" />

        {/* 9. Experience and Education as a Timeline */}
        <section className="timeline-section" id="experience">
          <SectionLabel label="CAREER & EDUCATION" />
          <h2 className="pixel-section-title">EXPERIENCE & EDUCATION</h2>

          <div className="timeline-table">
            {/* Industry Experience Entries */}
            {view.experience.map((exp, idx) => (
              <div key={`exp-${idx}`} className="timeline-row">
                <div className="timeline-date-col">
                  {exp.period}
                </div>
                <div className="timeline-content-col">
                  <h3 className="timeline-role-title">
                    <strong>{exp.role}</strong>
                    <span className="timeline-org-sep">—</span>
                    <span className="timeline-org-text">{exp.organization}</span>
                  </h3>
                  <p className="timeline-description-text">{exp.description}</p>
                </div>
              </div>
            ))}

            {/* Verified Education Entry */}
            {view.education.map((edu, idx) => (
              <div key={`edu-${idx}`} className="timeline-row">
                <div className="timeline-date-col">
                  {edu.period}
                </div>
                <div className="timeline-content-col">
                  <h3 className="timeline-role-title">
                    <strong>{edu.role}</strong>
                    <span className="timeline-org-sep">—</span>
                    <span className="timeline-org-text">{edu.organization}</span>
                  </h3>
                  <p className="timeline-description-text">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dotted Section Divider */}
        <hr className="dotted-divider" />

        {/* 10. Contact Section */}
        <section className="contact-section" id="contact">
          <SectionLabel label="DIRECT CONNECT" />
          <h2 className="pixel-section-title">GET IN TOUCH</h2>

          <div className="contact-box glow-card">
            <p className="contact-subline">
              Open to junior AI/backend and data analyst roles, remote or Mumbai. Feel free to reach out directly:
            </p>

            <div className="contact-pills-row">
              {/* Email */}
              <a href={`mailto:${contactInfo.email}`} className="contact-pill-link">
                <span className="pill-svg-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 6 L12 13 L2 6" />
                  </svg>
                </span>
                <span>{contactInfo.email}</span>
              </a>

              {/* GitHub */}
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-pill-link">
                <span className="pill-svg-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </span>
                <span>github.com/krutiktikam</span>
              </a>

              {/* LinkedIn */}
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-pill-link">
                <span className="pill-svg-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </span>
                <span>linkedin.com/in/krutik-tikam-95339b286</span>
              </a>

              {/* Resume download */}
              <a 
                href={view.resumeFile} 
                download={view.resumeDownloadName}
                className="contact-pill-link resume-pill"
              >
                <span className="pill-svg-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
                <span>Download resume (PDF)</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-links-row">
            <a href="#projects">PROJECTS</a>
            <a href="#skills">SKILLS</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#contact">CONTACT</a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a href={`mailto:${contactInfo.email}`}>EMAIL</a>
          </div>

          <div className="footer-bottom-row">
            <span className="copyright-text">© 2026 Krutik Tikam</span>
            <span className="view-status-text">
              Active view: <strong>{view.label}</strong>
            </span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ResumeViewerModal 
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        initialView={currentView}
        triggerRef={resumeTriggerRef}
      />

      <ProjectDetailModal
        project={activeProjectDetail}
        onClose={() => setActiveProjectDetail(null)}
        triggerRef={projectDetailTriggerRef}
      />
    </div>
  );
}

export default App;
