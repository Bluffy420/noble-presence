
# NB Associates – Visual Rebrand Plan

A minimalist, authoritative law-firm site. The current Lovable project is a blank TanStack Start template; the existing pages and blog posts live in your WordPress.com site. We'll connect WordPress.com, mirror the existing URL structure, and render everything inside a new premium design system.

## 1. Design System

Tokens in `src/styles.css`:
- Background `#ffffff`, surface `#f6f7f9`, border `#e5e7eb`
- Text `#0a0a0a`, muted `#525866`
- Accent navy `#0b1d3a` (hover `#13294b`)
- Typography: Inter (self-hosted via `@fontsource-variable/inter`), tight tracking, large display sizes
- No gradients, no glassmorphism, minimal shadows, 4–6px radii only
- Generous whitespace, 1280px max content width

## 2. Routes (mirror WordPress slugs)

```
/                  Home (new design)
/services          Services index
/services/$slug    Individual service page (WP content)
/about             About Us (WP content)
/blogs             Blog index (WP posts list)
/blogs/$slug       Blog post (WP content)
/contact           Contact (form + map + details)
```

All slugs match WordPress so existing URLs and internal links keep working. SEO metadata (title, description, OG) is pulled from WP per page — no rewrites.

## 3. WordPress Integration

- Connect the **WordPress.com** connector.
- Server functions in `src/lib/wordpress.functions.ts` wrap REST calls:
  - `getPages()`, `getPageBySlug(slug)`
  - `getPosts({ page, perPage })`, `getPostBySlug(slug)`, `getPopularPosts(limit)`
  - `getServices()` (WP category or custom post type — confirmed at build time)
- Rendered via TanStack Query (`ensureQueryData` in loader + `useSuspenseQuery`).
- WP HTML rendered inside a `prose` container styled to match the design system.

## 4. Homepage Sections

1. **Header** — Sticky, white, thin bottom border. Left: NB Associates wordmark + "Advocates & Legal Consultants" tagline. Right: Home / Services / About Us / Blogs / Contact + navy "Consult Us" button.
2. **Hero** — Large serif-free statement (e.g. "Trusted legal counsel for businesses and individuals across India."), short supporting line, single "Consult Us" CTA. No imagery, just typography on white.
3. **Trust stats** — 3 large numeric tiles: `26+ Years of Experience`, `[Team Size]+ Legal Professionals`, `[Matters]+ Matters Handled`, with a one-line "Trusted by businesses & individuals across India" caption. Placeholder values for team/matters until you confirm.
4. **Services** — "Our Services" + subtitle. Clean 3-column grid (responsive) of your seven practice areas, each linking to `/services/$slug`:
   - Legal Notice & Pre-Litigation Recovery
   - MSME Recovery Proceedings
   - Commercial Debt Recovery
   - Civil Recovery Suits
   - Arbitration for Debt Recovery
   - Corporate Debt Recovery
   - Cheque Bouncing & Negotiable Instruments Act Matters
5. **Our Clients** — Horizontal auto-scrolling logo strip (grayscale, hover restores color). Logo + company name. Placeholder logos until you upload real ones.
6. **Why NB Associates** — 6 minimalist tiles for the differentiators listed in the brief.
7. **Consult Us** — Two-column: left = phone `+91 98118 99279`, email `mail@nbassociates.net`, address (placeholder until confirmed), "Schedule a Consultation" CTA. Right = Google Maps embed (iframe, no API key needed for basic embed; we can upgrade to Maps JS later).
8. **Legal Insights** — 3 most-recent (or most-viewed) blog cards from WordPress: featured image, title, excerpt, "Read more".
9. **Footer** — Logo + tagline, Quick Links, Practice Areas, Contact Info, social icons, copyright.

## 5. Preservation Guarantees

- URL slugs mirror WordPress 1:1 (`/services/...`, `/blogs/...`, `/about`).
- Page bodies and blog content rendered verbatim from WP REST.
- SEO metadata (title, meta description, OG tags) sourced from WP per page via TanStack Start route `head()`.
- No WP pages or posts deleted, renamed, or rewritten.

## 6. Build Order

1. Install fonts (`@fontsource-variable/inter`) and set design tokens.
2. Connect WordPress.com connector; build server functions and confirm a sample fetch.
3. Build shared layout: Header, Footer, container.
4. Build the 8 homepage sections with the placeholder values noted.
5. Build `/services`, `/services/$slug`, `/about`, `/blogs`, `/blogs/$slug`, `/contact` shells that render WP content + WP-driven SEO metadata.
6. Pass mobile, tablet, desktop QA.

## Technical Details

- Stack: TanStack Start + TanStack Query + Tailwind v4 (already configured).
- Data: WordPress.com REST via the connector gateway (server functions only; key never reaches the browser).
- Maps: simple `<iframe>` embed for now; upgradeable to Google Maps JS via the Maps connector if you want pins/styling later.
- Forms: "Consult Us" CTA scrolls to `/contact`; contact form submission can be wired to email or a Lovable Cloud table in a follow-up.

## Open Items (will use placeholders unless you answer now)

- Team size and matters-handled numbers
- Office address
- Client logos (files) and names
- Whether services live in WordPress as Pages, Posts, or a custom type (I'll detect on first fetch; if missing, I'll render the seven you listed as static cards linking to `/services/$slug` stubs)
