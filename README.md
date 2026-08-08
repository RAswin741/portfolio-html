# R. Aswin — Portfolio (Plain HTML / CSS / JavaScript)

Zero build step. No npm, no Node.js required to run it, no native
binaries, no bundler. Just files a browser reads directly.

## Why this version exists

The React/Next.js version hit a real npm bug (npm/cli#4828) around native
binary resolution for Tailwind CSS v4's build tooling. This version sidesteps
that class of problem entirely — there's no build step to fail.

## Running It

**Just open it:**
Double-click `index.html` — it'll open in your browser and mostly work.

**Better — run it through a local server** (some browsers restrict
`fetch()` calls, used for the live GitHub stats, when opened via `file://`):

```bash
# Option A — Python (built into most machines)
cd portfolio-html
python3 -m http.server 8000
# then open http://localhost:8000

# Option B — Node's npx (no install needed)
npx serve .
```

That's it. No `npm install`, no build, no dependencies to break.

## Before You Deploy — Fill These In

1. **`js/data.js`** → `SITE_CONFIG.githubUsername` — your real GitHub
   username. Powers the live GitHub Activity section. Until you set this,
   that section shows a friendly placeholder instead of fake data.
2. **`index.html`** → search for `your-username` (GitHub links) and
   `linkedin.com/in/aswin-r-5136a024a` (already your real LinkedIn) and
   double check both.
3. **`js/data.js`** → `PROJECTS` array — swap the 3 honest "In Progress"
   placeholder projects for your real repos as you build them, including
   `githubUrl` / `liveUrl` once available.
4. **`assets/resume.pdf`** — add your resume PDF here. The "Download Resume"
   buttons already point to `assets/resume.pdf`.
5. **`assets/og-image.png`** (optional) — a 1200×630 image for social link
   previews.
6. **`assets/favicon.ico`** (optional) — currently referenced but not
   included; add one or remove the `<link rel="icon">` line in `index.html`.

## Deploying to GitHub Pages

This is now genuinely simple:

1. Create a repo named `your-username.github.io` (for a root-URL personal site)
2. Push these files to the `main` branch — **no build, no Actions workflow needed**
3. In the repo, go to **Settings → Pages → Source → Deploy from a branch → main**
4. Your site is live at `https://your-username.github.io`

If you'd rather deploy to a project repo (not `username.github.io`), it works
exactly the same way — your site just lives at `https://username.github.io/repo-name/`
instead. No path/base config needed since there's no bundler involved.

## File Structure

```
index.html          All markup, all sections, semantic HTML
css/styles.css       Full design system — tokens, glassmorphism, gradients,
                      dark/light theme, all component styles, responsive rules
js/data.js           All content — edit this file to update what's on the site
js/main.js           All behavior — theme toggle, nav, scroll reveal, role
                      cycler, skill filters, architecture tabs, GitHub API
                      fetch, contact form validation
assets/              Put resume.pdf, og-image.png, favicon.ico here
```

## What's Implemented

- **Dark/light theme toggle**, persisted via `localStorage`
- **Sticky glassmorphic navbar** with scrollspy (active section highlighting)
- **Mobile hamburger menu**
- **Hero role-cycler** ("Python Developer" → "AI/ML Developer" → "GenAI Developer")
- **Scroll-reveal animations** via `IntersectionObserver` (respects
  `prefers-reduced-motion` automatically through the CSS media query)
- **Filterable skills grid**
- **Tabbed architecture diagrams** (generic, textbook patterns only — see
  confidentiality note below)
- **Live GitHub stats** — fetches from the public GitHub REST API client-side,
  no backend, no API key required, with loading/error states
- **Contact form** — client-side validation, submits via `mailto:` (opens the
  visitor's email client, pre-filled). To send silently instead, swap the
  `mailto:` logic in `initContactForm()` inside `js/main.js` for a `fetch()`
  POST to a form service like Formspree.

## Confidentiality Note

All content in `js/data.js` was written to exclude any employer/client
project detail — only role/tenure, general skills, and personal-project
placeholders are included. The Experience section describes the role
generically; no specific system, client, or deliverable is named.
