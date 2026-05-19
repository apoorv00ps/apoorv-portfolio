:root {
  color-scheme: dark;
  --bg: #070b10;
  --panel: rgba(12, 15, 18, 0.92);
  --panel-strong: rgba(8, 10, 14, 0.98);
  --border: rgba(44, 255, 168, 0.18);
  --accent: #64ffda;
  --accent-strong: #3be8aa;
  --text: #f0f2f5;
  --muted: #a9b0c6;
  --shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 0.85rem;
}

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top left, rgba(100, 255, 210, 0.14), transparent 18%),
    radial-gradient(circle at 90% 5%, rgba(72, 255, 168, 0.08), transparent 16%),
    linear-gradient(180deg, #070b10 0%, #05060b 52%, #070d11 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(6, 16, 12, 0.86);
  border-bottom: 1px solid rgba(183, 77, 129, 0.12);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
}

.brand {
  font-weight: 800;
  letter-spacing: 0.16em;
  color: var(--accent);
}

.main-nav {
  display: flex;
  gap: 1.35rem;
  flex-wrap: wrap;
}

.main-nav a {
  color: var(--muted);
  font-size: 0.95rem;
  transition: color 180ms ease;
}

.main-nav a:hover {
  color: var(--accent);
}

.menu-toggle {
  display: none;
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(183, 77, 129, 0.18);
  border-radius: 18px;
  background: rgba(8, 12, 16, 0.95);
  align-items: center;
  justify-content: center;
  color: var(--text);
}

.hero {
  padding: 120px 0 100px;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  align-items: center;
}

.hero-copy {
  max-width: 660px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.15rem;
  border-radius: 999px;
  border: 1px solid rgba(44, 255, 168, 0.18);
  background: rgba(9, 11, 16, 0.9);
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.82rem;
}

.hero-title {
  margin: 1.4rem 0 1rem;
  font-size: clamp(3rem, 6vw, 5.4rem);
  line-height: 0.95;
}

.hero-title strong {
  color: var(--accent);
}

.hero-text {
  max-width: 620px;
  color: #b8f7d3;
  font-size: 1.05rem;
  line-height: 1.85;
}

.tagline-line {
  margin-top: 1.75rem;
  font-size: 1.05rem;
  color: #a5ffd7;
}

.tagline-list {
  display: grid;
  gap: 0.65rem;
  margin-top: 1.5rem;
}

.tagline-item {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.95rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(44, 255, 168, 0.12);
  background: rgba(9, 12, 18, 0.86);
  color: var(--text);
}

.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn,
.action-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.6rem;
  border-radius: 999px;
  border: 1px solid rgba(44, 255, 168, 0.22);
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.btn {
  background: linear-gradient(135deg, rgba(100, 255, 210, 0.28), rgba(62, 215, 168, 0.22));
  color: #06110b;
  font-weight: 700;
}

.action-link {
  background: rgba(8, 15, 12, 0.86);
  color: var(--text);
}

.btn:hover,
.action-link:hover,
.menu-toggle:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.hero-meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.meta-card {
  padding: 1.1rem 1.25rem;
  border-radius: 24px;
  background: rgba(10, 20, 16, 0.9);
  border: 1px solid rgba(44, 255, 168, 0.14);
  color: #d3f2db;
}

.meta-card strong {
  display: block;
  margin-bottom: 0.45rem;
  color: var(--text);
}

.hero-panel {
  padding: 1.25rem;
  border-radius: 34px;
  background: linear-gradient(180deg, rgba(13, 26, 19, 0.96), rgba(8, 15, 12, 0.98));
  border: 1px solid rgba(44, 255, 168, 0.16);
  position: relative;
  overflow: hidden;
}

.hero-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top right, rgba(44, 255, 168, 0.14), transparent 36%);
  pointer-events: none;
}

.hero-visual {
  border-radius: 28px;
  background: linear-gradient(180deg, #0c1f18 0%, #07110b 100%);
  min-height: 480px;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
}

.hero-visual::before {
  content: '';
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: rgba(44, 255, 168, 0.16);
  top: -8%;
  right: -18%;
  filter: blur(40px);
}

.hero-visual::after {
  content: '';
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: rgba(44, 255, 168, 0.18);
  bottom: -8%;
  left: -15%;
  filter: blur(32px);
}

.placeholder-portrait {
  width: min(100%, 420px);
  aspect-ratio: 4 / 5;
  display: block;
  object-fit: cover;
  background: none;
  border-radius: 32px;
  box-shadow: inset 0 0 0 1px rgba(44, 255, 168, 0.16);
  position: relative;
}

.placeholder-portrait::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 55% 35%, rgba(255, 255, 255, 0.06), transparent 30%);
}

