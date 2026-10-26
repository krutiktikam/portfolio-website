import React from 'react';

/**
 * Geometric wireframe cubes + faceted polyhedron hero graphic.
 * Original inline SVG + CSS animation, strictly respecting prefers-reduced-motion.
 */
export const HeroWireframe = () => {
  return (
    <div className="hero-wireframe-container" aria-hidden="true">
      <svg 
        viewBox="0 0 400 400" 
        className="hero-wireframe-svg"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wireframe-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9a9a9f" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="wireframe-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f5a0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5a0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient subtle back glow */}
        <circle cx="200" cy="200" r="140" fill="url(#glow-grad)" />

        {/* Outer Coordinate Grid Ring */}
        <circle cx="200" cy="200" r="160" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="200" cy="200" r="110" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />

        {/* Axis Crosshairs */}
        <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="2 4" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" strokeDasharray="2 4" />

        {/* Rotating Geometric Complex */}
        <g className="wireframe-rotating-group">
          {/* Central Faceted Icosahedron / Octahedron Shape */}
          <polygon points="200,70 290,140 290,260 200,330 110,260 110,140" stroke="url(#wireframe-grad-1)" strokeWidth="1.2" fill="rgba(17, 17, 19, 0.6)" />
          <polygon points="200,70 200,330" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeDasharray="4 2" />
          <polygon points="110,140 290,260" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
          <polygon points="110,260 290,140" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
          <polygon points="110,200 290,200" stroke="url(#wireframe-grad-2)" strokeWidth="1.2" />

          {/* Inner Faceted Diamond */}
          <polygon points="200,120 255,200 200,280 145,200" stroke="#f2f2f2" strokeWidth="1.5" strokeOpacity="0.7" fill="rgba(255, 255, 255, 0.02)" />
          <line x1="145" y1="200" x2="255" y2="200" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />

          {/* Floating Isometric Wireframe Cube 1 (Top Right) */}
          <g className="cube-floating-1">
            <polygon points="270,70 320,45 370,70 320,95" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" fill="rgba(17, 17, 19, 0.7)" />
            <polygon points="270,70 320,95 320,150 270,125" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" fill="rgba(10, 10, 11, 0.8)" />
            <polygon points="370,70 320,95 320,150 370,125" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" fill="rgba(17, 17, 19, 0.9)" />
            <line x1="320" y1="95" x2="200" y2="120" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="2 3" />
          </g>

          {/* Floating Isometric Wireframe Cube 2 (Bottom Left) */}
          <g className="cube-floating-2">
            <polygon points="40,280 85,255 130,280 85,305" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="1" fill="rgba(17, 17, 19, 0.7)" />
            <polygon points="40,280 85,305 85,355 40,330" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1" fill="rgba(10, 10, 11, 0.8)" />
            <polygon points="130,280 85,305 85,355 130,330" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" fill="rgba(17, 17, 19, 0.9)" />
            <line x1="85" y1="305" x2="145" y2="200" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" strokeDasharray="2 3" />
          </g>
        </g>

        {/* Small Data Coordinate Callouts */}
        <circle cx="200" cy="70" r="3" fill="#f2f2f2" />
        <circle cx="290" cy="140" r="2.5" fill="#9a9a9f" />
        <circle cx="110" cy="260" r="2.5" fill="#9a9a9f" />
        <circle cx="200" cy="330" r="3" fill="#f2f2f2" />

        <text x="32" y="45" fill="rgba(255, 255, 255, 0.3)" fontSize="9" fontFamily="var(--font-mono)">SYS_MESH // 4GB_GPU</text>
        <text x="270" y="375" fill="rgba(255, 255, 255, 0.3)" fontSize="9" fontFamily="var(--font-mono)">PRECISION // 0.001</text>
      </svg>
    </div>
  );
};

export default HeroWireframe;
