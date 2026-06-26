import { createAPIFileRoute } from "@tanstack/react-start/api";
import { SERVICES } from "@/lib/services";

// ── The Node.js site's own base URL ──────────────────────────────
// Change this if your domain changes.
const SITE = "https://home.nbassociates.net"; // replace with your live Node.js URL if different

// ── Nav items (all point to the Node.js site) ────────────────────
const NAV = [
  { href: `${SITE}/`, label: "Home" },
  { href: `${SITE}/services`, label: "Services" },
  { href: `${SITE}/about`, label: "About Us" },
  { href: `${SITE}/blogs`, label: "Blogs" },
  { href: `${SITE}/contact`, label: "Contact" },
];

// ── Shared CSS variables + font (injected once per WP page) ──────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --surface: #f6f7f9;
  --muted: #f1f2f5;
  --muted-foreground: #525866;
  --border: #e5e7eb;
  --navy: #0b1d3a;
  --navy-hover: #13294b;
  --navy-foreground: #ffffff;
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

/* ── Reset ── */
.nba-shell *, .nba-shell *::before, .nba-shell *::after { box-sizing: border-box; margin: 0; padding: 0; }
.nba-shell { font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }
a { text-decoration: none; }

/* ── Header ── */
.nba-header {
  position: sticky; top: 0; z-index: 50; width: 100%;
  background: var(--background);
  border-bottom: 1px solid transparent;
  transition: border-color .2s, box-shadow .2s;
}
.nba-header.nba-scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 1px 0 0 rgba(0,0,0,.04);
}
.nba-header-inner {
  max-width: 1280px; margin: 0 auto;
  padding: 0 1.5rem; height: 80px;
  display: flex; align-items: center; justify-content: space-between;
}
@media(min-width:1024px){ .nba-header-inner { padding: 0 2.5rem; } }

.nba-logo { display: flex; flex-direction: column; line-height: 1.2; }
.nba-logo-name { font-size: 1.35rem; font-weight: 600; letter-spacing: -.02em; color: var(--foreground); }
.nba-logo-sub  { font-size: 10.5px; text-transform: uppercase; letter-spacing: .18em; color: var(--muted-foreground); margin-top: 2px; }

.nba-nav { display: none; align-items: center; gap: 2.25rem; }
@media(min-width:1024px){ .nba-nav { display: flex; } }

.nba-nav-link { font-size: 14px; font-weight: 500; color: rgba(10,10,10,.8); transition: color .15s; }
.nba-nav-link:hover { color: var(--navy); }

.nba-cta {
  display: inline-flex; height: 40px;
  align-items: center; justify-content: center;
  background: var(--navy); color: var(--navy-foreground);
  padding: 0 1.25rem; font-size: 13px; font-weight: 500;
  letter-spacing: .04em; transition: background .15s;
}
.nba-cta:hover { background: var(--navy-hover); }

/* hamburger */
.nba-hamburger {
  display: flex; flex-direction: column; gap: 5px;
  width: 40px; height: 40px;
  align-items: center; justify-content: center;
  background: none; border: none; cursor: pointer;
}
@media(min-width:1024px){ .nba-hamburger { display: none; } }
.nba-hamburger span { display: block; width: 20px; height: 1px; background: var(--foreground); transition: transform .2s, opacity .2s; }
.nba-hamburger.nba-open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nba-hamburger.nba-open span:nth-child(2) { opacity: 0; }
.nba-hamburger.nba-open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* mobile nav */
.nba-mobile-nav { display: none; border-top: 1px solid var(--border); background: var(--background); }
.nba-mobile-nav.nba-open { display: block; }
@media(min-width:1024px){ .nba-mobile-nav { display: none !important; } }
.nba-mobile-nav nav { max-width: 1280px; margin: 0 auto; padding: 1rem 1.5rem; display: flex; flex-direction: column; }
.nba-mobile-link { display: block; padding: 1rem 0; border-bottom: 1px solid var(--border); font-size: 15px; font-weight: 500; color: var(--foreground); }
.nba-mobile-link:hover { color: var(--navy); }
.nba-mobile-cta {
  display: inline-flex; height: 48px; margin-top: 1.25rem;
  align-items: center; justify-content: center;
  background: var(--navy); color: var(--navy-foreground);
  font-size: 14px; font-weight: 500;
}

