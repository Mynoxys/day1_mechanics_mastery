import type { ComponentSpec, WireSegment } from "./types";

interface CircuitSchematicProps {
  width?: number;
  height?: number;
  components: ComponentSpec[];
  wires?: WireSegment[];
  highlightLabels?: string[];
  /** Extra inline SVG to render above wires (under components) — e.g. shaded areas, dashed loops. */
  underlay?: React.ReactNode;
  /** Extra inline SVG to render above components — e.g. annotations, KVL loop arrows. */
  overlay?: React.ReactNode;
  className?: string;
  /** Hide background grid (for a cleaner look on small inline schematics). */
  noGrid?: boolean;
}

const STROKE = "#475569";
const HIGHLIGHT = "#f59e0b";
const VOLT_COLOR = "#f59e0b";
const CURR_COLOR = "#ef4444";

export function CircuitSchematic({
  width = 480,
  height = 320,
  components,
  wires = [],
  highlightLabels = [],
  underlay,
  overlay,
  className,
  noGrid = false,
}: CircuitSchematicProps) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Circuit schematic"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="ee-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="0.5"
          />
        </pattern>
        <marker
          id="ee-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
      </defs>
      {!noGrid && <rect width={width} height={height} fill="url(#ee-grid)" />}

      {underlay}

      {wires.map((w, i) => (
        <line
          key={`w-${i}`}
          x1={w.x1}
          y1={w.y1}
          x2={w.x2}
          y2={w.y2}
          stroke={STROKE}
          strokeWidth={2}
          strokeLinecap="round"
        />
      ))}

      {components.map((c, i) => {
        const isHighlight = c.label ? highlightLabels.includes(c.label) : false;
        const stroke = c.color ?? (isHighlight ? HIGHLIGHT : STROKE);
        const rot = c.rotation ?? 0;
        const labelPos = c.labelPos ?? defaultLabelPos(c.kind);
        const labelOffset = labelOffsetFor(c.kind, labelPos);
        return (
          <g key={`c-${i}`} transform={`translate(${c.x}, ${c.y})`}>
            <g transform={rot ? `rotate(${rot})` : undefined}>
              {c.kind === "R" && <ResistorGlyph stroke={stroke} />}
              {c.kind === "V" && <VoltageSourceGlyph stroke={stroke} />}
              {c.kind === "I" && <CurrentSourceGlyph stroke={stroke} />}
              {c.kind === "C" && <CapacitorGlyph stroke={stroke} />}
              {c.kind === "L" && <InductorGlyph stroke={stroke} />}
              {c.kind === "GND" && <GndGlyph stroke={stroke} />}
              {c.kind === "NODE" && <circle r={3} fill={stroke} stroke={stroke} />}
              {c.kind === "DOT" && <circle r={4} fill={stroke} stroke={stroke} />}
              {c.kind === "OPAMP" && <OpAmpGlyph stroke={stroke} />}
              {c.kind === "LED" && <LedGlyph stroke={stroke} />}
              {c.kind === "DIODE" && <DiodeGlyph stroke={stroke} />}
              {c.kind === "SWITCH" && <SwitchGlyph stroke={stroke} />}
              {c.kind === "BUTTON" && <ButtonGlyph stroke={stroke} />}
              {c.kind === "AMMETER" && <MeterGlyph stroke={stroke} letter="A" color={CURR_COLOR} />}
              {c.kind === "VOLTMETER" && <MeterGlyph stroke={stroke} letter="V" color={VOLT_COLOR} />}
              {c.kind === "ARROW_R" && <ArrowGlyph stroke={stroke} dir="R" />}
              {c.kind === "ARROW_L" && <ArrowGlyph stroke={stroke} dir="L" />}
              {c.kind === "ARROW_U" && <ArrowGlyph stroke={stroke} dir="U" />}
              {c.kind === "ARROW_D" && <ArrowGlyph stroke={stroke} dir="D" />}
              {c.kind === "PLUS" && <PolarityGlyph stroke={stroke} sign="+" />}
              {c.kind === "MINUS" && <PolarityGlyph stroke={stroke} sign="−" />}
              {c.kind === "MCU" && <McuGlyph stroke={stroke} label={c.value} />}
            </g>
            {c.label && c.kind !== "MCU" && c.kind !== "TEXT" && (
              <text
                x={labelOffset.x}
                y={labelOffset.y}
                fontSize={12}
                fill={stroke}
                fontFamily="monospace"
                textAnchor={labelOffset.anchor}
                dominantBaseline={labelOffset.baseline}
              >
                {c.label}
                {c.value && ` = ${c.value}`}
              </text>
            )}
            {c.kind === "TEXT" && c.label && (
              <text
                x={0}
                y={0}
                fontSize={c.value ? Number(c.value) : 12}
                fill={stroke}
                fontFamily="monospace"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {c.label}
              </text>
            )}
          </g>
        );
      })}

      {overlay}
    </svg>
  );
}

