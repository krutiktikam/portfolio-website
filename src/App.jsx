import React, { useState, useEffect } from 'react';
import aboutBgImg from './assets/about_bg.jpg';
import spotlightImg from './assets/spotlight.jpg';
import './App.css';

// Pre-loaded projects corresponding to your workspace folders
const projectsData = [
  {
    title: "BCI EEG Motor Imagery Classifier",
    description: "Signal processing and machine learning pipeline to classify motor imagery tasks from EEG datasets.",
    tech: ["Python", "MNE", "Scikit-Learn", "SciPy"],
    gitUrl: "https://github.com/google/BCI_MI_pjt"
  },
  {
    title: "Poke-Stocks Trading Simulation",
    description: "An algorithmic trading platform simulating stock markets with automated trading strategies.",
    tech: ["React", "Node.js", "Express", "Chart.js"],
    gitUrl: "https://github.com/google/Poke-stocks"
  },
  {
    title: "Poke-Architect Builder",
    description: "A system builder and architectural simulation framework exploring complex systems design.",
    tech: ["Python", "Simulation", "Software Architecture"],
    gitUrl: "https://github.com/google/poke-architect"
  },
  {
    title: "Football Data Analytics Engine",
    description: "A sports analytics dashboard running statistical models and visualizing player metrics.",
    tech: ["Python", "Pandas", "Matplotlib", "BeautifulSoup"],
    gitUrl: "https://github.com/google/footbal_anylatics_project"
  },
  {
    title: "Blender MCP Tool Integration",
    description: "Model Context Protocol (MCP) server connecting LLMs to Blender 3D modeling scripts.",
    tech: ["Python", "Blender API", "MCP API", "LLMs"],
    gitUrl: "https://github.com/google/blender_mcp"
  },
  {
    title: "Omnimath Backend API",
    description: "High-performance backend mathematical computation engine and REST API.",
    tech: ["Go", "Docker", "REST API", "Testing"],
    gitUrl: "https://github.com/google/omnimath-backend"
  }
];