.section {
  padding: 3.5rem 0;
}

.section-heading {
  font-size: clamp(2.2rem, 4vw, 4rem);
  margin: 0;
  max-width: 12ch;
}

.section-intro {
  margin: 1rem 0 0;
  max-width: 680px;
  color: #b7d8c5;
  line-height: 1.85;
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
}

.section-grid {
  display: grid;
  gap: 1.75rem;
}

.cards-grid {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.cards-grid.three {
  grid-template-columns: 1fr;
}

.card-panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 1.6rem;
  box-shadow: var(--shadow);
}

.card-panel h3 {
  margin: 0 0 0.75rem;
}

.card-panel p {
  margin: 0;
  color: #c1d9c6;
}

.skill-group {
  display: grid;
  gap: 1.05rem;
}

.skill-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1rem;
  border-radius: 999px;
  background: rgba(9, 12, 16, 0.9);
  border: 1px solid rgba(44, 255, 168, 0.14);
  color: var(--text);
  font-size: 0.95rem;
}

.progress-bar {
  height: 0.55rem;
  border-radius: 999px;
  background: rgba(38, 100, 82, 0.35);
  overflow: hidden;
  margin-top: 0.75rem;
}

.progress-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #64ffda, #3be8aa);
}

.timeline {
  display: grid;
  gap: 1.25rem;
}

.timeline-item {
  display: grid;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 28px;
  background: rgba(10, 20, 16, 0.92);
  border: 1px solid rgba(183, 77, 129, 0.16);
}

.timeline-item time {
  color: var(--accent);
  font-size: 0.95rem;
}

.timeline-item h3 {
  margin: 0;
}

.accordion {
  display: grid;
  gap: 1.25rem;
}

.accordion-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.4rem;
  border-radius: 26px;
  background: rgba(11, 18, 24, 0.92);
  border: 1px solid rgba(183, 77, 129, 0.14);
}

.accordion-header button {
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 1.05rem;
}

.accordion-panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 320ms ease, opacity 320ms ease;
  opacity: 0;
}

.accordion-panel.open {
  max-height: 1200px;
  opacity: 1;
}

.project-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.project-row {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.25rem;
  scroll-snap-type: x mandatory;
}

.project-row::-webkit-scrollbar {
  height: 10px;
}

.project-row::-webkit-scrollbar-thumb {
  background: rgba(44, 255, 168, 0.18);
  border-radius: 999px;
}

.project-row::-webkit-scrollbar-track {
  background: transparent;
}

.project-category-header {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.95rem;
}

.project-category-title {
  margin: 0;
  font-size: 1.15rem;
  color: var(--accent);
}

.scroll-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(100, 255, 210, 0.16);
  color: #ffffff;
  font-weight: 900;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-shadow: 0 0 8px rgba(100, 255, 210, 0.85), 0 0 18px rgba(100, 255, 210, 0.25);
  border: 1px solid rgba(100, 255, 210, 0.35);
  box-shadow: 0 0 30px rgba(100, 255, 210, 0.18);
  width: fit-content;
}

.scroll-hint::after {
  content: '→';
  display: inline-block;
  transform: translateX(2px);
  color: #a9ffdd;
  text-shadow: 0 0 12px rgba(169, 255, 221, 0.95);
}

.project-category-copy {
  margin: 0;
  color: #b8f7d3;
}

.project-card {
  display: grid;
  gap: 1rem;
  min-width: 320px;
  flex: 0 0 320px;
  scroll-snap-align: start;
  border-radius: 26px;
  border: 1px solid rgba(44, 255, 168, 0.14);
  background: rgba(9, 16, 22, 0.94);
  padding: 1.25rem;
}

.project-thumb {
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(44, 255, 168, 0.18), rgba(10, 12, 17, 0.96));
  position: relative;
  overflow: hidden;
}

