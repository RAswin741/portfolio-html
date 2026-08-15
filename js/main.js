// ============================================================================
// Icon library — minimal inline SVG paths (stroke-based, 24x24 viewBox)
// ============================================================================
const ICONS = {
  plug: '<path d="M22 9.5 14.5 2M9.5 22 2 14.5M8 3l4.5 4.5M16 21l4.5-4.5M6 12l6 6M12 6l6 6M3 21l4-4M17 7l4-4"/>',
  bot: '<rect x="3" y="8" width="18" height="12" rx="2"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/><path d="M12 8V4M8 4h8"/>',
  brain: '<path d="M9.5 2a2.5 2.5 0 0 0-2.45 2c-1.15.2-2.05 1.2-2.05 2.4 0 .3.05.6.15.85A2.5 2.5 0 0 0 4 9.5c0 1 .6 1.85 1.45 2.25A2.5 2.5 0 0 0 5 13.5 2.5 2.5 0 0 0 7.5 16h.1a2.5 2.5 0 0 0 2.4 2h1V4a2 2 0 0 0-1.5-2Z"/><path d="M14.5 2a2.5 2.5 0 0 1 2.45 2c1.15.2 2.05 1.2 2.05 2.4 0 .3-.05.6-.15.85A2.5 2.5 0 0 1 20 9.5c0 1-.6 1.85-1.45 2.25.3.5.45 1.1.45 1.75A2.5 2.5 0 0 1 16.5 16h-.1a2.5 2.5 0 0 1-2.4 2h-1V4a2 2 0 0 1 1.5-2Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/>',
  workflow: '<rect x="3" y="3" width="8" height="8" rx="2"/><path d="M7 11v3a2 2 0 0 0 2 2h3"/><rect x="14" y="13" width="8" height="8" rx="2"/><path d="M7 8h1"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  server: '<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><line x1="6" y1="7" x2="6.01" y2="7"/><line x1="6" y1="17" x2="6.01" y2="17"/>',
  "brain-circuit": '<path d="M12 2a4 4 0 0 0-4 4v1a3 3 0 0 0-2 2.8V12a3 3 0 0 0 1.5 2.6V16a3 3 0 0 0 3 3h1"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 5a4 4 0 0 1 4 4v10a3 3 0 0 1-3 3"/>',
  sparkles: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  externalLink: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
  alertCircle: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  gitFork: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2a4 4 0 0 1-4 4H10a4 4 0 0 0-4 4M6 9v6"/>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>',
};

