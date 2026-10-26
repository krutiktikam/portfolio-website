import React, { useState, useEffect } from 'react';
import { allProjects } from './data/allProjects.js';
import { viewsData, contactInfo } from './data/viewsData.js';

import ThemeToggle from './components/ThemeToggle.jsx';
import SectionLabel from './components/SectionLabel.jsx';
import ResumeViewerModal from './components/ResumeViewerModal.jsx';

function App() {
  // 1. Dual-view routing ('ai' | 'data') based on URL hash
  const getInitialView = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#data') return 'data';
    return 'ai'; // Default to 'ai' for #ai or any unknown hash
  };

  const [currentView, setCurrentView] = useState(getInitialView);

  // 2. Theme State (Dark Mode default)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('preferred_theme') !== 'light';
  });

  // Active section spy
  const [activeNav, setActiveNav] = useState('projects');

  // Modals
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Sync with window.location.hash on load and change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#data') {
        setCurrentView('data');
      } else if (hash === '#ai') {
        setCurrentView('ai');
      } else if (hash) {
        // If hash matches a section anchor (e.g. #projects, #experience, #skills, #contact)
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

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('preferred_theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

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

  const toggleView = () => {
    const nextView = currentView === 'ai' ? 'data' : 'ai';
    setCurrentView(nextView);
    window.location.hash = `#${nextView}`;
  };

  const view = viewsData[currentView];

  // Filter projects for current view
  const currentProjects = allProjects.filter(p => p.views.includes(currentView));
  const featuredProjects = currentProjects.filter(p => p.featuredIn.includes(currentView));
  const otherProjects = currentProjects.filter(p => !p.featuredIn.includes(currentView));

  return (
    <div className="portfolio-app">
      {/* Top Header Navigation */}
      <header className="site-header">
        <div className="header-container">
          <a href="#ai" className="header-brand" onClick={() => { setCurrentView('ai'); window.location.hash = '#ai'; }}>
            <img 
              src="https://avatars.githubusercontent.com/u/132470725?v=4" 
              alt="Krutik Tikam profile" 
              className="brand-avatar" 
            />
            <div className="brand-info">
              <span className="logo">Krutik Tikam</span>
              <span className="brand-role-tag">{view.label}</span>
            </div>
          </a>

          {/* Header Navigation Links */}
          <nav className="header-nav-links" aria-label="Main Navigation">
            <a href="#projects" className={activeNav === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#skills" className={activeNav === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#experience" className={activeNav === 'experience' ? 'active' : ''}>Experience</a>
            <a href="#contact" className={activeNav === 'contact' ? 'active' : ''}>Contact</a>
          </nav>

          {/* View Toggle & Actions */}
          <div className="header-actions-group">
            {/* 2-View Switcher Toggle */}
            <div className="view-switch-box" role="group" aria-label="Portfolio Track Switcher">
              <button
                type="button"
                className={`view-switch-btn ${currentView === 'ai' ? 'active' : ''}`}
                onClick={() => { setCurrentView('ai'); window.location.hash = '#ai'; }}
                aria-pressed={currentView === 'ai'}
              >
                AI / Backend
              </button>
              <button
                type="button"
                className={`view-switch-btn ${currentView === 'data' ? 'active' : ''}`}
                onClick={() => { setCurrentView('data'); window.location.hash = '#data'; }}
                aria-pressed={currentView === 'data'}
              >
                Data Analyst
              </button>
            </div>

            <ThemeToggle 
              isDark={isDarkMode} 
              onToggleTheme={() => setIsDarkMode(prev => !prev)} 
            />

            <a
              href={view.resumeFile}
              download={view.resumeDownloadName}
              className="header-resume-cta"
              title={`Download ${view.resumeLabel}`}
            >
              Download resume
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-full-container" id="hero">
          <div className="hero-content">
            <div className="hero-view-badge">
              <span className="live-dot pulse"></span>
              <span>TRACK: {view.label.toUpperCase()}</span>
            </div>

            <h1 className="hero-headline">
              {view.headline}
            </h1>

            <p className="hero-subheadline">
              {view.availability}
            </p>

            <div className="hero-cta-row">
              <a
                href={view.resumeFile}
                download={view.resumeDownloadName}
                className="hero-btn-primary"
                title={`Download ${view.resumeLabel}`}
              >
                Download resume
              </a>
              <button
                type="button"
                className="hero-btn-secondary"
                onClick={() => setShowResumeModal(true)}
              >
                View resume PDF
              </button>
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn-secondary"
              >
                GitHub ↗
              </a>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hero-btn-secondary"
              >
                LinkedIn ↗
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="hero-btn-secondary"
              >
                Email
              </a>
            </div>

            <div className="hero-toggle-hint">
              <span>Looking for {currentView === 'ai' ? 'data analytics' : 'AI & backend systems'}? </span>
              <button type="button" className="inline-toggle-link" onClick={toggleView}>
                {view.toggleText} →
              </button>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="projects-section-container" id="projects">
          <SectionLabel index="01" label="PROJECTS" badge={`${view.label.toUpperCase()} SHOWCASE`} />
          
          <h2 className="section-main-heading">
            Featured Projects
          </h2>

          <div className="projects-grid">
            {featuredProjects.map(project => (
              <article key={project.id} className="project-card featured-card">
                <div className="card-top-header">
                  <span className="project-badge">{project.metricBadge}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-desc">{project.description}</p>

                {project.limitations && (
                  <div className="project-limitations-box">
                    <span className="limitations-label">Limitations and next steps:</span>
                    <p className="limitations-text">{project.limitations}</p>
                  </div>
                )}

                <div className="project-card-footer">
                  {project.gitUrl && (
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link-btn"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link-btn live"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {otherProjects.length > 0 && (
            <div className="other-projects-block">
              <h3 className="sub-heading">Other Projects</h3>
              <div className="other-projects-grid">
                {otherProjects.map(project => (
                  <article key={project.id} className="project-card small-card">
                    <div className="card-top-header">
                      <span className="project-badge">{project.metricBadge}</span>
                    </div>

                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-tagline">{project.tagline}</p>
                    <p className="project-desc">{project.description}</p>

                    <div className="project-card-footer">
                      {project.gitUrl && (
                        <a
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-link-btn"
                        >
                          GitHub ↗
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-link-btn live"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section className="skills-section-container" id="skills">
          <SectionLabel index="02" label="TECHNICAL SKILLS" badge={view.label.toUpperCase()} />
          <h2 className="section-main-heading">Skills & Certifications</h2>

          <div className="skills-groups-grid">
            {view.skillsGroups.map((group, idx) => (
              <div key={idx} className="skill-group-card">
                <h3 className="skill-group-title">{group.category}</h3>
                <p className="skill-group-text">{group.skills}</p>
              </div>
            ))}
          </div>

          <div className="certifications-card">
            <h3 className="certifications-title">Certifications</h3>
            <ul className="certifications-list">
              {view.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section className="experience-section-container" id="experience">
          <SectionLabel index="03" label="TIMELINE" badge="EXPERIENCE & EDUCATION" />
          <h2 className="section-main-heading">Experience & Education</h2>

          <div className="timeline-items-list">
            {view.experience.map((exp, idx) => (
              <div key={idx} className="timeline-item-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-org">{exp.organization}</span>
                </div>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-details">{exp.details}</p>
              </div>
            ))}

            {view.education.map((edu, idx) => (
              <div key={`edu-${idx}`} className="timeline-item-card education-card">
                <div className="timeline-meta">
                  <span className="timeline-period">{edu.period}</span>
                  <span className="timeline-org">University Education</span>
                </div>
                <h3 className="timeline-role">{edu.degree}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section-container" id="contact">
          <SectionLabel index="04" label="CONNECT" badge="DIRECT CONTACT" />
          <h2 className="section-main-heading">Contact</h2>
          
          <div className="contact-card">
            <p className="contact-lead">
              Open to junior AI/backend and data analyst roles, remote or Mumbai. Feel free to reach out directly:
            </p>

            <div className="contact-links-grid">
              <a href={`mailto:${contactInfo.email}`} className="contact-link-pill">
                <span className="contact-icon">✉️</span>
                <span>{contactInfo.email}</span>
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link-pill">
                <span className="contact-icon">🐙</span>
                <span>github.com/krutiktikam</span>
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-pill">
                <span className="contact-icon">💼</span>
                <span>linkedin.com/in/krutik-tikam-95339b286</span>
              </a>
            </div>

            <div className="contact-download-box">
              <a 
                href={view.resumeFile} 
                download={view.resumeDownloadName}
                className="hero-btn-primary"
              >
                Download {view.resumeLabel} (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div>
          <span>© 2026 Krutik Tikam. Built with React 19 & Vite.</span>
          <div className="footer-view-status">
            Current track: <strong>{view.label}</strong>
          </div>
        </div>
        <div className="footer-social-links">
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </div>
      </footer>

      {/* 2-Tab Resume Viewer Modal */}
      <ResumeViewerModal 
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        initialView={currentView}
      />
    </div>
  );
}

export default App;
