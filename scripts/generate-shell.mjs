/**
 * scripts/generate-shell.mjs  —  v11.0.0
 *
 * Produces dist/shell.json:
 *   { "css": "…", "header": "…", "footer": "…" }
 *
 * Footer grid mirrors SiteFooter.tsx exactly:
 *   lg:grid-cols-12  (breakpoint: 1024px, NOT 768px)
 *   brand: lg:col-span-4
 *   quick links: lg:col-span-2
 *   practice areas: lg:col-span-3
 *   contact: lg:col-span-3
 *
 * Mobile (< 1024px): single-column stack, same as React's Tailwind collapse.
 */

import { writeFileSync, readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = resolve(__dirname, "..");
const DIST      = resolve(ROOT, "dist");
const REACT_URL = "https://home.nbassociates.net";
const WP_URL    = "https://nbassociates.net";

/* ── 1. Read service list ── */
const servicesSource = readFileSync(resolve(ROOT, "src/lib/services.ts"), "utf8");
const serviceEntries = [];
const serviceRe = /slug:\s*["']([^"']+)["'][^}]*?title:\s*["']([^"']+)["']/gs;
let m;
while ((m = serviceRe.exec(servicesSource)) !== null) {
  serviceEntries.push({ slug: m[1], title: m[2] });
}

/* ── 2. Nav definition ── */
const NAV = [
  { label: "Home",     href: `${REACT_URL}/` },
  { label: "Services", href: `${REACT_URL}/services` },
  { label: "About Us", href: `${REACT_URL}/about` },
  { label: "Blogs",    href: `${REACT_URL}/blogs` },
  { label: "Contact",  href: `${REACT_URL}/contact` },
];

/* ── 3. Helper ── */
const esc = (s) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

/* ── 4. Build <header> HTML (unchanged from v10) ── */
const desktopLinks = NAV.map(({ label, href }) =>
  `<a href="${href}" class="nba-nav-link">${esc(label)}</a>`
).join("\n      ");

const mobileLinks = NAV.map(({ label, href }) =>
  `<a href="${href}" class="nba-mobile-link">${esc(label)}</a>`
).join("\n      ");

const headerHtml = `
<header class="nba-header" id="nba-header">
  <div class="nba-header-inner">
    <a href="${REACT_URL}/" class="nba-logo">
      <span class="nba-logo-name">NB Associates</span>
      <span class="nba-logo-sub">Advocates &amp; Legal Consultants</span>
    </a>

    <nav class="nba-desktop-nav" aria-label="Primary navigation">
      ${desktopLinks}
      <a href="${REACT_URL}/contact" class="nba-cta-btn">Consult Us</a>
    </nav>

    <button
      class="nba-hamburger"
      id="nba-hamburger"
      aria-label="Toggle mobile menu"
      aria-expanded="false"
      aria-controls="nba-mobile-nav"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <div class="nba-mobile-nav" id="nba-mobile-nav" aria-hidden="true">
    <nav aria-label="Mobile navigation">
      ${mobileLinks}
      <a href="${REACT_URL}/contact" class="nba-mobile-cta-btn">Consult Us</a>
    </nav>
  </div>
</header>`.trim();

/* ── 5. Build <footer> HTML — mirrors SiteFooter.tsx 12-col grid ── */
const quickLinks = NAV.map(({ label, href }) =>
  `<li><a href="${href}" class="nba-footer-link">${esc(label)}</a></li>`
).join("\n          ");

const practiceLinks = serviceEntries.slice(0, 6).map(({ slug, title }) =>
  `<li><a href="${WP_URL}/${slug}" class="nba-footer-link">${esc(title)}</a></li>`
).join("\n          ");

const year = new Date().getFullYear();

