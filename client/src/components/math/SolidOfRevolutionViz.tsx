import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MathFigure } from "./MathFigure";
import { InlineMath } from "./Katex";

type FnKey = "sqrt(x)" | "x^2" | "sin(x)" | "x";
type Method = "disk" | "shell";

const FNS: Record<FnKey, { f: (x: number) => number; latex: string; range: [number, number] }> = {
  "sqrt(x)": { f: Math.sqrt, latex: "f(x) = \\sqrt{x}", range: [0, 4] },
  "x^2": { f: (x) => x * x, latex: "f(x) = x^2", range: [0, 2] },
  "sin(x)": { f: Math.sin, latex: "f(x) = \\sin(x)", range: [0, Math.PI] },
  "x": { f: (x) => x, latex: "f(x) = x", range: [0, 2] },
};

interface Props {
  defaultFn?: FnKey;
  defaultMethod?: Method;
  accentColor?: string;
}

export function SolidOfRevolutionViz({
  defaultFn = "sqrt(x)",
  defaultMethod = "disk",
  accentColor = "#10b981",
}: Props) {
  const [fnKey, setFnKey] = useState<FnKey>(defaultFn);
  const [method, setMethod] = useState<Method>(defaultMethod);
  const { f, latex, range } = FNS[fnKey];
  const [a, b] = range;
  const [xStar, setXStar] = useState((a + b) / 2);

  const yStar = f(xStar);
  const yMax = useMemo(() => {
    let m = 0;
    for (let i = 0; i <= 100; i++) {
      const x = a + ((b - a) * i) / 100;
      m = Math.max(m, f(x));
    }
    return m;
  }, [fnKey, a, b, f]);

  const curvePts: [number, number][] = useMemo(() => {
    const pts: [number, number][] = [];
    for (let i = 0; i <= 100; i++) {
      const x = a + ((b - a) * i) / 100;
      pts.push([x, f(x)]);
    }
    return pts;
  }, [fnKey, a, b, f]);

  const dV =
    method === "disk"
      ? `\\pi [f(x)]^2\\,dx = \\pi (${yStar.toFixed(3)})^2\\,dx`
      : `2\\pi x \\cdot f(x)\\,dx = 2\\pi (${xStar.toFixed(3)})(${yStar.toFixed(3)})\\,dx`;

  return (
    <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-3">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
            Function (rotated about x-axis)
          </p>
          <select
            value={fnKey}
            onChange={(e) => {
              const k = e.target.value as FnKey;
              setFnKey(k);
              setXStar((FNS[k].range[0] + FNS[k].range[1]) / 2);
            }}
            className="w-full text-sm rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-2 py-1.5"
          >
            {(Object.keys(FNS) as FnKey[]).map((k) => (
              <option key={k} value={k}>{k}</option>
            ))}
          </select>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
            Slice method
          </p>
          <RadioGroup
            value={method}
            onValueChange={(v) => setMethod(v as Method)}
            className="flex gap-4"
          >
            {(["disk", "shell"] as Method[]).map((m) => (
              <div key={m} className="flex items-center gap-1.5">
                <RadioGroupItem value={m} id={`sm-${m}`} />
                <Label htmlFor={`sm-${m}`} className="text-sm capitalize">
                  {m}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
            x* = {xStar.toFixed(3)}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            f(x*) = {yStar.toFixed(3)}
          </p>
        </div>
        <Slider
          value={[xStar]}
          min={a}
          max={b}
          step={(b - a) / 200}
          onValueChange={(v) => setXStar(v[0])}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
            f(x) on [{a}, {b.toFixed(2)}]
          </p>
          <MathFigure
            width={300}
            height={220}
            xRange={[a - 0.1, b + 0.1]}
            yRange={[-yMax * 0.4, yMax * 1.15]}
            xLabel="x"
            yLabel="y"
            gridStep={{ x: Math.max(0.5, (b - a) / 4), y: Math.max(0.5, yMax / 4) }}
          >
            {({ xOf, yOf }) => (
              <>
                <polyline
                  fill={accentColor}
                  fillOpacity={0.12}
                  stroke="none"
                  points={[
                    `${xOf(a)},${yOf(0)}`,
                    ...curvePts.map(([x, y]) => `${xOf(x)},${yOf(y)}`),
                    `${xOf(b)},${yOf(0)}`,
                  ].join(" ")}
                />
                <polyline
                  fill="none"
                  stroke={accentColor}
                  strokeWidth={2}
                  points={curvePts.map(([x, y]) => `${xOf(x)},${yOf(y)}`).join(" ")}
                />
                <line
                  x1={xOf(xStar)}
                  x2={xOf(xStar)}
                  y1={yOf(0)}
                  y2={yOf(yStar)}
                  stroke="#dc2626"
                  strokeWidth={2}
                />
                <circle cx={xOf(xStar)} cy={yOf(yStar)} r={3} fill="#dc2626" />
              </>
            )}
          </MathFigure>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
            {method === "disk" ? "Disk cross-section" : "Cylindrical shell"}
          </p>
          <MathFigure
            width={300}
            height={220}
            xRange={[-yMax * 1.2, yMax * 1.2]}
            yRange={[-yMax * 1.2, yMax * 1.2]}
            xLabel="r"
            yLabel="r"
            gridStep={{ x: Math.max(0.5, yMax / 3), y: Math.max(0.5, yMax / 3) }}
          >
            {({ xOf, yOf }) => {
              if (method === "disk") {
                const cx = xOf(0);
                const cy = yOf(0);
                const rPx = Math.abs(xOf(yStar) - cx);
                return (
                  <>
                    <circle cx={cx} cy={cy} r={rPx} fill={accentColor} fillOpacity={0.25} stroke={accentColor} strokeWidth={2} />
                    <line x1={cx} x2={cx + rPx} y1={cy} y2={cy} stroke="#dc2626" strokeWidth={1.5} />
                    <text x={cx + rPx / 2} y={cy - 4} fontSize={11} fill="#dc2626" textAnchor="middle">
                      r = f(x*) = {yStar.toFixed(2)}
                    </text>
                  </>
                );
              } else {
                const cx = xOf(0);
                const cy = yOf(0);
                const innerR = Math.abs(xOf(xStar - 0.05) - cx);
                const outerR = Math.abs(xOf(xStar + 0.05) - cx);
                return (
                  <>
                    <circle cx={cx} cy={cy} r={outerR} fill={accentColor} fillOpacity={0.3} stroke={accentColor} strokeWidth={1.5} />
                    <circle cx={cx} cy={cy} r={innerR} fill="white" stroke={accentColor} strokeWidth={1.5} />
                    <line x1={cx} x2={cx + outerR} y1={cy} y2={cy} stroke="#dc2626" strokeWidth={1.5} />
                    <text x={cx + outerR / 2} y={cy - 4} fontSize={11} fill="#dc2626" textAnchor="middle">
                      r = x* = {xStar.toFixed(2)}
                    </text>
                  </>
                );
              }
            }}
          </MathFigure>
        </div>
      </div>

      <div className="text-sm text-center text-gray-700 dark:text-gray-200 bg-white dark:bg-slate-800 rounded p-2 border border-gray-200 dark:border-slate-600">
        <span className="text-xs uppercase text-gray-500 dark:text-gray-400 mr-2">dV =</span>
        <InlineMath math={dV} />
      </div>

      <div className="text-xs text-gray-600 dark:text-gray-300 text-center">
        <InlineMath math={latex} />
      </div>
    </div>
  );
}
