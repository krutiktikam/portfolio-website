// Honest project catalog for junior AI/Backend and Data Analyst portfolio
// Facts only - no invented numbers or claims.

export const allProjects = [
  {
    id: "sports-analyser",
    title: "Sports Analyser",
    tagline: "Soccer Broadcast Computer Vision & Tracking",
    description: "YOLOv8 fine-tuned on soccer broadcast footage, 84.4% mAP@50 on the validation split (92.0% on players); fused tracker with MobileNetV3 re-ID and camera-motion compensation; homography onto a 2D pitch.",
    metricBadge: "84.4% mAP@50 (val) // 92.0% players",
    gitUrl: "https://github.com/krutiktikam/Sports-Analyser",
    liveUrl: null,
    limitations: "ID-swap result (0 cross-team swaps) was measured on one 120-frame test clip only; no standard tracking benchmark (such as IDF1) yet. The 84.4% mAP@50 is on the validation split. Next: held-out test evaluation and tracking metrics.",
    views: ["ai", "data"],
    featuredIn: ["ai", "data"]
  },
  {
    id: "omnimath-local",
    title: "OmniMath-Local",
    tagline: "Local Mathematical RAG & SymPy Verification",
    description: "DeepSeek-R1 1.5B via Ollama, RAG over 12,393 text chunks in ChromaDB, SymPy/AST verification; about 1.8 GB total GPU memory on a 4 GB RTX 3050; 2.06 s average latency.",
    metricBadge: "~1.8 GB total GPU memory // 2.06s avg latency",
    gitUrl: "https://github.com/krutiktikam/omni-math",
    liveUrl: null,
    limitations: "No accuracy evaluation yet; a 50-problem test comparing answers with and without SymPy verification is planned. The 1.8 GB figure is total GPU memory in use during inference, not the app alone.",
    views: ["ai", "data"],
    featuredIn: ["ai"]
  },
  {
    id: "aura-hud",
    title: "AURA HUD",
    tagline: "Offline Desktop Assistant",
    description: "offline desktop assistant, Rust/Tauri shell (6.5 MB idle RAM, main process only), FastAPI sidecar, INT8 Faster-Whisper, local LLM via Ollama.",
    metricBadge: "6.5 MB idle RAM (Rust shell, main process only)",
    gitUrl: "https://github.com/krutiktikam/AURA-HUD",
    liveUrl: null,
    limitations: "The 6.5 MB figure is the Rust shell process only; the WebView and Python sidecar use more. CI, tests and an installable release are in progress.",
    views: ["ai"],
    featuredIn: ["ai"]
  },
  {
    id: "football-anylatics",
    title: "Football Any-latics",
    tagline: "Match Outcome Pipeline",
    description: "Match outcome pipeline: fixture scraper, SQLite, feature engineering, XGBoost home/draw/away probabilities, Streamlit dashboard.",
    metricBadge: "XGBoost probabilities // Streamlit",
    gitUrl: "https://github.com/krutiktikam/footbal-anylatics-project",
    liveUrl: null,
    limitations: null,
    views: ["data", "ai"],
    featuredIn: ["data"]
  },
  {
    id: "poke-architect",
    title: "PokéArchitect",
    tagline: "Competitive Team Builder",
    description: "Competitive Pokémon team builder web application.",
    metricBadge: "Live on Vercel",
    gitUrl: "https://github.com/krutiktikam/poke-architect",
    liveUrl: "https://poke-architect.vercel.app",
    limitations: null,
    views: ["ai", "data"],
    featuredIn: []
  },
  {
    id: "simulations-arm",
    title: "Robotic Arm RL",
    tagline: "Continuous-Control Simulation",
    description: "PPO, 10,000 timesteps, 700-850 FPS headless.",
    metricBadge: "700-850 FPS headless // 10,000 timesteps",
    gitUrl: "https://github.com/krutiktikam/blender-robotic-arm-simulation",
    liveUrl: null,
    limitations: null,
    views: ["ai"],
    featuredIn: []
  },
  {
    id: "bci-neurorehab",
    title: "NeuroRehab-BCI",
    tagline: "Motor Imagery Classifier Baseline",
    description: "Motor imagery EEG classifier baseline.",
    metricBadge: "Baseline Classifier",
    gitUrl: "https://github.com/krutiktikam/BCI-MotorImagery-Pipeline",
    liveUrl: null,
    limitations: null,
    views: ["ai"],
    featuredIn: []
  }
];