function icon(name, size = 20) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="${size}" height="${size}">${ICONS[name] || ""}</svg>`;
}

// ============================================================================
// Theme toggle (persisted via localStorage)
// ============================================================================
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const theme = saved || "dark";
  document.documentElement.setAttribute("data-theme", theme);
})();

document.getElementById("themeToggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// ============================================================================
// Mobile nav
// ============================================================================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => mobileMenu.classList.remove("open"))
);

// ============================================================================
// Scrollspy — highlight active nav link
// ============================================================================
const sections = document.querySelectorAll("section[id], header[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
  let current = "";
  document.querySelectorAll("section[id]").forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) current = section.id;
  });
  navAnchors.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });

// ============================================================================
// Scroll reveal
// ============================================================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "-40px" }
);

function observeReveals() {
  document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => revealObserver.observe(el));
}

// ============================================================================
// Hero role cycler
// ============================================================================
(function roleCycler() {
  const el = document.getElementById("roleCycle");
  let i = 0;
  setInterval(() => {
    i = (i + 1) % HERO_ROLES.length;
    el.style.opacity = "0";
    setTimeout(() => {
      el.textContent = HERO_ROLES[i];
      el.style.opacity = "1";
    }, 250);
  }, 2600);
  el.style.transition = "opacity 0.25s ease";
})();

// ============================================================================
// Render: What I Build
// ============================================================================
(function renderCapabilities() {
  const grid = document.getElementById("capabilityGrid");
  grid.innerHTML = CAPABILITIES.map(
    (c) => `
    <div class="capability-card glass glass-hover border-gradient reveal">
      <div class="capability-icon">${icon(c.icon, 22)}</div>
      <div class="capability-title">${c.title}</div>
      <div class="capability-desc">${c.desc}</div>
    </div>`
  ).join("");
})();

// ============================================================================
// Render: Skills
// ============================================================================
(function renderSkills() {
  const gridEl = document.getElementById("skillGrid");

  gridEl.innerHTML = SKILL_CATEGORIES.map(
    (cat) => `
    <div class="skill-card glass glass-hover reveal">
      <div class="skill-card-header">
        ${icon(cat.icon, 16)}
        <span class="skill-card-title">${cat.label}</span>
      </div>
      <div class="skill-chips">
        ${cat.skills.map((s) => `<span class="chip">${s}</span>`).join("")}
      </div>
    </div>`
  ).join("");
})();

// ============================================================================
// Render: Experience timeline
// ============================================================================
(function renderExperience() {
  const el = document.getElementById("timeline");
  el.innerHTML = EXPERIENCE.map(
    (job) => `
    <div class="timeline-item reveal">
      <div class="timeline-role">${job.role}</div>
      <div class="timeline-company">${job.company}</div>
      <div class="timeline-meta">
        <span>${icon("folder", 14)} ${job.location}</span>
        <span>${job.duration}</span>
      </div>
      <span class="badge timeline-badge">1.8+ Yrs Professional Experience</span>
      <p class="timeline-summary">${job.summary}</p>
      <ul class="timeline-focus">
        ${job.focusAreas.map((f) => `<li>${f}</li>`).join("")}
      </ul>
    </div>`
  ).join("");
})();

// ============================================================================
// Render: Projects
// ============================================================================
(function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <div class="project-card glass glass-hover reveal">
      <div class="project-cover" style="background:${p.gradient}"></div>
      <div class="project-body">
        <div class="project-status"><span class="dot"></span>${p.status}</div>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.description}</p>
        <ul class="project-features">
          ${p.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <div class="project-tech">
          ${p.tech.map((t) => `<span class="chip">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${p.githubUrl
            ? `<a href="${p.githubUrl}" target="_blank" rel="noopener">${icon("code", 14)} Code</a>`
            : `<span style="color:var(--foreground-faint);display:inline-flex;align-items:center;gap:0.4rem;font-size:0.8125rem;">${icon("code", 14)} Repo coming soon</span>`}
          ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener">${icon("externalLink", 14)} Live Demo</a>` : ""}
        </div>
      </div>
    </div>`
  ).join("");
})();

// ============================================================================
// Contact form — validation + mailto submission
// To upgrade to silent submission later (e.g. Formspree), replace the
// mailto logic inside handleSubmit with a fetch() POST to your form endpoint.
// ============================================================================
(function initContactForm() {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const statusText = document.getElementById("formStatusText");

  function setError(field, message) {
    const input = document.getElementById(field);
    const errorEl = document.getElementById(`${field}Error`);
    if (message) {
      input.classList.add("error");
      errorEl.textContent = message;
      errorEl.style.display = "block";
    } else {
      input.classList.remove("error");
      errorEl.style.display = "none";
    }
  }

  function validate() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let valid = true;

    if (!name) { setError("name", "Please enter your name."); valid = false; }
    else setError("name", "");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) { setError("email", "Please enter your email."); valid = false; }
    else if (!emailPattern.test(email)) { setError("email", "Please enter a valid email."); valid = false; }
    else setError("email", "");

    if (!message) { setError("message", "Please enter a message."); valid = false; }
    else setError("message", "");

    return valid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) return;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:ashuaswin25@gmail.com?subject=${subject}&body=${body}`;

    statusText.textContent = "Opening your email client...";
    statusEl.classList.add("success");
    setTimeout(() => statusEl.classList.remove("success"), 4000);
  });
})();

// ============================================================================
// Misc
// ============================================================================
document.getElementById("year").textContent = new Date().getFullYear();
observeReveals();
updateActiveNav();

// Re-observe reveals after dynamic content renders (grids inject .reveal els after initial load)
window.addEventListener("load", observeReveals);