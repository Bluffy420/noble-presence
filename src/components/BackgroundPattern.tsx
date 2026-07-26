import React from "react";

type PatternType = "network-graph" | "sound-wave" | "floating-shapes" | "barcode" | "concentric-rings" | "circuit-board" | "dot-matrix";

interface Props {
  type: PatternType;
  /** Dark sections get white patterns, light sections get blue patterns */
  variant?: "dark" | "light";
}

export function BackgroundPattern({ type, variant = "light" }: Props) {
  const c = variant === "dark" ? "rgba(255,255,255,0.06)" : "rgba(29,78,216,0.07)";
  const c2 = variant === "dark" ? "rgba(255,255,255,0.03)" : "rgba(59,130,246,0.05)";
  const c3 = variant === "dark" ? "rgba(255,255,255,0.04)" : "rgba(29,78,216,0.04)";
  const stroke = variant === "dark" ? "rgba(255,255,255,0.08)" : "rgba(29,78,216,0.08)";
  const fill = variant === "dark" ? "rgba(255,255,255,0.06)" : "rgba(29,78,216,0.06)";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.8,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        {type === "network-graph" && <NetworkGraph c={c} c2={c2} c3={c3} stroke={stroke} fill={fill} />}
        {type === "sound-wave" && <SoundWave c={c} stroke={stroke} />}
        {type === "floating-shapes" && <FloatingShapes c={c} c2={c2} stroke={stroke} fill={fill} />}
        {type === "barcode" && <Barcode c={c} c2={c2} />}
        {type === "concentric-rings" && <ConcentricRings c={c} c2={c2} stroke={stroke} />}
        {type === "circuit-board" && <CircuitBoard c={c} c2={c2} stroke={stroke} fill={fill} />}
        {type === "dot-matrix" && <DotMatrix c={c} c2={c2} />}
      </svg>
    </div>
  );
}

/* ── 1. Network Graph — Connected nodes and edges ── */
function NetworkGraph({ c, c2, c3, stroke, fill }: Record<string, string>) {
  const nodes = [
    { x: 100, y: 120 }, { x: 280, y: 80 }, { x: 450, y: 150 },
    { x: 200, y: 280 }, { x: 400, y: 320 }, { x: 600, y: 250 },
    { x: 750, y: 120 }, { x: 920, y: 180 }, { x: 1100, y: 100 },
    { x: 850, y: 350 }, { x: 1050, y: 300 }, { x: 680, y: 420 },
    { x: 350, y: 500 }, { x: 550, y: 550 }, { x: 150, y: 450 },
    { x: 900, y: 520 }, { x: 720, y: 650 }, { x: 480, y: 700 },
    { x: 250, y: 650 }, { x: 1000, y: 680 },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [3, 4], [1, 4], [2, 5], [4, 5],
    [2, 6], [6, 7], [7, 8], [5, 9], [7, 9], [9, 10], [8, 10],
    [4, 11], [11, 12], [12, 13], [11, 14], [3, 14], [13, 15],
    [9, 15], [15, 16], [13, 16], [16, 17], [12, 17], [17, 18],
    [14, 18], [15, 19], [19, 16],
  ];

  return (
    <g>
      {edges.map(([i, j], idx) => (
        <line key={`e${idx}`} x1={nodes[i].x} y1={nodes[i].y} x2={nodes[j].x} y2={nodes[j].y}
          stroke={stroke} strokeWidth="1" opacity="0.6" />
      ))}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          {i % 3 === 0 && (
            <circle cx={n.x} cy={n.y} r="8" fill={c} opacity="0.5" />
          )}
          <circle cx={n.x} cy={n.y} r="3" fill={fill} opacity="0.8" />
        </g>
      ))}
      {[0, 4, 8, 12, 16].map((i) => (
        <circle key={`g${i}`} cx={nodes[i].x} cy={nodes[i].y} r="20" fill={c2} opacity="0.4" />
      ))}
    </g>
  );
}

/* ── 2. Sound Wave — Audio visualizer bars ── */
function SoundWave({ c, stroke }: Record<string, string>) {
  const bars = [40, 60, 30, 80, 50, 90, 45, 70, 35, 85, 55, 75, 42, 68, 38, 78, 52, 88, 48, 72, 36, 82, 58, 92];
  return (
    <g>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={40 + i * 46}
          y={400 - h}
          width="18"
          height={h * 2}
          rx="4"
          fill={i % 2 === 0 ? c : stroke}
          opacity="0.5"
        />
      ))}
      <rect x="30" y="380" width="1100" height="1" fill={stroke} opacity="0.2" />
      {[0, 6, 12, 18].map((i) => (
        <rect
          key={`h${i}`}
          x={40 + i * 46}
          y={400 - bars[i] - 6}
          width="18"
          height="4"
          rx="2"
          fill={stroke}
          opacity="0.6"
        />
      ))}
    </g>
  );
}

