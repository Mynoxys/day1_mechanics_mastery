import { CircuitSchematic } from "@/components/ee/CircuitSchematic";
import { ScopeTrace } from "@/components/ee/ScopeTrace";

const RES = "#10b981";
const VOLT = "#f59e0b";
const CURR = "#ef4444";
const SIG = "#06b6d4";

/**
 * Q1 — Two resistors in series across DMM probes.
 *
 *   (DMM red) ── R_top ── R_bot ── (DMM black)
 *
 * Typical numbers default to the exam values; override via props for variants.
 */
export function TwoRSeriesDmm({
  rTop = 520,
  rBot = 215,
  unit = "Ω",
}: {
  rTop?: number;
  rBot?: number;
  unit?: string;
}) {
  return (
    <CircuitSchematic
      width={360}
      height={170}
      noGrid
      wires={[
        { x1: 30, y1: 80, x2: 95, y2: 80 },
        { x1: 130, y1: 80, x2: 200, y2: 80 },
        { x1: 235, y1: 80, x2: 310, y2: 80 },
      ]}
      components={[
        { kind: "TEXT", x: 22, y: 60, label: "DMM(+)", color: CURR, value: "10" },
        { kind: "DOT", x: 30, y: 80, color: CURR },
        { kind: "R", x: 112, y: 80, label: `${rTop} ${unit}`, color: RES },
        { kind: "R", x: 217, y: 80, label: `${rBot} ${unit}`, color: RES },
        { kind: "DOT", x: 310, y: 80, color: "#475569" },
        { kind: "TEXT", x: 320, y: 60, label: "DMM(−)", color: "#475569", value: "10" },
      ]}
    />
  );
}

/**
 * Q3 — Two resistors in parallel across DMM.
 */
export function TwoRParallelDmm({
  rTop = 460,
  rBot = 380,
  unit = "Ω",
}: {
  rTop?: number;
  rBot?: number;
  unit?: string;
}) {
  return (
    <CircuitSchematic
      width={360}
      height={180}
      noGrid
      wires={[
        { x1: 30, y1: 90, x2: 80, y2: 90 },
        { x1: 80, y1: 50, x2: 80, y2: 130 },
        { x1: 80, y1: 50, x2: 130, y2: 50 },
        { x1: 80, y1: 130, x2: 130, y2: 130 },
        { x1: 165, y1: 50, x2: 220, y2: 50 },
        { x1: 165, y1: 130, x2: 220, y2: 130 },
        { x1: 220, y1: 50, x2: 220, y2: 130 },
        { x1: 220, y1: 90, x2: 290, y2: 90 },
      ]}
      components={[
        { kind: "TEXT", x: 22, y: 70, label: "DMM(+)", color: CURR, value: "10" },
        { kind: "DOT", x: 30, y: 90, color: CURR },
        { kind: "DOT", x: 80, y: 90, color: "#475569" },
        { kind: "R", x: 147, y: 50, label: `${rTop} ${unit}`, color: RES },
        { kind: "R", x: 147, y: 130, label: `${rBot} ${unit}`, color: RES, labelPos: "bottom" },
        { kind: "DOT", x: 220, y: 90, color: "#475569" },
        { kind: "DOT", x: 290, y: 90, color: "#475569" },
        { kind: "TEXT", x: 305, y: 70, label: "DMM(−)", color: "#475569", value: "10" },
      ]}
    />
  );
}

/**
 * Q4 — Two voltage sources in a loop, polarities NOT shown.
 *  Schematic exists, but the unmarked +/− is the entire pedagogical point.
 */
