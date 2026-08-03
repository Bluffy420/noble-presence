/**
 * scripts/generate-shell.mjs  —  v14.0.0
 *
 * Matches the actual React site source (SiteHeader.tsx, SiteFooter.tsx,
 * styles.css). White header with blue (#1d4ed8) accents, dark gradient
 * footer with dot patterns. Logo-only on mobile.
 */

import { writeFileSync, readFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = resolve(__dirname, "..");
const DIST      = resolve(ROOT, "dist");
const REACT_URL = "https://home.nbassociates.net";
const WP_URL    = "https://nbassociates.net";
const LOGO_URL  = "https://home.nbassociates.net/logo.png";

/* ── 1. Read service list ── */
const servicesSource = readFileSync(resolve(ROOT, "src/lib/services.ts"), "utf8");
const serviceEntries = [];
const serviceRe = /slug:\s*["']([^"']+)["'][^}]*?title:\s*["']([^"']+)["']/gs;
let m;
while ((m = serviceRe.exec(servicesSource)) !== null) {
  serviceEntries.push({ slug: m[1], title: m[2] });
}

/* ── 2. Nav ── */
const NAV = [
  { label: "About Us", href: `${REACT_URL}/about` },
  { label: "Team",     href: `${REACT_URL}/team` },
  { label: "Services", href: `${REACT_URL}/services` },
  { label: "Blogs",    href: `${REACT_URL}/blogs` },
  { label: "Contact",  href: `${REACT_URL}/contact` },
];

const esc = (s) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

/* ── 3. Header HTML — matches SiteHeader.tsx ── */
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
      <img
        src="${LOGO_URL}"
        alt="NB Associates logo"
        class="nba-logo-img"
        width="48"
        height="48"
      />
      <div class="nba-logo-text nba-logo-text-desktop">
        <span class="nba-logo-name">NB ASSOCIATES</span>
        <span class="nba-logo-sub">Advocates &amp; Legal Consultants</span>
      </div>
    </a>

    <nav class="nba-desktop-nav" aria-label="Primary navigation">
      ${desktopLinks}
      <div class="nba-nav-divider"></div>
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

/* ── 4. Footer HTML — matches SiteFooter.tsx ── */
const quickLinks = [
  { label: "Home",     href: `${REACT_URL}/` },
  { label: "Services", href: `${REACT_URL}/services` },
  { label: "About Us", href: `${REACT_URL}/about` },
  { label: "Team",     href: `${REACT_URL}/team` },
  { label: "Blogs",    href: `${REACT_URL}/blogs` },
  { label: "Contact",  href: `${REACT_URL}/contact` },
].map(({ label, href }) =>
  `<li><a href="${href}" class="nba-footer-link">${esc(label)}</a></li>`
).join("\n          ");

const practiceLinks = serviceEntries.map(({ slug, title }) =>
  `<a href="${WP_URL}/${slug}/" class="nba-footer-link nba-footer-practice-link">${esc(title)}</a>`
).join("\n          ");

const year = new Date().getFullYear();

const footerHtml = `
<footer class="nba-footer">
  <div class="nba-footer-main">
    <div class="nba-footer-dots"></div>
    <div class="nba-footer-inner">
      <div class="nba-footer-grid">

        <div class="nba-footer-col nba-footer-col--brand">
          <div class="nba-footer-brand-row">
            <img src="${LOGO_URL}" alt="NB Associates" class="nba-footer-logo-img" width="52" height="52" />
            <div>
              <div class="nba-footer-brand-name">NB ASSOCIATES</div>
              <div class="nba-footer-brand-sub">Advocates &amp; Legal Consultants</div>
            </div>
          </div>
          <p class="nba-footer-brand-desc">
            A full-service law firm and legal consultancy serving businesses and
            individuals across India for over 26 years.
          </p>
          <div class="nba-footer-contact-strip">
            <a href="tel:+919811899279" class="nba-footer-contact-link">+91 98118 99279</a>
            <a href="mailto:mail@nbassociates.net" class="nba-footer-contact-link">mail@nbassociates.net</a>
          </div>
        </div>

        <div class="nba-footer-col nba-footer-col--quick">
          <div class="nba-footer-heading">Quick Links</div>
          <ul class="nba-footer-links">${quickLinks}</ul>
        </div>

        <div class="nba-footer-col nba-footer-col--practice">
          <div class="nba-footer-heading">Practice Areas</div>
          <div class="nba-footer-practice-grid">
            ${practiceLinks}
          </div>
        </div>

        <div class="nba-footer-col nba-footer-col--contact">
          <div class="nba-footer-heading">Offices</div>
          <div class="nba-footer-offices">
            <div>
              <div class="nba-footer-office-heading">New Delhi Office</div>
              <address class="nba-footer-address">
                Prakash Deep Building 706, 7th Floor,<br>
                Tolstoy Road<br>
                New Delhi &ndash; 110001
              </address>
            </div>
            <div>
              <div class="nba-footer-office-heading">Corporate Office</div>
              <address class="nba-footer-address">
                Plot no. 12B, First Floor<br>
                Vaishali Sector 3A<br>
                Main Gautam Palvi Road<br>
                District Ghaziabad, Uttar Pradesh &ndash; 201010
              </address>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="nba-footer-divider"></div>

  <div class="nba-footer-bottom-bar">
    <div class="nba-footer-bottom-dots"></div>
    <div class="nba-footer-bottom-inner">
      <span>&copy; ${year} NB Associates. All Rights Reserved.</span>
      <span>Advocates &amp; Legal Consultants</span>
    </div>
  </div>
</footer>`.trim();