.project-thumb::before {
  content: '';
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 36px;
  background: radial-gradient(circle at 25% 30%, rgba(44, 255, 168, 0.22), transparent 38%);
  top: 8%;
  left: 8%;
}

.project-thumb-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(209, 255, 236, 0.95);
  font-size: 0.95rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.project-tag {
  display: inline-flex;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(44, 255, 168, 0.12);
  color: #c8ffe7;
  font-size: 0.82rem;
}

.project-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-action {
  padding: 0.85rem 1rem;
  border-radius: 18px;
  border: 1px solid rgba(44, 255, 168, 0.12);
  background: rgba(9, 12, 17, 0.86);
  color: var(--text);
}

.stat-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.stat-card {
  padding: 1.5rem;
  border-radius: 28px;
  background: rgba(10, 18, 24, 0.92);
  border: 1px solid rgba(183, 77, 129, 0.14);
}

.stat-card p {
  margin: 0;
}

.lang-grid {
  display: grid;
  gap: 1rem;
}

.lang-card {
  padding: 1.3rem 1.4rem;
  border-radius: 24px;
  background: rgba(10, 18, 24, 0.94);
  border: 1px solid rgba(183, 77, 129, 0.14);
}

.lang-card h3 {
  margin: 0 0 0.75rem;
}

.lang-bar {
  height: 0.6rem;
  border-radius: 999px;
  background: rgba(78, 46, 112, 0.35);
  overflow: hidden;
}

.lang-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #64ffda, #3be8aa);
}

.vision-panel {
  padding: 2rem;
  border-radius: 34px;
  background: linear-gradient(180deg, rgba(14, 27, 20, 0.96), rgba(7, 13, 10, 0.98));
  border: 1px solid rgba(183, 77, 129, 0.12);
}

.contact-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1.2fr 0.8fr;
}

.contact-card,
.contact-form {
  background: rgba(8, 12, 16, 0.93);
  border: 1px solid rgba(183, 77, 129, 0.14);
  border-radius: 28px;
  padding: 1.5rem;
}

.contact-form {
  display: grid;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border-radius: 18px;
  border: 1px solid rgba(183, 77, 129, 0.12);
  background: rgba(7, 12, 15, 0.95);
  color: var(--text);
  padding: 1rem 1.1rem;
  resize: vertical;
}

.footer {
  border-top: 1px solid rgba(183, 77, 129, 0.14);
  padding: 2rem 0 1rem;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-bottom: 0.5rem;
}

.footer-inner p {
  margin: 0;
  color: #a8c9ab;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(183, 77, 129, 0.14);
  background: rgba(8, 12, 16, 0.9);
  color: var(--text);
}

@media (max-width: 960px) {
  .grid-2,
  .cards-grid,
  .project-grid,
  .stat-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .hero {
    padding-top: 90px;
  }
  .hero-copy {
    order: 1;
  }
  .hero-panel {
    order: 2;
  }
  .section-intro {
    font-size: 0.98rem;
  }
  .card-panel h3 {
    font-size: clamp(1.2rem, 4vw, 1.45rem);
  }
  .card-panel p,
  .skill-pill,
  .project-card p,
  .project-card h4 {
    font-size: clamp(0.9rem, 2.2vw, 1rem);
  }
  .skill-pill {
    padding: 0.75rem 0.95rem;
  }
  .project-thumb-text {
    font-size: clamp(0.8rem, 2.5vw, 0.95rem);
  }
}

@media (max-width: 760px) {
  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    right: 1rem;
    left: 1rem;
    background: rgba(8, 12, 16, 0.96);
    border: 1px solid rgba(183, 77, 129, 0.14);
    border-radius: 24px;
    box-shadow: var(--shadow);
    padding: 1rem;
    flex-direction: column;
    gap: 0.85rem;
  }

  .main-nav.nav-open {
    display: flex;
  }

  .main-nav a {
    display: block;
    width: 100%;
    padding: 0.85rem 0;
    border-bottom: 1px solid rgba(183, 77, 129, 0.08);
  }

  .main-nav a:last-child {
    border-bottom: none;
  }

  .menu-toggle {
    display: inline-flex;
  }
  .hero-title {
    font-size: clamp(2.6rem, 10vw, 3.6rem);
  }
  .hero-meta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  section {
    padding: 3.5rem 0;
  }
  .hero {
    padding: 90px 0 60px;
  }
}
