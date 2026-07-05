import React, { useState, useEffect } from 'react';
import aboutBgImg from './assets/about_bg.jpg';
import spotlightImg from './assets/spotlight.jpg';
import './App.css';

// Projects dataset extracted from your PDF Resume
const projectsData = [
  {
    title: "Blender Robotic Arm Simulation",
    description: "Engineered a 3D robotic arm waypoint trajectory tracking environment in Blender using closed-loop proportional (P-control) feedback and trained Stable-Baselines3 PPO reinforcement learning agents.",
    tech: ["Python", "OpenAI Gymnasium", "Stable-Baselines3", "Blender API"],
    gitUrl: "https://github.com/google/blender_mcp"
  },
  {
    title: "Football Any-latics Pro",
    description: "Designed a sports ETL pipeline that ingests live match fixtures into relational databases, training XGBoost models to compute match win probabilities and visualizing real-time projections via Streamlit.",
    tech: ["Python", "XGBoost", "Streamlit", "Pandas", "REST APIs"],
    gitUrl: "https://github.com/google/footbal_anylatics_project"
  },
  {
    title: "PokéArchitect Analytics Platform",
    description: "A decoupled React/Vite and FastAPI platform using K-Means Clustering for data discovery and Cosine Similarity for real-time recommendations, mapped with dynamic Recharts (D3) dashboards.",
    tech: ["React", "FastAPI", "PostgreSQL", "Scikit-Learn", "Recharts"],
    gitUrl: "https://github.com/google/poke-architect"
  },
  {
    title: "OmniMath-Local Vector RAG",
    description: "An async backend calculation framework serving custom validation logic and semantic vector search using ChromaDB for structured text chunking and indexing in a local RAG pipeline.",
    tech: ["FastAPI", "ChromaDB", "Pydantic", "SymPy", "Docker"],
    gitUrl: "https://github.com/google/omnimath-backend"
  }
];

// Experience timeline details from your resume
const experienceData = [
  { 
    year: "Dec 2025 - Feb 2026", 
    company: "Talent Corner HR Services Pvt. Ltd.", 
    role: "Full-Stack Developer Intern", 
    duration: "3 months",
    details: "Developed responsive FastAPI and JS applications, optimizing database schemas in PostgreSQL to reduce applicant search latencies." 
  },
  { 
    year: "2023 - 2026", 
    company: "Nagandas Khandwala College", 
    role: "B.Sc. Computer Science (AI & ML Specialization)", 
    duration: "Degree (CGPA: 7.5)",
    details: "Focus: Data Structures, Neural Networks, Database Systems, Distributed Web Architecture." 
  }
];

