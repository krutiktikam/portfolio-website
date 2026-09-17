import React, { useState, useEffect, useRef } from 'react';
import { allProjects } from './data/allProjects.js';
import { personasData } from './data/personasData.js';

import PersonaSwitcher from './components/PersonaSwitcher.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import HeroVisual from './components/HeroVisual.jsx';
import SectionLabel from './components/SectionLabel.jsx';
import FeaturedArchitecture from './components/FeaturedArchitecture.jsx';
import WhyHowSection from './components/WhyHowSection.jsx';
import MetricsBand from './components/MetricsBand.jsx';
import DynamicProjectShowcase from './components/DynamicProjectShowcase.jsx';
import InteractiveTimeline from './components/InteractiveTimeline.jsx';
import BlogSection from './components/BlogSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import ResumeViewerModal from './components/ResumeViewerModal.jsx';
import PersonaContactForm from './components/PersonaContactForm.jsx';

function App() {
  // 1. Persona State ('agentic' | 'cv_rl' | 'fullstack')
  const [currentPersona, setCurrentPersona] = useState(() => {
    return localStorage.getItem('preferred_persona') || 'agentic';
  });

  // 2. Theme State (Dark Mode default)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('preferred_theme') !== 'light';
  });

  // Active section spy
  const [activeNav, setActiveNav] = useState('home');

  // Modals & Popups
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showCliModal, setShowCliModal] = useState(false);

  // Terminal CLI State
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState([
    { cmd: 'welcome', response: 'Krutik Developer CLI v3.0 [Dynamic Persona Active]. Type "help" or "switch <a|b|c>" to change view. Shortcut: Ctrl+K / Cmd+K' }
  ]);
  const cliBodyRef = useRef(null);

  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  // Get active persona data object
  const persona = personasData[currentPersona] || personasData.agentic;

  // Sync Body Attributes and LocalStorage on persona/theme change
  useEffect(() => {
    document.body.setAttribute('data-persona', currentPersona);
    localStorage.setItem('preferred_persona', currentPersona);
    document.title = `Krutik Tikam | ${persona.shortRole} (${persona.code})`;
  }, [currentPersona, persona]);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('preferred_theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Global Keyboard shortcuts (Ctrl+K for CLI)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowCliModal(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Custom Cursor Mouse Tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a') || 
                            target.closest('button') || 
                            target.closest('.project-card') || 
                            target.closest('.article-card') || 
                            target.closest('.hero-persona-btn') || 
                            target.closest('.persona-pill-btn') || 
                            target.closest('input') || 
                            target.closest('select') || 
                            target.closest('textarea');
      setIsHoveringInteractive(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Scroll Spy for Header Nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects-section', 'skills', 'timeline', 'articles-section', 'contact-section'];
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

  // CLI Command Processor
  const handleCliSubmit = (e) => {
    e.preventDefault();
    const trimmed = cliInput.trim().toLowerCase();
    if (!trimmed) return;

    let resp = '';

    if (trimmed.startsWith('switch ') || trimmed.startsWith('persona ')) {
      const arg = trimmed.split(' ')[1];
      if (arg === 'a' || arg === 'agentic' || arg === 'backend') {
        setCurrentPersona('agentic');
        resp = 'Switched persona to: ⚡ Resume A (AI Backend & Agentic Systems)';
      } else if (arg === 'b' || arg === 'cv' || arg === 'rl' || arg === 'signals') {
        setCurrentPersona('cv_rl');
        resp = 'Switched persona to: 👁️ Resume B (Applied Computer Vision, RL & Signals)';
      } else if (arg === 'c' || arg === 'fullstack' || arg === 'software') {
        setCurrentPersona('fullstack');
        resp = 'Switched persona to: 🌐 Resume C (End-to-End AI Software Engineer)';
      } else {
        resp = 'Invalid persona. Options: "switch a" (Backend), "switch b" (Vision/RL), "switch c" (Fullstack)';
      }
    } else {
      switch (trimmed) {
        case 'help':
          resp = 'Available Commands:\n• switch <a|b|c> : Switch between the 3 resumes & aesthetics\n• resume         : Open active resume viewer\n• bio            : Current persona technical bio\n• skills         : Active skills matrix highlights\n• projects       : Spotlight systems for current persona\n• articles       : Engineering deep-dives\n• clear          : Clear console';
          break;
        case 'resume':
          resp = `Opening Resume Viewer for ${persona.title} (${persona.code})...`;
          setShowResumeModal(true);
          break;
        case 'bio':
          resp = `[${persona.code}: ${persona.title}]\n${persona.about.leadParagraph}`;
          break;
        case 'skills':
          resp = persona.skillsCategories.map(c => `[${c.title}]\n${c.items.join(', ')}`).join('\n\n');
          break;
        case 'projects':
          const spot = allProjects.filter(p => persona.spotlightProjectIds.includes(p.id));
          resp = spot.map(p => `• ${p.title} (${p.badge})\n  ${p.metricText}`).join('\n\n');
          break;
        case 'articles':
          resp = persona.articles.map(a => `• ${a.title} (${a.date})\n  ${a.summary}`).join('\n\n');
          break;
        case 'clear':
          setCliHistory([]);
          setCliInput('');
          return;
        default:
          resp = `Command not recognized: "${trimmed}". Type "help" or "switch a/b/c".`;
      }
    }

    setCliHistory(prev => [...prev, { cmd: trimmed, response: resp }]);
    setCliInput('');

    setTimeout(() => {
      if (cliBodyRef.current) {
        cliBodyRef.current.scrollTop = cliBodyRef.current.scrollHeight;
      }
    }, 50);
  };

  return (
    <>
      {/* Custom Circular Cursor */}
      <div 
        className="cursor-dot" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, pointerEvents: 'none' }}
      />
      <div 
        className={`cursor-outline ${isHoveringInteractive ? 'hovered' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, pointerEvents: 'none' }}
      />

      {/* Top Header Navigation */}
      <header className="site-header">
        <div className="header-container">
          <a href="#hero" className="header-brand">
            <img 
              src="https://avatars.githubusercontent.com/u/132470725?v=4" 
              alt="Krutik Tikam" 
              className="brand-avatar" 
            />
            <div className="brand-info">
              <span className="logo">Krutik Tikam</span>
              <span className="brand-role-tag">{persona.shortRole}</span>
            </div>
          </a>

          {/* Header Navigation Links */}
          <nav className="header-nav-links" aria-label="Main Navigation">
            <a href="#about" className={activeNav === 'about' ? 'active' : ''}>About</a>
            <a href="#projects-section" className={activeNav === 'projects-section' ? 'active' : ''}>Projects</a>
            <a href="#skills" className={activeNav === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#timeline" className={activeNav === 'timeline' ? 'active' : ''}>Timeline</a>
            <a href="#articles-section" className={activeNav === 'articles-section' ? 'active' : ''}>Articles</a>
            <a href="#contact-section" className={activeNav === 'contact-section' ? 'active' : ''}>Contact</a>
          </nav>

          {/* Persona Switcher Component (Pill Mode) */}
          <PersonaSwitcher 
            currentPersona={currentPersona}
            onSelectPersona={setCurrentPersona}
            variant="pill"
          />

          {/* Actions: Theme Toggle, Terminal, Resume CTA */}
          <div className="header-actions-group">
            <button 
              type="button" 
              className="theme-toggle-btn"
              onClick={() => setShowCliModal(true)}
              title="Open Terminal (Ctrl+K)"
            >
              ⌨️ <span className="hide-mobile">CLI</span>
            </button>

            <ThemeToggle 
              isDark={isDarkMode} 
              onToggleTheme={() => setIsDarkMode(prev => !prev)} 
            />

            <button
              type="button"
              className="header-resume-cta"
              onClick={() => setShowResumeModal(true)}
            >
              📄 {persona.code.split('_')[1] || 'Resume'} PDF
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 1. Persona-Specific Hero Section (Asymmetric 60/40) */}
        <section className="hero-full-container" id="hero">
          <div className="hero-left-content">
            <SectionLabel index="00" label="SYSTEM ARCHITECTURE & IDENTITY" badge={persona.code} />

            <div className="hero-eyebrow-row">
              <span className="live-dot pulse"></span>
              <span>{persona.hero.eyebrow}</span>
            </div>

            <h1 className="hero-headline">
              {persona.hero.headline}
            </h1>

            <p className="hero-subheadline">
              {persona.hero.subheadline}
            </p>

            <div className="hero-cta-row">
              <button 
                type="button" 
                className="hero-btn-primary"
                onClick={() => setShowResumeModal(true)}
              >
                <span>{persona.hero.primaryCta}</span>
                <span>→</span>
              </button>

              <a href="#featured" className="hero-btn-secondary">
                Flagship Spec
              </a>

              <a href="#projects-section" className="hero-btn-secondary">
                {persona.hero.secondaryCta}
              </a>

              <a href="#contact-section" className="hero-btn-secondary">
                Quick Connect
              </a>
            </div>

            <div className="hero-stats-row">
              {persona.hero.stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <span className="stat-val">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-desc">{stat.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Domain-specific dynamic visual canvas */}
          <div className="hero-right-visual">
            <HeroVisual personaId={currentPersona} />
          </div>
        </section>

        {/* Editorial Architecture Selector Strip */}
        <PersonaSwitcher 
          currentPersona={currentPersona}
          onSelectPersona={setCurrentPersona}
          variant="hero-banner"
        />

        {/* 2. Flagship Project Architecture Spotlight */}
        <FeaturedArchitecture
          persona={persona}
          allProjects={allProjects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 3. Editorial Why/How Philosophy Section */}
        <WhyHowSection persona={persona} />

        {/* 4. Verified Metrics Band with Hairline Dividers */}
        <MetricsBand 
          metrics={persona.metrics} 
          personaCode={persona.code} 
        />

        {/* 5. Dynamic Project Showcase (Grid & Carousel Modes with Spotlights) */}
        <DynamicProjectShowcase 
          allProjects={allProjects}
          spotlightIds={persona.spotlightProjectIds}
          personaId={currentPersona}
          personaTitle={persona.title}
          layoutDefault={persona.layoutDefault}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 6. Skills Matrix with Persona-Specific Highlights */}
        <section className="skills-matrix-section" id="skills">
          <SectionLabel index="05" label="DOMAIN COMPETENCIES" badge="VERIFIED STACK" />
          <h3 className="showcase-main-title">
            Domain Competencies: <span className="highlight-text">{persona.title}</span>
          </h3>
          <p className="showcase-main-desc">
            Hardened frameworks, low-latency protocols, and architectures applied across production systems.
          </p>

          <div className="skills-matrix-grid">
            {persona.skillsCategories.map((cat, idx) => (
              <div key={idx} className="skill-category-card">
                <div className="skill-card-header">
                  <span className="skill-card-icon">{cat.icon}</span>
                  <h4 className="skill-card-title">{cat.title}</h4>
                </div>
                <div className="skill-items-list">
                  {cat.items.map((item, i) => (
                    <span key={i} className="skill-pill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Interactive Timeline (Evolution of Skills & Milestones) */}
        <section id="timeline">
          <SectionLabel index="06" label="CHRONOLOGY & MILESTONES" badge="CAREER EVOLUTION" />
          <InteractiveTimeline 
            timelineData={persona.timeline}
            personaTitle={persona.title}
          />
        </section>

        {/* 8. Persona-Specific Technical Articles & Engineering Deep-Dives */}
        <div id="articles-section">
          <SectionLabel index="07" label="ENGINEERING PUBLICATIONS" badge="DEEP-DIVES" />
          <BlogSection 
            articles={persona.articles}
            personaId={currentPersona}
            personaTitle={persona.title}
          />
        </div>

        {/* 9. Persona-Specific Testimonials & Peer Reviews */}
        <div id="testimonials-section">
          <SectionLabel index="08" label="PEER EVALUATIONS" badge="ENDORSEMENTS" />
          <TestimonialsSection 
            testimonials={persona.testimonials}
            personaId={currentPersona}
            personaTitle={persona.title}
          />
        </div>

        {/* 10. Contextual Persona Contact Form */}
        <div id="contact-section">
          <SectionLabel index="09" label="TRANSMISSION INTERFACE" badge="DIRECT CONNECT" />
          <PersonaContactForm 
            contactConfig={persona.contact}
            personaId={currentPersona}
            personaTitle={persona.title}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div>
          <span>© 2026 Krutik Tikam. Engineered with React 19 & Vite.</span>
          <div className="footer-persona-info">
            Active Recruiter Persona: <strong>{persona.title} ({persona.code})</strong>
          </div>
        </div>
        <div className="footer-social-links">
          <a href="https://github.com/krutiktikam" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/krutik-tikam-95339b286" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:krutiktikam7@gmail.com">krutiktikam7@gmail.com</a>
        </div>
      </footer>

      {/* Interactive 3-Tab Resume Viewer Modal */}
      <ResumeViewerModal 
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        initialPersona={currentPersona}
      />

      {/* Project Detail Deep-Dive Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div className="project-modal-meta-row">
                  <span className="project-badge">{selectedProject.badge}</span>
                </div>
                <h3 className="project-modal-title">{selectedProject.title}</h3>
                <p className="project-modal-tagline">{selectedProject.tagline}</p>
              </div>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>

            <div className="project-modal-grid-2">
              <div className="modal-info-box">
                <h5>THE CORE PROBLEM</h5>
                <p>{selectedProject.problem}</p>
              </div>
              <div className="modal-info-box">
                <h5>SYSTEM ARCHITECTURE</h5>
                <p>{selectedProject.architecture}</p>
              </div>
            </div>

            <div className="modal-info-box" style={{ marginBottom: '20px' }}>
              <h5>APPLIED ML & ENGINEERING APPROACH</h5>
              <p>{selectedProject.mlApproach}</p>
            </div>

            <div className="modal-info-box">
              <h5>VERIFIED PRODUCTION METRIC</h5>
              <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{selectedProject.metricText}</p>
            </div>

            <div className="modal-info-box" style={{ marginTop: '16px' }}>
              <h5>TECHNOLOGY STACK</h5>
              <div className="project-modal-tech-list">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-modal-actions">
              {selectedProject.gitUrl && (
                <a
                  href={selectedProject.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-primary"
                >
                  View Source Code on GitHub ↗
                </a>
              )}
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-secondary"
                >
                  Visit Live Web Application ↗
                </a>
              )}
              <button
                type="button"
                className="hero-btn-secondary"
                onClick={() => setSelectedProject(null)}
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terminal CLI Modal */}
      {showCliModal && (
        <div className="modal-backdrop" onClick={() => setShowCliModal(false)}>
          <div className="cli-modal-window" onClick={(e) => e.stopPropagation()}>
            <div className="cli-header">
              <div className="cli-dots">
                <span className="cli-dot red"></span>
                <span className="cli-dot yellow"></span>
                <span className="cli-dot green"></span>
              </div>
              <span className="cli-title">krutik@developer-terminal ~ [{persona.code}: {persona.shortRole}]</span>
              <button 
                type="button" 
                className="modal-close-btn"
                onClick={() => setShowCliModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="cli-body" ref={cliBodyRef}>
              {cliHistory.map((item, idx) => (
                <div key={idx} className="cli-history-entry">
                  {item.cmd !== 'welcome' && (
                    <div className="cli-cmd-line">
                      <span className="cli-prompt">➜ ~</span>
                      <span className="cli-cmd-text">{item.cmd}</span>
                    </div>
                  )}
                  <pre className="cli-response-text">{item.response}</pre>
                </div>
              ))}
            </div>

            <form onSubmit={handleCliSubmit} className="cli-input-form">
              <span className="cli-prompt">➜ ~</span>
              <input
                type="text"
                autoFocus
                placeholder="Type 'help', 'switch a', 'switch b', 'switch c', or 'resume'..."
                value={cliInput}
                onChange={(e) => setCliInput(e.target.value)}
                className="cli-input"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