export function TwoSourceLoopUnmarked({
  v1 = 2.85,
  v2 = 4.4,
}: { v1?: number; v2?: number }) {
  return (
    <CircuitSchematic
      width={360}
      height={170}
      noGrid
      wires={[
        { x1: 60, y1: 60, x2: 60, y2: 130 },
        { x1: 60, y1: 130, x2: 300, y2: 130 },
        { x1: 300, y1: 60, x2: 300, y2: 130 },
        { x1: 60, y1: 60, x2: 130, y2: 60 },
        { x1: 230, y1: 60, x2: 300, y2: 60 },
        { x1: 156, y1: 60, x2: 204, y2: 60 },
      ]}
      components={[
        { kind: "V", x: 142, y: 60, label: `V₁ = ${v1.toFixed(2)} V (?)`, color: VOLT },
        { kind: "V", x: 218, y: 60, label: `V₂ = ${v2.toFixed(2)} V (?)`, color: VOLT },
        { kind: "TEXT", x: 180, y: 110, label: "polarities not marked", color: "#dc2626", value: "11" },
      ]}
    />
  );
}

/**
 * Q5 / Q12 — Bench supply + R, with CV/CC indicator.
 */
export function BenchSupplyResistor({
  vSet,
  iSet,
  r,
  unit = "Ω",
}: {
  vSet: number;
  iSet: number;
  r: number;
  unit?: string;
}) {
  const iNeed = vSet / r;
  const mode = iNeed > iSet ? "CC" : "CV";
  const modeColor = mode === "CC" ? CURR : VOLT;
  return (
    <CircuitSchematic
      width={360}
      height={200}
      noGrid
      wires={[
        { x1: 60, y1: 90, x2: 60, y2: 60 },
        { x1: 60, y1: 60, x2: 250, y2: 60 },
        { x1: 250, y1: 60, x2: 250, y2: 78 },
        { x1: 250, y1: 102, x2: 250, y2: 130 },
        { x1: 60, y1: 120, x2: 60, y2: 150 },
        { x1: 60, y1: 150, x2: 250, y2: 150 },
        { x1: 250, y1: 130, x2: 250, y2: 150 },
      ]}
      components={[
        { kind: "TEXT", x: 60, y: 30, label: `Supply  ${vSet}V / ${iSet}A`, color: VOLT, value: "11" },
        { kind: "V", x: 60, y: 105, color: VOLT, labelPos: "left" },
        { kind: "R", x: 250, y: 90, label: `${r} ${unit}`, color: RES, labelPos: "right" },
        { kind: "GND", x: 155, y: 150 },
        { kind: "TEXT", x: 155, y: 180, label: `mode: ${mode}`, color: modeColor, value: "13" },
      ]}
    />
  );
}

/**
 * Q7 — V → R1 → node X → (R2 ∥ R3) → GND
 */
export function DividerThenParallel({
  v = 10,
  r1 = 500,
  r2 = 1000,
  r3 = 2000,
  unit = "Ω",
}: { v?: number; r1?: number; r2?: number; r3?: number; unit?: string }) {
  return (
    <CircuitSchematic
      width={420}
      height={210}
      noGrid
      wires={[
        { x1: 50, y1: 100, x2: 50, y2: 60 },
        { x1: 50, y1: 60, x2: 130, y2: 60 },
        { x1: 165, y1: 60, x2: 240, y2: 60 },
        { x1: 240, y1: 50, x2: 240, y2: 110 },
        { x1: 240, y1: 50, x2: 320, y2: 50 },
        { x1: 240, y1: 110, x2: 320, y2: 110 },
        { x1: 355, y1: 50, x2: 380, y2: 50 },
        { x1: 355, y1: 110, x2: 380, y2: 110 },
        { x1: 380, y1: 50, x2: 380, y2: 160 },
        { x1: 50, y1: 130, x2: 50, y2: 160 },
        { x1: 50, y1: 160, x2: 380, y2: 160 },
      ]}
      components={[
        { kind: "V", x: 50, y: 115, label: `${v} V`, color: VOLT, labelPos: "left" },
        { kind: "R", x: 147, y: 60, label: `R₁ = ${r1} ${unit}`, color: RES },
        { kind: "DOT", x: 240, y: 80, color: "#475569" },
        { kind: "TEXT", x: 252, y: 76, label: "X", color: SIG, value: "13" },
        { kind: "R", x: 337, y: 50, label: `R₂ = ${r2} ${unit}`, color: RES },
        { kind: "R", x: 337, y: 110, label: `R₃ = ${r3} ${unit}`, color: RES, labelPos: "bottom" },
        { kind: "GND", x: 215, y: 160 },
      ]}
    />
  );
}

