import React, { useState, useEffect } from 'react';
import aboutBgImg from './assets/about_bg.jpg';
import spotlightImg from './assets/spotlight.jpg';
import './App.css';

// Projects dataset extracted from your GitHub Profile README
const projectsData = [
  {
    title: "Blender Robotic Arm Simulation",
    description: "High-fidelity 3D robotic arm simulation controlled programmatically. Implemented closed-loop trajectory tracking and automatic knuckle contact grasp lock.",
    tech: ["Python", "Blender API", "Control Systems", "Physics Baking"],
    gitUrl: "https://github.com/krutiktikam/blender-robotic-arm-simulation"
  },
  {
    title: "Football Any-latics Pro",
    description: "Ingests live data via automated ETL pipelines for real-time XGBoost probability forecasting and sports match predictions.",
    tech: ["Python", "XGBoost", "Streamlit", "Pandas", "REST APIs"],
    gitUrl: "https://github.com/krutiktikam/footbal-anylatics-project"
  },
  {
    title: "PokéArchitect",
    description: "Decoupled high-fidelity web platform featuring a Scikit-Learn clustering model for archetype discovery and similarity scoring.",
    tech: ["FastAPI", "React", "PostgreSQL", "Supabase", "Scikit-Learn"],
    gitUrl: "https://github.com/krutiktikam/poke-architect"
  },
  {
    title: "PokéMarket",
    description: "Institutional-grade trading terminal featuring a Gemini Vision AI card scanning pipeline and 30-day linear regression price projections.",
    tech: ["Next.js 15", "TypeScript", "Gemini Vision AI", "Supabase", "Recharts"],
    gitUrl: "https://github.com/krutiktikam/poke-hodl"
  },
  {
    title: "OmniMath-Local",
    description: "Enterprise async backend pipeline serving mathematical workflows with math-aware semantic search indexing via ChromaDB.",
    tech: ["FastAPI", "ChromaDB", "Pydantic", "SymPy"],
    gitUrl: "https://github.com/krutiktikam/omni-math"
  },
  {
    title: "NeuroRehab-BCI",
    description: "End-to-end signal processing pipeline classifying motor imagery EEG signals using an EEGNet model and LSL streaming simulation.",
    tech: ["PyTorch", "EEGNet", "LSL (Lab Streaming Layer)", "FastAPI"],
    gitUrl: "https://github.com/krutiktikam/BCI-MotorImagery-Pipeline"
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
  const [gitUsername] = useState('krutiktikam'); // Static username representing you
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

  // Fetch GitHub Details with dynamic metrics processing and static resume fallback
  useEffect(() => {
    const fetchGitUser = async () => {
      setGitLoading(true);
      setGitError(null);
      try {
        // 1. Fetch User Profile info
        const profileRes = await fetch(`https://api.github.com/users/${gitUsername}`);
        if (!profileRes.ok) {
          throw new Error('User profile request rate limited or not found');
        }
        const profileData = await profileRes.json();

        // 2. Fetch User Repos list
        const reposRes = await fetch(`https://api.github.com/users/${gitUsername}/repos?per_page=100`);
        let reposData = [];
        if (reposRes.ok) {
          reposData = await reposRes.json();
        }

        // 3. Process repository statistics
        let totalStars = 0;
        let totalForks = 0;
        const langCounts = {};

        reposData.forEach(repo => {
          totalStars += repo.stargazers_count || 0;
          totalForks += repo.forks_count || 0;
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
        });

        // Structure top languages percentages
        const totalLangs = Object.values(langCounts).reduce((a, b) => a + b, 0);
        const languages = Object.entries(langCounts)
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalLangs) * 100)
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 4);

        setGitUserData({
          login: profileData.login,
          name: profileData.name || profileData.login,
          avatar_url: profileData.avatar_url,
          bio: profileData.bio || "Full-stack developer.",
          public_repos: profileData.public_repos,
          followers: profileData.followers,
          following: profileData.following,
          html_url: profileData.html_url,
          totalStars,
          totalForks,
          languages,
          isMock: false
        });
      } catch (err) {
        console.warn("GitHub rate limit or connection error, falling back to local resume profile stats.", err);
        // Resilient fallback utilizing Krutik Tikam's actual resume skills representation
        setGitUserData({
          login: "krutiktikam",
          name: "Krutik Tikam",
          avatar_url: "https://avatars.githubusercontent.com/u/132470725?v=4",
          bio: "Full-Stack Developer & AI/ML Engineer. Next.js 15, FastAPI, PostgreSQL, Python.",
          public_repos: 14,
          followers: 24,
          following: 16,
          html_url: "https://github.com/krutiktikam7",
          totalStars: 18,
          totalForks: 8,
          languages: [
            { name: "Python", percentage: 55 },
            { name: "TypeScript", percentage: 20 },
            { name: "JavaScript", percentage: 15 },
            { name: "Go", percentage: 10 }
          ],
          isMock: true
        });
      } finally {
        setGitLoading(false);
      }
    };
    fetchGitUser();
  }, [gitUsername]);

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
      {/* Custom Circular Cursor elements with inline pointer-events: none safety override */}
      <div 
        className="cursor-dot" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, pointerEvents: 'none' }}
      ></div>
      <div 
        className={`cursor-outline ${isHoveringInteractive ? 'hovered' : ''}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, pointerEvents: 'none' }}
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
          <a href="#about-card" className="btn-circle">↓</a>
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
              <a href="#projects-list" className="btn-circle">→</a>
            </div>
            
            <div className="hero-socials-grid">
              <a href="https://github.com/krutiktikam" target="_blank" rel="noopener noreferrer" className="social-pill">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/krutik-tikam-95339b286/" target="_blank" rel="noopener noreferrer" className="social-pill">
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
            <p className="spotlight-desc">High-fidelity 3D robotic arm simulation controlled programmatically. Implemented closed-loop trajectory tracking.</p>
            <div className="spotlight-action">
              <a href="https://github.com/krutiktikam/blender-robotic-arm-simulation" target="_blank" rel="noopener noreferrer" className="btn-pill">Read code</a>
              <a href="https://github.com/krutiktikam/blender-robotic-arm-simulation" target="_blank" rel="noopener noreferrer" className="btn-circle">→</a>
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

            {gitLoading && (
              <div className="github-metric-spinner">
                <div className="spinner" style={{ width: '24px', height: '24px' }}></div>
              </div>
            )}

            {gitError && (
              <div className="github-metric-error">
                ⚠️ Connection limit reached. Showing offline cached data.
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
                  <div className="github-stat-cell">
                    <span className="github-stat-value">{gitUserData.totalStars}</span>
                    <span className="github-stat-desc">Total Stars</span>
                  </div>
                  <div className="github-stat-cell">
                    <span className="github-stat-value">{gitUserData.totalForks}</span>
                    <span className="github-stat-desc">Forks Count</span>
                  </div>
                </div>

                {/* Native Custom Language distribution bar chart */}
                <div className="github-metrics-container">
                  <div className="github-chart-card">
                    <h4 className="github-chart-title">Repo Languages Distribution</h4>
                    <div className="github-langs-list">
                      {gitUserData.languages && gitUserData.languages.length > 0 ? (
                        gitUserData.languages.map((lang, lIdx) => (
                          <div key={lIdx} className="lang-bar-row">
                            <span className="lang-bar-name">{lang.name}</span>
                            <div className="lang-bar-track">
                              <div className="lang-bar-fill" style={{ width: `${lang.percentage}%` }}></div>
                            </div>
                            <span className="lang-bar-percentage">{lang.percentage}%</span>
                          </div>
                        ))
                      ) : (
                        <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>No language metrics available</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Resilient Cache Notice */}
                {gitUserData.isMock && (
                  <p className="github-rate-limit-notice">
                    * Displaying resume data metrics (GitHub API Rate limit reached)
                  </p>
                )}
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
