// Strictly factual configuration for AI and Data views.
// No invented claims or numbers.

export const viewsData = {
  ai: {
    id: "ai",
    label: "AI / Backend",
    toggleText: "Switch to Data Analyst view",
    headline: "AI & BACKEND ENGINEER",
    subheadline: "Local LLMs, RAG and computer vision on a 4 GB GPU. Open to junior AI/backend and data analyst roles, remote or Mumbai.",
    resumeFile: "./resumes/resume-ai-backend.pdf",
    resumeDownloadName: "Krutik_Tikam_Resume_AI_Backend.pdf",
    resumeLabel: "AI & Backend Resume",
    
    stats: [
      {
        value: "84.4%",
        caption: "mAP@50, Sports Analyser, validation split"
      },
      {
        value: "12,393",
        caption: "text chunks, OmniMath-Local index"
      },
      {
        value: "2.06 s",
        caption: "average latency, OmniMath-Local"
      },
      {
        value: "6.5 MB",
        caption: "idle RAM, AURA HUD Rust shell (main process only)"
      }
    ],

    skillsGroups: [
      {
        category: "AI/ML",
        skills: "PyTorch, YOLOv8, OpenCV, ByteTrack, Kalman Filtering, RAG (ChromaDB, sentence-transformers), Local LLMs (Ollama), Faster-Whisper, SymPy"
      },
      {
        category: "Backend",
        skills: "Python, FastAPI (Async), Flask, Node.js, PostgreSQL, SQLite (WAL), REST, WebSockets"
      },
      {
        category: "Other",
        skills: "Rust (Tauri), React, TypeScript, Git/GitHub Actions, Postman"
      }
    ],

    certifications: [
      "AWS Data Engineering for Generative AI Applications",
      "AWS Connecting Systems and Machines for Industrial Manufacturing",
      "Microsoft Azure Cloud Computing (SDP)",
      "DeepLearning.AI Machine Learning Specialization",
      "TensorFlow Developer Certificate"
    ],

    experience: [
      {
        period: "Dec 2025 to Feb 2026",
        role: "Software Engineering Intern",
        organization: "Talent Corner HR Services",
        description: "Flask REST APIs, OTP login, PostgreSQL schema changes in a 60,000+ profile database."
      }
    ],

    education: [
      {
        period: "2023 to 2026",
        role: "B.Sc. Computer Science (AI & ML)",
        organization: "Nagandas Khandwala College",
        description: "Nagandas Khandwala College, B.Sc. Computer Science (AI & ML), 2023 to 2026."
      }
    ]
  },

  data: {
    id: "data",
    label: "Data Analyst",
    toggleText: "Switch to AI & Backend view",
    headline: "AI & BACKEND ENGINEER",
    subheadline: "Local LLMs, RAG and computer vision on a 4 GB GPU. Open to junior AI/backend and data analyst roles, remote or Mumbai.",
    resumeFile: "./resumes/resume-data-analytics.pdf",
    resumeDownloadName: "Krutik_Tikam_Resume_Data_Analytics.pdf",
    resumeLabel: "Data & Analytics Resume",
    
    stats: [
      {
        value: "84.4%",
        caption: "mAP@50, Sports Analyser, validation split"
      },
      {
        value: "12,393",
        caption: "text chunks, OmniMath-Local index"
      },
      {
        value: "2.06 s",
        caption: "average latency, OmniMath-Local"
      },
      {
        value: "60,000+",
        caption: "profiles, PostgreSQL database at Talent Corner"
      }
    ],

    skillsGroups: [
      {
        category: "Analytics",
        skills: "Python (Pandas, NumPy), SQL (PostgreSQL, SQLite), Power BI, Tableau, Streamlit, scikit-learn, XGBoost"
      },
      {
        category: "Data Engineering",
        skills: "Web scraping and ETL pipelines, FastAPI, Flask, REST APIs"
      },
      {
        category: "Computer Vision",
        skills: "YOLOv8, OpenCV, object tracking"
      }
    ],

    certifications: [
      "AWS Data Engineering for Generative AI Applications",
      "AWS Connecting Systems and Machines for Industrial Manufacturing",
      "Microsoft Azure Cloud Computing (SDP)",
      "DeepLearning.AI Machine Learning Specialization",
      "TensorFlow Developer Certificate"
    ],

    experience: [
      {
        period: "Aug to Oct 2026",
        role: "Wyscout Analyst",
        organization: "Hudl India",
        description: "Sports telemetry and match analysis with Wyscout."
      },
      {
        period: "Dec 2025 to Feb 2026",
        role: "Software Engineering Intern",
        organization: "Talent Corner HR Services",
        description: "Flask REST APIs, OTP login, PostgreSQL schema changes in a 60,000+ profile database."
      }
    ],

    education: [
      {
        period: "2023 to 2026",
        role: "B.Sc. Computer Science (AI & ML)",
        organization: "Nagandas Khandwala College",
        description: "Nagandas Khandwala College, B.Sc. Computer Science (AI & ML), 2023 to 2026."
      }
    ]
  }
};

export const howIWorkSteps = [
  {
    step: "01",
    badge: "Build",
    text: "Small local-first systems on a 4 GB GPU."
  },
  {
    step: "02",
    badge: "Measure",
    text: "Latency, memory and accuracy on real hardware."
  },
  {
    step: "03",
    badge: "Verify",
    text: "SymPy and AST checks; tests and CI in progress."
  },
  {
    step: "04",
    badge: "Document",
    text: "READMEs with limits and next steps."
  }
];

export const contactInfo = {
  email: "krutiktikam7@gmail.com",
  github: "https://github.com/krutiktikam",
  linkedin: "https://linkedin.com/in/krutik-tikam-95339b286"
};