/* ── 3. Floating Geometric Shapes ── */
function FloatingShapes({ c, c2, stroke, fill }: Record<string, string>) {
  const shapes = [
    { type: "circle", x: 120, y: 150, size: 40 },
    { type: "square", x: 350, y: 100, size: 35 },
    { type: "triangle", x: 600, y: 180, size: 45 },
    { type: "circle", x: 850, y: 120, size: 30 },
    { type: "diamond", x: 1050, y: 200, size: 35 },
    { type: "square", x: 200, y: 350, size: 25 },
    { type: "circle", x: 500, y: 400, size: 50 },
    { type: "triangle", x: 750, y: 350, size: 30 },
    { type: "diamond", x: 950, y: 450, size: 40 },
    { type: "square", x: 150, y: 550, size: 45 },
    { type: "circle", x: 400, y: 600, size: 25 },
    { type: "triangle", x: 650, y: 550, size: 35 },
    { type: "diamond", x: 880, y: 650, size: 30 },
    { type: "square", x: 1080, y: 550, size: 40 },
    { type: "circle", x: 300, y: 750, size: 35 },
  ];

  return (
    <g>
      {shapes.map((s, i) => {
        const opacity = 0.4 + (i % 3) * 0.1;
        const rot = i * 27;
        if (s.type === "circle") {
          return <circle key={i} cx={s.x} cy={s.y} r={s.size / 2} fill={c} stroke={stroke} strokeWidth="1" opacity={opacity} />;
        }
        if (s.type === "square") {
          return (
            <g key={i} transform={`translate(${s.x}, ${s.y}) rotate(${rot})`}>
              <rect x={-s.size / 2} y={-s.size / 2} width={s.size} height={s.size} fill={c} stroke={stroke} strokeWidth="1" rx="2" opacity={opacity} />
            </g>
          );
        }
        if (s.type === "triangle") {
          const pts = `0,${-s.size / 2} ${-s.size / 2},${s.size / 2} ${s.size / 2},${s.size / 2}`;
          return (
            <g key={i} transform={`translate(${s.x}, ${s.y}) rotate(${rot})`}>
              <polygon points={pts} fill={c} stroke={stroke} strokeWidth="1" opacity={opacity} />
            </g>
          );
        }
        if (s.type === "diamond") {
          const pts = `0,${-s.size / 2} ${s.size / 2},0 0,${s.size / 2} ${-s.size / 2},0`;
          return (
            <g key={i} transform={`translate(${s.x}, ${s.y})`}>
              <polygon points={pts} fill={fill} stroke={stroke} strokeWidth="1" opacity={opacity} />
            </g>
          );
        }
        return null;
      })}
    </g>
  );
}

/* ── 4. Barcode / Data Stream ── */
function Barcode({ c, c2 }: Record<string, string>) {
  const lines = [2, 6, 3, 8, 4, 2, 10, 3, 5, 2, 7, 4, 3, 9, 2, 6, 4, 2, 8, 3, 5, 2, 11, 4, 3, 7, 2, 6, 5, 3, 9, 2, 4, 8, 3, 2, 6, 4, 10, 2, 5, 3, 7, 2, 4, 6, 3, 8, 2, 5];
  let x = 30;
  return (
    <g>
      {lines.map((w, i) => {
        const bar = (
          <rect key={i} x={x} y={100} width={w} height={600} fill={i % 2 === 0 ? c : c2} opacity="0.5" rx="1" />
        );
        x += w + 8;
        return bar;
      })}
      <rect x="25" y="98" width={x - 25} height="2" fill={c} opacity="0.3" />
      <rect x="25" y={698} width={x - 25} height="2" fill={c} opacity="0.3" />
    </g>
  );
}