/**
 * Q10 — 24V source with two parallel branches, each two Rs in series.
 */
export function TwoBranches({
  v = 24,
  r1 = 200,
  r2 = 400,
  r3 = 300,
  r4 = 600,
  unit = "Ω",
}: {
  v?: number;
  r1?: number;
  r2?: number;
  r3?: number;
  r4?: number;
  unit?: string;
}) {
  return (
    <CircuitSchematic
      width={420}
      height={220}
      noGrid
      wires={[
        { x1: 50, y1: 110, x2: 50, y2: 60 },
        { x1: 50, y1: 60, x2: 380, y2: 60 },
        { x1: 80, y1: 60, x2: 80, y2: 60 },
        { x1: 80, y1: 60, x2: 80, y2: 60 },
        // top branch wires
        { x1: 130, y1: 60, x2: 130, y2: 95 },
        { x1: 130, y1: 95, x2: 175, y2: 95 },
        { x1: 210, y1: 95, x2: 240, y2: 95 },
        { x1: 240, y1: 95, x2: 280, y2: 95 },
        { x1: 315, y1: 95, x2: 360, y2: 95 },
        { x1: 360, y1: 60, x2: 360, y2: 95 },
        // bottom branch wires
        { x1: 130, y1: 60, x2: 130, y2: 145 },
        { x1: 130, y1: 145, x2: 175, y2: 145 },
        { x1: 210, y1: 145, x2: 280, y2: 145 },
        { x1: 315, y1: 145, x2: 360, y2: 145 },
        { x1: 360, y1: 145, x2: 360, y2: 60 },
        // ground rail
        { x1: 50, y1: 130, x2: 50, y2: 175 },
        { x1: 50, y1: 175, x2: 380, y2: 175 },
        { x1: 380, y1: 60, x2: 380, y2: 175 },
      ]}
      components={[
        { kind: "V", x: 50, y: 122, label: `${v} V`, color: VOLT, labelPos: "left" },
        // top branch
        { kind: "R", x: 192, y: 95, label: `R₁ = ${r1} ${unit}`, color: RES },
        { kind: "R", x: 297, y: 95, label: `R₂ = ${r2} ${unit}`, color: RES },
        // bottom branch
        { kind: "R", x: 192, y: 145, label: `R₃ = ${r3} ${unit}`, color: RES, labelPos: "bottom" },
        { kind: "R", x: 297, y: 145, label: `R₄ = ${r4} ${unit}`, color: RES, labelPos: "bottom" },
        { kind: "ARROW_R", x: 100, y: 80, color: CURR, label: "I_top" },
        { kind: "ARROW_R", x: 100, y: 130, color: CURR, label: "I_bot", labelPos: "bottom" },
        { kind: "GND", x: 215, y: 175 },
      ]}
    />
  );
}

/**
 * Q8 — Two resistors in parallel with power ratings (V across both).
 */
