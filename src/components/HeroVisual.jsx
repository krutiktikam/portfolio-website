import React, { useEffect, useRef } from 'react';

export const HeroVisual = ({ personaId }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes setup
    const nodeCount = personaId === 'agentic' ? 35 : personaId === 'cv_rl' ? 28 : 32;
    const nodes = [];

    const colors = {
      agentic: { primary: 'rgba(0, 245, 160, ', secondary: 'rgba(0, 217, 245, ' },
      cv_rl: { primary: 'rgba(255, 159, 28, ', secondary: 'rgba(255, 64, 64, ' },
      fullstack: { primary: 'rgba(59, 130, 246, ', secondary: 'rgba(139, 92, 246, ' }
    };

    const currentColors = colors[personaId] || colors.agentic;

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        alpha: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI,
        colorType: Math.random() > 0.4 ? 'primary' : 'secondary'
      });
    }

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Persona-specific background elements
      if (personaId === 'agentic') {
        // Stream data grid lines
        ctx.strokeStyle = 'rgba(0, 245, 160, 0.04)';
        ctx.lineWidth = 1;
        const gridSize = 40;
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      } else if (personaId === 'cv_rl') {
        // Camera reticle and corner brackets
        const cx = width / 2;
        const cy = height / 2;
        const size = Math.min(width, height) * 0.35;

        ctx.strokeStyle = 'rgba(255, 159, 28, 0.12)';
        ctx.lineWidth = 1.5;

        // Circular reticle
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.6, 0, Math.PI * 2);
        ctx.stroke();

        // Bounding box frame
        const bx = cx - size * 0.7;
        const by = cy - size * 0.5;
        const bw = size * 1.4;
        const bh = size;
        const corner = 18;

        ctx.strokeStyle = 'rgba(255, 159, 28, 0.25)';
        // Top-left
        ctx.beginPath();
        ctx.moveTo(bx, by + corner);
        ctx.lineTo(bx, by);
        ctx.lineTo(bx + corner, by);
        ctx.stroke();
        // Top-right
        ctx.beginPath();
        ctx.moveTo(bx + bw - corner, by);
        ctx.lineTo(bx + bw, by);
        ctx.lineTo(bx + bw, by + corner);
        ctx.stroke();
        // Bottom-left
        ctx.beginPath();
        ctx.moveTo(bx, by + bh - corner);
        ctx.lineTo(bx, by + bh);
        ctx.lineTo(bx + corner, by + bh);
        ctx.stroke();
        // Bottom-right
        ctx.beginPath();
        ctx.moveTo(bx + bw - corner, by + bh);
        ctx.lineTo(bx + bw, by + bh);
        ctx.lineTo(bx + bw, by + bh - corner);
        ctx.stroke();

        // Horizontal scan line
        const scanY = by + ((Math.sin(tick * 0.03) + 1) / 2) * bh;
        ctx.strokeStyle = 'rgba(255, 64, 64, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(bx, scanY);
        ctx.lineTo(bx + bw, scanY);
        ctx.stroke();
      } else if (personaId === 'fullstack') {
        // Concentric geometric circuit arcs
        const cx = width / 2;
        const cy = height / 2;
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.08)';
        ctx.lineWidth = 1.5;
        for (let r = 50; r < Math.max(width, height) * 0.7; r += 70) {
          ctx.beginPath();
          ctx.arc(cx, cy, r, tick * 0.005, tick * 0.005 + Math.PI * 1.2);
          ctx.stroke();
        }
      }

      // 2. Update and draw nodes with connecting lines
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const pulseScale = (Math.sin(n.pulse) + 1) / 2;
        const currentAlpha = n.alpha * (0.6 + 0.4 * pulseScale);
        const colorBase = currentColors[n.colorType];

        ctx.fillStyle = `${colorBase}${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * (0.9 + 0.2 * pulseScale), 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n.x - n2.x;
          const dy = n.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.25;
            ctx.strokeStyle = `${currentColors.primary}${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [personaId]);

  return (
    <div className={`hero-visual-wrapper persona-${personaId}`}>
      <canvas ref={canvasRef} className="hero-visual-canvas" />
      <div className="hero-visual-hud-overlay">
        {personaId === 'agentic' && (
          <div className="hud-badge-box">
            <span className="hud-metric-label">SYS_STATE</span>
            <span className="hud-metric-val">MCP_CONNECTED</span>
            <span className="hud-sub-label">WS_LATENCY: 1.2ms</span>
          </div>
        )}
        {personaId === 'cv_rl' && (
          <div className="hud-badge-box">
            <span className="hud-metric-label">STREAM_FPS</span>
            <span className="hud-metric-val">850.2 PPO</span>
            <span className="hud-sub-label">TRACKING: 22 PLAYERS</span>
          </div>
        )}
        {personaId === 'fullstack' && (
          <div className="hud-badge-box">
            <span className="hud-metric-label">BUILD_ENV</span>
            <span className="hud-metric-val">REACT 18 + TS</span>
            <span className="hud-sub-label">POSTGRES // VERCEL</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroVisual;
