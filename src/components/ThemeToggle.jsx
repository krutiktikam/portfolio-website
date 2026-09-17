import React from 'react';

/**
 * Editorial EX8 Day/Night Mode Toggle Switch
 * 
 * Features:
 * - Tactile sliding switch with smooth spring/cubic-bezier physics
 * - Precision SVG icons with subtle rotation & scaling animations
 * - Customizable `dayIcon` and `nightIcon` props with high-fidelity defaults
 * - Fully accessible switch with keyboard support (Space / Enter)
 */
export const ThemeToggle = ({ 
  isDark, 
  onToggleTheme,
  dayIcon = null,
  nightIcon = null,
  showLabel = true
}) => {
  const handleKeyDown = (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      onToggleTheme();
    }
  };

  // Default Precision Geometric Sun Icon (1.5px stroke)
  const defaultSunIcon = (
    <svg 
      className="theme-svg sun-svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.75" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.5" />
      <line x1="12" y1="2" x2="12" y2="4.5" />
      <line x1="12" y1="19.5" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.99" y2="5.99" />
      <line x1="18.01" y1="18.01" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4.5" y2="12" />
      <line x1="19.5" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.99" y2="18.01" />
      <line x1="18.01" y1="5.99" x2="19.78" y2="4.22" />
    </svg>
  );

  // Default Precision Geometric Moon Crescent Icon (1.5px stroke)
  const defaultMoonIcon = (
    <svg 
      className="theme-svg moon-svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.75" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <button
      type="button"
      className={`theme-toggle-editorial ${isDark ? 'is-night' : 'is-day'}`}
      onClick={onToggleTheme}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to Day Light Mode" : "Switch to Night Dark Mode"}
      title={isDark ? "Switch to Day Light Mode" : "Switch to Night Dark Mode"}
    >
      {showLabel && (
        <span className="theme-toggle-label">
          {isDark ? 'NIGHT' : 'DAY'}
        </span>
      )}

      <div className="theme-switch-track">
        {/* Ambient static icon backdrops for spatial reference */}
        <div className="track-icon track-sun" aria-hidden="true">
          {dayIcon || defaultSunIcon}
        </div>
        <div className="track-icon track-moon" aria-hidden="true">
          {nightIcon || defaultMoonIcon}
        </div>

        {/* Sliding thumb carrying the active state */}
        <div className={`theme-switch-thumb ${isDark ? 'pos-night' : 'pos-day'}`}>
          <div className="thumb-icon-wrapper">
            {isDark ? (nightIcon || defaultMoonIcon) : (dayIcon || defaultSunIcon)}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
