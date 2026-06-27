/**
 * LegalHeroPanel
 *
 * Premium law-firm hero illustration:
 *   - Deep navy background with radial depth gradient (#061B44 range)
 *   - Scales of Justice inside a laurel wreath, thin gold line-art
 *   - Diagonal slash left edge with two parallel gold accent lines
 *   - Subtle radial glow behind emblem
 *
 * Pure inline SVG. No images, no raster, fully retina-ready.
 * aria-hidden, pointer-events: none throughout.
 *
 * viewBox 560 × 560  preserveAspectRatio="xMidYMid slice"
 * so it fills any aspect ratio of the right column cleanly.
 */

export function GeometricBackground() {
  /* Laurel leaf arc positions — generated once, used twice (mirrored) */
  const leafAngles = [-162, -144, -127, -110, -93, -76, -59, -43, -28, -14];
  const leafRadii  = [192,  190,  188,  188,  189, 188, 187, 186, 184, 182];

  return (
    <div className="geo-bg-wrapper" aria-hidden="true">
      <svg
        className="geo-bg-svg"
        viewBox="0 0 560 560"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* ── Deep navy field: lighter in centre, very dark at edges ── */}
          <radialGradient id="nbNavy" cx="58%" cy="46%" r="60%">
            <stop offset="0%"   stopColor="#173060" />
            <stop offset="55%"  stopColor="#0c1f45" />
            <stop offset="100%" stopColor="#040d1e" />
          </radialGradient>

          {/* ── Soft radial glow behind the emblem ── */}
          <radialGradient id="nbGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#1e3d72" stopOpacity="1"  />
            <stop offset="65%"  stopColor="#0f2248" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#061224" stopOpacity="0"  />
          </radialGradient>

          {/* ── Clip: everything stays inside the diagonal panel ── */}
          <clipPath id="nbClip">
            {/* Left edge: (118,0) top → (0,560) bottom — matches 1:4.7 slope */}
            <polygon points="118,0 560,0 560,560 0,560" />
          </clipPath>
        </defs>

        {/* ── NAVY FIELD ──────────────────────────────────── */}
        <polygon
          points="118,0 560,0 560,560 0,560"
          fill="url(#nbNavy)"
        />

        {/* ── GLOW CIRCLE behind emblem ───────────────────── */}
        <circle
          cx="320" cy="285"
          r="230"
          fill="url(#nbGlow)"
          clipPath="url(#nbClip)"
        />

        {/* ── DIAGONAL GOLD ACCENT LINES ──────────────────── */}
        {/* Parallel to the slash edge (slope dx=118 over 560px) */}
        {/* Line 1 — bold, just inside the diagonal edge */}
        <line
          x1="152" y1="0"   x2="34"  y2="560"
          stroke="#c8a85a" strokeWidth="2.4" strokeOpacity="0.92"
          clipPath="url(#nbClip)"
        />
        {/* Line 2 — thin, ~60px right of line 1 */}
        <line
          x1="212" y1="0"   x2="94"  y2="560"
          stroke="#c8a85a" strokeWidth="1.1" strokeOpacity="0.40"
          clipPath="url(#nbClip)"
        />

        {/* ── EMBLEM — centred at (320, 278) ──────────────── */}
        <g
          transform="translate(320,278)"
          stroke="#c8a85a"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          clipPath="url(#nbClip)"
        >

          {/* ════ SCALES OF JUSTICE ════ */}

          {/* Finial sphere */}
          <circle cx="0" cy="-162" r="7.5" strokeWidth="1.8" />

          {/* Vertical post */}
          <line x1="0" y1="-154" x2="0" y2="118" strokeWidth="2" />

          {/* Horizontal cross-beam */}
          <line x1="-114" y1="-100" x2="114" y2="-100" strokeWidth="2" />

          {/* Post knob / collar */}
          <line x1="-14" y1="-58" x2="14" y2="-58" strokeWidth="1.6" />
          <line x1="-9"  y1="-49" x2="9"  y2="-49" strokeWidth="1.1" />

          {/* Base foot-rail */}
          <line x1="-38" y1="118" x2="38" y2="118" strokeWidth="2.2" />

          {/* ── Left pan ── */}
          {/* Outer suspension cord */}
          <line x1="-114" y1="-100" x2="-148" y2="-4"  strokeWidth="1.5" />
          {/* Inner suspension cord */}
          <line x1="-114" y1="-100" x2="-80"  y2="-4"  strokeWidth="1.5" />
          {/* Pan arc */}
          <path d="M-148,-4 Q-114,32 -80,-4" strokeWidth="2" />

          {/* ── Right pan ── */}
          <line x1="114" y1="-100" x2="148"  y2="-4"  strokeWidth="1.5" />
          <line x1="114" y1="-100" x2="80"   y2="-4"  strokeWidth="1.5" />
          <path d="M80,-4 Q114,32 148,-4" strokeWidth="2" />

          {/* ════ LAUREL WREATH ════ */}
          {/*
            Each leaf: pointed almond  M0,-12 Q10,0 0,12 Q-10,0 0,-12
            with a centre-rib line.
            Positioned by: rotate(angle) then translate(0, -radius)
            so the tip points outward from the wreath centre.
          */}

          {/* Left arm */}
          {leafAngles.map((angle, i) => (
            <g key={`L${i}`} transform={`rotate(${angle}) translate(0,-${leafRadii[i]})`}>
              <path d="M0,-12 Q10,0 0,12 Q-10,0 0,-12" strokeWidth="1.4" />
              <line x1="0" y1="-12" x2="0" y2="12" strokeWidth="0.75" />
            </g>
          ))}

          {/* Right arm — mirror (negate angles) */}
          {leafAngles.map((angle, i) => (
            <g key={`R${i}`} transform={`rotate(${-angle}) translate(0,-${leafRadii[i]})`}>
              <path d="M0,-12 Q10,0 0,12 Q-10,0 0,-12" strokeWidth="1.4" />
              <line x1="0" y1="-12" x2="0" y2="12" strokeWidth="0.75" />
            </g>
          ))}

          {/* Wreath base — connecting arc */}
          <path d="M-30,118 Q0,134 30,118" strokeWidth="1.6" />

          {/* Base ribbon / bow tie */}
          <path
            d="M-30,118 Q-52,130 -44,144 Q-20,132 0,136 Q20,132 44,144 Q52,130 30,118"
            strokeWidth="1.4"
          />

          {/* Faint outer halo ring — adds premium depth */}
          <circle
            cx="0" cy="-22"
            r="214"
            strokeOpacity="0.10"
            strokeWidth="1"
          />

        </g>
      </svg>
    </div>
  );
}