// Experience timeline details
const experienceData = [
  { year: "2024 -", company: "Neural Engineering Lab", role: "BCI Research Associate", duration: "1 year 2 months" },
  { year: "2023 - 2024", company: "AI Solutions Lab", role: "AI Tool Integrator", duration: "10 months" },
  { year: "2021 - 2023", company: "Fullstack Agency", role: "Software Engineer", duration: "1 year 11 months" },
  { year: "2020 - 2021", company: "Tech Solutions", role: "Junior Python Dev", duration: "9 months" }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [gitUsername, setGitUsername] = useState('google'); // Default username
  const [tempUsername, setTempUsername] = useState('google');
  const [gitUserData, setGitUserData] = useState(null);
  const [gitLoading, setGitLoading] = useState(false);
  const [gitError, setGitError] = useState(null);
  
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Active navigation scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about-card', 'projects-list', 'git-metrics-card', 'contacts-card'];
      const scrollPosition = window.scrollY + 250;

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

  // Fetch GitHub Details
  useEffect(() => {
    if (!gitUsername) return;
    const fetchGitUser = async () => {
      setGitLoading(true);
      setGitError(null);
      try {
        const res = await fetch(`https://api.github.com/users/${gitUsername}`);
        if (!res.ok) throw new Error('User not found or rate limited');
        const data = await res.json();
        setGitUserData(data);
      } catch (err) {
        setGitError(err.message);
        setGitUserData(null);
      } finally {
        setGitLoading(false);
      }
    };
    fetchGitUser();
  }, [gitUsername]);

  const handleGitSubmit = (e) => {
    e.preventDefault();
    if (tempUsername.trim()) setGitUsername(tempUsername.trim());
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setContactSubmitted(true);
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setContactSubmitted(false), 4000);
    }
  };

  return (
    <>
      {/* Top Header Navigation */}
      <header className="site-header" id="home">
        <div className="header-container">
          <span className="logo" id="site-logo">krutik.dev</span>
          <ul className="header-nav" id="nav-menu">
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                id="nav-link-home"
              >
                home
              </a>
            </li>
            <li>
              <a 
                href="#about-card" 
                className={activeSection === 'about-card' ? 'active' : ''}
                id="nav-link-about"
              >
                about
              </a>
            </li>
            <li>
              <a 
                href="#projects-list" 
                className={activeSection === 'projects-list' ? 'active' : ''}
                id="nav-link-projects"
              >
                projects
              </a>
            </li>
            <li>
              <a 
                href="#git-metrics-card" 
                className={activeSection === 'git-metrics-card' ? 'active' : ''}
                id="nav-link-metrics"
              >
                git metrics
              </a>
            </li>
            <li>
              <a 
                href="#contacts-card" 
                className={activeSection === 'contacts-card' ? 'active' : ''}
                id="nav-link-contact"
              >
                contact
              </a>
            </li>
          </ul>
          <a href="/resume.pdf" download className="btn-pill header-resume-btn" id="btn-header-resume">
            resume
          </a>
        </div>
      </header>

      <div className="portfolio-layout">
        {/* ==========================================
            COLUMN 1: Intro, Spotlight & About
            ========================================== */}
        <div className="portfolio-column">
          {/* Profile/Hero Card */}
          <div className="behance-card" id="profile-card">
            <div className="hero-header">
              <span className="logo">developer</span>
              <div className="hero-hamburger">
                <span></span>
                <span></span>
              </div>
            </div>
            
            <h1 className="hero-main-title">
              <span>Full-stack</span>
              <span className="underlined">Developer</span>
            </h1>
            
            <p className="hero-bio">
              My goal is to design clean, high-performance, and maintainable software systems that bridge neural engineering pipelines with production-ready AI tools.
            </p>
            
            <div className="hero-action">
              <a href="#projects-list" className="btn-pill">projects</a>
              <span className="btn-circle">→</span>
            </div>
            
            <div className="hero-socials-grid">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-pill">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-pill">
                LinkedIn
              </a>
              <a href="mailto:your_email@example.com" className="social-pill">
                E-mail
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-pill">
                Telegram
              </a>
            </div>
          </div>

          {/* Spotlight Highlight Card */}
          <div className="behance-card spotlight-card" style={{ backgroundImage: `linear-gradient(rgba(13,13,16,0.85), rgba(13,13,16,0.95)), url(${spotlightImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <span className="section-label">spotlight project</span>
            <h2 className="spotlight-title">BCI EEG Motor Imagery Classifier</h2>
            <p className="spotlight-desc">Applying Scikit-Learn pipelines to classify motor imagery tasks from real-time brainwave streams.</p>
            <div className="spotlight-action">
              <a href="https://github.com/google/BCI_MI_pjt" target="_blank" rel="noopener noreferrer" className="btn-pill">Read code</a>
              <span className="btn-circle">→</span>
            </div>
          </div>

          {/* About Me & Tech Stack */}
          <div className="behance-card" id="about-card">
            <span className="section-label">/About me ...</span>
            <p className="about-desc">
              Hello! I'm Krutik. I design full-stack systems and BCI signal processing pipelines, leveraging modern AI architectures to automate developer workflows.
            </p>
            
            <div className="about-portrait-container" id="about-visual-asset">
              <img src={aboutBgImg} alt="BCI Neural Network Abstract Art" className="about-portrait" />
            </div>
            
            <div className="skills-stack-list">
              <div className="skill-category-block">
                <h4 className="skill-cat-title">AI & Signal Processing</h4>
                <p className="skill-cat-content">Python / MNE / EEG processing / Scikit-Learn / SciPy</p>
              </div>
              <div className="skill-category-block">
                <h4 className="skill-cat-title">Back-end Systems</h4>
                <p className="skill-cat-content">Go / Node.js / Express / Docker / REST APIs / MCP APIs</p>
              </div>
              <div className="skill-category-block">
                <h4 className="skill-cat-title">Front-end & Styles</h4>
                <p className="skill-cat-content">React / JavaScript / HTML5 / CSS3 / Vanilla CSS / Responsive Layouts</p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            COLUMN 2: Experience & Projects Catalog
            ========================================== */}
        <div className="portfolio-column">
          {/* Work experience */}
          <div className="behance-card" id="work-card">
            <span className="section-label" style={{ textAlign: 'right', display: 'block' }}>Work</span>
            
            <div className="work-timeline">
              {experienceData.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-details">
                    <span className="timeline-company">{item.company}</span>
                    <span className="timeline-role">{item.role}</span>
                    <span className="timeline-duration">{item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="work-experience-summary">
              Work experience: 4 years 8 months
            </div>
          </div>

          {/* Projects List Catalog */}
          <div id="projects-list">
            <h2 className="section-label" style={{ paddingLeft: '20px' }}>... /Projects ...</h2>
            
            {projectsData.map((project, idx) => {
              const elementId = project.title.toLowerCase().replace(/\s+/g, '-');
              return (
                <div key={idx} className="behance-card" id={`project-card-${elementId}`}>
                  <h3 className="project-card-title">{project.title}</h3>
                  
                  <div className="project-card-tags">
                    {project.tech.map((tag, tIdx) => (
                      <span key={tIdx} className="project-card-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <p className="project-card-desc">{project.description}</p>
                  
                  <div className="project-card-actions">
                    <div className="project-card-action-links">
                      <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">github</a>
                    </div>
                    <a href={project.gitUrl} target="_blank" rel="noopener noreferrer" className="btn-circle">↗</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            COLUMN 3: Git Metrics & Contacts Footer
            ========================================== */}
        <div className="portfolio-column">
          {/* Git Metrics (replacing Articles column) */}
          <div className="behance-card" id="git-metrics-card">
            <span className="section-label">Live Git Monitor</span>
            
            {/* User selector input */}
            <form onSubmit={handleGitSubmit} className="github-metric-search">
              <input 
                type="text" 
                value={tempUsername} 
                onChange={(e) => setTempUsername(e.target.value)}
                placeholder="Enter GitHub username..." 
                className="github-metric-search-input"
              />
              <button type="submit" className="btn-pill" style={{ padding: '8px 16px' }}>Fetch</button>
            </form>

            {gitLoading && (
              <div className="github-metric-spinner">
                <div className="spinner" style={{ width: '24px', height: '24px' }}></div>
              </div>
            )}

            {gitError && (
              <div className="github-metric-error">
                ⚠️ User not found or rate limited.
              </div>
            )}

            {gitUserData && !gitLoading && (
              <div>
                {/* Profile Block */}
                <div className="github-profile-block">
                  <img src={gitUserData.avatar_url} alt="GitHub avatar" className="github-profile-avatar" />
                  <div className="github-profile-info">
                    <span className="github-profile-name">{gitUserData.name || gitUsername}</span>
                    <a href={gitUserData.html_url} target="_blank" rel="noopener noreferrer" className="github-profile-login">
                      @{gitUserData.login}
                    </a>
                  </div>
                </div>
                
                {gitUserData.bio && <p className="github-profile-bio">{gitUserData.bio}</p>}

                {/* Stats Counters */}
                <div className="github-stats-row">
                  <div className="github-stat-cell">
                    <span className="github-stat-value">{gitUserData.public_repos}</span>
                    <span className="github-stat-desc">Repositories</span>
                  </div>
                  <div className="github-stat-cell">
                    <span className="github-stat-value">{gitUserData.followers}</span>
                    <span className="github-stat-desc">Followers</span>
                  </div>
                </div>

                {/* Readme Stats SVGs styled to fit Column 3 */}
                <div className="github-stats-image-container">
                  <img 
                    src={`https://github-readme-stats.vercel.app/api?username=${gitUsername}&show_icons=true&bg_color=0e121a&title_color=ffffff&icon_color=ffffff&text_color=9a9a9f&border_color=rgba(255,255,255,0.06)&hide_border=false`}
                    alt="GitHub stats" 
                    className="github-stats-image" 
                  />
                </div>

                <div className="github-stats-image-container">
                  <img 
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${gitUsername}&layout=compact&bg_color=0e121a&title_color=ffffff&text_color=9a9a9f&border_color=rgba(255,255,255,0.06)&hide_border=false`}
                    alt="GitHub top languages" 
                    className="github-stats-image" 
                  />
                </div>

                <div className="github-stats-image-container">
                  <img 
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${gitUsername}&theme=tokyonight&background=0e121a&ring=ffffff&fire=ffffff&sideNums=9a9a9f&sideLabels=9a9a9f&dates=4e4e52&stroke=rgba(255,255,255,0.06)&hide_border=false`}
                    alt="GitHub streak" 
                    className="github-stats-image" 
                  />
                </div>
              </div>
            )}
          </div>

          {/* Contacts footer */}
          <div className="behance-card" id="contacts-card">
            <span className="section-label">... /Contacts ...</span>
            
            <div className="contacts-nav-links">
              <a href="#home">Main</a>
              <a href="#about-card">About</a>
              <a href="#projects-list">Projects</a>
              <a href="#git-metrics-card">Metrics</a>
            </div>
            
            <p className="contacts-attribution">
              Site Handcrafted by ME /<br />
              Inspired by Behance /<br />
              Powered by React & Vite
            </p>
            
            <div className="contacts-author-title">
              <span className="contacts-first-name">Developer</span>
              <span className="contacts-last-name">Krutik</span>
            </div>

            {/* Clean minimal message form */}
            <form onSubmit={handleContactSubmit} className="contacts-grid">
              <div className="contact-form-group">
                <label htmlFor="contacts-name">Name</label>
                <input 
                  type="text" 
                  id="contacts-name" 
                  value={contactForm.name} 
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required 
                  placeholder="Recruiter Name" 
                  className="contact-form-input" 
                />
              </div>
              
              <div className="contact-form-group">
                <label htmlFor="contacts-email">E-mail</label>
                <input 
                  type="email" 
                  id="contacts-email" 
                  value={contactForm.email} 
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required 
                  placeholder="recruiter@company.com" 
                  className="contact-form-input" 
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contacts-message">Message</label>
                <textarea 
                  id="contacts-message" 
                  value={contactForm.message} 
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required 
                  rows="4" 
                  placeholder="Write your message here..." 
                  className="contact-form-input contact-form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn-pill contact-form-submit">
                Send Message
              </button>

              {contactSubmitted && (
                <div className="contact-success">
                  ✓ Message sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