/* ── 5. Concentric Rings / Radar ── */
function ConcentricRings({ c, c2, stroke }: Record<string, string>) {
  const centers = [
    { x: 200, y: 250 }, { x: 600, y: 300 }, { x: 1000, y: 200 },
    { x: 400, y: 550 }, { x: 850, y: 600 }, { x: 150, y: 600 },
  ];
  return (
    <g>
      {centers.map((ctr, i) => (
        <g key={i}>
          {[40, 80, 120, 160, 200].map((r) => (
            <circle key={r} cx={ctr.x} cy={ctr.y} r={r} fill="none" stroke={stroke} strokeWidth="1" opacity={0.3 - r * 0.0008} />
          ))}
          <circle cx={ctr.x} cy={ctr.y} r="4" fill={c} opacity="0.6" />
          <line x1={ctr.x} y1={ctr.y} x2={ctr.x + 160} y2={ctr.y - 120} stroke={stroke} strokeWidth="1" opacity="0.3" />
        </g>
      ))}
      {centers.map((ctr, i) => (
        <circle key={`glow${i}`} cx={ctr.x} cy={ctr.y} r="60" fill={c2} opacity="0.3" />
      ))}
    </g>
  );
}

/* ── 6. Circuit Board — Traces and nodes ── */
function CircuitBoard({ c, c2, stroke, fill }: Record<string, string>) {
  const traces = [
    { x1: 50, y1: 100, x2: 50, y2: 300, x3: 200, y3: 300 },
    { x1: 200, y1: 300, x2: 200, y2: 500, x3: 400, y3: 500 },
    { x1: 400, y1: 500, x2: 400, y2: 200, x3: 600, y3: 200 },
    { x1: 600, y1: 200, x2: 600, y2: 400, x3: 800, y3: 400 },
    { x1: 800, y1: 400, x2: 800, y2: 150, x3: 1000, y3: 150 },
    { x1: 1000, y1: 150, x2: 1000, y2: 350, x3: 1150, y3: 350 },
    { x1: 150, y1: 600, x2: 150, y2: 700, x3: 350, y3: 700 },
    { x1: 350, y1: 700, x2: 350, y2: 450, x3: 550, y3: 450 },
    { x1: 550, y1: 450, x2: 550, y2: 650, x3: 750, y3: 650 },
    { x1: 750, y1: 650, x2: 750, y2: 500, x3: 950, y3: 500 },
    { x1: 950, y1: 500, x2: 950, y2: 700, x3: 1100, y3: 700 },
    { x1: 300, y1: 100, x2: 500, y2: 100, x3: 500, y3: 300 },
    { x1: 700, y1: 100, x2: 900, y2: 100, x3: 900, y3: 300 },
  ];
  const nodes = [
    { x: 50, y: 100 }, { x: 50, y: 300 }, { x: 200, y: 300 },
    { x: 200, y: 500 }, { x: 400, y: 500 }, { x: 400, y: 200 },
    { x: 600, y: 200 }, { x: 600, y: 400 }, { x: 800, y: 400 },
    { x: 800, y: 150 }, { x: 1000, y: 150 }, { x: 1000, y: 350 },
    { x: 1150, y: 350 }, { x: 150, y: 600 }, { x: 150, y: 700 },
    { x: 350, y: 700 }, { x: 350, y: 450 }, { x: 550, y: 450 },
    { x: 550, y: 650 }, { x: 750, y: 650 }, { x: 750, y: 500 },
    { x: 950, y: 500 }, { x: 950, y: 700 }, { x: 1100, y: 700 },
    { x: 300, y: 100 }, { x: 500, y: 100 }, { x: 500, y: 300 },
    { x: 700, y: 100 }, { x: 900, y: 100 }, { x: 900, y: 300 },
  ];
  return (
    <g>
      {traces.map((t, i) => (
        <g key={i}>
          <line x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke={stroke} strokeWidth="1.5" opacity="0.5" />
          <line x1={t.x2} y1={t.y2} x2={t.x3} y2={t.y3} stroke={stroke} strokeWidth="1.5" opacity="0.5" />
          <circle cx={t.x2} cy={t.y2} r="3" fill={fill} opacity="0.7" />
        </g>
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="2.5" fill={c} opacity="0.6" />
      ))}
      {[2, 5, 9, 16, 19, 23].map((i) => (
        <circle key={`big${i}`} cx={nodes[i].x} cy={nodes[i].y} r="5" fill={c2} opacity="0.5" />
      ))}
    </g>
  );
}

/* ── 7. Dot Matrix ── */
function DotMatrix({ c, c2 }: Record<string, string>) {
  const dots: { x: number; y: number; size: number; opacity: number }[] = [];
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 30; col++) {
      const isLarge = (row + col) % 5 === 0;
      dots.push({
        x: 40 + col * 40,
        y: 40 + row * 40,
        size: isLarge ? 3 : 1.5,
        opacity: isLarge ? 0.5 : 0.3,
      });
    }
  }
  return (
    <g>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.size} fill={d.size > 2 ? c : c2} opacity={d.opacity} />
      ))}
    </g>
  );
}