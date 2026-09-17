// Master list of all engineering projects built by Krutik Tikam
// (Excluding external third-party repositories)

export const allProjects = [
  {
    id: "aura-hud",
    title: "AURA HUD — Desktop AI Companion",
    shortTitle: "AURA HUD",
    tagline: "Cursor-Anchored Edge Desktop AI & Offline Voice Assistant",
    categories: ["Agentic & AI Backend", "End-to-End AI", "Edge Systems"],
    personaRelevance: {
      agentic: 10,
      cv_rl: 5,
      fullstack: 9
    },
    tech: ["Tauri v2 (Rust)", "FastAPI", "LangChain", "Faster-Whisper", "Ollama", "React 18", "SQLite WAL"],
    gitUrl: "https://github.com/krutiktikam/AURA-HUD",
    liveUrl: null,
    badge: "100% Offline // Sub-3s Latency",
    problem: "Desktop AI assistants are often heavy cloud wrappers (>250MB RAM) that leak clipboard privacy and suffer from high network latency during coding sessions.",
    architecture: "Built with Tauri v2 (Rust) + arboard for native cursor snapping and zero-latency clipboard monitoring (<20MB RAM). Local FastAPI backend connects LangChain ReAct agent core to Ollama SLMs.",
    mlApproach: "Streams 500ms audio timeslices over WebSockets to CTranslate2-accelerated Faster-Whisper with Voice Activity Detection (VAD). SAPI5 synthesis gives immediate vocal responses.",
    metricText: "Operates at <20MB RAM footprint, achieves <3.0s local LLM response latency, and passes 100% of automated behavioral benchmark tests."
  },
  {
    id: "blender-mcp",
    title: "Blender MCP Server",
    shortTitle: "Blender MCP",
    tagline: "Anthropic Model Context Protocol Bridge for Live 3D Graphics",
    categories: ["Agentic & AI Backend", "Tooling & Protocols"],
    personaRelevance: {
      agentic: 10,
      cv_rl: 6,
      fullstack: 7
    },
    tech: ["Python", "Anthropic MCP", "TCP Sockets", "Blender API (bpy)", "RST Parser"],
    gitUrl: "https://github.com/krutiktikam/blender-mcp-server",
    liveUrl: null,
    badge: "24+ Tool Endpoints // TCP Protocol",
    problem: "LLMs lack spatial and structural awareness of 3D modeling scenes, making programmatic 3D content creation difficult to automate reliably.",
    architecture: "Engineered a dual-component architecture: an interactive Blender extension communicating over TCP sockets with a standalone Python MCP server running on stdio for LLMs.",
    mlApproach: "Provides 24+ tool endpoints allowing agents to autonomously query scene datablocks, inspect geometry node modifiers, capture area PNG screenshots, and search offline API docs.",
    metricText: "Serves 24+ autonomous tool endpoints with sub-10ms query times and comprehensive RST document search over the entire Blender Python API."
  },
  {
    id: "omnimath-local",
    title: "OmniMath-Local Backend",
    shortTitle: "OmniMath RAG",
    tagline: "STEM Mathematical Reasoning SLM & SymPy Symbolic Truth Layer",
    categories: ["Agentic & AI Backend", "End-to-End AI", "Vector RAG"],
    personaRelevance: {
      agentic: 9,
      cv_rl: 4,
      fullstack: 9
    },
    tech: ["FastAPI", "ChromaDB", "DeepSeek-R1", "SymPy", "PyMuPDF", "SentenceTransformers"],
    gitUrl: "https://github.com/krutiktikam/omni-math",
    liveUrl: null,
    badge: "12,000+ Chunks // Zero Hallucinations",
    problem: "LLMs notoriously hallucinate when solving multi-step calculus and algebraic equations, lacking deterministic symbolic mathematical verification.",
    architecture: "Built an async FastAPI engine coupling ChromaDB dense vector retrieval with local Ollama SLM reasoning and a deterministic SymPy LaTeX truth verification parser.",
    mlApproach: "Indexes 12,000+ chunks from university math textbooks using all-MiniLM-L6-v2 embeddings. Extracted LaTeX equations are verified algebraically via SymPy to guarantee correctness.",
    metricText: "Indexed 12,387 textbook vector chunks with an automated <10GB SSD storage gate and 100% elimination of symbolic calculation hallucinations."
  },
  {
    id: "sports-analyser",
    title: "Sports Analyser — Live Soccer Vision",
    shortTitle: "Sports Analyser",
    tagline: "Broadcast Football Computer Vision, Tracking & Active Learning",
    categories: ["Computer Vision & RL", "End-to-End AI", "Active Learning"],
    personaRelevance: {
      agentic: 5,
      cv_rl: 10,
      fullstack: 9
    },
    tech: ["YOLOv8 / YOLOv11", "ByteTrack", "OpenCV", "ChromaDB", "FastAPI", "Active Learning"],
    gitUrl: "https://github.com/krutiktikam/sports-analyser",
    liveUrl: null,
    badge: "Active Learning // 70+ Wyscout Rules",
    problem: "Analyzing broadcast football footage requires tracking 22 players + ball simultaneously while handling jersey occlusions, camera pans, and complex event rule matching.",
    architecture: "Full-stack CV pipeline featuring YOLOv8 object detection, ByteTrack Kalman filtering, torso LAB/HSV color clustering, and a ChromaDB semantic rule vector RAG engine.",
    mlApproach: "Integrated an active learning subsystem (dataset_v2) that isolates high-entropy / ambiguous frames around match events for automated pre-labeling and iterative fine-tuning.",
    metricText: "Processes 1080p footage tracking 22 players and ball kinematics, auto-tagging events across 70+ Wyscout rules with continuous active learning fine-tuning."
  },
  {
    id: "simulations-arm",
    title: "Robotic Arm Simulation & RL Platform",
    shortTitle: "Robotic Arm RL",
    tagline: "Headless 850 FPS Continuous-Control PPO Policy Baking",
    categories: ["Computer Vision & RL", "Robotics & Simulation"],
    personaRelevance: {
      agentic: 4,
      cv_rl: 10,
      fullstack: 6
    },
    tech: ["Blender 5.1 API", "OpenAI Gymnasium", "Stable-Baselines3 (PPO)", "PyTorch", "Cycles"],
    gitUrl: "https://github.com/krutiktikam/blender-robotic-arm-simulation",
    liveUrl: null,
    badge: "850 FPS // Sub-Nanometer Tolerance",
    problem: "Testing reinforcement learning policies on physical robotic arms risks hardware damage and suffers from slow, resource-heavy real-time rendering limits.",
    architecture: "Engineered a headless 6-DOF cybernetic robotic arm environment in Blender Python wrapped in an OpenAI Gymnasium interface, with automated PPO policy keyframe baking.",
    mlApproach: "Trained continuous-action PPO agents with dense distance, velocity, and grip reward shaping. Built automated engineering audits verifying sub-nanometer rigid-body tolerances.",
    metricText: "Achieved headless execution speeds exceeding 700-850 FPS, verifying rigid-body tolerances to 10^-8 meters and 0.000000° hydraulic tracking accuracy."
  },
  {
    id: "bci-neurorehab",
    title: "NeuroRehab-BCI (Motor Imagery Classifier)",
    shortTitle: "NeuroRehab-BCI",
    tagline: "Real-Time 4-Class Motor Imagery EEG Signal Processing",
    categories: ["Computer Vision & RL", "Signal Processing & Deep Learning"],
    personaRelevance: {
      agentic: 4,
      cv_rl: 9,
      fullstack: 6
    },
    tech: ["PyTorch (EEGNet)", "MNE-Python", "SciPy", "PyLSL", "FastAPI", "Streamlit"],
    gitUrl: "https://github.com/krutiktikam/BCI-MotorImagery-Pipeline",
    liveUrl: null,
    badge: "<150ms Latency // Virtual LSL Suite",
    problem: "Real-time brain-computer interfaces struggle with high noise in multi-channel EEG signals and lack robust simulation pipelines for testing without physical electrodes.",
    architecture: "5th-order Butterworth bandpass filter (8-30 Hz) + ICA artifact removal feeding PyTorch EEGNet / TS-CNN temporal-spatial convolutional networks.",
    mlApproach: "Designed a virtual Lab Streaming Layer (LSL) hardware simulator feeding real-time 2-second windows to a FastAPI serving endpoint with sliding-window data augmentation.",
    metricText: "Increased Subject 1 validation accuracy from 25% to 56% within 10 epochs, delivering real-time inferences with <150ms latency."
  },
  {
    id: "image-gen",
    title: "Social-Media AI Image Generator",
    shortTitle: "Low-VRAM Diffusion",
    tagline: "Low-VRAM Photorealistic Diffusion & Local LoRA Trainer (<1.8GB)",
    categories: ["Computer Vision & RL", "End-to-End AI", "Generative AI"],
    personaRelevance: {
      agentic: 3,
      cv_rl: 8,
      fullstack: 9
    },
    tech: ["PyTorch 2.x SDPA", "Diffusers", "Gradio", "PEFT", "Accelerate", "DPM-Solver++"],
    gitUrl: "https://github.com/krutiktikam/social-media-image-gen",
    liveUrl: null,
    badge: "4GB VRAM // Local LoRA Trainer",
    problem: "Running photorealistic diffusion models and training LoRA adapters typically requires 8-16GB VRAM, locking out developers with consumer GPUs (RTX 3050 4GB).",
    architecture: "Orchestrated model CPU offload, VAE tiling, VAE slicing, FP16 half-precision, and native PyTorch 2.x SDPA FlashAttention kernels to lock active VRAM below 1.8GB.",
    mlApproach: "Built an interactive Gradio UI with social media aspect ratios (1:1, 4:5, 9:16, 16:9), reference img2img gallery, and a standalone low-VRAM LoRA trainer with latent caching (<2.3GB).",
    metricText: "Generates photorealistic social media images in 20-25 steps using DPM-Solver++ on a 4GB RTX 3050 with zero OOM errors and trains custom LoRAs locally."
  },
  {
    id: "poke-architect",
    title: "PokéArchitect — Competitive Team Builder",
    shortTitle: "PokéArchitect",
    tagline: "High-Fidelity Competitive Meta Diagnostics & ML Synergy Engine",
    categories: ["End-to-End AI", "Full-Stack Web"],
    personaRelevance: {
      agentic: 6,
      cv_rl: 3,
      fullstack: 10
    },
    tech: ["React 18", "TypeScript", "FastAPI", "SQLAlchemy", "PostgreSQL", "Power BI", "Framer Motion"],
    gitUrl: "https://github.com/krutiktikam/poke-architect",
    liveUrl: "https://poke-architect.vercel.app",
    badge: "Production Deployed // Vercel & Render",
    problem: "Competitive players struggle to evaluate team weaknesses and identify meta counter strategies without calculating dozens of complex type-multiplier permutations.",
    architecture: "Decoupled architecture with React (TypeScript) frontend hosted on Vercel and FastAPI backend on Render with PostgreSQL / SQLite multi-environment support.",
    mlApproach: "Heuristic intelligence engine calculating cumulative defensive multipliers, automatic archetype detection (Hyper Offense, Bulky Stall), and side-by-side win simulator.",
    metricText: "Live in production with 1025+ Pokémon across 9 Generations, real-time tactical radar visualizer, and exportable Architect Blueprint certificates."
  },
  {
    id: "central-navi-game",
    title: "Central-Navi Underworld Business",
    shortTitle: "Underworld Monopoly",
    tagline: "Full-Stack Multiplayer Board Game with 10-Foot TV Mode",
    categories: ["End-to-End AI", "Full-Stack Web", "Game Development"],
    personaRelevance: {
      agentic: 5,
      cv_rl: 2,
      fullstack: 9
    },
    tech: ["Python 3.13", "FastAPI", "HTML5 Grid", "JavaScript ES6", "Web Audio API"],
    gitUrl: "https://github.com/krutiktikam/Custom_BusinessGame",
    liveUrl: null,
    badge: "Hotseat Offline // Web Audio Synthesis",
    problem: "Traditional browser games require constant internet access, suffer from rigid layouts on TVs, and depend on heavy external sound assets that increase load times.",
    architecture: "FastAPI REST state machine paired with a 100% offline client-side hotseat engine. Fully responsive CSS Grid matching classic Monopoly geometry with 10-Foot TV Mode.",
    mlApproach: "Zero-dependency synthesized Web Audio API for sound FX (dice rolls, sirens, cash chimes) and particle confetti canvas physics for victory celebrations.",
    metricText: "Supports both 100% offline pass-and-play and multi-device online multiplayer with remote control shortcuts, virtual keyboard, and 5 dynamic color themes."
  },
  {
    id: "raze-ecommerce",
    title: "RAZE E-Commerce Platform",
    shortTitle: "RAZE Storefront",
    tagline: "Neo-Brutalist Full-Stack Storefront & Admin Portal",
    categories: ["End-to-End AI", "Full-Stack Web"],
    personaRelevance: {
      agentic: 4,
      cv_rl: 2,
      fullstack: 9
    },
    tech: ["React 18", "TypeScript", "Vite", "FastAPI", "Supabase (PostgreSQL)", "Neo-Brutalist CSS"],
    gitUrl: "https://github.com/krutiktikam/raze-ecommerce",
    liveUrl: null,
    badge: "Supabase Auth // Neo-Brutalist UI",
    problem: "Standard e-commerce templates are generic and bloated with unnecessary JavaScript dependencies that hinder performance and custom branding.",
    architecture: "High-contrast Neo-Brutalist design system powered by React 18, TypeScript, and Supabase for PostgreSQL migrations, user authentication, and row-level security.",
    mlApproach: "Dynamic state management through React Contexts (Auth, Cart, Wishlist, Toast) and an administrative dashboard for product CRUD and inventory management.",
    metricText: "Feature-complete store with instant cart state persistence, wishlist sync, checkout flow, and custom Neo-Brutalist UI components."
  },
  {
    id: "antigravity-voice",
    title: "Antigravity Voice Assistant",
    shortTitle: "Antigravity Voice",
    tagline: "Ambient Voice Interface & PostInvocation Hook for AI Agents",
    categories: ["Agentic & AI Backend", "Voice AI"],
    personaRelevance: {
      agentic: 9,
      cv_rl: 3,
      fullstack: 7
    },
    tech: ["Python", "Google Gemini SDK", "SpeechRecognition", "ElevenLabs", "Edge-TTS", "SAPI5"],
    gitUrl: "https://github.com/krutiktikam/antigravity-voice",
    liveUrl: null,
    badge: "3-Tier Voice Fallback // CLI Hook",
    problem: "Developers using terminal AI agents must stare at text output, lacking hands-free conversational ergonomics and non-blocking speech playback.",
    architecture: "Interactive hands-free audio loop with token-by-token terminal streaming and a background PostInvocation hook for Google Antigravity Agent.",
    mlApproach: "3-tier speech synthesis pipeline: ElevenLabs custom voice cloning -> Microsoft Edge Neural TTS -> OS native SAPI5 fallback.",
    metricText: "Provides zero-latency ambient audio feedback with 100% offline fallback support and seamless CLI agent integration."
  },
  {
    id: "football-anylatics",
    title: "Football Any-latics Match Predictor",
    shortTitle: "Football Any-latics",
    tagline: "High-Frequency Telemetry Ingestion & XGBoost Win Forecasting",
    categories: ["Data Pipelines & ETL", "Machine Learning"],
    personaRelevance: {
      agentic: 4,
      cv_rl: 7,
      fullstack: 7
    },
    tech: ["Python", "XGBoost", "SQLite", "API-Football Scraper", "Streamlit", "Pandas"],
    gitUrl: "https://github.com/krutiktikam/footbal-anylatics-project",
    liveUrl: null,
    badge: "XGBoost // Automated ETL",
    problem: "Sports prediction dashboards often rely on static or stale historical datasets, leading to inaccurate forecasts as team momentum shifts mid-season.",
    architecture: "Automated scraper engine pulling live fixtures into SQLite, normalizing statistics, and computing rolling momentum metrics.",
    mlApproach: "Trained XGBoost classification model calculating win/draw/loss probability distributions, visualized on an interactive Streamlit dashboard.",
    metricText: "Automates fixture ingestion across major European leagues with feature-engineered rolling form indicators."
  }
];
