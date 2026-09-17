import React from 'react';

export const ThemeToggle = ({ isDark, onToggleTheme }) => {
  return (
    <button
      type="button"
      className="theme-toggle-btn"
      onClick={onToggleTheme}
      title={isDark ? "Switch to High-Contrast Light Mode" : "Switch to Deep Obsidian Dark Mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-icon">
        {isDark ? "☀️" : "🌙"}
      </span>
      <span className="theme-toggle-text">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
};

export default ThemeToggle;