function defaultLabelPos(
  kind: ComponentSpec["kind"],
): "top" | "bottom" | "left" | "right" {
  if (kind === "GND") return "bottom";
  if (kind === "AMMETER" || kind === "VOLTMETER") return "right";
  return "top";
}

type DomBaseline = "auto" | "hanging" | "middle";

function labelOffsetFor(
  kind: ComponentSpec["kind"],
  pos: "top" | "bottom" | "left" | "right",
): { x: number; y: number; anchor: "start" | "middle" | "end"; baseline: DomBaseline } {
  const dist = kind === "R" || kind === "C" || kind === "L" ? 18 : 22;
  switch (pos) {
    case "top":
      return { x: 0, y: -dist, anchor: "middle", baseline: "auto" };
    case "bottom":
      return { x: 0, y: dist + 4, anchor: "middle", baseline: "hanging" };
    case "left":
      return { x: -dist - 4, y: 4, anchor: "end", baseline: "auto" };
    case "right":
      return { x: dist + 4, y: 4, anchor: "start", baseline: "auto" };
  }
}

function ResistorGlyph({ stroke }: { stroke: string }) {
  return (
    <path
      d="M -25 0 L -18 0 L -15 -8 L -9 8 L -3 -8 L 3 8 L 9 -8 L 15 8 L 18 0 L 25 0"
      fill="none"
      stroke={stroke}
      strokeWidth={2}
      strokeLinejoin="round"
    />
  );
}

function VoltageSourceGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <circle r={14} fill="white" stroke={stroke} strokeWidth={2} />
      <text
        y={-2}
        fontSize={11}
        fill={stroke}
        textAnchor="middle"
        fontWeight="bold"
      >
        +
      </text>
      <text y={10} fontSize={11} fill={stroke} textAnchor="middle">
        −
      </text>
    </g>
  );
}

function CurrentSourceGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <circle r={14} fill="white" stroke={stroke} strokeWidth={2} />
      <path
        d="M 0 -8 L 0 8 M -4 4 L 0 8 L 4 4"
        stroke={stroke}
        fill="none"
        strokeWidth={2}
      />
    </g>
  );
}

function CapacitorGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <line x1={-20} y1={0} x2={-4} y2={0} stroke={stroke} strokeWidth={2} />
      <line x1={-4} y1={-10} x2={-4} y2={10} stroke={stroke} strokeWidth={2} />
      <line x1={4} y1={-10} x2={4} y2={10} stroke={stroke} strokeWidth={2} />
      <line x1={4} y1={0} x2={20} y2={0} stroke={stroke} strokeWidth={2} />
    </g>
  );
}

function InductorGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <line x1={-25} y1={0} x2={-18} y2={0} stroke={stroke} strokeWidth={2} />
      <path
        d="M -18 0 a 5 5 0 0 1 9 0 a 5 5 0 0 1 9 0 a 5 5 0 0 1 9 0 a 5 5 0 0 1 9 0"
        fill="none"
        stroke={stroke}
        strokeWidth={2}
      />
      <line x1={18} y1={0} x2={25} y2={0} stroke={stroke} strokeWidth={2} />
    </g>
  );
}

function GndGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <line x1={0} y1={-10} x2={0} y2={0} stroke={stroke} strokeWidth={2} />
      <line x1={-10} y1={0} x2={10} y2={0} stroke={stroke} strokeWidth={2} />
      <line x1={-6} y1={5} x2={6} y2={5} stroke={stroke} strokeWidth={2} />
      <line x1={-3} y1={10} x2={3} y2={10} stroke={stroke} strokeWidth={2} />
    </g>
  );
}

function OpAmpGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <polygon
        points="-20,-20 -20,20 20,0"
        fill="white"
        stroke={stroke}
        strokeWidth={2}
      />
      <text x={-14} y={-6} fontSize={9} fill={stroke} fontWeight="bold">
        −
      </text>
      <text x={-14} y={11} fontSize={9} fill={stroke} fontWeight="bold">
        +
      </text>
    </g>
  );
}

function LedGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <line x1={-22} y1={0} x2={-8} y2={0} stroke={stroke} strokeWidth={2} />
      <polygon
        points="-8,-8 -8,8 6,0"
        fill="none"
        stroke={stroke}
        strokeWidth={2}
      />
      <line x1={6} y1={-8} x2={6} y2={8} stroke={stroke} strokeWidth={2} />
      <line x1={6} y1={0} x2={22} y2={0} stroke={stroke} strokeWidth={2} />
      {/* light arrows */}
      <line x1={2} y1={-12} x2={10} y2={-20} stroke={stroke} strokeWidth={1.5} markerEnd="url(#ee-arrow)" />
      <line x1={8} y1={-10} x2={16} y2={-18} stroke={stroke} strokeWidth={1.5} markerEnd="url(#ee-arrow)" />
    </g>
  );
}

function DiodeGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <line x1={-22} y1={0} x2={-8} y2={0} stroke={stroke} strokeWidth={2} />
      <polygon
        points="-8,-8 -8,8 6,0"
        fill="none"
        stroke={stroke}
        strokeWidth={2}
      />
      <line x1={6} y1={-8} x2={6} y2={8} stroke={stroke} strokeWidth={2} />
      <line x1={6} y1={0} x2={22} y2={0} stroke={stroke} strokeWidth={2} />
    </g>
  );
}

function SwitchGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <line x1={-22} y1={0} x2={-10} y2={0} stroke={stroke} strokeWidth={2} />
      <circle cx={-10} cy={0} r={2} fill={stroke} />
      <line x1={-10} y1={0} x2={6} y2={-12} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <circle cx={10} cy={0} r={2} fill={stroke} />
      <line x1={10} y1={0} x2={22} y2={0} stroke={stroke} strokeWidth={2} />
    </g>
  );
}

function ButtonGlyph({ stroke }: { stroke: string }) {
  return (
    <g>
      <line x1={-22} y1={0} x2={-10} y2={0} stroke={stroke} strokeWidth={2} />
      <circle cx={-10} cy={0} r={2} fill={stroke} />
      {/* normally-open contacts with bridge bar above */}
      <line x1={-10} y1={-12} x2={10} y2={-12} stroke={stroke} strokeWidth={2} />
      <line x1={-10} y1={-2} x2={-10} y2={-12} stroke={stroke} strokeWidth={1} strokeDasharray="2 2" />
      <line x1={10} y1={-2} x2={10} y2={-12} stroke={stroke} strokeWidth={1} strokeDasharray="2 2" />
      <circle cx={10} cy={0} r={2} fill={stroke} />
      <line x1={10} y1={0} x2={22} y2={0} stroke={stroke} strokeWidth={2} />
      {/* push arrow */}
      <line x1={0} y1={-22} x2={0} y2={-15} stroke={stroke} strokeWidth={1.5} markerEnd="url(#ee-arrow)" />
    </g>
  );
}

function MeterGlyph({
  stroke,
  letter,
  color,
}: {
  stroke: string;
  letter: "A" | "V";
  color: string;
}) {
  return (
    <g>
      <circle r={14} fill="white" stroke={stroke} strokeWidth={2} />
      <text
        y={5}
        fontSize={14}
        fill={color}
        textAnchor="middle"
        fontWeight="bold"
        fontFamily="monospace"
      >
        {letter}
      </text>
    </g>
  );
}

function ArrowGlyph({ stroke, dir }: { stroke: string; dir: "R" | "L" | "U" | "D" }) {
  const len = 20;
  let x1 = 0, y1 = 0, x2 = 0, y2 = 0;
  if (dir === "R") { x1 = -len / 2; x2 = len / 2; }
  if (dir === "L") { x1 = len / 2; x2 = -len / 2; }
  if (dir === "U") { y1 = len / 2; y2 = -len / 2; }
  if (dir === "D") { y1 = -len / 2; y2 = len / 2; }
  return (
    <g style={{ color: stroke }}>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={2}
        markerEnd="url(#ee-arrow)"
      />
    </g>
  );
}

function PolarityGlyph({ stroke, sign }: { stroke: string; sign: "+" | "−" }) {
  return (
    <text
      fontSize={16}
      fill={stroke}
      textAnchor="middle"
      dominantBaseline="middle"
      fontWeight="bold"
    >
      {sign}
    </text>
  );
}

function McuGlyph({ stroke, label }: { stroke: string; label?: string }) {
  return (
    <g>
      <rect
        x={-30}
        y={-22}
        width={60}
        height={44}
        rx={4}
        fill="white"
        stroke={stroke}
        strokeWidth={2}
      />
      <text
        y={4}
        fontSize={11}
        fill={stroke}
        textAnchor="middle"
        fontFamily="monospace"
        fontWeight="bold"
      >
        {label ?? "MCU"}
      </text>
    </g>
  );
}
