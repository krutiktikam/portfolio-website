import React, { useState, useEffect } from 'react';
import ProjectGrid from './components/ProjectGrid';
import GitMetrics from './components/GitMetrics';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'metrics', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Header Nav */}
      <header>
        <div className="container">
          <nav>
            <div className="logo" id="site-logo">Krutik.dev</div>
            <ul id="nav-menu">
              <li>
                <a 
                  href="#home" 
                  className={activeSection === 'home' ? 'active' : ''}
                  id="nav-link-home"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={activeSection === 'projects' ? 'active' : ''}
                  id="nav-link-projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#metrics" 
                  className={activeSection === 'metrics' ? 'active' : ''}
                  id="nav-link-metrics"
                >
                  Git Metrics
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === 'contact' ? 'active' : ''}
                  id="nav-link-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-content glass-panel" id="hero-card">
            <div className="hero-badge" id="hero-badge-status">
              <span>🚀 Open to New Opportunities</span>
            </div>
            
            <h1 className="hero-title" id="hero-main-title">
              Hi, I'm <span className="text-glow">Krutik</span>
            </h1>
            
            <p className="hero-subtitle" id="hero-sub-title">
              Brain-Computer Interface Engineer & Full-Stack AI Developer
            </p>
            
            <p className="hero-description" id="hero-intro-text">
              I build advanced software systems merging neural engineering pipelines (BCI) with full-stack agentic AI integrations. Specializing in Python signal processing, Go backend services, and interactive web tools.
            </p>
            
            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary" id="btn-hero-projects">
                View My Projects
              </a>
              <a href="#contact" className="btn btn-secondary" id="btn-hero-contact">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <ProjectGrid />

      {/* Git Metrics */}
      <GitMetrics />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <p className="footer-copyright" id="footer-text">
              © {new Date().getFullYear()} Krutik. All Rights Reserved. Built with React & Vite.
            </p>
            <div className="footer-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" id="footer-link-github">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id="footer-link-linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
