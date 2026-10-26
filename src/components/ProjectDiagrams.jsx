import React from 'react';

export const SportsAnalyserDiagram = () => (
  <svg viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-diagram-svg" aria-label="Sports Analyser Tracking & Homography Diagram">
    <rect width="420" height="260" rx="6" fill="#111113" stroke="rgba(255,255,255,0.12)" />
    
    {/* Pitch grid perspective */}
    <path d="M40 210 L140 70 L280 70 L380 210 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)" />
    <line x1="210" y1="70" x2="210" y2="210" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
    <ellipse cx="210" cy="140" rx="35" ry="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
    <rect x="175" y="70" width="70" height="25" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
    <rect x="155" y="175" width="110" height="35" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />

    {/* Bounding box detections & trajectory trails */}
    <g>
      <rect x="130" y="125" width="22" height="42" stroke="#f2f2f2" strokeWidth="1.5" rx="1" fill="rgba(255,255,255,0.08)" />
      <text x="130" y="120" fill="#f2f2f2" fontSize="8" fontFamily="var(--font-mono)">P1 [92%]</text>
      <path d="M110 160 Q 120 150 141 146" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
    </g>

    <g>
      <rect x="235" y="110" width="22" height="42" stroke="#f2f2f2" strokeWidth="1.5" rx="1" fill="rgba(255,255,255,0.08)" />
      <text x="235" y="105" fill="#f2f2f2" fontSize="8" fontFamily="var(--font-mono)">P2 [94%]</text>
      <path d="M265 95 Q 250 100 246 131" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
    </g>

    {/* Ball tracking */}
    <circle cx="195" cy="155" r="4.5" fill="#f2f2f2" />
    <circle cx="195" cy="155" r="8" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeDasharray="2 2" />
    <text x="180" y="175" fill="#9a9a9f" fontSize="8" fontFamily="var(--font-mono)">BALL_TRACK</text>

    {/* Homography transform vector indicators */}
    <line x1="300" y1="40" x2="380" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <text x="20" y="32" fill="#9a9a9f" fontSize="9" fontFamily="var(--font-mono)">YOLOv8 + BYTETRACK // 2D HOMOGRAPHY</text>
    <text x="315" y="240" fill="#9a9a9f" fontSize="9" fontFamily="var(--font-mono)">84.4% mAP@50</text>
  </svg>
);

export const OmniMathDiagram = () => (
  <svg viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-diagram-svg" aria-label="OmniMath-Local RAG & SymPy Verification Architecture">
    <rect width="420" height="260" rx="6" fill="#111113" stroke="rgba(255,255,255,0.12)" />

    {/* Block 1: ChromaDB */}
    <rect x="25" y="90" width="95" height="80" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    <text x="72" y="125" fill="#f2f2f2" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle">ChromaDB</text>
    <text x="72" y="142" fill="#9a9a9f" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">12,393 chunks</text>

    {/* Arrow 1 */}
    <line x1="120" y1="130" x2="160" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="3 2" />
    <polygon points="160,130 154,127 154,133" fill="rgba(255,255,255,0.6)" />

    {/* Block 2: DeepSeek R1 via Ollama */}
    <rect x="160" y="80" width="105" height="100" rx="3" fill="rgba(255,255,255,0.05)" stroke="#f2f2f2" strokeWidth="1.5" />
    <text x="212" y="115" fill="#f2f2f2" fontSize="10" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">DeepSeek-R1</text>
    <text x="212" y="132" fill="#9a9a9f" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">1.5B via Ollama</text>
    <text x="212" y="152" fill="#9a9a9f" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">~1.8 GB GPU VRAM</text>

    {/* Arrow 2 */}
    <line x1="265" y1="130" x2="305" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="3 2" />
    <polygon points="305,130 299,127 299,133" fill="rgba(255,255,255,0.6)" />

    {/* Block 3: SymPy AST Truth Layer */}
    <rect x="305" y="90" width="90" height="80" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    <text x="350" y="125" fill="#f2f2f2" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle">SymPy / AST</text>
    <text x="350" y="142" fill="#9a9a9f" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">Truth Verification</text>

    {/* Top and Bottom Meta */}
    <text x="20" y="32" fill="#9a9a9f" fontSize="9" fontFamily="var(--font-mono)">MATHEMATICAL RAG // DETERMINISTIC VERIFIER</text>
    <text x="20" y="240" fill="#9a9a9f" fontSize="9" fontFamily="var(--font-mono)">LATENCY: 2.06 s AVG // HARDWARE: 4 GB RTX 3050</text>
  </svg>
);

export const AuraHudDiagram = () => (
  <svg viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="project-diagram-svg" aria-label="AURA HUD Architecture Diagram">
    <rect width="420" height="260" rx="6" fill="#111113" stroke="rgba(255,255,255,0.12)" />

    {/* Left Outer Box: Rust Tauri Shell */}
    <rect x="30" y="75" width="150" height="110" rx="4" fill="rgba(255,255,255,0.03)" stroke="#f2f2f2" strokeWidth="1.5" />
    <text x="105" y="105" fill="#f2f2f2" fontSize="11" fontFamily="var(--font-mono)" fontWeight="700" textAnchor="middle">Rust / Tauri Shell</text>
    <text x="105" y="125" fill="#9a9a9f" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle">6.5 MB Idle RAM</text>
    <text x="105" y="145" fill="#9a9a9f" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">(Main Process Only)</text>
    <rect x="50" y="155" width="110" height="18" rx="2" fill="rgba(255,255,255,0.06)" />
    <text x="105" y="167" fill="#f2f2f2" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">Global Shortcut HUD</text>

    {/* Communication Link */}
    <line x1="180" y1="130" x2="240" y2="130" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeDasharray="3 3" />
    <text x="210" y="122" fill="#9a9a9f" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">IPC / HTTP</text>

    {/* Right Outer Box: Sidecar & Inference */}
    <rect x="240" y="65" width="150" height="130" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
    <text x="315" y="95" fill="#f2f2f2" fontSize="11" fontFamily="var(--font-mono)" fontWeight="600" textAnchor="middle">FastAPI Sidecar</text>
    
    <rect x="255" y="110" width="120" height="32" rx="2" fill="rgba(255,255,255,0.06)" />
    <text x="315" y="125" fill="#f2f2f2" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">INT8 Faster-Whisper</text>
    <text x="315" y="136" fill="#9a9a9f" fontSize="7" fontFamily="var(--font-mono)" textAnchor="middle">Voice Ingestion</text>

    <rect x="255" y="150" width="120" height="32" rx="2" fill="rgba(255,255,255,0.06)" />
    <text x="315" y="165" fill="#f2f2f2" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">Local SLM (Ollama)</text>
    <text x="315" y="176" fill="#9a9a9f" fontSize="7" fontFamily="var(--font-mono)" textAnchor="middle">Offline Tool Calling</text>

    {/* Meta Text */}
    <text x="20" y="32" fill="#9a9a9f" fontSize="9" fontFamily="var(--font-mono)">OFFLINE ARCHITECTURE // ZERO CLOUD DEPENDENCY</text>
    <text x="20" y="240" fill="#9a9a9f" fontSize="9" fontFamily="var(--font-mono)">NATIVE OS ANCHOR // SUB-SECOND SPEECH-TO-TEXT</text>
  </svg>
);