export function ParallelPower({
  rTop = 250,
  rBot = 100,
  pTop = 0.5,
  pBot = 0.5,
  unit = "Ω",
}: {
  rTop?: number;
  rBot?: number;
  pTop?: number;
  pBot?: number;
  unit?: string;
}) {
  return (
    <CircuitSchematic
      width={360}
      height={180}
      noGrid
      wires={[
        { x1: 40, y1: 90, x2: 90, y2: 90 },
        { x1: 90, y1: 50, x2: 90, y2: 130 },
        { x1: 90, y1: 50, x2: 140, y2: 50 },
        { x1: 90, y1: 130, x2: 140, y2: 130 },
        { x1: 175, y1: 50, x2: 230, y2: 50 },
        { x1: 175, y1: 130, x2: 230, y2: 130 },
        { x1: 230, y1: 50, x2: 230, y2: 130 },
        { x1: 230, y1: 90, x2: 280, y2: 90 },
      ]}
      components={[
        { kind: "TEXT", x: 28, y: 78, label: "V", color: VOLT, value: "13" },
        { kind: "DOT", x: 40, y: 90, color: "#475569" },
        { kind: "R", x: 157, y: 50, label: `${rTop}Ω,  ${pTop}W`, color: RES },
        { kind: "R", x: 157, y: 130, label: `${rBot}Ω,  ${pBot}W`, color: RES, labelPos: "bottom" },
        { kind: "DOT", x: 280, y: 90, color: "#475569" },
        { kind: "TEXT", x: 295, y: 78, label: "GND", color: "#475569", value: "11" },
      ]}
    />
  );
}

/**
 * Q16 — Voltage divider design: find R2 given target V_out.
 */
export function DividerDesign({
  v = 15,
  r1 = 2200,
  vOut = 4,
  r2Label = "R₂ = ?",
}: {
  v?: number;
  r1?: number;
  vOut?: number;
  r2Label?: string;
}) {
  return (
    <CircuitSchematic
      width={360}
      height={230}
      noGrid
      wires={[
        { x1: 60, y1: 110, x2: 60, y2: 60 },
        { x1: 60, y1: 60, x2: 220, y2: 60 },
        { x1: 220, y1: 60, x2: 220, y2: 90 },
        { x1: 220, y1: 120, x2: 220, y2: 160 },
        { x1: 220, y1: 190, x2: 220, y2: 200 },
        { x1: 60, y1: 140, x2: 60, y2: 200 },
        { x1: 60, y1: 200, x2: 220, y2: 200 },
        { x1: 220, y1: 145, x2: 290, y2: 145 },
      ]}
      components={[
        { kind: "V", x: 60, y: 125, label: `${v} V`, color: VOLT, labelPos: "left" },
        { kind: "R", x: 220, y: 105, label: `R₁ = ${r1} Ω`, color: RES },
        { kind: "R", x: 220, y: 175, label: r2Label, color: "#dc2626" },
        { kind: "DOT", x: 220, y: 145, color: SIG },
        { kind: "TEXT", x: 305, y: 138, label: `V_out = ${vOut}V`, color: SIG, value: "12" },
        { kind: "GND", x: 140, y: 200 },
      ]}
    />
  );
}

/**
 * Q19 — Three-source nodal: each Vi → Ri → common node V.
 */
export function ThreeSourceNodal({
  v1 = 10,
  v2 = 5,
  v3 = 8,
  r1 = 1000,
  r2 = 2000,
  r3 = 4000,
}: {
  v1?: number;
  v2?: number;
  v3?: number;
  r1?: number;
  r2?: number;
  r3?: number;
}) {
  return (
    <CircuitSchematic
      width={420}
      height={250}
      noGrid
      wires={[
        // branch 1
        { x1: 60, y1: 50, x2: 60, y2: 95 },
        { x1: 60, y1: 50, x2: 280, y2: 50 },
        { x1: 280, y1: 50, x2: 280, y2: 130 },
        // branch 2
        { x1: 60, y1: 125, x2: 60, y2: 165 },
        { x1: 60, y1: 165, x2: 60, y2: 165 },
        { x1: 130, y1: 165, x2: 280, y2: 165 },
        { x1: 280, y1: 165, x2: 280, y2: 130 },
        { x1: 60, y1: 165, x2: 95, y2: 165 },
        // branch 3
        { x1: 200, y1: 230, x2: 280, y2: 230 },
        { x1: 280, y1: 230, x2: 280, y2: 165 },
        { x1: 165, y1: 230, x2: 200, y2: 230 },
        // gnd rails
        { x1: 60, y1: 80, x2: 60, y2: 95 },
      ]}
      components={[
        { kind: "V", x: 60, y: 110, label: `V₁=${v1}V`, color: VOLT, labelPos: "left" },
        { kind: "R", x: 207, y: 50, label: `R₁=${r1}Ω`, color: RES },
        { kind: "V", x: 60, y: 180, label: `V₂=${v2}V`, color: VOLT, labelPos: "left" },
        { kind: "R", x: 113, y: 165, label: `R₂=${r2}Ω`, color: RES },
        { kind: "V", x: 130, y: 230, label: `V₃=${v3}V`, color: VOLT, labelPos: "left" },
        { kind: "R", x: 183, y: 230, label: `R₃=${r3}Ω`, color: RES, labelPos: "bottom" },
        { kind: "DOT", x: 280, y: 130, color: SIG },
        { kind: "TEXT", x: 305, y: 130, label: "V (?)", color: SIG, value: "13" },
      ]}
    />
  );
}

