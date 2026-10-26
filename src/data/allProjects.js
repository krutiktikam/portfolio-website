// Honest project catalog for junior AI/Backend and Data Analyst portfolio
// Facts only - no invented numbers or claims.

export const featuredProjects = [
  {
    id: "sports-analyser",
    title: "Sports Analyser",
    tagline: "Soccer broadcast computer vision & tracking",
    description: "YOLOv8 fine-tuned on soccer broadcast footage, 84.4% mAP@50 on the validation split (92.0% on players); fused tracker with MobileNetV3 re-ID and camera-motion compensation; homography onto a 2D pitch.",
    gitUrl: "https://github.com/krutiktikam/Sports-Analyser",
    liveUrl: null,
    limitations: "ID-swap result (0 cross-team swaps) was measured on one 120-frame test clip only; no standard tracking benchmark (such as IDF1) yet. The 84.4% mAP@50 is on the validation split. Next: held-out test evaluation and tracking metrics.",
    specs: {
      stack: "YOLOv8, ByteTrack, MobileNetV3, OpenCV",
      focus: "Soccer broadcast tracking & homography",
      result: "84.4% mAP@50 (val split), 92.0% players",
      status: "Fine-tuned & validated"
    }
  },
  {
    id: "omnimath-local",
    title: "OmniMath-Local",
    tagline: "Local mathematical RAG & SymPy verification",
    description: "DeepSeek-R1 1.5B via Ollama, RAG over 12,393 text chunks in ChromaDB, SymPy/AST verification; about 1.8 GB total GPU memory on a 4 GB RTX 3050; 2.06 s average latency.",
    gitUrl: "https://github.com/krutiktikam/omni-math",
    liveUrl: null,
    limitations: "No accuracy evaluation yet; a 50-problem test comparing answers with and without SymPy verification is planned. The 1.8 GB figure is total GPU memory in use during inference, not the app alone.",
    specs: {
      stack: "DeepSeek-R1 1.5B, Ollama, ChromaDB, SymPy",
      focus: "Local mathematical RAG & truth layer",
      result: "~1.8 GB total GPU memory, 2.06s latency",
      status: "Local inference prototype"
    }
  },
  {
    id: "aura-hud",
    title: "AURA HUD",
    tagline: "Offline desktop assistant",
    description: "offline desktop assistant, Rust/Tauri shell (6.5 MB idle RAM, main process only), FastAPI sidecar, INT8 Faster-Whisper, local LLM via Ollama.",
    gitUrl: "https://github.com/krutiktikam/AURA-HUD",
    liveUrl: null,
    limitations: "The 6.5 MB figure is the Rust shell process only; the WebView and Python sidecar use more. CI, tests and an installable release are in progress.",
    specs: {
      stack: "Rust (Tauri v2), FastAPI, Faster-Whisper, Ollama",
      focus: "Offline desktop assistant & voice input",
      result: "6.5 MB idle RAM (Rust shell, main process)",
      status: "CI & release in progress"
    }
  }
];

export const moreProjects = [
  {
    id: "poke-architect",
    title: "PokéArchitect",
    description: "Competitive Pokémon team builder web application.",
    badge: "Live Web App",
    gitUrl: "https://github.com/krutiktikam/poke-architect",
    liveUrl: "https://poke-architect.vercel.app"
  },
  {
    id: "football-anylatics",
    title: "Football Any-latics",
    description: "Match outcome pipeline: fixture scraper, SQLite, feature engineering, XGBoost home/draw/away probabilities, Streamlit dashboard.",
    badge: "Match Outcome Pipeline",
    gitUrl: "https://github.com/krutiktikam/footbal-anylatics-project",
    liveUrl: null
  },
  {
    id: "simulations-arm",
    title: "Robotic Arm RL",
    description: "PPO, 10,000 timesteps, 700-850 FPS headless.",
    badge: "Continuous Control",
    gitUrl: "https://github.com/krutiktikam/blender-robotic-arm-simulation",
    liveUrl: null
  },
  {
    id: "bci-neurorehab",
    title: "NeuroRehab-BCI",
    description: "baseline",
    badge: "EEG Classifier",
    gitUrl: "https://github.com/krutiktikam/BCI-MotorImagery-Pipeline",
    liveUrl: null
  }
];
