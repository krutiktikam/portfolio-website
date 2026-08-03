import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "NeuroRehab-BCI (Motor Imagery EEG Classifier)",
    description: "End-to-end signal processing pipeline classifying EEG signals (22 channels x 1001 time points). Applied a 5th-order Butterworth bandpass filter.",
    tech: ["PyTorch", "EEGNet", "Signal Processing", "Python"],
    metricText: "Optimized architecture to increase Subject 1 validation accuracy from 25.00% to 56.00% within 10 epochs.",
    category: "AI & ML",
    gitUrl: "https://github.com/krutiktikam/BCI-MotorImagery-Pipeline"
  },
  {
    title: "OmniMath-Local (Async Vector RAG Platform)",
    description: "Enterprise-grade async backend serving math verification workflows.",
    tech: ["FastAPI", "ChromaDB", "Pydantic", "Python"],
    metricText: "Indexed 12,387 documents using all-MiniLM-L6-v2 embeddings. Optimized throughput using 250-chunk asynchronous upsert minibatches and 1,000-character custom text chunking.",
    category: "Backend & Vector Search",
    gitUrl: "https://github.com/krutiktikam/omni-math"
  },
  {
    title: "Blender Robotic Arm Simulation (RL Control System)",
    description: "Headless continuous-control simulation environment for policy optimization.",
    tech: ["Python", "PyTorch", "PPO", "OpenAI Gym"],
    metricText: "Achieved ultra-fast execution speeds of 700-850 FPS. Trained a PPO policy across 10,000 timesteps with complex continuous reward functions.",
    category: "Robotics & RL",
    gitUrl: "https://github.com/krutiktikam/blender-robotic-arm-simulation"
  },
  {
    title: "Football Any-latics Pro (Automated ETL & Prediction)",
    description: "Automated data ingestion and ETL pipeline for high-frequency streaming data.",
    tech: ["Python", "XGBoost", "Streamlit", "PostgreSQL"],
    metricText: "Trained XGBoost pipeline computing live win probabilities, performing within 10.00% of live market odds based on Brier Score and Log Loss.",
    category: "Data Pipelines & ETL",
    gitUrl: "https://github.com/krutiktikam/footbal-anylatics-project"
  }
];

const categories = ["All", "AI & ML", "Backend & Vector Search", "Robotics & RL", "Data Pipelines & ETL"];

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.metricText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Engineering <span>Projects</span></h2>
        
        {/* Search and Filter Bar */}
        <div className="filters-container glass-panel">
          <input 
            type="text" 
            placeholder="Search projects by name, technology, or metric..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            id="project-search"
          />
          
          <div className="filter-buttons" id="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                id={`filter-btn-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Grid Display */}
        <div className="project-grid" id="project-grid-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((proj, idx) => (
              <ProjectCard 
                key={idx}
                title={proj.title}
                description={proj.description}
                tech={proj.tech}
                metricText={proj.metricText}
                gitUrl={proj.gitUrl}
                liveUrl={proj.liveUrl}
              />
            ))
          ) : (
            <div className="no-projects glass-panel" id="no-projects-found">
              <p>No engineering projects match your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
