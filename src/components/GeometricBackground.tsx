/**
 * GeometricBackground
 *
 * A CSS/SVG low-poly triangle mesh for the Hero section.
 * Navy base mesh with selective gold accent triangles.
 * Purely decorative — aria-hidden, pointer-events none.
 *
 * Responsive behaviour:
 *   desktop  → full panel, ~30 % of hero width, right-aligned
 *   tablet   → smaller footprint, fewer visible triangles
 *   mobile   → thin strip, heavily reduced, never pushes text below fold
 */

export function GeometricBackground() {
  return (
    <div
      aria-hidden="true"
      className="geo-bg-wrapper"
    >
      <svg
        className="geo-bg-svg"
        viewBox="0 0 480 560"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Very subtle inner-shadow to give depth at the edge */}
          <linearGradient id="geo-fade-right" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0b1d3a" stopOpacity="1" />
            <stop offset="100%" stopColor="#0b1d3a" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="geo-fade-left" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0b1d3a" stopOpacity="0.0" />
            <stop offset="30%" stopColor="#0b1d3a" stopOpacity="1" />
          </linearGradient>

          {/* Clipping mask so triangles don't bleed outside the panel */}
          <clipPath id="geo-clip">
            <rect width="480" height="560" />
          </clipPath>
        </defs>

        <g clipPath="url(#geo-clip)">
          {/* ── BASE FILL ─────────────────────────────────────────── */}
          <rect width="480" height="560" fill="#0b1d3a" />

          {/* ── NAVY MESH TRIANGLES (dark variations for depth) ───── */}
          {/* Row 0 */}
          <polygon points="0,0 120,0 60,80"        fill="#0e2240" />
          <polygon points="120,0 240,0 180,80"      fill="#0a1a35" />
          <polygon points="240,0 360,0 300,80"      fill="#0d2142" />
          <polygon points="360,0 480,0 420,80"      fill="#091830" />
          <polygon points="0,0 60,80 0,160"         fill="#0c1f3c" />
          <polygon points="480,0 420,80 480,160"    fill="#0b1c38" />

          {/* Row 1 */}
          <polygon points="60,80 180,80 120,160"    fill="#0a1b37" />
          <polygon points="180,80 300,80 240,160"   fill="#0f2445" />
          <polygon points="300,80 420,80 360,160"   fill="#091830" />
          <polygon points="0,160 120,160 60,240"    fill="#0d2040" />
          <polygon points="120,160 240,160 180,240" fill="#0b1c38" />
          <polygon points="240,160 360,160 300,240" fill="#0e2344" />
          <polygon points="360,160 480,160 420,240" fill="#091730" />
          <polygon points="480,160 420,240 480,320" fill="#0c1f3c" />

          {/* Row 2 */}
          <polygon points="0,240 120,240 60,320"    fill="#0b1e3e" />
          <polygon points="60,240 180,240 120,320"  fill="#0a1a35" />
          <polygon points="180,240 300,240 240,320" fill="#0d2142" />
          <polygon points="300,240 420,240 360,320" fill="#0c1e3d" />
          <polygon points="420,240 480,320 360,320" fill="#091830" />

          {/* Row 3 */}
          <polygon points="0,320 120,320 60,400"    fill="#0a1c38" />
          <polygon points="120,320 240,320 180,400" fill="#0f2345" />
          <polygon points="240,320 360,320 300,400" fill="#0b1d3a" />
          <polygon points="360,320 480,320 420,400" fill="#091730" />
          <polygon points="0,320 60,400 0,480"      fill="#0c2040" />
          <polygon points="480,320 420,400 480,480" fill="#0a1c38" />

          {/* Row 4 */}
          <polygon points="60,400 180,400 120,480"  fill="#0d2142" />
          <polygon points="180,400 300,400 240,480" fill="#0a1a35" />
          <polygon points="300,400 420,400 360,480" fill="#0e2244" />
          <polygon points="0,480 120,480 60,560"    fill="#0b1d3a" />
          <polygon points="120,480 240,480 180,560" fill="#0a1c38" />
          <polygon points="240,480 360,480 300,560" fill="#0d2040" />
          <polygon points="360,480 480,480 420,560" fill="#091830" />

          {/* ── INVERTED FILL TRIANGLES (close gaps in mesh) ──────── */}
          <polygon points="0,0 120,0 0,160"         fill="#0b1c38" opacity="0.5" />
          <polygon points="120,0 240,0 120,160"     fill="#0a1b37" opacity="0.4" />
          <polygon points="240,0 360,0 240,160"     fill="#0c1f3d" opacity="0.5" />
          <polygon points="0,160 120,160 0,320"     fill="#091830" opacity="0.5" />
          <polygon points="120,160 240,160 120,320" fill="#0b1d3a" opacity="0.4" />
          <polygon points="240,160 360,160 240,320" fill="#0d2142" opacity="0.5" />
          <polygon points="360,160 480,160 360,320" fill="#0a1a35" opacity="0.4" />
          <polygon points="0,320 120,320 0,480"     fill="#0c1f3c" opacity="0.5" />
          <polygon points="120,320 240,320 120,480" fill="#0a1c38" opacity="0.4" />
          <polygon points="240,320 360,320 240,480" fill="#0b1e3e" opacity="0.5" />
          <polygon points="360,320 480,320 360,480" fill="#091730" opacity="0.4" />
          <polygon points="0,480 120,480 0,560"     fill="#0d2040" opacity="0.5" />
          <polygon points="120,480 240,480 120,560" fill="#0a1a35" opacity="0.4" />
          <polygon points="240,480 360,480 240,560" fill="#0c1e3d" opacity="0.5" />
          <polygon points="360,480 480,480 360,560" fill="#091830" opacity="0.4" />

          {/* ── GOLD ACCENT TRIANGLES (selective, scattered) ─────── */}
          {/* Top-right accent cluster */}
          <polygon points="300,0 360,0 300,80"      fill="#c9a84c" opacity="0.82" />
          <polygon points="360,80 420,80 360,160"   fill="#c9a84c" opacity="0.55" />
          <polygon points="420,0 480,0 480,80"      fill="#b8963e" opacity="0.35" />

          {/* Mid-left accent */}
          <polygon points="60,160 120,160 60,240"   fill="#c9a84c" opacity="0.65" />
          <polygon points="0,240 60,240 0,320"      fill="#c9a84c" opacity="0.38" />

          {/* Mid-right accent */}
          <polygon points="360,240 420,240 360,320" fill="#c9a84c" opacity="0.72" />
          <polygon points="420,240 480,240 480,320" fill="#b8963e" opacity="0.42" />

          {/* Lower accent */}
          <polygon points="180,320 240,320 180,400" fill="#c9a84c" opacity="0.58" />
          <polygon points="60,400 120,400 60,480"   fill="#c9a84c" opacity="0.45" />
          <polygon points="360,400 420,400 360,480" fill="#b8963e" opacity="0.32" />

          {/* ── EDGE STROKES (subtle mesh lines) ─────────────────── */}
          <g stroke="#c9a84c" strokeWidth="0.35" strokeOpacity="0.18" fill="none">
            {/* Horizontal rows */}
            <line x1="0" y1="80"  x2="480" y2="80"  />
            <line x1="0" y1="160" x2="480" y2="160" />
            <line x1="0" y1="240" x2="480" y2="240" />
            <line x1="0" y1="320" x2="480" y2="320" />
            <line x1="0" y1="400" x2="480" y2="400" />
            <line x1="0" y1="480" x2="480" y2="480" />
            {/* Diagonal grid */}
            <line x1="0"   y1="0"   x2="480" y2="560" />
            <line x1="120" y1="0"   x2="480" y2="453" />
            <line x1="240" y1="0"   x2="480" y2="346" />
            <line x1="0"   y1="106" x2="480" y2="560" />
            <line x1="0"   y1="213" x2="360" y2="560" />
            <line x1="0"   y1="320" x2="240" y2="560" />
            <line x1="480" y1="0"   x2="0"   y2="560" />
            <line x1="360" y1="0"   x2="0"   y2="453" />
          </g>

          {/* ── SOFT LEFT FADE (blends into page background) ─────── */}
          <rect
            width="80"
            height="560"
            fill="url(#geo-fade-left)"
          />
        </g>
      </svg>
    </div>
  );
}