/**
 * Q15 — V-vs-I plot for a resistor (slope = R).
 */
export function VvsIPlot({ slope = 12 }: { slope?: number }) {
  const w = 320;
  const h = 200;
  const padL = 50;
  const padB = 30;
  const padT = 15;
  const padR = 15;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const iMax = 1.0;
  const points: { i: number; v: number }[] = [];
  for (let k = 0; k <= 10; k++) {
    const i = (k / 10) * iMax;
    points.push({ i, v: slope * i });
  }
  const vMax = slope * iMax;
  const xOf = (i: number) => padL + (i / iMax) * innerW;
  const yOf = (v: number) => padT + innerH - (v / vMax) * innerH;
  const path = points
    .map((p, k) => `${k === 0 ? "M" : "L"} ${xOf(p.i).toFixed(1)} ${yOf(p.v).toFixed(1)}`)
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="bg-white dark:bg-slate-800 rounded">
      {/* axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} stroke="#475569" strokeWidth={1.5} />
      <line x1={padL} y1={padT + innerH} x2={padL + innerW} y2={padT + innerH} stroke="#475569" strokeWidth={1.5} />
      {/* gridlines */}
      {[0.25, 0.5, 0.75].map((f, k) => (
        <line
          key={k}
          x1={padL}
          x2={padL + innerW}
          y1={padT + innerH * (1 - f)}
          y2={padT + innerH * (1 - f)}
          stroke="#e5e7eb"
          strokeWidth={0.5}
        />
      ))}
      {/* line */}
      <path d={path} fill="none" stroke={SIG} strokeWidth={2.5} />
      {/* slope label */}
      <text x={padL + innerW * 0.55} y={padT + innerH * 0.45} fontSize={12} fill={SIG} fontFamily="monospace">
        slope = {slope} V/A
      </text>
      {/* axis labels */}
      <text x={padL + innerW / 2} y={h - 8} textAnchor="middle" fontSize={11} fill="#475569" fontFamily="monospace">
        I (A)
      </text>
      <text x={14} y={padT + innerH / 2} fontSize={11} fill="#475569" fontFamily="monospace" transform={`rotate(-90 14 ${padT + innerH / 2})`}>
        V (V)
      </text>
      {/* tick labels */}
      <text x={padL} y={padT + innerH + 14} fontSize={9} fill="#475569" textAnchor="middle">0</text>
      <text x={padL + innerW} y={padT + innerH + 14} fontSize={9} fill="#475569" textAnchor="middle">{iMax}</text>
      <text x={padL - 6} y={padT + innerH + 3} fontSize={9} fill="#475569" textAnchor="end">0</text>
      <text x={padL - 6} y={padT + 3} fontSize={9} fill="#475569" textAnchor="end">{vMax}</text>
    </svg>
  );
}

/**
 * MΩ-scale divider with DMM probe across R₂ — DMM input impedance loads R₂.
 */
