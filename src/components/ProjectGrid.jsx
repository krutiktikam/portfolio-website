import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "BCI EEG Motor Imagery Classifier",
    description: "Advanced EEG signal processing and machine learning pipeline to classify motor imagery tasks from Brain-Computer Interface datasets.",
    tech: ["Python", "MNE", "Scikit-Learn", "SciPy", "EEG Signal Processing"],
    category: "AI & Signal Processing",
    gitUrl: "https://github.com/github_username_here/BCI_MI_pjt"
  },
  {
    title: "Poke-Stocks Trading Simulation",
    description: "An algorithmic trading platform simulating stock markets with Poke-themed assets, executing automated trading strategies.",
    tech: ["React", "Node.js", "Express", "Chart.js", "Algorithmic Trading"],
    category: "Finance & Web",
    gitUrl: "https://github.com/github_username_here/Poke-stocks"
  },
  {
    title: "Poke-Architect Builder",
    description: "A system builder and architectural simulation framework exploring complex systems design and simulator modules.",
    tech: ["Python", "Simulation", "Software Architecture", "Data Structures"],
    category: "Software Architecture",
    gitUrl: "https://github.com/github_username_here/poke-architect"
  },
  {
    title: "Football Data Analytics Engine",
    description: "A sports analytics dashboard fetching match metrics, running statistical models, and visualizing player performance indices.",
    tech: ["Python", "Pandas", "Matplotlib", "BeautifulSoup", "Predictive Analytics"],
    category: "Data Science",
    gitUrl: "https://github.com/github_username_here/footbal_anylatics_project"
  },
  {
    title: "Blender MCP Tool Integration",
    description: "A custom Model Context Protocol (MCP) server connecting LLM agents directly with Blender 3D modeling environment API scripts.",
    tech: ["Python", "Blender API", "MCP", "LLM Integrations", "Automation"],
    category: "Tools & 3D",
    gitUrl: "https://github.com/github_username_here/blender_mcp"
  },
  {
    title: "Omnimath Backend API",
    description: "A high-performance backend mathematical computation engine and REST API supporting advanced calculation pipelines.",
    tech: ["Go", "Docker", "REST API", "Mathematics", "Unit Testing"],
    category: "Backend Engineering",
    gitUrl: "https://github.com/github_username_here/omnimath-backend"
  }
];

const categories = ["All", "AI & Signal Processing", "Finance & Web", "Software Architecture", "Data Science", "Tools & 3D", "Backend Engineering"];

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Showcase <span>Projects</span></h2>
        
        {/* Search and Filter Bar */}
        <div className="filters-container glass-panel">
          <input 
            type="text" 
            placeholder="Search projects by name or technology..." 
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
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
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
                gitUrl={proj.gitUrl}
                liveUrl={proj.liveUrl}
              />
            ))
          ) : (
            <div className="no-projects glass-panel" id="no-projects-found">
              <p>No projects match your search criteria. Try a different search term or category!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
