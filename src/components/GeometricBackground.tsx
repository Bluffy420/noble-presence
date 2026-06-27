/**
 * HeroPanel
 *
 * Right-side navy panel for the Hero section.
 * Recreates the "diagonal slash + scales of justice + gold accent lines" aesthetic
 * from the design reference.
 *
 * Pure SVG — no images, no runtime JS, no external deps.
 * aria-hidden + pointer-events:none throughout.
 */

export function GeometricBackground() {
  return (
    <div className="geo-bg-wrapper" aria-hidden="true">
      {/*
        The SVG viewBox is 800×700.
        The diagonal slash sits at roughly x=120 in this space,
        cutting from top-left to bottom-right to match the reference.
        All coordinates are in this internal space.
      */}
      <svg
        className="geo-bg-svg"
        viewBox="0 0 800 700"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid slice"
      >
        <defs>
          {/* Radial glow behind the emblem */}
          <radialGradient id="emblem-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1a3060" stopOpacity="1" />
            <stop offset="100%" stopColor="#0b1d3a" stopOpacity="1" />
          </radialGradient>

          {/* Subtle texture shading on the navy field */}
          <radialGradient id="navy-depth" cx="60%" cy="40%" r="70%">
            <stop offset="0%"   stopColor="#0f2550" stopOpacity="1" />
            <stop offset="100%" stopColor="#080f22" stopOpacity="1" />
          </radialGradient>

          {/* Clip the whole SVG */}
          <clipPath id="panel-clip">
            <rect width="800" height="700" />
          </clipPath>
        </defs>

        <g clipPath="url(#panel-clip)">

          {/* ── NAVY FIELD ─────────────────────────────────────── */}
          {/*
            The diagonal slash is a polygon that covers the full canvas.
            The left edge starts at (120, 0) at the top and (0, 700) at the bottom,
            creating the angled cut seen in the reference.
          */}
          <polygon
            points="140,0 800,0 800,700 0,700"
            fill="url(#navy-depth)"
          />

          {/* ── DIAGONAL GOLD ACCENT LINES ─────────────────────── */}
          {/*
            Two parallel diagonal stripes running top-right to bottom-right,
            matching the reference image.
          */}
          {/* Primary gold slash — bold */}
          <line
            x1="190" y1="0"
            x2="40"  y2="700"
            stroke="#c9a84c"
            strokeWidth="2.5"
            strokeOpacity="0.9"
          />
          {/* Secondary gold slash — thinner, offset right */}
          <line
            x1="260" y1="0"
            x2="110" y2="700"
            stroke="#c9a84c"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />
          {/* Tertiary hint far right */}
          <line
            x1="720" y1="0"
            x2="640" y2="700"
            stroke="#c9a84c"
            strokeWidth="1"
            strokeOpacity="0.22"
          />

          {/* ── EMBLEM GLOW CIRCLE ─────────────────────────────── */}
          <circle
            cx="500" cy="355"
            r="230"
            fill="url(#emblem-glow)"
            opacity="0.7"
          />

          {/* ── SCALES OF JUSTICE + LAUREL WREATH EMBLEM ──────── */}
          {/*
            Drawn at centre (500, 355), scaled to fill ~320px diameter.
            All strokes in gold (#c9a84c), fill none.
            Stroke width ~2px at this scale for crisp line-art feel.
          */}
          <g
            transform="translate(500, 355)"
            stroke="#c9a84c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            {/* ── SCALES ── */}

            {/* Central vertical post */}
            <line x1="0" y1="-160" x2="0" y2="120" />

            {/* Base platform */}
            <line x1="-40" y1="120" x2="40" y2="120" />

            {/* Top cross-beam */}
            <line x1="-110" y1="-100" x2="110" y2="-100" />

            {/* Top ornament (sphere/finial) */}
            <circle cx="0" cy="-165" r="8" strokeWidth="1.8" />

            {/* Left chain */}
            <line x1="-110" y1="-100" x2="-110" y2="-10" />
            {/* Right chain */}
            <line x1="110"  y1="-100" x2="110"  y2="-10" />

            {/* Left pan */}
            <path d="M-150,-10 Q-110,20 -70,-10 Z" strokeWidth="1.8" />
            {/* Right pan */}
            <path d="M150,-10 Q110,20 70,-10 Z" strokeWidth="1.8" />

            {/* Left pan suspension lines */}
            <line x1="-150" y1="-10" x2="-110" y2="-100" />
            <line x1="-70"  y1="-10" x2="-110" y2="-100" />
            {/* Right pan suspension lines */}
            <line x1="150"  y1="-10" x2="110"  y2="-100" />
            <line x1="70"   y1="-10" x2="110"  y2="-100" />

            {/* Post decorative band */}
            <line x1="-18" y1="-60" x2="18" y2="-60" strokeWidth="1.2" />
            <line x1="-14" y1="-50" x2="14" y2="-50" strokeWidth="1" />

            {/* ── LAUREL WREATH ── */}
            {/*
              Two arcs of leaves, mirrored left/right.
              Each leaf is a small ellipse-ish path rotated around the arc.
              We use 9 leaves per side, spaced 18° apart from ~210° to ~330° (left)
              and ~210° to ~330° mirrored (right).
            */}

            {/* LEFT wreath arm — leaves arc from bottom-left up to top-left */}
            { [
                { angle: -155, lx: -148, ly:  95 },
                { angle: -130, lx: -170, ly:  55 },
                { angle: -110, lx: -182, ly:  15 },
                { angle:  -92, lx: -186, ly: -28 },
                { angle:  -75, lx: -178, ly: -70 },
                { angle:  -58, lx: -162, ly:-108 },
                { angle:  -42, lx: -138, ly:-140 },
                { angle:  -27, lx: -108, ly:-163 },
                { angle:  -14, lx:  -74, ly:-178 },
              ].map(({ angle, lx, ly }, i) => (
                <g key={`lL${i}`} transform={`translate(${lx},${ly}) rotate(${angle})`}>
                  <ellipse rx="14" ry="7" strokeWidth="1.4" />
                  <line x1="0" y1="-7" x2="0" y2="7" strokeWidth="0.8" />
                </g>
              ))
            }

            {/* RIGHT wreath arm — mirror of left */}
            { [
                { angle:  155, lx:  148, ly:  95 },
                { angle:  130, lx:  170, ly:  55 },
                { angle:  110, lx:  182, ly:  15 },
                { angle:   92, lx:  186, ly: -28 },
                { angle:   75, lx:  178, ly: -70 },
                { angle:   58, lx:  162, ly:-108 },
                { angle:   42, lx:  138, ly:-140 },
                { angle:   27, lx:  108, ly:-163 },
                { angle:   14, lx:   74, ly:-178 },
              ].map(({ angle, lx, ly }, i) => (
                <g key={`lR${i}`} transform={`translate(${lx},${ly}) rotate(${angle})`}>
                  <ellipse rx="14" ry="7" strokeWidth="1.4" />
                  <line x1="0" y1="-7" x2="0" y2="7" strokeWidth="0.8" />
                </g>
              ))
            }

            {/* Wreath base bow / tie */}
            <path
              d="M-30,115 Q0,130 30,115"
              strokeWidth="1.6"
            />
            <path
              d="M-30,115 Q-50,128 -42,140 Q-20,128 0,132 Q20,128 42,140 Q50,128 30,115"
              strokeWidth="1.4"
            />

            {/* Thin outer ring (halo) */}
            <circle cx="0" cy="-30" r="208" strokeOpacity="0.12" strokeWidth="1" />
          </g>

        </g>
      </svg>
    </div>
  );
}