export function DividerWithDmm({
  v = 7.2,
  r1 = 29.8,
  r2 = 14.3,
  rDmm = 10,
  unit = "MΩ",
}: { v?: number; r1?: number; r2?: number; rDmm?: number; unit?: string }) {
  return (
    <CircuitSchematic
      width={400}
      height={230}
      noGrid
      wires={[
        { x1: 50, y1: 110, x2: 50, y2: 50 },
        { x1: 50, y1: 50, x2: 220, y2: 50 },
        { x1: 220, y1: 50, x2: 220, y2: 80 },
        { x1: 220, y1: 110, x2: 220, y2: 140 },
        { x1: 220, y1: 170, x2: 220, y2: 195 },
        { x1: 50, y1: 140, x2: 50, y2: 195 },
        { x1: 50, y1: 195, x2: 220, y2: 195 },
        // DMM tap
        { x1: 220, y1: 125, x2: 320, y2: 125 },
        { x1: 320, y1: 125, x2: 320, y2: 195 },
        { x1: 320, y1: 195, x2: 220, y2: 195 },
      ]}
      components={[
        { kind: "V", x: 50, y: 125, label: `${v} V`, color: VOLT, labelPos: "left" },
        { kind: "R", x: 220, y: 95, label: `R₁ = ${r1} ${unit}`, color: RES },
        { kind: "R", x: 220, y: 155, label: `R₂ = ${r2} ${unit}`, color: RES },
        { kind: "DOT", x: 220, y: 125, color: SIG },
        { kind: "TEXT", x: 235, y: 118, label: "X", color: SIG, value: "11" },
        { kind: "VOLTMETER", x: 360, y: 160, label: `${rDmm} ${unit}`, color: "#475569" },
        { kind: "GND", x: 135, y: 195 },
      ]}
    />
  );
}

/**
 * V → R1 → node A → (R2 ∥ R3 ∥ R4) → GND
 */
export function DividerThenThreeParallel({
  v = 5,
  r1 = 400,
  r2 = 1500,
  r3 = 1700,
  r4 = 1300,
  unit = "Ω",
}: {
  v?: number;
  r1?: number;
  r2?: number;
  r3?: number;
  r4?: number;
  unit?: string;
}) {
  return (
    <CircuitSchematic
      width={460}
      height={250}
      noGrid
      wires={[
        { x1: 50, y1: 110, x2: 50, y2: 60 },
        { x1: 50, y1: 60, x2: 130, y2: 60 },
        { x1: 165, y1: 60, x2: 250, y2: 60 },
        // node A
        { x1: 250, y1: 50, x2: 250, y2: 110 },
        { x1: 250, y1: 50, x2: 320, y2: 50 },
        { x1: 250, y1: 80, x2: 320, y2: 80 },
        { x1: 250, y1: 110, x2: 320, y2: 110 },
        // far end of three Rs
        { x1: 355, y1: 50, x2: 380, y2: 50 },
        { x1: 355, y1: 80, x2: 380, y2: 80 },
        { x1: 355, y1: 110, x2: 380, y2: 110 },
        { x1: 380, y1: 50, x2: 380, y2: 200 },
        // GND rail
        { x1: 50, y1: 140, x2: 50, y2: 200 },
        { x1: 50, y1: 200, x2: 380, y2: 200 },
      ]}
      components={[
        { kind: "V", x: 50, y: 125, label: `${v} V`, color: VOLT, labelPos: "left" },
        { kind: "R", x: 147, y: 60, label: `R₁ = ${r1} ${unit}`, color: RES },
        { kind: "DOT", x: 250, y: 80, color: SIG },
        { kind: "TEXT", x: 234, y: 78, label: "A", color: SIG, value: "13" },
        { kind: "R", x: 337, y: 50, label: `R₂ = ${r2}`, color: RES },
        { kind: "R", x: 337, y: 80, label: `R₃ = ${r3}`, color: RES },
        { kind: "R", x: 337, y: 110, label: `R₄ = ${r4}`, color: RES, labelPos: "bottom" },
        { kind: "GND", x: 215, y: 200 },
      ]}
    />
  );
}