/* ── Disclaimer ── */
.nba-disclaimer {
  max-width: 1280px; margin: 0 auto;
  padding: .75rem 1.5rem; font-size: .75rem;
  color: var(--muted-foreground);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

/* ── Footer ── */
.nba-footer { border-top: 1px solid var(--border); background: var(--background); }
.nba-footer-inner { max-width: 1280px; margin: 0 auto; padding: 4rem 1.5rem; }
@media(min-width:1024px){ .nba-footer-inner { padding: 4rem 2.5rem; } }
.nba-footer-grid { display: grid; gap: 3rem; grid-template-columns: 1fr; }
@media(min-width:768px){ .nba-footer-grid { grid-template-columns: 2fr 1fr 2fr 1fr; gap: 2rem; } }
.nba-footer-brand-name { font-size: 1.25rem; font-weight: 600; letter-spacing: -.02em; }
.nba-footer-brand-sub  { font-size: 11px; text-transform: uppercase; letter-spacing: .18em; color: var(--muted-foreground); margin-top: 4px; }
.nba-footer-brand-desc { margin-top: 1.25rem; font-size: .875rem; color: var(--muted-foreground); line-height: 1.6; max-width: 320px; }
.nba-footer-heading { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: .16em; margin-bottom: 1rem; }
.nba-footer-links { list-style: none; display: flex; flex-direction: column; gap: .75rem; font-size: .875rem; color: var(--muted-foreground); }
.nba-footer-link { color: var(--muted-foreground); transition: color .15s; }
.nba-footer-link:hover { color: var(--navy); }
.nba-footer-bottom {
  margin-top: 3.5rem; padding-top: 2rem;
  border-top: 1px solid var(--border);
  display: flex; flex-direction: column; gap: 1rem;
  font-size: .75rem; color: var(--muted-foreground);
}
@media(min-width:640px){ .nba-footer-bottom { flex-direction: row; justify-content: space-between; align-items: center; } }
`;

// ── Build header HTML ─────────────────────────────────────────────
function buildHeader(): string {
  const navLinks = NAV.map(
    (n) => `<a href="${n.href}" class="nba-nav-link">${n.label}</a>`
  ).join("");

  const mobileLinks = NAV.map(
    (n) => `<a href="${n.href}" class="nba-mobile-link">${n.label}</a>`
  ).join("");

  return `
<header class="nba-header nba-shell" id="nba-header">
  <div class="nba-header-inner">
    <a href="${SITE}/" class="nba-logo">
      <span class="nba-logo-name">NB Associates</span>
      <span class="nba-logo-sub">Advocates &amp; Legal Consultants</span>
    </a>
    <nav class="nba-nav" aria-label="Primary">
      ${navLinks}
      <a href="${SITE}/contact" class="nba-cta">Consult Us</a>
    </nav>
    <button class="nba-hamburger" id="nba-hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nba-mobile-nav nba-shell" id="nba-mobile-nav">
    <nav>
      ${mobileLinks}
      <a href="${SITE}/contact" class="nba-mobile-cta">Consult Us</a>
    </nav>
  </div>
</header>`;
}

// ── Build footer HTML ─────────────────────────────────────────────
function buildFooter(): string {
  const year = new Date().getFullYear();

  const quickLinks = NAV.map(
    (n) => `<li><a href="${n.href}" class="nba-footer-link">${n.label}</a></li>`
  ).join("");

  const serviceLinks = SERVICES.slice(0, 7)
    .map((s) => {
      const href = s.externalUrl ?? `${SITE}/services/${s.slug}`;
      return `<li><a href="${href}" class="nba-footer-link">${s.title}</a></li>`;
    })
    .join("");

  return `
<div class="nba-disclaimer nba-shell">
  This page is for information purposes only for existing clients. This is not a solicitation to non-existing clients.
</div>
<footer class="nba-footer nba-shell">
  <div class="nba-footer-inner">
    <div class="nba-footer-grid">

      <div>
        <div class="nba-footer-brand-name">NB Associates</div>
        <div class="nba-footer-brand-sub">Advocates &amp; Legal Consultants</div>
        <p class="nba-footer-brand-desc">A full-service law firm and legal consultancy serving businesses and individuals across India for over 26 years.</p>
      </div>

      <div>
        <div class="nba-footer-heading">Quick Links</div>
        <ul class="nba-footer-links">${quickLinks}</ul>
      </div>

      <div>
        <div class="nba-footer-heading">Practice Areas</div>
        <ul class="nba-footer-links">${serviceLinks}</ul>
      </div>

      <div>
        <div class="nba-footer-heading">Contact</div>
        <ul class="nba-footer-links">
          <li><a href="tel:+919811899279" class="nba-footer-link">+91 98118 99279</a></li>
          <li><a href="mailto:mail@nbassociates.net" class="nba-footer-link">mail@nbassociates.net</a></li>
          <li>New Delhi, India</li>
        </ul>
      </div>

    </div>
    <div class="nba-footer-bottom">
      <div>© ${year} NB Associates. All rights reserved.</div>
      <div>Advocates &amp; Legal Consultants</div>
    </div>
  </div>
</footer>`;
}

// ── API Route handler ─────────────────────────────────────────────
export const APIRoute = createAPIFileRoute("/api/shell")({
  GET: async () => {
    const payload = {
      css: CSS.trim(),
      header: buildHeader().trim(),
      footer: buildFooter().trim(),
    };

    return new Response(JSON.stringify(payload), {
      headers: {
        "Content-Type": "application/json",
        // Allow WordPress (any origin) to fetch this
        "Access-Control-Allow-Origin": "*",
        // Cache 1 hour on the edge/CDN, revalidate in background
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    });
  },

  // Handle preflight CORS requests
  OPTIONS: async () =>
    new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }),
});
