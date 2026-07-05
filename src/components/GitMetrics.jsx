import React, { useState, useEffect } from 'react';

const GitMetrics = () => {
  const [username, setUsername] = useState('google'); // Default username to demonstrate, e.g. google
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tempUsername, setTempUsername] = useState('google');

  useEffect(() => {
    if (!username) return;

    const fetchGithubData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('User not found or API rate limit exceeded.');
        }
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        setError(err.message);
        setUserData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tempUsername.strip ? tempUsername.strip() : tempUsername.trim()) {
      setUsername(tempUsername.trim());
    }
  };

  // Custom parameters for GitHub Readme Stats to match our Obsidian/Cyan styling
  const statsThemeQuery = `show_icons=true&bg_color=0c0f16&title_color=00f2fe&icon_color=4facfe&text_color=94a3b8&border_color=1c2333&hide_border=false`;
  const streakThemeQuery = `theme=tokyonight&background=0c0f16&ring=00f2fe&fire=4facfe&sideNums=94a3b8&sideLabels=94a3b8&dates=475569&stroke=1c2333&hide_border=false`;
  const langsThemeQuery = `layout=compact&bg_color=0c0f16&title_color=00f2fe&text_color=94a3b8&border_color=1c2333&hide_border=false`;

  return (
    <section className="section" id="metrics">
      <div className="container">
        <h2 className="section-title">Developer <span>Git Metrics</span></h2>
        
        {/* Username Selector */}
        <div className="metrics-selector-card glass-panel">
          <form onSubmit={handleSubmit} className="selector-form">
            <label htmlFor="github-user-input" className="selector-label">
              Enter GitHub Username to Load Live Metrics:
            </label>
            <div className="input-group">
              <input 
                type="text" 
                id="github-user-input" 
                value={tempUsername} 
                onChange={(e) => setTempUsername(e.target.value)}
                placeholder="e.g. torvalds, google..." 
                className="username-input"
              />
              <button type="submit" className="btn btn-primary" id="btn-load-github">
                Fetch Metrics
              </button>
            </div>
          </form>
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="metrics-loading glass-panel" id="metrics-loading-state">
            <div className="spinner"></div>
            <p>Loading live metrics from GitHub API...</p>
          </div>
        )}
        
        {error && (
          <div className="metrics-error glass-panel" id="metrics-error-state">
            <p>⚠️ {error}</p>
            <p className="error-tip">Tip: Entering a valid GitHub profile name will reload the cards below.</p>
          </div>
        )}

        {/* Profile Card and Metric Widgets */}
        {userData && !loading && (
          <div className="metrics-display-container">
            {/* User Info Overview */}
            <div className="profile-overview-card glass-panel" id="github-profile-card">
              <div className="profile-header">
                <img 
                  src={userData.avatar_url} 
                  alt={`${userData.name || username}'s avatar`} 
                  className="profile-avatar"
                  id="github-avatar"
                />
                <div className="profile-meta">
                  <h3 className="profile-name" id="github-name">{userData.name || username}</h3>
                  <a 
                    href={userData.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-login"
                    id="github-username-link"
                  >
                    @{userData.login}
                  </a>
                  {userData.bio && <p className="profile-bio" id="github-bio">{userData.bio}</p>}
                </div>
              </div>
              
              <div className="profile-stats-grid">
                <div className="stat-box" id="github-stat-repos">
                  <span className="stat-num">{userData.public_repos}</span>
                  <span className="stat-label">Public Repos</span>
                </div>
                <div className="stat-box" id="github-stat-gists">
                  <span className="stat-num">{userData.public_gists}</span>
                  <span className="stat-label">Public Gists</span>
                </div>
                <div className="stat-box" id="github-stat-followers">
                  <span className="stat-num">{userData.followers}</span>
                  <span className="stat-label">Followers</span>
                </div>
                <div className="stat-box" id="github-stat-following">
                  <span className="stat-num">{userData.following}</span>
                  <span className="stat-label">Following</span>
                </div>
              </div>
            </div>

            {/* Readme Stats Widgets */}
            <div className="widgets-grid" id="github-widgets-grid">
              {/* General Stats */}
              <div className="widget-card glass-panel" id="widget-github-stats">
                <h4 className="widget-title">General Contribution Stats</h4>
                <div className="widget-img-container">
                  <img 
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&${statsThemeQuery}`}
                    alt="GitHub Stats Overview" 
                    className="widget-svg"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

              {/* Language Distribution */}
              <div className="widget-card glass-panel" id="widget-github-languages">
                <h4 className="widget-title">Top Languages Used</h4>
                <div className="widget-img-container">
                  <img 
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&${langsThemeQuery}`}
                    alt="GitHub Language Distribution" 
                    className="widget-svg"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>

              {/* Commit Streak */}
              <div className="widget-card glass-panel column-span-2" id="widget-github-streak">
                <h4 className="widget-title">Contribution Streak Statistics</h4>
                <div className="widget-img-container">
                  <img 
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&${streakThemeQuery}`}
                    alt="GitHub Streak Statistics" 
                    className="widget-svg"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitMetrics;