/**
 * Two-source nose-to-nose loop: V₁ → R₁ → node V → R₂ → V₂.
 */
export function TwoSourceLoopWithR({
  v1 = 4.5,
  v2 = 1.6,
  r1 = 222,
  r2 = 113,
  unit = "Ω",
}: {
  v1?: number;
  v2?: number;
  r1?: number;
  r2?: number;
  unit?: string;
}) {
  return (
    <CircuitSchematic
      width={460}
      height={180}
      noGrid
      wires={[
        { x1: 50, y1: 100, x2: 50, y2: 70 },
        { x1: 50, y1: 70, x2: 110, y2: 70 },
        { x1: 145, y1: 70, x2: 220, y2: 70 },
        { x1: 240, y1: 70, x2: 315, y2: 70 },
        { x1: 350, y1: 70, x2: 410, y2: 70 },
        { x1: 410, y1: 70, x2: 410, y2: 100 },
        { x1: 50, y1: 130, x2: 50, y2: 150 },
        { x1: 50, y1: 150, x2: 410, y2: 150 },
        { x1: 410, y1: 130, x2: 410, y2: 150 },
      ]}
      components={[
        { kind: "V", x: 50, y: 115, label: `V₁ = ${v1} V`, color: VOLT, labelPos: "left" },
        { kind: "R", x: 127, y: 70, label: `R₁ = ${r1} ${unit}`, color: RES },
        { kind: "DOT", x: 230, y: 70, color: SIG },
        { kind: "TEXT", x: 230, y: 50, label: "V (?)", color: SIG, value: "12" },
        { kind: "R", x: 332, y: 70, label: `R₂ = ${r2} ${unit}`, color: RES },
        { kind: "V", x: 410, y: 115, label: `V₂ = ${v2} V`, color: VOLT, labelPos: "right" },
      ]}
    />
  );
}

/**
 * Inverting transimpedance op-amp (Q25 of EeMockExam).
 */
export function TransimpedanceFig({
  iIn = 0.914,
  rf = 5.232,
}: { iIn?: number; rf?: number }) {
  return (
    <CircuitSchematic
      width={380}
      height={210}
      noGrid
      wires={[
        { x1: 30, y1: 130, x2: 130, y2: 130 },
        { x1: 130, y1: 130, x2: 130, y2: 90 },
        { x1: 130, y1: 90, x2: 250, y2: 90 },
        { x1: 250, y1: 90, x2: 250, y2: 110 },
        { x1: 130, y1: 130, x2: 220, y2: 130 },
        { x1: 280, y1: 130, x2: 350, y2: 130 },
        { x1: 220, y1: 170, x2: 220, y2: 195 },
      ]}
      components={[
        { kind: "I", x: 30, y: 130, label: `I_in = ${iIn} A`, color: CURR },
        { kind: "R", x: 190, y: 90, label: `R_f = ${rf} Ω`, color: RES },
        { kind: "OPAMP", x: 250, y: 130 },
        { kind: "GND", x: 220, y: 195 },
        { kind: "DOT", x: 350, y: 130, color: SIG },
        { kind: "TEXT", x: 365, y: 120, label: "V_out", color: SIG, value: "11" },
      ]}
    />
  );
}

/**
 * Scope reading: helper that wraps ScopeTrace with a small caption area.
 */
export function ScopeFig({
  vDiv,
  tDiv,
  signal,
  signal2,
  caption,
  width = 360,
  height = 200,
}: {
  vDiv: number;
  tDiv: number;
  signal: (t: number) => number;
  signal2?: (t: number) => number;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="space-y-1">
      <ScopeTrace width={width} height={height} vDiv={vDiv} tDiv={tDiv} signal={signal} signal2={signal2} />
      {caption && <div className="text-xs text-slate-500 dark:text-slate-400 italic">{caption}</div>}
    </div>
  );
}
