# Modern Developer Portfolio & Git Metrics Showcase

A premium, dark-mode glassmorphic developer portfolio website built using **Vite, React, and Vanilla CSS** to showcase your professional projects and live Git metrics to recruiters.

---

## 1. Project Showcase Scope

The website is designed to highlight the actual projects in your workspace:
*   **BCI (Brain-Computer Interface) signal processing:** Projects focused on machine learning and EEG data analyses (`BCI_project` and `BCI_MI_pjt`).
*   **Financial & Architecture Simulations:** `Poke-stocks` and `poke-architect`.
*   **Data Analytics:** Python-based football analytics project (`footbal_anylatics_project`).
*   **Creative Technology & Tool Integration:** `blender_mcp` (Blender tools integration).
*   **Backend Engineering:** `omnimath-backend` API design.

---

## 2. Design System & Aesthetics

We target a premium tech look with smooth micro-animations and a glassmorphic aesthetic:

*   **Obsidian Base Theme:** Background `#0b0f19` (deep space obsidian) and panel background `rgba(20, 24, 33, 0.7)` with `backdrop-filter: blur(12px)`.
*   **Accent Gradients:** Dynamic glowing borders using gradients from cyan `#00f2fe` to blue `#4facfe`.
*   **Modern Typography:** Using the **Outfit** Google Font for high-tech headers and **Inter** for clean, readable body copy.
*   **Interactive Glow Effects:** Projects and metrics cards glow on hover using custom CSS box-shadows.

---

## 3. Dynamic Git Metrics Plan

The metrics module displays your live GitHub stats directly to recruiters:

```
┌────────────────────────────────────────────────────────┐
│                    GITHUB ACTIVITY                     │
├───────────────────────────┬────────────────────────────┤
│  Top Languages            │  Longest Commit Streak     │
│  [HTML / JS / Python]     │  [X Days]                  │
├───────────────────────────┴────────────────────────────┤
│  Stats Overview: Total Stars, Commits, PRs             │
└────────────────────────────────────────────────────────┘
```

*   **GitHub Streak Stats Card:** Tracks active development consistency.
*   **GitHub Stats Card:** Shows total commits, pull requests, stars, and contributions.
*   **Most Used Languages Card:** Graph/doughnut representation of language usage.
*   *Note: These will load dynamically from the GitHub API or embeddable Markdown badges themed to match our dark obsidian skin.*

---

## 4. Component Architecture

The React app will be organized as follows:

```
src/
├── assets/             # SVGs, images, and resume PDF
├── components/         # Reusable UI elements
│   ├── GitMetrics.jsx  # GitHub API metrics widget
│   ├── ProjectCard.jsx # Glow-on-hover project card
│   ├── ProjectGrid.jsx # Filterable showcase with search
│   └── Contact.jsx     # Recruiter Quick Action forms
├── App.jsx             # Main layout assembly
├── App.css             # Component-specific styles
├── index.css           # Global variables & reset rules
└── main.jsx            # Entry point
```

---

## 5. Development Roadmap

*   [ ] **Phase 1: Foundation & CSS Reset** (Setup colors, fonts, global grid variables, and header nav).
*   [ ] **Phase 2: Hero & About Me** (Draft copy, resume download action, CTA buttons).
*   [ ] **Phase 3: Filterable Project Showcase** (Build grid with search and category tags for BCI, AI, Python, Web).
*   [ ] **Phase 4: Live GitHub Metrics integration** (Setup API/card styling using your GitHub handle).
*   [ ] **Phase 5: Contact & Recruiter Quick Actions** (Add simple mailto and social link buttons).
*   [ ] **Phase 6: Verification & Deployment** (Validate responsiveness and deploy to GitHub Pages or Vercel).

---

## 6. How to Run Locally

Once dependencies are installed:
```bash
# Start Vite development server
npm run dev

# Build for production
npm run build
```
