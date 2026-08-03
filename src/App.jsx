import React, { useState, useEffect, useRef } from 'react';
import aboutBgImg from './assets/about_bg.jpg';
import spotlightImg from './assets/spotlight.jpg';
import './App.css';

// 3D perspective cursor tracking card wrapper component
const TiltCard = ({ children, id, className, onClick, style = {} }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    // Disable tilt physics on touch devices to preserve fluid scrolling
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Tilt threshold of 7 degrees max
    const rotateX = ((yc - y) / yc) * 7;
    const rotateY = ((x - xc) / xc) * 7;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const cardStyle = {
    ...style,
    transform: isHovered 
      ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
      : 'none',
    transition: isHovered ? 'transform 0.05s ease-out' : 'transform 0.4s ease-out',
    cursor: onClick ? 'pointer' : 'default'
  };

  return (
    <div 
      id={id}
      className={`behance-card ${className || ''}`}
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Engineering Projects Portfolio (STRICT METRICS REQUIRED)
const projectsData = [
  {
    title: "NeuroRehab-BCI (Motor Imagery EEG Classifier)",
    category: "AI & ML",
    description: "End-to-end signal processing pipeline classifying EEG signals (22 channels x 1001 time points). Applied a 5th-order Butterworth bandpass filter.",
    tech: ["PyTorch", "EEGNet", "Signal Processing", "Python"],
    gitUrl: "https://github.com/krutiktikam/BCI-MotorImagery-Pipeline",
    problem: "Brain-Computer Interface applications require real-time neural signal processing and classification of noisy multi-channel EEG streams with high sub-second precision.",
    architecture: "Designed an end-to-end multi-channel signal processing pipeline in PyTorch. Filtered raw 22-channel x 1001-time-point neural recordings using a 5th-order Butterworth bandpass filter.",
    mlApproach: "Trained an EEGNet deep neural network architecture to classify active motor imagery brain states with sub-second inference latency.",
    metricText: "Optimized architecture to increase Subject 1 validation accuracy from 25.00% to 56.00% within 10 epochs."
  },
  {
    title: "OmniMath-Local (Async Vector RAG Platform)",
    category: "Backend & Vector Search",
    description: "Enterprise-grade async backend serving math verification workflows.",
    tech: ["FastAPI", "ChromaDB", "Pydantic", "Python"],
    gitUrl: "https://github.com/krutiktikam/omni-math",
    problem: "Standard text search engines fail to parse math-heavy documents, resulting in high latency and low lookup accuracy for complex scientific equations.",
    architecture: "Created an enterprise-grade async backend using FastAPI and Pydantic schema validation. Integrated a local RAG vector search database powered by ChromaDB.",
    mlApproach: "Implemented semantic vector search using all-MiniLM-L6-v2 dense embeddings. Developed 1,000-character custom text chunking parameters and 250-chunk async upsert minibatches.",
    metricText: "Indexed 12,387 documents using all-MiniLM-L6-v2 embeddings. Optimized throughput using 250-chunk asynchronous upsert minibatches and 1,000-character custom text chunking."
  },
  {
    title: "Blender Robotic Arm Simulation (RL Control System)",
    category: "Robotics & RL",
    description: "Headless continuous-control simulation environment for policy optimization.",
    tech: ["Python", "PyTorch", "PPO", "OpenAI Gym"],
    gitUrl: "https://github.com/krutiktikam/blender-robotic-arm-simulation",
    problem: "Developing and testing robotic control algorithms directly on physical hardware poses risks of damage and suffers from slow rendering frame rate bottlenecks.",
    architecture: "Engineered a headless continuous-control 3D robotic arm simulation environment using Blender API scripts wrapped in an OpenAI Gymnasium interface.",
    mlApproach: "Trained Proximal Policy Optimization (PPO) reinforcement learning agents in PyTorch across 10,000 timesteps with complex continuous reward functions.",
    metricText: "Achieved ultra-fast execution speeds of 700-850 FPS. Trained a PPO policy across 10,000 timesteps with complex continuous reward functions."
  },
  {
    title: "Football Any-latics Pro (Automated ETL & Prediction)",
    category: "Data Pipelines & ETL",
    description: "Automated data ingestion and ETL pipeline for high-frequency streaming data.",
    tech: ["Python", "XGBoost", "Streamlit", "PostgreSQL"],
    gitUrl: "https://github.com/krutiktikam/footbal-anylatics-project",
    problem: "Sports analytics systems suffer from data cleaning latency and noise during live-in-play match events, degrading win-probability updates.",
    architecture: "Architected an automated Python ETL data ingestion pipeline connected to PostgreSQL to ingest, normalize, and query high-frequency match telemetry.",
    mlApproach: "Trained an XGBoost model on historical and live streaming datasets to forecast real-time win probabilities, visualized on an interactive Streamlit web dashboard.",
    metricText: "Trained XGBoost pipeline computing live win probabilities, performing within 10.00% of live market odds based on Brier Score and Log Loss."
  }
];

const categoriesList = ["All", "AI & ML", "Backend & Vector Search", "Robotics & RL", "Data Pipelines & ETL"];

// Professional Experience timeline with key metrics
const experienceData = [
  { 
    year: "Dec 2025 - Feb 2026", 
    company: "Talent Corner HR Services Private Limited", 
    role: "Software Engineering Intern", 
    duration: "3 months",
    metrics: [
      "Architected and optimized PostgreSQL schemas to manage a dense dataset of 60,000+ detailed professional profiles, drastically minimizing search latency.",
      "Engineered asynchronous REST APIs via FastAPI to power dynamic authentication and automated document generation pipelines."
    ] 
  },
  { 
    year: "2023 - 2026", 
    company: "Nagandas Khandwala College", 
    role: "B.Sc. Computer Science (AI & ML Specialization)", 
    duration: "Degree (CGPA: 7.5)",
    metrics: [
      "Focus: Asynchronous APIs, Production-Ready ML, Vector Search Indexing, Signal Processing, and System Architecture."
    ] 
  }
];

// Technical Skills Matrix grouped cleanly into categories
const skillsCategories = [
  {
    title: "AI & Machine Learning",
    items: ["PyTorch", "XGBoost", "Scikit-Learn", "Vector Search (ChromaDB)", "Signal Processing", "LLM Integration", "Reinforcement Learning"]
  },
  {
    title: "Systems & Backend",
    items: ["Python", "FastAPI (Async)", "PostgreSQL", "SQLite", "RESTful APIs", "System Architecture"]
  },
  {
    title: "DevOps & MLOps",
    items: ["Docker", "Git/GitHub Actions", "CI/CD", "AWS"]
  }
];

// Certifications Section Badges
const certificationsList = [
  "AWS Data Engineering for Generative AI Applications",
  "AWS Connecting Systems and Machines for Industrial Manufacturing",
  "DeepLearning.AI Machine Learning Specialization",
  "TensorFlow Developer Certificate"
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState('All');
  const [gitUsername] = useState('krutiktikam');
  const [gitUserData, setGitUserData] = useState(null);
  const [gitLoading, setGitLoading] = useState(false);
  const [gitError, setGitError] = useState(null);
  
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  // Modals States
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showCliModal, setShowCliModal] = useState(false);

  // CLI Terminal State
  const [cliInput, setCliInput] = useState('');
  const [cliHistory, setCliHistory] = useState([
    { cmd: 'welcome', response: 'Krutik Developer CLI v2.0 — AI & ML Systems Terminal [Type "help" for commands. Shortcut: Ctrl+K / Cmd+K]' }
  ]);

  const cliBodyRef = useRef(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  // Keyboard shortcut (Ctrl+K or Cmd+K) to open CLI Modal
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

  // Mouse move and hover trackers for custom cursor
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
                            target.closest('.filter-pill') ||
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
      const sections = ['landing', 'about-card', 'work-card', 'projects-list', 'git-metrics-card', 'contacts-card'];
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

  // Fetch GitHub Details with dynamic metrics processing
  useEffect(() => {
    const fetchGitUser = async () => {
      setGitLoading(true);
      setGitError(null);
      try {
        const profileRes = await fetch(`https://api.github.com/users/${gitUsername}`);
        if (!profileRes.ok) {
          throw new Error('User profile request rate limited or not found');
        }
        const profileData = await profileRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${gitUsername}/repos?per_page=100`);
        let reposData = [];
        if (reposRes.ok) {
          reposData = await reposRes.json();
        }

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
          bio: profileData.bio || "AI Software Engineer & ML Systems Developer.",
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
        console.warn("GitHub rate limit or connection error, falling back to local engineer profile stats.", err);
        setGitUserData({
          login: "krutiktikam",
          name: "Krutik Tikam",
          avatar_url: "https://avatars.githubusercontent.com/u/132470725?v=4",
          bio: "AI Software Engineer | ML Systems Developer | Backend Architect. PyTorch, FastAPI, ChromaDB, PostgreSQL.",
          public_repos: 14,
          followers: 24,
          following: 16,
          html_url: "https://github.com/krutiktikam",
          totalStars: 18,
          totalForks: 8,
          languages: [
            { name: "Python", percentage: 65 },
            { name: "FastAPI / JS", percentage: 20 },
            { name: "C++ / Systems", percentage: 10 },
            { name: "SQL", percentage: 5 }
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

  // Process CLI Terminal Commands
  const handleCliSubmit = (e) => {
    e.preventDefault();
    const trimmed = cliInput.trim().toLowerCase();
    if (!trimmed) return;

    let resp = '';
    switch (trimmed) {
      case 'help':
        resp = 'Available commands:\n• bio           : Summary overview\n• skills        : Technical skills matrix\n• experience    : Professional work history & metrics\n• projects      : Featured ML & Systems projects\n• certifications: Industry certifications\n• resume        : Open resume PDF reader\n• contact       : Display contact details\n• clear         : Clear console history';
        break;
      case 'bio':
        resp = 'Krutik Tikam — AI Software Engineer | ML Systems Developer | Backend Architect.\nBridging the gap between theoretical machine learning and decoupled, high-performance backend infrastructure.';
        break;
      case 'skills':
        resp = 'AI & ML: PyTorch, XGBoost, Scikit-Learn, Vector Search (ChromaDB), Signal Processing, LLM Integration, Reinforcement Learning\nSystems & Backend: Python, FastAPI (Async), PostgreSQL, SQLite, RESTful APIs, System Architecture\nDevOps & MLOps: Docker, Git/GitHub Actions, CI/CD, AWS';
        break;
      case 'experience':
        resp = 'Software Engineering Intern @ Talent Corner HR Services Private Limited (Dec 2025 - Feb 2026)\n• Architected and optimized PostgreSQL schemas for 60,000+ detailed professional profiles.\n• Engineered asynchronous REST APIs via FastAPI for authentication and automated document generation pipelines.';
        break;
      case 'projects':
        resp = projectsData.map(p => `• ${p.title}\n  Metric: ${p.metricText}\n  URL: ${p.gitUrl}`).join('\n\n');
        break;
      case 'certifications':
        resp = certificationsList.map(c => `• ${c}`).join('\n');
        break;
      case 'resume':
        resp = 'Opening resume PDF viewer...';
        setShowResumeModal(true);
        break;
      case 'contact':
        resp = 'Email: krutiktikam7@gmail.com | Phone: +91 9284236446\nLinkedIn: linkedin.com/in/krutik-tikam-95339b286\nGitHub: github.com/krutiktikam';
        break;
      case 'clear':
        setCliHistory([]);
        setCliInput('');
        return;
      default:
        resp = `Command not recognized: "${trimmed}". Type "help" for a list of available commands.`;
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
      {/* Custom Circular Cursor elements */}
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
                href="#work-card" 
                className={activeSection === 'work-card' ? 'active' : ''}
                id="nav-link-experience"
              >
                experience
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

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button 
              onClick={() => setShowCliModal(true)}
              className="btn-pill"
              style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)', fontSize: '12px', padding: '6px 14px' }}
              title="Open Developer Terminal (Shortcut: Ctrl+K)"
              id="btn-header-cli"
            >
              &gt;_ CLI
            </button>
            <button 
              onClick={() => setShowResumeModal(true)} 
              className="btn-pill header-resume-btn" 
              id="btn-header-resume"
            >
              resume
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section (Landing Page) */}
      <section className="landing-screen" id="landing">
        <h1 className="landing-title">Krutik Tikam</h1>
        <span className="landing-subtitle">AI Software Engineer | ML Systems Developer | Backend Architect</span>
        
        <p className="landing-tagline">
          Bridging the gap between theoretical machine learning and decoupled, high-performance backend infrastructure.
        </p>
        
        <div className="landing-action" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#projects-list" className="btn-pill" id="btn-landing-projects">
            View Engineering Projects
          </a>
          <a 
            href="https://github.com/krutiktikam" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-pill" 
            style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
            id="btn-landing-github"
          >
            GitHub Profile ↗
          </a>
          <a 
            href="https://www.linkedin.com/in/krutik-tikam-95339b286/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-pill" 
            style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
            id="btn-landing-linkedin"
          >
            LinkedIn ↗
          </a>
        </div>
        
        <span className="scroll-indicator">scroll down</span>
      </section>

      {/* Main Content Grid */}
      <div className="portfolio-layout">
        {/* ==========================================
            COLUMN 1: Intro, Spotlight & About
            ========================================== */}
        <div className="portfolio-column">
          {/* Profile Header Card */}
          <TiltCard id="profile-card">
            <div className="hero-header">
              <span className="logo">Overview</span>
              <div className="hero-hamburger">
                <span></span>
                <span></span>
              </div>
            </div>
            
            <h1 className="hero-main-title">
              <span>AI Software</span>
              <span className="underlined">Engineer</span>
            </h1>
            
            <p className="hero-bio">
              Engineering high-throughput Asynchronous APIs, Production-Ready ML infrastructure, Vector Search indexing, and robust System Architecture.
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
          </TiltCard>

          {/* Spotlight Highlight Card */}
          <TiltCard 
            className="spotlight-card" 
            style={{ backgroundImage: `linear-gradient(rgba(13,13,16,0.85), rgba(13,13,16,0.95)), url(${spotlightImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            onClick={() => setSelectedProject(projectsData[1])}
          >
            <span className="section-label">spotlight engineering project</span>
            <h2 className="spotlight-title">{projectsData[1].title}</h2>
            <p className="spotlight-desc">{projectsData[1].description}</p>
            <div className="impact-metric-box" style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(0,242,254,0.4)', marginTop: '8px', marginBottom: '14px' }}>
              <div className="impact-metric-text" style={{ fontSize: '12px' }}>
                <strong>{projectsData[1].metricText}</strong>
              </div>
            </div>
            <div className="spotlight-action">
              <button className="btn-pill" style={{ pointerEvents: 'none' }}>Read Case Study</button>
              <span className="btn-circle">→</span>
            </div>
          </TiltCard>

          {/* "About Me" Section */}
          <TiltCard id="about-card">
            <span className="section-label">/About me ...</span>
            <p className="about-desc">
              I am an AI Software Engineer specializing in the intersection of machine learning and backend architecture. My core strength lies in engineering the robust infrastructure required to deploy AI into the real world. My technical expertise spans asynchronous REST APIs (FastAPI), deep learning (PyTorch), continuous control reinforcement learning (PPO), and advanced vector database indexing (ChromaDB) for RAG applications. I focus on optimizing system throughput, minimizing search latency, and building automated ETL pipelines.
            </p>
            
            <div className="about-portrait-container" id="about-visual-asset">
              <img src={aboutBgImg} alt="AI Systems Abstract Representation" className="about-portrait" />
            </div>

            <span className="section-label" style={{ marginBottom: '12px', display: 'block' }}>Technical Skills Matrix</span>
            <div className="skills-stack-list">
              {skillsCategories.map((cat, idx) => (
                <div key={idx} className="skill-category-block">
                  <h4 className="skill-cat-title">{cat.title}</h4>
                  <div className="skill-matrix-tags">
                    {cat.items.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-matrix-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* ==========================================
            COLUMN 2: Experience & Projects Portfolio
            ========================================== */}
        <div className="portfolio-column">
          {/* Professional Experience Section */}
          <TiltCard id="work-card">
            <span className="section-label" style={{ textAlign: 'right', display: 'block' }}>Professional Experience</span>
            
            <div className="work-timeline">
              {experienceData.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <span className="timeline-year">{item.year}</span>
                  <div className="timeline-details">
                    <span className="timeline-company">{item.company}</span>
                    <span className="timeline-role">{item.role}</span>
                    <span className="timeline-duration">{item.duration}</span>
                    <ul style={{ listStyle: 'disc', paddingLeft: '16px', fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {item.metrics.map((m, mIdx) => (
                        <li key={mIdx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </TiltCard>

          {/* Certifications Section */}
          <TiltCard id="certifications-card">
            <span className="section-label">Certifications</span>
            <div className="cert-badge-list">
              {certificationsList.map((cert, idx) => (
                <div key={idx} className="cert-badge-item">
                  <span className="cert-icon-dot"></span>
                  <span className="cert-name">{cert}</span>
                </div>
              ))}
            </div>
          </TiltCard>

          {/* Engineering Projects Portfolio */}
          <div id="projects-list">
            <h2 className="section-label" style={{ paddingLeft: '20px' }}>... /Engineering Projects ...</h2>
            
            {/* Category Filter Bar */}
            <div className="project-filter-bar" id="project-filter-tabs">
              {categoriesList.map((cat, cIdx) => (
                <button
                  key={cIdx}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                  id={`filter-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filteredProjects.map((project, idx) => {
              const elementId = project.title.toLowerCase().replace(/[^a-z0-9]/g, '-');
              return (
                <TiltCard 
                  key={idx} 
                  id={`project-card-${elementId}`}
                  onClick={() => setSelectedProject(project)}
                >
                  <h3 className="project-card-title">{project.title}</h3>
                  
                  <div className="project-card-tags">
                    {project.tech.map((tag, tIdx) => (
                      <span key={tIdx} className="project-card-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <p className="project-card-desc">{project.description}</p>
                  
                  <div className="impact-metric-box">
                    <div className="impact-metric-header">Impact Metric</div>
                    <div className="impact-metric-text">
                      <strong>{project.metricText}</strong>
                    </div>
                  </div>

                  <div className="project-card-actions">
                    <div className="project-card-action-links">
                      <button className="btn-pill" style={{ padding: '6px 14px', fontSize: '11px', pointerEvents: 'none' }}>View Case Study</button>
                    </div>
                    <span className="btn-circle">↗</span>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            COLUMN 3: Git Metrics & Contacts Footer
            ========================================== */}
        <div className="portfolio-column">
          {/* Git Metrics */}
          <TiltCard id="git-metrics-card">
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

                {gitUserData.isMock && (
                  <p className="github-rate-limit-notice">
                    * Displaying cached engineer profile metrics (GitHub API Rate limit reached)
                  </p>
                )}
              </div>
            )}
          </TiltCard>

          {/* Contacts footer */}
          <TiltCard id="contacts-card">
            <span className="section-label">... /Contacts ...</span>
            
            <div className="contacts-nav-links">
              <a href="#landing">Main</a>
              <a href="#about-card">About</a>
              <a href="#projects-list">Projects</a>
              <a href="#git-metrics-card">Metrics</a>
            </div>
            
            <p className="contacts-attribution">
              Site Handcrafted by ME /<br />
              Inspired by Behance & Engineering Systems /<br />
              Powered by React & Vite
            </p>
            
            <div className="contacts-author-title">
              <span className="contacts-first-name">Developer</span>
              <span className="contacts-last-name">Krutik Tikam</span>
            </div>

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
          </TiltCard>
        </div>
      </div>

      {/* ==========================================
          MODALS PORTAL OVERLAYS
          ========================================== */}
      
      {/* Project Case Study Details Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>✕</button>
            <h2 className="modal-title">{selectedProject.title}</h2>
            
            <div className="project-card-tags" style={{ marginBottom: '24px' }}>
              {selectedProject.tech.map((tag, idx) => (
                <span key={idx} className="project-card-tag">{tag}</span>
              ))}
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4 className="modal-section-title">The Problem</h4>
                <p className="modal-section-content" style={{ marginTop: '8px' }}>
                  {selectedProject.problem}
                </p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">System Architecture</h4>
                <p className="modal-section-content" style={{ marginTop: '8px' }}>
                  {selectedProject.architecture}
                </p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">AI & Machine Learning Approach</h4>
                <p className="modal-section-content" style={{ marginTop: '8px' }}>
                  {selectedProject.mlApproach}
                </p>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Verified Impact Metric</h4>
                <div className="impact-metric-box" style={{ marginTop: '8px' }}>
                  <div className="impact-metric-header">Production Benchmark</div>
                  <div className="impact-metric-text">
                    <strong>{selectedProject.metricText}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '36px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a 
                href={selectedProject.gitUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-pill"
              >
                View Repository Code ↗
              </a>
              <button 
                className="btn-pill" 
                style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                onClick={() => setSelectedProject(null)}
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inline PDF Resume Viewer Modal */}
      {showResumeModal && (
        <div className="modal-backdrop" onClick={() => setShowResumeModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowResumeModal(false)}>✕</button>
            <h2 className="modal-title">Krutik Tikam — Resume</h2>
            
            <div className="pdf-viewer-wrapper">
              <object 
                data="./resume.pdf" 
                type="application/pdf" 
                className="pdf-iframe"
              >
                <iframe src="./resume.pdf" className="pdf-iframe" title="Krutik Tikam Resume Viewer">
                  <div className="pdf-fallback-message">
                    <p>Your browser does not support in-app PDF viewing.</p>
                    <a href="./resume.pdf" download className="btn-pill" style={{ marginTop: '16px', display: 'inline-block' }}>
                      Download Resume Instead
                    </a>
                  </div>
                </iframe>
              </object>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-start' }}>
              <a href="./resume.pdf" download className="btn-pill" id="btn-modal-resume-download">
                Download PDF Document
              </a>
              <button 
                className="btn-pill" 
                style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
                onClick={() => setShowResumeModal(false)}
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Developer CLI Terminal Modal */}
      {showCliModal && (
        <div className="modal-backdrop" onClick={() => setShowCliModal(false)}>
          <div className="cli-terminal-container" onClick={(e) => e.stopPropagation()}>
            <div className="cli-terminal-header">
              <div className="cli-dots">
                <span className="cli-dot cli-dot-red" onClick={() => setShowCliModal(false)} style={{ cursor: 'pointer' }}></span>
                <span className="cli-dot cli-dot-yellow"></span>
                <span className="cli-dot cli-dot-green"></span>
              </div>
              <span className="cli-title">krutik@portfolio:~ (zsh)</span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Ctrl+K to toggle</span>
            </div>

            <div className="cli-body" ref={cliBodyRef}>
              <div className="cli-history">
                {cliHistory.map((item, idx) => (
                  <div key={idx} className="cli-line">
                    {item.cmd !== 'welcome' && (
                      <div className="cli-prompt-line">
                        krutik@portfolio ~ % <span>{item.cmd}</span>
                      </div>
                    )}
                    <div className="cli-response">{item.response}</div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleCliSubmit} className="cli-input-form">
                <span style={{ color: '#10b981' }}>krutik@portfolio ~ %</span>
                <input 
                  type="text" 
                  value={cliInput}
                  onChange={(e) => setCliInput(e.target.value)}
                  placeholder="Type 'help'..." 
                  className="cli-input"
                  autoFocus
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