/* ── 5. CSS — matches styles.css + SiteHeader.tsx + SiteFooter.tsx ── */
const css = `
/* ══ NB Associates Shell v14 ══ */
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,400&display=swap');

:root {
  --nba-bg:         #ffffff;
  --nba-fg:         #0f172a;
  --nba-muted-fg:   #64748b;
  --nba-border:     #e2e8f0;
  --nba-navy:       #0F172A;
  --nba-navy-h:     #1e293b;
  --nba-navy-fg:    #ffffff;
  --nba-primary:    #1d4ed8;
  --nba-primary-h:  #1e40af;
  --nba-surface:    #f8fafc;
  --nba-font:       "Inter", ui-sans-serif, system-ui, sans-serif;
  --nba-r:          4px;
  --nba-transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ── Header ── */
.nba-header {
  position: sticky; top: 0; z-index: 9999;
  width: 100%; background: rgba(255,255,255,0.85);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  font-family: var(--nba-font);
  transition: box-shadow .3s, border-color .3s;
}
.nba-header.nba-scrolled {
  box-shadow: 0 1px 3px rgba(15,23,42,.06);
  border-bottom-color: rgba(226,232,240,.5);
}
.nba-header-inner {
  max-width: 80rem; margin: 0 auto;
  padding: 0 1.5rem; height: 72px;
  display: flex; align-items: center; justify-content: space-between;
}
@media (min-width:1024px){ .nba-header-inner{ padding: 0 2.5rem; } }

/* ── Logo ── */
.nba-logo {
  display: flex; align-items: center; gap: 0.75rem;
  text-decoration: none; flex-shrink: 0;
}
.nba-logo-img {
  width: 48px; height: 48px; object-fit: contain;
  display: block; border-radius: 50%;
}
.nba-logo-text { display: flex; flex-direction: column; line-height: 1.15; }
@media (max-width: 574px) {
  .nba-logo-text-desktop { display: none !important; }
}
.nba-logo-name {
  font-size: 1rem; font-weight: 700;
  letter-spacing: 0.06em; color: var(--nba-navy);
}
.nba-logo-sub {
  font-size: 9.5px; font-weight: 600; text-transform: uppercase;
  letter-spacing: .14em; color: var(--nba-muted-fg); margin-top: 2px;
}

/* ── Desktop nav ── */
.nba-desktop-nav { display:none; align-items:center; gap: 0.125rem; }
@media (min-width:1024px){ .nba-desktop-nav{ display:flex; } }
.nba-nav-divider { width:1px; height:24px; background:var(--nba-border); margin:0 1.25rem; display:none; }
@media (min-width:1024px){ .nba-nav-divider{ display:block; } }

.nba-nav-link {
  display: inline-block; padding: 0.5rem 1rem;
  font-size: 13px; font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--nba-muted-fg); text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: color var(--nba-transition), border-color var(--nba-transition);
}
.nba-nav-link:hover {
  color: var(--nba-navy) !important;
  border-bottom-color: var(--nba-primary) !important;
}

/* ── Consult Us button ── */
.nba-cta-btn {
  display: inline-flex; height: 38px;
  align-items: center; justify-content: center;
  background: linear-gradient(135deg, #0F172A, #1a2744);
  color: var(--nba-navy-fg) !important;
  padding: 0 1.5rem;
  font-size: 13px; font-weight: 600;
  text-decoration: none !important;
  border-radius: 6px;
  transition: background var(--nba-transition), transform var(--nba-transition), box-shadow var(--nba-transition);
}
.nba-cta-btn:hover {
  background: var(--nba-primary) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(29,78,216,0.35);
}

/* ── Hamburger ── */
.nba-hamburger {
  display:inline-flex; width:40px; height:40px;
  align-items:center; justify-content:center;
  background:none; border:none; cursor:pointer; padding:0;
  border-radius:6px; transition: background var(--nba-transition);
}
@media (min-width:1024px){ .nba-hamburger{ display:none; } }
.nba-hamburger span {
  display:block; width:20px; height:2px;
  background: var(--nba-navy); border-radius:1px;
  transition: transform var(--nba-transition), opacity var(--nba-transition);
}
.nba-hamburger span:nth-child(1){ margin-bottom:5px; }
.nba-hamburger span:nth-child(2){ margin-bottom:5px; }
.nba-hamburger.nba-open span:nth-child(1){ transform:translateY(7px) rotate(45deg); }
.nba-hamburger.nba-open span:nth-child(2){ opacity:0; }
.nba-hamburger.nba-open span:nth-child(3){ transform:translateY(-7px) rotate(-45deg); }

/* ── Mobile nav ── */
.nba-mobile-nav {
  display:none; border-top:1px solid var(--nba-border);
  background: var(--nba-bg); font-family:var(--nba-font);
  box-shadow: 0 20px 60px rgba(15,23,42,.1);
}
.nba-mobile-nav.nba-open{ display:block; }
@media (min-width:1024px){ .nba-mobile-nav{ display:none !important; } }
.nba-mobile-nav nav {
  max-width:80rem; margin:0 auto;
  padding:0.5rem 1.5rem 1.5rem; display:flex; flex-direction:column;
}
.nba-mobile-link {
  display:block; padding:0.875rem 0; border-bottom:1px solid var(--nba-border);
  font-size:14px; font-weight:500;
  color: var(--nba-muted-fg); text-decoration:none;
  transition: color var(--nba-transition);
}
.nba-mobile-link:hover{ color: var(--nba-primary) !important; }
.nba-mobile-cta-btn {
  display:flex; height:46px; margin-top:1rem;
  align-items:center; justify-content:center;
  background: linear-gradient(135deg, #0F172A, #1a2744);
  color: var(--nba-navy-fg) !important;
  font-size:14px; font-weight:600;
  text-decoration:none !important;
  border-radius:6px;
  transition: background var(--nba-transition), transform var(--nba-transition), box-shadow var(--nba-transition);
}
.nba-mobile-cta-btn:hover {
  background: var(--nba-primary) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(29,78,216,0.35);
}

/* ── Footer ── */
.nba-footer {
  font-family:var(--nba-font);
  border-top:1px solid var(--nba-border);
}
.nba-footer-main {
  background: linear-gradient(135deg, #0F172A 0%, #1a2744 50%, #0F172A 100%);
  position:relative; overflow:hidden;
}
.nba-footer-dots {
  position:absolute; inset:0;
  background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 20px 20px; pointer-events:none;
}
.nba-footer-inner {
  max-width:80rem; margin:0 auto; padding:4.5rem 1.5rem 4rem;
  position:relative; z-index:1;
}
@media (min-width:1024px){ .nba-footer-inner{ padding:4.5rem 2.5rem 4rem; } }
.nba-footer-grid {
  display:flex; flex-wrap:wrap; gap:3rem;
}
.nba-footer-col--brand   { min-width:280px; flex:1 1 300px; }
.nba-footer-col--quick   { min-width:140px; }
.nba-footer-col--practice{ min-width:200px; flex:1 1 220px; }
.nba-footer-col--contact { min-width:220px; }
.nba-footer-brand-row {
  display:flex; align-items:center; gap:14px; margin-bottom:1.25rem;
}
.nba-footer-logo-img { width:52px; height:52px; display:block; border-radius:50%; }
.nba-footer-brand-name { font-size:1.125rem; font-weight:700; letter-spacing:0.06em; color:#ffffff; }
.nba-footer-brand-sub  { font-size:10px; font-weight:600; text-transform:uppercase; letter-spacing:.14em; color:var(--nba-muted-fg); margin-top:2px; }
.nba-footer-brand-desc { font-size:.875rem; color:#94a3b8; line-height:1.7; max-width:400px; }
.nba-footer-contact-strip { margin-top:1.5rem; display:flex; flex-direction:column; gap:0.625rem; }
.nba-footer-contact-link {
  display:inline-flex; align-items:center; gap:0.375rem;
  font-size:.875rem; color:#94a3b8; text-decoration:none;
  transition: color var(--nba-transition), transform var(--nba-transition);
}
.nba-footer-contact-link:hover { color: var(--nba-primary) !important; transform: translateX(4px); }
.nba-footer-heading { font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.12em; color:#64748b; margin-bottom:1.25rem; }
.nba-footer-links  { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:.75rem; font-size:.875rem; }
.nba-footer-link   { color:#94a3b8; text-decoration:none; transition:color var(--nba-transition), transform var(--nba-transition); display:inline-block; position:relative; }
.nba-footer-link:hover { color: var(--nba-primary) !important; transform: translateX(4px); }
.nba-footer-practice-grid { display:grid; grid-template-columns:1fr 1fr; gap:.75rem 1.5rem; font-size:.875rem; }
.nba-footer-practice-link { color:#94a3b8; text-decoration:none; transition:color var(--nba-transition), transform var(--nba-transition); line-height:1.4; display:inline-block; position:relative; }
.nba-footer-practice-link:hover { color: var(--nba-primary) !important; transform: translateX(4px); }
.nba-footer-offices { display:flex; flex-direction:column; gap:1.5rem; font-size:.875rem; line-height:1.7; color:#94a3b8; }
.nba-footer-office-heading { margin-bottom:0.375rem; font-size:12px; font-weight:600; color:#ffffff; }
.nba-footer-address { font-style:normal; }

.nba-footer-divider {
  height:1px; border:none; margin:0;
  background: linear-gradient(90deg, transparent, var(--nba-primary), #3b82f6, var(--nba-primary), transparent);
  opacity:0.3;
}
.nba-footer-bottom-bar {
  background: linear-gradient(135deg, #0B1324 0%, #141e33 50%, #0B1324 100%);
  position:relative; overflow:hidden;
}
.nba-footer-bottom-dots {
  position:absolute; inset:0;
  background-image: radial-gradient(rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 20px 20px; pointer-events:none;
}
.nba-footer-bottom-inner {
  max-width:80rem; margin:0 auto; padding:0 1.5rem; position:relative; z-index:1;
  display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between;
  gap:0.75rem; padding-top:1.25rem; padding-bottom:1.25rem;
  font-size:13px; color:var(--nba-muted-fg);
}
@media (min-width:1024px){ .nba-footer-bottom-inner{ padding-left:2.5rem; padding-right:2.5rem; } }

/* ── Prose content typography ── */
.wp-content,
.entry-content,
.post-content,
.page-content {
  line-height:1.75 !important;
  font-weight:400 !important;
  text-align:justify !important;
  font-size:1.0625rem !important;
  color: var(--nba-fg);
}
.wp-content p, .entry-content p, .post-content p, .page-content p {
  margin-bottom:1.25rem !important;
}
@media (max-width:767px) {
  .wp-content, .entry-content, .post-content, .page-content {
    text-align:left !important;
  }
}

/* ── Title centering for WordPress pages ── */
.entry-title,
.page-title,
h1.entry-title,
.page .entry-title,
.single .entry-title,
.page-header .page-title,
.entry-header .entry-title,
.woocommerce-products-header__title.page-title {
  text-align: center !important;
  max-width: 80rem;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 2.5rem 1.5rem 0.5rem !important;
  font-family: var(--nba-font);
  font-size: 2rem !important;
  font-weight: 700 !important;
  color: var(--nba-navy) !important;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

/* ── WordPress buttons consistent with home page ── */
.wp-block-button__link,
.wp-block-button .wp-block-button__link,
.elementor-button,
.elementor-button.elementor-size-md,
.elementor-button.elementor-size-sm,
a.wp-block-button__link,
.wp-block-file .wp-block-file__button,
.wp-block-button.is-style-outline .wp-block-button__link {
  display: inline-flex !important;
  height: 40px !important;
  align-items: center !important;
  justify-content: center !important;
  background: var(--nba-primary) !important;
  color: var(--nba-navy-fg) !important;
  padding: 0 1.5rem !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  border-radius: var(--nba-r) !important;
  border: none !important;
  box-shadow: none !important;
  font-family: var(--nba-font) !important;
  line-height: 40px !important;
  white-space: nowrap !important;
  transition: background var(--nba-transition), transform var(--nba-transition), box-shadow var(--nba-transition) !important;
  cursor: pointer;
}
.wp-block-button__link:hover,
.wp-block-button .wp-block-button__link:hover,
.elementor-button:hover,
.elementor-button.elementor-size-md:hover,
.elementor-button.elementor-size-sm:hover,
a.wp-block-button__link:hover,
.wp-block-file .wp-block-file__button:hover {
  background: var(--nba-primary-h) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(29,78,216,0.2);
}

/* ── Disclaimer ── */
.nba-disclaimer {
  max-width:80rem; margin:0 auto; padding:.875rem 1.5rem;
  font-size:.8125rem; font-style:italic;
  color:var(--nba-muted-fg); border-top:1px solid var(--nba-border);
  font-family:var(--nba-font); line-height:1.6;
}
`.trim();

/* ── 6. Write shell.json ── */
const HOME_DIR = resolve(DIST, "home");
mkdirSync(HOME_DIR, { recursive: true });
mkdirSync(DIST, { recursive: true });
const shellContent = JSON.stringify({ css, header: headerHtml, footer: footerHtml }, null, 2);
writeFileSync(resolve(DIST, "shell.json"), shellContent, "utf8");
writeFileSync(resolve(HOME_DIR, "shell.json"), shellContent, "utf8");

console.log("shell.json written successfully");