const footerHtml = `
<footer class="nba-footer">
  <div class="nba-footer-inner">
    <div class="nba-footer-grid">

      <!-- col-span-4: Brand -->
      <div class="nba-footer-col nba-footer-col--brand">
        <div class="nba-footer-brand-name">NB Associates</div>
        <div class="nba-footer-brand-sub">Advocates &amp; Legal Consultants</div>
        <p class="nba-footer-brand-desc">
          A full-service law firm and legal consultancy serving businesses and
          individuals across India for over 26 years.
        </p>
      </div>

      <!-- col-span-2: Quick Links -->
      <div class="nba-footer-col nba-footer-col--quick">
        <div class="nba-footer-heading">Quick Links</div>
        <ul class="nba-footer-links">
          ${quickLinks}
        </ul>
      </div>

      <!-- col-span-3: Practice Areas -->
      <div class="nba-footer-col nba-footer-col--practice">
        <div class="nba-footer-heading">Practice Areas</div>
        <ul class="nba-footer-links">
          ${practiceLinks}
        </ul>
      </div>

      <!-- col-span-3: Contact -->
      <div class="nba-footer-col nba-footer-col--contact">
        <div class="nba-footer-heading">Contact</div>
        <ul class="nba-footer-links">
          <li><a href="tel:+919811899279" class="nba-footer-link">+91 98118 99279</a></li>
          <li><a href="mailto:mail@nbassociates.net" class="nba-footer-link">mail@nbassociates.net</a></li>
          <li class="nba-footer-text">New Delhi, India</li>
        </ul>
      </div>

    </div>

    <div class="nba-footer-bottom">
      <div>&copy; ${year} NB Associates. All rights reserved.</div>
      <div>Advocates &amp; Legal Consultants</div>
    </div>
  </div>
</footer>`.trim();

