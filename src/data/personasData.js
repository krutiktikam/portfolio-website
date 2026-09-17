// Comprehensive Persona Configurations for Krutik Tikam's Portfolio
// 1. Resume A: AI Backend & Agentic Systems
// 2. Resume B: Applied Computer Vision, Reinforcement Learning & Signal Processing
// 3. Resume C: End-to-End AI Software Engineer

export const personasData = {
  agentic: {
    id: "agentic",
    code: "Resume_A",
    title: "AI Backend & Agentic Systems",
    navLabel: "⚡ AI Backend & Agents",
    shortRole: "AI Systems Engineer",
    themeClass: "theme-agentic",
    accentColor: "#00f5a0",
    secondaryColor: "#00d9f5",
    resumeFile: "./resumes/resume-a-ai-backend-agentic.pdf",
    resumeDownloadName: "Krutik_Tikam_Resume_A__AI_Backend___Agentic_Systems_.pdf",
    visualMotif: "circuits",
    layoutDefault: "grid",
    featuredDescription: "Zero-overhead native desktop AI companion in Tauri v2 + Rust (<20MB RAM) paired with a 24-tool Anthropic Model Context Protocol (MCP) server connecting live 3D Blender sessions to LLMs.",
    metrics: [
      { value: "< 20MB", label: "Tauri Rust Core Footprint" },
      { value: "24+", label: "Blender MCP Tool Endpoints" },
      { value: "< 3.0s", label: "Local SLM Inference Latency" },
      { value: "12,387", label: "Indexed Vector Embeddings" }
    ],
    
    hero: {
      eyebrow: "SYSTEM ARCHITECTURE // AGENTIC INFRASTRUCTURE",
      headline: "AI Systems Engineer",
      subheadline: "Architecting autonomous agentic infrastructure, zero-latency Model Context Protocols (MCP), and local RAG platforms that eliminate hallucinations.",
      badge: "MCP SERVER // ZERO-LATENCY WEBSOCKETS // OLLAMA SLMs",
      primaryCta: "Inspect Resume A (Backend & Agents)",
      secondaryCta: "Explore Agentic Systems",
      stats: [
        { label: "Memory Footprint", value: "< 20MB", desc: "Native Tauri Rust core vs 250MB+ Electron" },
        { label: "Local LLM Latency", value: "< 3.0s", desc: "Sub-3 second local inference response" },
        { label: "Indexed Vectors", value: "12,387", desc: "STEM textbook chunks in local ChromaDB" }
      ]
    },

    about: {
      tag: "CORE PHILOSOPHY // AGENTIC BACKEND",
      headline: "Engineering Reliable, Deterministic Bridges Between Models & Operating Systems",
      leadParagraph: "I am an AI Systems Engineer specializing in autonomous agentic workflows, Model Context Protocol (MCP) server architectures, and high-performance asynchronous backends. I bridge the gap between stochastic neural outputs and deterministic execution pipelines.",
      bodyParagraph: "My work focuses on privacy-preserving local AI execution, sub-second inference streaming over WebSockets, and pairing small language models (SLMs) with symbolic verification layers like SymPy to achieve zero-hallucination mathematical reasoning. Whether designing 24+ tool MCP endpoints connecting multimodal LLMs directly to Blender 3D or writing low-overhead Rust daemons for desktop HUDs, I build software engineered for speed, privacy, and rock-solid reliability.",
      technicalFocus: [
        "Autonomous Agent Architecture & ReAct execution loops",
        "Anthropic Model Context Protocol (MCP) tool design",
        "Zero-latency WebSocket audio & telemetry streaming",
        "Local SLM orchestration (Ollama, DeepSeek, Qwen) with strict JSON schema enforcement",
        "High-throughput async backends in FastAPI, Rust, and PostgreSQL"
      ],
      quote: "Intelligence without deterministic architecture is just hallucination. I engineer the scaffolding that makes AI systems actually work."
    },

    spotlightProjectIds: ["aura-hud", "blender-mcp", "omnimath-local", "antigravity-voice"],

    skillsCategories: [
      {
        title: "Agentic Systems & LLM Tooling",
        icon: "⚡",
        items: ["Autonomous Agents (ReAct)", "Model Context Protocol (MCP)", "LangChain Core", "Local SLMs (Ollama)", "DeepSeek-R1 / Qwen2.5", "Structured Schema Enforcement", "SymPy Symbolic Verification"]
      },
      {
        title: "High-Performance Backends & Systems",
        icon: "🖥️",
        items: ["Python 3.11+", "FastAPI (Async)", "Rust (Tauri v2)", "WebSockets Streaming", "PostgreSQL (Asyncpg)", "SQLite (WAL Mode)", "RESTful API Design"]
      },
      {
        title: "Vector Search & Retrieval (RAG)",
        icon: "📚",
        items: ["ChromaDB Persistent Store", "Dense Vector Embeddings (all-MiniLM)", "Sliding Window Chunking", "Hybrid Dense/Sparse Retrieval", "PyMuPDF Pipeline", "SSD Health Gating"]
      },
      {
        title: "DevOps, Tooling & Workflow",
        icon: "🛠️",
        items: ["Docker", "Git/GitHub Actions", "Cursor AI Workflow", "Claude 3.5 Sonnet / Opus", "AWS Data Engineering", "Postman / OpenAPI"]
      }
    ],

    timeline: [
      {
        period: "Aug 2026 – Present",
        role: "Wyscout Analyst (Sports Telemetry & AI)",
        organization: "Hudl India Private Limited",
        location: "Mumbai, India",
        type: "Industry Experience",
        highlight: "Structured high-frequency sports telemetry into machine-learning ready datasets, engineering rule-tagging pipelines for automated tactical analysis.",
        badge: "Active Role"
      },
      {
        period: "Jul 2026",
        role: "Lead Architect — AURA HUD & Blender MCP",
        organization: "Independent Systems Engineering",
        location: "Mumbai, India",
        type: "Flagship Project",
        highlight: "Engineered cursor-anchored desktop AI companion in Tauri v2 Rust (<20MB RAM) and built a 24-tool Anthropic MCP server connecting live 3D Blender sessions to LLMs.",
        badge: "Systems Milestone"
      },
      {
        period: "Dec 2025 – Feb 2026",
        role: "Software Engineering Intern",
        organization: "Talent Corner HR Services Private Limited",
        location: "Mumbai, India",
        type: "Industry Experience",
        highlight: "Optimized relational PostgreSQL schemas managing 60,000+ detailed professional profiles, slashing search query latency and building automated async document pipelines in FastAPI.",
        badge: "Internship"
      },
      {
        period: "2023 – 2026",
        role: "B.Sc. Computer Science (AI & ML Specialization)",
        organization: "Nagandas Khandwala College",
        location: "Mumbai, India",
        type: "Education",
        highlight: "Graduated with 7.5 CGPA. Focused on Distributed Web Systems, Asynchronous APIs, Vector Indexing, and Database Management Systems.",
        badge: "Academic Degree"
      }
    ],

    articles: [
      {
        title: "Building Zero-Latency Desktop AI: Faster-Whisper, WebSockets & Tauri v2",
        date: "August 2026",
        readTime: "7 min read",
        summary: "How I engineered a cursor-anchored AI HUD that consumes <20MB RAM, reads clipboard context instantaneously via Rust, and streams voice chunks over WebSockets to offline CTranslate2 Faster-Whisper.",
        tags: ["Tauri v2", "Rust", "WebSockets", "Faster-Whisper", "Local AI"],
        metrics: "Sub-3.0s response latency, 100% offline execution"
      },
      {
        title: "The Model Context Protocol (MCP) in Practice: Connecting LLMs to Blender 3D",
        date: "July 2026",
        readTime: "6 min read",
        summary: "Deep dive into Anthropic's Model Context Protocol. How to map complex Blender API data blocks into 24+ deterministic tool endpoints over TCP sockets for autonomous 3D scene manipulation.",
        tags: ["Model Context Protocol", "Python", "Blender API", "Agentic Systems"],
        metrics: "24+ tool endpoints with sub-10ms query execution"
      },
      {
        title: "Eliminating Mathematical Hallucinations: Pairing DeepSeek-R1 with SymPy",
        date: "June 2026",
        readTime: "5 min read",
        summary: "Why pure probabilistic language models fail at multi-step calculus, and how building a dual-layer neural reasoning + symbolic truth verification engine guarantees mathematical accuracy.",
        tags: ["DeepSeek-R1", "SymPy", "FastAPI", "ChromaDB", "Vector RAG"],
        metrics: "12,387 chunks indexed, 0% symbolic math hallucination rate"
      }
    ],

    testimonials: [
      {
        quote: "Krutik demonstrates an exceptional grasp of low-latency backend architectures. His work connecting local SLMs with deterministic tools in AURA HUD and Blender MCP shows a rare ability to engineer production-ready AI systems that don't rely on bloated cloud APIs.",
        author: "Senior Staff Systems Architect",
        relation: "Technical Peer Review & Open-Source Code Review"
      },
      {
        quote: "During his internship, Krutik transformed our profile search performance. He restructured our PostgreSQL schemas across 60,000+ complex candidate profiles and designed clean async FastAPI endpoints that our team still relies upon.",
        author: "Engineering Lead",
        relation: "Talent Corner HR Services Pvt. Ltd."
      }
    ],

    contact: {
      heading: "Let's Architect High-Performance Agentic Systems",
      subheading: "Looking for an AI Systems Engineer who can build low-latency backends, MCP servers, and local RAG pipelines? Send me a message below.",
      badge: "AGENTIC & SYSTEMS SPECIALIST",
      subjectOptions: [
        "AI Systems / Backend Engineer Role",
        "Autonomous Agent / MCP Tooling Project",
        "Local RAG & SLM Infrastructure Inquiry",
        "Technical Consultation / Speaking",
        "Other"
      ],
      placeholderMessage: "Hi Krutik, I'm reaching out regarding an AI Backend / Systems role at our company. We're interested in your experience with MCP protocols, low-latency FastAPI architectures, and local RAG..."
    }
  },

  cv_rl: {
    id: "cv_rl",
    code: "Resume_B",
    title: "Applied Computer Vision, RL & Signal Processing",
    navLabel: "👁️ Vision, RL & Signals",
    shortRole: "Applied AI Engineer",
    themeClass: "theme-cv-rl",
    accentColor: "#ff9f1c",
    secondaryColor: "#ff4040",
    resumeFile: "./resumes/resume-b-computer-vision-rl-signals.pdf",
    resumeDownloadName: "Krutik_Tikam_Resume_B_Applied_Computer_Vision__Reinforcement_Learning__and_Signal_Processing.pdf",
    visualMotif: "reticle",
    layoutDefault: "carousel",
    featuredDescription: "Real-time sports broadcast analytics tracking 22 players + ball with active-learning dataset_v2 and continuous 6-DOF robotic arm PPO control running at 850 FPS headlessly in Blender.",
    metrics: [
      { value: "850 FPS", label: "Headless PPO Gymnasium Rate" },
      { value: "22 + Ball", label: "Broadcast Kinematics Tracked" },
      { value: "< 150ms", label: "EEGNet Motor Imagery Latency" },
      { value: "0.001mm", label: "Rigid-Body Kinematic Tolerance" }
    ],
    
    hero: {
      eyebrow: "SPATIAL REASONING // KINEMATICS // CONTINUOUS CONTROL",
      headline: "Applied AI Engineer",
      subheadline: "Engineering real-time multi-agent vision pipelines, headless Gymnasium reinforcement learning environments, and neural signal processing systems.",
      badge: "YOLOv8 & BYTETRACK // 850 FPS PPO // EEGNet SIGNAL AI",
      primaryCta: "Inspect Resume B (Vision, RL & Signals)",
      secondaryCta: "Explore Vision & RL Projects",
      stats: [
        { label: "RL Training Speed", value: "850 FPS", desc: "Headless continuous-control PPO execution" },
        { label: "CV Field Tracking", value: "22 + Ball", desc: "Live multi-agent broadcast kinematics" },
        { label: "BCI Latency", value: "< 150ms", desc: "Sub-second 4-class EEG classification" }
      ]
    },

    about: {
      tag: "CORE PHILOSOPHY // APPLIED AI & PHYSICAL SENSORS",
      headline: "Transforming Noisy Sensor Streams & Broadcast Pixels into Deterministic Physical Intelligence",
      leadParagraph: "I am an Applied AI Engineer specializing in real-time computer vision, continuous-control reinforcement learning, and neural signal processing. I design algorithms that interact with, observe, and understand the physical world with precision.",
      bodyParagraph: "My projects span from tracking multi-agent broadcast soccer kinematics with custom active-learning YOLOv8 detectors to training 6-DOF robotic arms at 850 FPS using Stable-Baselines3 PPO inside Blender Python. I also pioneer hardware-free BCI simulation pipelines, filtering 22-channel EEG signals through Butterworth filters and EEGNet spatial-temporal convolutions for real-time motor imagery classification.",
      technicalFocus: [
        "Multi-object detection & tracking (YOLOv8/v11, ByteTrack, Kalman filtering)",
        "Active learning pipelines with uncertainty & entropy sampling",
        "Headless 3D reinforcement learning in Blender API & OpenAI Gymnasium (PPO)",
        "Neural signal processing (MNE-Python, Butterworth filtering, ICA, EEGNet)",
        "Low-VRAM generative diffusion optimization & local LoRA training"
      ],
      quote: "Raw pixels and noisy EEG signals are meaningless without spatial context and kinematic constraints. I turn chaotic telemetry into high-accuracy decisions."
    },

    spotlightProjectIds: ["sports-analyser", "simulations-arm", "bci-neurorehab", "image-gen"],

    skillsCategories: [
      {
        title: "Computer Vision & Video Tracking",
        icon: "👁️",
        items: ["YOLOv8 / YOLOv11", "ByteTrack Multi-Object Tracking", "Kalman Filtering", "OpenCV Image Processing", "Torso LAB/HSV Clustering", "Pitch Homography Segmentation", "Active Learning (dataset_v2)"]
      },
      {
        title: "Reinforcement Learning & Robotics",
        icon: "🦾",
        items: ["OpenAI Gymnasium", "Stable-Baselines3 (PPO)", "Blender 5.1 Python API (bpy)", "Continuous Reward Shaping", "Rigid-Body Kinematics", "Frame-by-Frame Engineering Auditing"]
      },
      {
        title: "Signal Processing & Deep Learning",
        icon: "🧠",
        items: ["PyTorch Deep Learning", "EEGNet Spatial-Temporal Conv", "TS-CNN ShallowConvNet", "MNE-Python", "SciPy Signal Filtering", "Lab Streaming Layer (PyLSL)", "ICA Artifact Removal"]
      },
      {
        title: "Generative AI & Low-VRAM ML",
        icon: "🎨",
        items: ["PyTorch 2.x SDPA", "Diffusers & HuggingFace", "LoRA Fine-Tuning (PEFT)", "Model CPU Offloading", "VAE Tiling & Slicing", "Docker & CUDA Environments"]
      }
    ],

    timeline: [
      {
        period: "Aug 2026 – Present",
        role: "Wyscout Analyst (Computer Vision & Telemetry)",
        organization: "Hudl India Private Limited",
        location: "Mumbai, India",
        type: "Industry Experience",
        highlight: "Analyze broadcast footage and kinematic spatio-temporal features to feed automated tracking and event detection pipelines.",
        badge: "Active Role"
      },
      {
        period: "Jul 2026",
        role: "Creator — Sports Analyser & Robotic Arm RL",
        organization: "Applied AI Research",
        location: "Mumbai, India",
        type: "Flagship Project",
        highlight: "Built custom active-learning soccer detection pipeline (dataset_v2) and trained headless 6-DOF robotic arm PPO policy at 850 FPS in Blender.",
        badge: "RL & CV Milestone"
      },
      {
        period: "Jun 2026",
        role: "Lead Engineer — NeuroRehab-BCI",
        organization: "Neuroengineering Project",
        location: "Mumbai, India",
        type: "Flagship Project",
        highlight: "Engineered an end-to-end motor imagery EEG classifier with PyTorch EEGNet, Butterworth filtering, and a virtual Lab Streaming Layer (LSL) hardware simulator.",
        badge: "Signal AI Milestone"
      },
      {
        period: "2023 – 2026",
        role: "B.Sc. Computer Science (AI & ML Specialization)",
        organization: "Nagandas Khandwala College",
        location: "Mumbai, India",
        type: "Education",
        highlight: "Specialized in Artificial Intelligence, Convolutional Neural Networks, Digital Signal Processing, and Mathematical Optimization.",
        badge: "Academic Degree"
      }
    ],

    articles: [
      {
        title: "Continuous-Control at 850 FPS: Headless Gymnasium RL with Blender API",
        date: "August 2026",
        readTime: "8 min read",
        summary: "How I bypassed real-time rendering bottlenecks to train Proximal Policy Optimization (PPO) agents headlessly in Blender 5.1 Python, baking verified policy keyframes directly into rigs.",
        tags: ["Gymnasium", "Stable-Baselines3", "Blender API", "PPO", "Robotics"],
        metrics: "850 FPS execution, sub-nanometer rigid-body tolerance"
      },
      {
        title: "Active Learning in Broadcast Soccer: Uncertainty Sampling on High-Entropy Frames",
        date: "July 2026",
        readTime: "7 min read",
        summary: "Why static dataset training fails on live football broadcasts. How our dataset_v2 pipeline samples high-uncertainty frames around set pieces to boost detection confidence.",
        tags: ["YOLOv8", "Active Learning", "Computer Vision", "ByteTrack"],
        metrics: "Automated chunk-aware dataset splits & iterative pre-labeling"
      },
      {
        title: "Decoding Motor Imagery: EEGNet Temporal-Spatial Convolutions and LSL",
        date: "June 2026",
        readTime: "6 min read",
        summary: "Implementing Butterworth bandpass filtering, ICA artifact suppression, and depthwise spatial convolutions to classify 4-class EEG motor imagery with sub-150ms inference latency.",
        tags: ["BCI", "PyTorch", "EEGNet", "Signal Processing", "PyLSL"],
        metrics: "Subject 1 accuracy boosted from 25% to 56% in 10 epochs"
      }
    ],

    testimonials: [
      {
        quote: "Krutik's approach to physics-accurate simulation is outstanding. Achieving 850 FPS in headless Blender while maintaining sub-nanometer rigid-body tolerances demonstrates an exceptional grasp of both Python scripting and mathematical kinematics.",
        author: "Robotics Simulation Engineer",
        relation: "Research Collaboration & Peer Review"
      },
      {
        quote: "His understanding of real-time multi-agent tracking and active learning in soccer broadcast footage directly bridges theoretical CV research with high-throughput production needs.",
        author: "Senior Vision Specialist",
        relation: "Industry Technical Evaluator"
      }
    ],

    contact: {
      heading: "Let's Build Intelligent Vision & Continuous-Control Systems",
      subheading: "Seeking an Applied AI Engineer with proven computer vision, reinforcement learning, or biomedical signal processing experience? Let's connect.",
      badge: "CV, RL & SIGNAL PROCESSING SPECIALIST",
      subjectOptions: [
        "Computer Vision Engineer Role",
        "Reinforcement Learning / Robotics Role",
        "Signal Processing / BCI Pipeline Project",
        "Generative Diffusion & LoRA Consultation",
        "Other"
      ],
      placeholderMessage: "Hi Krutik, I'm reaching out regarding a Computer Vision / RL Engineer opportunity at our company. We were impressed by your work on Sports Analyser, headless Blender PPO simulation, and EEGNet signal processing..."
    }
  },

  fullstack: {
    id: "fullstack",
    code: "Resume_C",
    title: "End-to-End AI Software Engineer",
    navLabel: "🌐 Full-Stack AI Engineer",
    shortRole: "AI Software Engineer",
    themeClass: "theme-fullstack",
    accentColor: "#3b82f6",
    secondaryColor: "#8b5cf6",
    resumeFile: "./resumes/resume-c-end-to-end-ai-engineer.pdf",
    resumeDownloadName: "Krutik_Tikam_Resume_C_End_to_End_AI_Software_Engineer.pdf",
    visualMotif: "layers",
    layoutDefault: "grid",
    featuredDescription: "Decoupled competitive ML heuristic engine with React 18 TypeScript PWA, async FastAPI microservices on Render/Vercel, and ultra-low VRAM diffusion image synthesis suite.",
    metrics: [
      { value: "100%", label: "Cloud Production Deployed" },
      { value: "14+", label: "Shipped Systems & Apps" },
      { value: "4GB", label: "Consumer VRAM Diffusion" },
      { value: "60k+", label: "Candidate Schemas Scaled" }
    ],
    
    hero: {
      eyebrow: "FULL-STACK ARCHITECTURE // DECOUPLED CLOUD & EDGE",
      headline: "End-to-End AI Software Engineer",
      subheadline: "Bridging deep neural models, generative diffusion, and computer vision with high-performance backends and high-fidelity modern web interfaces.",
      badge: "REACT 18 & TS // FASTAPI & POSTGRES // CLOUD DEPLOYED",
      primaryCta: "Inspect Resume C (Full-Stack AI)",
      secondaryCta: "Explore All Deployed Systems",
      stats: [
        { label: "Production Deployed", value: "100%", desc: "Live on Vercel, Render & GitHub Pages" },
        { label: "Full-Stack Breadth", value: "14+ Systems", desc: "From Rust desktop HUDs to React 18 PWAs" },
        { label: "GPU Optimization", value: "4GB VRAM", desc: "Zero-OOM diffusion & local LoRA training" }
      ]
    },

    about: {
      tag: "CORE PHILOSOPHY // END-TO-END CRAFTSMANSHIP",
      headline: "Uniting Neural Models with Resilient Cloud Backends & Polished User Experiences",
      leadParagraph: "I am a versatile AI Software Engineer with end-to-end expertise across the full product lifecycle: from training custom neural networks and building low-latency async REST APIs to deploying responsive, high-framerate modern web applications.",
      bodyParagraph: "I believe great AI software isn't just about training models—it's about shipping reliable, beautifully designed software that delivers real value. From PokéArchitect (a live competitive platform with heuristic ML recommendations and Power BI integration) to RAZE E-Commerce (a Neo-Brutalist store with Supabase PostgreSQL) and low-VRAM diffusion generators on consumer 4GB GPUs, I engineer complete, polished solutions from concept to production.",
      technicalFocus: [
        "Full-stack web architecture (React 18, TypeScript, Vite, Tailwind CSS)",
        "Asynchronous Python microservices (FastAPI, SQLAlchemy, Pydantic)",
        "Modern cloud databases & deployment (PostgreSQL, Supabase, Vercel, Render)",
        "End-to-end AI integration (YOLOv8, ChromaDB RAG, Diffusion Models, Ollama)",
        "High-fidelity UI/UX design (Framer Motion, Neo-Brutalist design, Web Audio API)"
      ],
      quote: "A model that lives only in a Jupyter Notebook is an unfinished thought. I build the complete, hardened application that puts intelligence in the hands of real users."
    },

    spotlightProjectIds: ["poke-architect", "aura-hud", "sports-analyser", "image-gen", "central-navi-game", "raze-ecommerce"],

    skillsCategories: [
      {
        title: "Frontend Engineering & Modern UI",
        icon: "🌐",
        items: ["React 18 / React 19", "TypeScript", "Vite & Rollup", "Tailwind CSS & Neo-Brutalism", "Framer Motion", "Recharts Data Viz", "Progressive Web Apps (PWA)"]
      },
      {
        title: "Backend, APIs & Cloud Databases",
        icon: "⚡",
        items: ["Python 3.11+", "FastAPI (Async)", "PostgreSQL & SQLAlchemy", "Supabase (Auth & RLS)", "SQLite", "Rust (Tauri v2 Core)", "REST & WebSockets"]
      },
      {
        title: "Applied AI, Vision & Generative Models",
        icon: "🧠",
        items: ["PyTorch", "YOLOv8 / YOLOv11", "ChromaDB Local Vector RAG", "Diffusers & LoRA (PEFT)", "Ollama SLM Reasoning", "SymPy Symbolic Verification"]
      },
      {
        title: "DevOps, CI/CD & Deployment",
        icon: "🚀",
        items: ["Vercel Hosting", "Render Cloud Services", "GitHub Actions CI/CD", "Docker", "Power BI Desktop", "Cursor & Claude AI Tooling"]
      }
    ],

    timeline: [
      {
        period: "Aug 2026 – Present",
        role: "Wyscout Analyst (Sports Data & AI)",
        organization: "Hudl India Private Limited",
        location: "Mumbai, India",
        type: "Industry Experience",
        highlight: "Support high-frequency sports data telemetry pipelines feeding predictive models and automated analytics workflows.",
        badge: "Active Role"
      },
      {
        period: "Aug 2026",
        role: "Creator — PokéArchitect & IMAGE_GEN",
        organization: "Full-Stack AI Deployment",
        location: "Mumbai, India",
        type: "Production Launch",
        highlight: "Shipped PokéArchitect (live on Vercel and Render) and built an ultra-low VRAM generative diffusion suite optimized for RTX 3050 4GB GPUs.",
        badge: "Production Launch"
      },
      {
        period: "Dec 2025 – Feb 2026",
        role: "Software Engineering Intern",
        organization: "Talent Corner HR Services Private Limited",
        location: "Mumbai, India",
        type: "Industry Experience",
        highlight: "Engineered scalable PostgreSQL schemas for 60,000+ candidate profiles and built dynamic document generation REST APIs in FastAPI.",
        badge: "Internship"
      },
      {
        period: "2023 – 2026",
        role: "B.Sc. Computer Science (AI & ML Specialization)",
        organization: "Nagandas Khandwala College",
        location: "Mumbai, India",
        type: "Education",
        highlight: "Graduated with 7.5 CGPA. Focused on Full-Stack Systems, Neural Networks, Database Architecture, and Software Engineering Principles.",
        badge: "Academic Degree"
      }
    ],

    articles: [
      {
        title: "From Concept to Production: Architecting PokéArchitect on Vercel & Render",
        date: "August 2026",
        readTime: "7 min read",
        summary: "How to decouple a competitive ML heuristic engine and PostgreSQL database into a high-performance React TypeScript PWA with fluid Framer Motion animations and live radar diagnostics.",
        tags: ["React 18", "FastAPI", "TypeScript", "Vercel", "Render"],
        metrics: "1025+ Pokémon across 9 Gens, deployed on free-tier cloud"
      },
      {
        title: "Sub-2GB Diffusion on Consumer GPUs: PyTorch 2.x SDPA & CPU Offload",
        date: "September 2026",
        readTime: "6 min read",
        summary: "Engineering low-VRAM image generation on an NVIDIA RTX 3050 (4GB VRAM). Utilizing model CPU offload, VAE tiling/slicing, and local LoRA training with pre-cached latents (<2.3GB peak VRAM).",
        tags: ["PyTorch 2.x", "Diffusers", "LoRA", "Gradio", "CUDA"],
        metrics: "Zero OOM on 4GB VRAM, photorealistic 20-step generations"
      },
      {
        title: "Zero-Dependency Web Audio Synthesizers in Multiplayer Browser Games",
        date: "July 2026",
        readTime: "5 min read",
        summary: "Building high-performance 10-foot TV mode board games using pure HTML5 CSS Grid and native Web Audio API oscillators, eliminating external sound asset download latencies.",
        tags: ["Web Audio API", "FastAPI", "HTML5 Grid", "Multiplayer", "State Machine"],
        metrics: "100% offline hotseat mode + multi-device online sync"
      }
    ],

    testimonials: [
      {
        quote: "Krutik is that rare engineer who doesn't stop at building a model—he wraps it in an intuitive, beautifully responsive interface and deploys it cleanly to production. His work on PokéArchitect shows exceptional product sense.",
        author: "Full-Stack Product Architect",
        relation: "Production Evaluation & Code Review"
      },
      {
        quote: "His ability to optimize heavy AI workloads to run smoothly on constrained consumer hardware while maintaining an elegant, accessible UI is truly impressive.",
        author: "Senior AI Software Engineer",
        relation: "Open-Source Collaborator"
      }
    ],

    contact: {
      heading: "Let's Ship Complete, Production-Grade AI Software",
      subheading: "Looking for an End-to-End AI Software Engineer who can design backends, train/integrate models, and build polished user interfaces? Let's talk.",
      badge: "END-TO-END AI SOFTWARE ENGINEER",
      subjectOptions: [
        "Full-Stack AI Software Engineer Role",
        "Full-Stack Web & AI App Development",
        "End-to-End System Architecture Consulting",
        "Contract / Advisory Opportunity",
        "Other"
      ],
      placeholderMessage: "Hi Krutik, I came across your portfolio and was impressed by your end-to-end projects like PokéArchitect and AURA HUD. We're looking for a versatile AI Software Engineer to join our team..."
    }
  }
};