// Certifications from your resume
const certificationsData = [
  { category: "Cloud & Generative AI", items: ["AWS: Data Engineering for Generative AI Applications", "AWS: Connecting Systems & Machines for Manufacturing", "Microsoft Azure Cloud Computing SDP"] },
  { category: "ML & Data Science", items: ["DeepLearning.AI Machine Learning Specialization", "TensorFlow Developer Professional Certificate"] },
  { category: "Web Development", items: ["Meta Front-End Developer Professional Certificate", "Responsive Web Design (freeCodeCamp)"] }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [gitUsername, setGitUsername] = useState('google'); // Default username to fetch stats
  const [tempUsername, setTempUsername] = useState('google');
  const [gitUserData, setGitUserData] = useState(null);
  const [gitLoading, setGitLoading] = useState(false);
  const [gitError, setGitError] = useState(null);
  
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  // Mouse move and hover trackers
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a') || 
                            target.closest('button') || 
                            target.closest('.behance-card') || 
                            target.closest('.btn-pill') || 
                            target.closest('.btn-circle') || 
                            target.closest('.social-pill') ||
                            target.closest('input') ||
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

  // Active navigation scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['landing', 'about-card', 'projects-list', 'git-metrics-card', 'contacts-card'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section === 'landing' ? 'home' : section);
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
      {/* Custom Circular Cursor elements */}
      <div 
        className="cursor-dot" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>
      <div 
        className={`cursor-outline ${isHoveringInteractive ? 'hovered' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>

      {/* Top Header Navigation */}
      <header className="site-header">
        <div className="header-container">
          <span className="logo" id="site-logo">Krutik Tikam</span>
          <ul className="header-nav" id="nav-menu">
            <li>
              <a 
                href="#landing" 
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

      {/* New Landing Screen Section */}
      <section className="landing-screen" id="landing">
        <h1 className="landing-title">Krutik Tikam</h1>
        <span className="landing-subtitle">Full-Stack Developer & AI/ML Engineer</span>
        
        <p className="landing-tagline">
          Analytical developer building scalable web architectures, optimized backend routing, and predictive signal processing pipelines using Next.js 15, FastAPI, PostgreSQL, and Python.
        </p>
        
        <div className="landing-action">
          <a href="#about-card" className="btn-pill" id="btn-landing-enter">Explore Portfolio</a>
          <span className="btn-circle">↓</span>
        </div>
        
        <span className="scroll-indicator">scroll down</span>
      </section>

      {/* Main Content Grid */}
      <div className="portfolio-layout">
        {/* ==========================================
            COLUMN 1: Intro, Spotlight & About
            ========================================== */}
        <div className="portfolio-column">
          {/* Profile Card */}
          <div className="behance-card" id="profile-card">
            <div className="hero-header">
              <span className="logo">Overview</span>
              <div className="hero-hamburger">
                <span></span>
                <span></span>
              </div>
            </div>
            
            <h1 className="hero-main-title">
              <span>Full-Stack</span>
              <span className="underlined">Engineer</span>
            </h1>
            
            <p className="hero-bio">
              Experienced in developing decoupled async REST APIs, real-time analytics dashboards, and automated ETL workflows to deploy high-performance, user-centric systems.
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
              <a href="mailto:krutiktikam7@gmail.com" className="social-pill">
                E-mail
              </a>
              <a href="tel:+919284236446" className="social-pill">
                Phone
              </a>
            </div>
          </div>

          {/* Spotlight Highlight Card */}
          <div className="behance-card spotlight-card" style={{ backgroundImage: `linear-gradient(rgba(13,13,16,0.85), rgba(13,13,16,0.95)), url(${spotlightImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <span className="section-label">spotlight project</span>
            <h2 className="spotlight-title">Blender Robotic Arm Simulation</h2>
            <p className="spotlight-desc">Engineered a 3D robotic arm environment in Blender utilizing closed-loop trajectory tracking and PPO training.</p>
            <div className="spotlight-action">
              <a href="https://github.com/google/blender_mcp" target="_blank" rel="noopener noreferrer" className="btn-pill">Read code</a>
              <span className="btn-circle">→</span>
            </div>
          </div>

          {/* About Me & Tech Stack */}
          <div className="behance-card" id="about-card">
            <span className="section-label">/About me ...</span>
            <p className="about-desc">
              B.Sc. Computer Science student specializing in Artificial Intelligence and Machine Learning. Passionate about solving complex architectural scaling and predictive data pipeline challenges.
            </p>
            
            <div className="about-portrait-container" id="about-visual-asset">
              <img src={aboutBgImg} alt="BCI Neural Network Abstract Art" className="about-portrait" />
            </div>
            
            <div className="skills-stack-list">
              <div className="skill-category-block">
                <h4 className="skill-cat-title">Frontend</h4>
                <p className="skill-cat-content">React / Next.js 15 (App Router) / TypeScript / JavaScript / Tailwind CSS / Recharts (D3.js) / Framer Motion</p>
              </div>
              <div className="skill-category-block">
                <h4 className="skill-cat-title">Backend & Databases</h4>
                <p className="skill-cat-content">FastAPI (Async) / Node.js / Python / PostgreSQL (Supabase) / SQL Alchemy / SQLite / RESTful APIs</p>
              </div>
              <div className="skill-category-block">
                <h4 className="skill-cat-title">Data Analytics & ML</h4>
                <p className="skill-cat-content">Pandas / NumPy / Scikit-Learn (K-Means, Cosine Similarity) / XGBoost / ETL Pipelines / ChromaDB / Data Visualizations</p>
              </div>
              <div className="skill-category-block">
                <h4 className="skill-cat-title">DevOps & Tools</h4>
                <p className="skill-cat-content">Git / GitHub / Docker / Vercel / Render / Postman / Lab Streaming Layer (LSL) / Blender API</p>
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
            <span className="section-label" style={{ textAlign: 'right', display: 'block' }}>Experience & Education</span>
            
            <div className="work-timeline">
              {experienceData.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-details">
                    <span className="timeline-company">{item.company}</span>
                    <span className="timeline-role">{item.role}</span>
                    <span className="timeline-duration">{item.duration}</span>
                    <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="behance-card" id="certifications-card">
            <span className="section-label">Certifications</span>
            <div className="skills-stack-list" style={{ marginTop: '8px' }}>
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="skill-category-block">
                  <h4 className="skill-cat-title">{cert.category}</h4>
                  <ul style={{ listStyle: 'none', fontSize: '13px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '6px' }}>
                    {cert.items.map((item, iIdx) => (
                      <li key={iIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
          {/* Git Metrics */}
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

                {/* Readme Stats SVGs */}
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
              <a href="#landing">Main</a>
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
              <span className="contacts-last-name">Krutik Tikam</span>
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