/* ── 6. Scoped CSS ── */
const css = `
/* ══ NB Associates Shell — injected by WordPress plugin ══ */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,400&display=swap');

:root {
  --nba-bg:         #ffffff;
  --nba-fg:         #0a0a0a;
  --nba-surface:    #f6f7f9;
  --nba-muted-fg:   #525866;
  --nba-border:     #e5e7eb;
  --nba-navy:       #0b1d3a;
  --nba-navy-h:     #13294b;
  --nba-navy-fg:    #ffffff;
  --nba-font:       "Inter", ui-sans-serif, system-ui, sans-serif;
  --nba-r:          4px;
}

/* ── Header ── */
.nba-header {
  position: sticky; top: 0; z-index: 9999;
  width: 100%; background: var(--nba-bg);
  border-bottom: 1px solid transparent;
  transition: border-color .2s, box-shadow .2s;
  font-family: var(--nba-font);
}
.nba-header.nba-scrolled {
  border-bottom-color: var(--nba-border);
  box-shadow: 0 1px 0 0 rgba(0,0,0,.04);
}
.nba-header-inner {
  max-width: 80rem; margin: 0 auto;
  padding: 0 1.5rem; height: 80px;
  display: flex; align-items: center; justify-content: space-between;
}
@media (min-width:1024px){ .nba-header-inner{ padding: 0 2.5rem; } }

/* ── Logo ── */
.nba-logo { display:flex; flex-direction:column; line-height:1.2; text-decoration:none; }
.nba-logo-name { font-size:1.35rem; font-weight:600; letter-spacing:-.02em; color:var(--nba-fg); }
.nba-logo-sub  { font-size:10.5px; text-transform:uppercase; letter-spacing:.18em; color:var(--nba-muted-fg); margin-top:2px; }

/* ── Desktop nav ── */
.nba-desktop-nav { display:none; align-items:center; gap:2.25rem; }
@media (min-width:1024px){ .nba-desktop-nav{ display:flex; } }
.nba-nav-link {
  font-size:14px; font-weight:500; color:rgba(10,10,10,.8);
  text-decoration:none; transition:color .15s;
}
.nba-nav-link:hover { color:var(--nba-navy) !important; text-decoration:none !important; }
.nba-cta-btn {
  display:inline-flex; height:40px; align-items:center; justify-content:center;
  background:var(--nba-navy); color:var(--nba-navy-fg) !important;
  padding:0 1.25rem; font-size:13px; font-weight:500; letter-spacing:.04em;
  text-decoration:none !important; transition:background .15s;
}
.nba-cta-btn:hover { background:var(--nba-navy-h) !important; }

/* ── Hamburger ── */
.nba-hamburger {
  display:flex; flex-direction:column; gap:5px;
  width:40px; height:40px; align-items:center; justify-content:center;
  background:none; border:none; cursor:pointer; padding:0;
}
@media (min-width:1024px){ .nba-hamburger{ display:none; } }
.nba-hamburger span {
  display:block; width:20px; height:1px;
  background:var(--nba-fg); transition:transform .2s, opacity .2s;
}
.nba-hamburger.nba-open span:nth-child(1){ transform:translateY(6px) rotate(45deg); }
.nba-hamburger.nba-open span:nth-child(2){ opacity:0; }
.nba-hamburger.nba-open span:nth-child(3){ transform:translateY(-6px) rotate(-45deg); }

/* ── Mobile nav ── */
.nba-mobile-nav {
  display:none; border-top:1px solid var(--nba-border);
  background:var(--nba-bg); font-family:var(--nba-font);
}
.nba-mobile-nav.nba-open{ display:block; }
@media (min-width:1024px){ .nba-mobile-nav{ display:none !important; } }
.nba-mobile-nav nav {
  max-width:80rem; margin:0 auto;
  padding:1rem 1.5rem; display:flex; flex-direction:column;
}
.nba-mobile-link {
  display:block; padding:1rem 0; border-bottom:1px solid var(--nba-border);
  font-size:15px; font-weight:500; color:var(--nba-fg); text-decoration:none;
}
.nba-mobile-link:hover{ color:var(--nba-navy) !important; }
.nba-mobile-cta-btn {
  display:inline-flex; height:48px; align-items:center; justify-content:center;
  background:var(--nba-navy); color:var(--nba-navy-fg) !important;
  font-size:14px; font-weight:500; text-decoration:none !important; margin-top:1.25rem;
}

/* ── Footer ── */
.nba-footer { border-top:1px solid var(--nba-border); background:var(--nba-bg); font-family:var(--nba-font); }
.nba-footer-inner { max-width:80rem; margin:0 auto; padding:4rem 1.5rem; }
@media (min-width:1024px){ .nba-footer-inner{ padding:4rem 2.5rem; } }

/*
 * Grid mirrors SiteFooter.tsx exactly:
 *   mobile  → 1 column (stack)
 *   ≥1024px → 12-column grid with col-span assignments:
 *               brand=4, quick-links=2, practice=3, contact=3
 * IMPORTANT: breakpoint is 1024px (lg:), NOT 768px (md:).
 */
.nba-footer-grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
}
@media (min-width:1024px){
  .nba-footer-grid {
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
  }
  .nba-footer-col--brand    { grid-column: span 4; }
  .nba-footer-col--quick    { grid-column: span 2; }
  .nba-footer-col--practice { grid-column: span 3; }
  .nba-footer-col--contact  { grid-column: span 3; }
}

.nba-footer-brand-name { font-size:1.25rem; font-weight:600; letter-spacing:-.02em; color:var(--nba-fg); }
.nba-footer-brand-sub  { font-size:11px; text-transform:uppercase; letter-spacing:.18em; color:var(--nba-muted-fg); margin-top:4px; }
.nba-footer-brand-desc { margin-top:1.25rem; font-size:.875rem; color:var(--nba-muted-fg); line-height:1.6; max-width:320px; }
.nba-footer-heading    { font-size:11px; font-weight:600; text-transform:uppercase; letter-spacing:.16em; margin-bottom:1rem; color:var(--nba-fg); }
.nba-footer-links      { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:.75rem; font-size:.875rem; }
.nba-footer-text       { color:var(--nba-muted-fg); font-size:.875rem; }
.nba-footer-link       { color:var(--nba-muted-fg); text-decoration:none; transition:color .15s; }
.nba-footer-link:hover { color:var(--nba-navy) !important; }
.nba-footer-bottom {
  margin-top:3.5rem; padding-top:2rem; border-top:1px solid var(--nba-border);
  display:flex; flex-direction:column; gap:1rem;
  font-size:.75rem; color:var(--nba-muted-fg);
}
@media (min-width:640px){
  .nba-footer-bottom{ flex-direction:row; justify-content:space-between; align-items:center; }
}

/* ── Disclaimer ── */
.nba-disclaimer {
  max-width:80rem; margin:0 auto; padding:.875rem 1.5rem;
  font-size:.8125rem; font-style:italic;
  color:var(--nba-muted-fg); border-top:1px solid var(--nba-border);
  font-family:var(--nba-font); line-height:1.6;
}
`.trim();

/* ── 7. Write dist/shell.json ── */
const shell = { css, header: headerHtml, footer: footerHtml };
writeFileSync(
  resolve(DIST, "shell.json"),
  JSON.stringify(shell, null, 2),
  "utf8"
);

console.log(`shell.json written — ${headerHtml.length + footerHtml.length + css.length} bytes total`);
