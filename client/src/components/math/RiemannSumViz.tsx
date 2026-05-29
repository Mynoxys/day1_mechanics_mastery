import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MathFigure } from "./MathFigure";
import { InlineMath } from "./Katex";

type FnKey = "x^2" | "sin(x)" | "1/x" | "x^3-3x";
type Rule = "left" | "right" | "mid";

const FNS: Record<FnKey, { f: (x: number) => number; integral: (a: number, b: number) => number; latex: string; defaultRange: [number, number] }> = {
  "x^2": {
    f: (x) => x * x,
    integral: (a, b) => (b ** 3 - a ** 3) / 3,
    latex: "f(x) = x^2",
    defaultRange: [0, 2],
  },
  "sin(x)": {
    f: (x) => Math.sin(x),
    integral: (a, b) => -Math.cos(b) + Math.cos(a),
    latex: "f(x) = \\sin(x)",
    defaultRange: [0, Math.PI],
  },
  "1/x": {
    f: (x) => 1 / x,
    integral: (a, b) => Math.log(b) - Math.log(a),
    latex: "f(x) = 1/x",
    defaultRange: [1, 4],
  },
  "x^3-3x": {
    f: (x) => x ** 3 - 3 * x,
    integral: (a, b) => (b ** 4) / 4 - (3 * b * b) / 2 - ((a ** 4) / 4 - (3 * a * a) / 2),
    latex: "f(x) = x^3 - 3x",
    defaultRange: [-2, 2.5],
  },
};

interface Props {
  defaultFn?: FnKey;
  defaultN?: number;
  accentColor?: string;
}

export function RiemannSumViz({
  defaultFn = "x^2",
  defaultN = 8,
  accentColor = "#2563eb",
}: Props) {
  const [fnKey, setFnKey] = useState<FnKey>(defaultFn);
  const [n, setN] = useState(defaultN);
  const [rule, setRule] = useState<Rule>("left");

  const { f, integral, latex, defaultRange } = FNS[fnKey];
  const [a, b] = defaultRange;

  const { sum, rects, curvePts, yMax, yMin } = useMemo(() => {
    const dx = (b - a) / n;
    const rects: { x: number; y: number; h: number }[] = [];
    let s = 0;
    for (let i = 0; i < n; i++) {
      const xLeft = a + i * dx;
      const xSample = rule === "left" ? xLeft : rule === "right" ? xLeft + dx : xLeft + dx / 2;
      const y = f(xSample);
      rects.push({ x: xLeft, y, h: dx });
      s += y * dx;
    }
    const N = 200;
    const pts: [number, number][] = [];
    for (let i = 0; i <= N; i++) {
      const x = a + ((b - a) * i) / N;
      pts.push([x, f(x)]);
    }
    const ys = pts.map((p) => p[1]).concat(rects.map((r) => r.y));
    return {
      sum: s,
      rects,
      curvePts: pts,
      yMax: Math.max(...ys, 0) * 1.1 || 1,
      yMin: Math.min(...ys, 0) * 1.1 || -1,
    };
  }, [fnKey, n, rule, a, b, f]);

  const trueIntegral = integral(a, b);
  const error = Math.abs(sum - trueIntegral);

  const xRange: [number, number] = [a - (b - a) * 0.05, b + (b - a) * 0.05];
  const yRange: [number, number] = [Math.min(0, yMin), Math.max(0.5, yMax)];

  return (
    <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-3">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
            Function
          </p>
          <select
            value={fnKey}
            onChange={(e) => setFnKey(e.target.value as FnKey)}
            className="w-full text-sm rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-2 py-1.5"
          >
            {(Object.keys(FNS) as FnKey[]).map((k) => (
              <option key={k} value={k}>
                {k}  on  [{FNS[k].defaultRange[0]}, {FNS[k].defaultRange[1].toFixed(2)}]
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
            Sample point rule
          </p>
          <RadioGroup
            value={rule}
            onValueChange={(v) => setRule(v as Rule)}
            className="flex gap-4"
          >
            {(["left", "right", "mid"] as Rule[]).map((r) => (
              <div key={r} className="flex items-center gap-1.5">
                <RadioGroupItem value={r} id={`rs-${r}`} />
                <Label htmlFor={`rs-${r}`} className="text-sm capitalize">
                  {r}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
            n = {n} rectangles
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Δx = {((b - a) / n).toFixed(4)}
          </p>
        </div>
        <Slider value={[n]} min={1} max={80} step={1} onValueChange={(v) => setN(v[0])} />
      </div>

      <MathFigure
        width={500}
        height={260}
        xRange={xRange}
        yRange={yRange}
        xLabel="x"
        yLabel="y"
        gridStep={{ x: Math.max(0.5, Math.round((b - a) / 4)), y: Math.max(0.5, Math.round((yRange[1] - yRange[0]) / 4)) }}
      >
        {({ xOf, yOf }) => (
          <>
            {rects.map((r, i) => {
              const top = r.y >= 0 ? r.y : 0;
              const bot = r.y >= 0 ? 0 : r.y;
              return (
                <rect
                  key={i}
                  x={xOf(r.x)}
                  y={yOf(top)}
                  width={xOf(r.x + r.h) - xOf(r.x)}
                  height={Math.abs(yOf(top) - yOf(bot))}
                  fill={accentColor}
                  fillOpacity={r.y >= 0 ? 0.25 : 0.18}
                  stroke={accentColor}
                  strokeWidth={0.6}
                />
              );
            })}
            <polyline
              fill="none"
              stroke="#dc2626"
              strokeWidth={2}
              points={curvePts.map(([x, y]) => `${xOf(x)},${yOf(y)}`).join(" ")}
            />
          </>
        )}
      </MathFigure>

      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="rounded bg-white dark:bg-slate-800 p-2 border border-gray-200 dark:border-slate-600">
          <p className="text-[10px] uppercase text-gray-500 dark:text-gray-400">Riemann sum</p>
          <p className="font-mono font-bold" style={{ color: accentColor }}>
            {sum.toFixed(4)}
          </p>
        </div>
        <div className="rounded bg-white dark:bg-slate-800 p-2 border border-gray-200 dark:border-slate-600">
          <p className="text-[10px] uppercase text-gray-500 dark:text-gray-400">True integral</p>
          <p className="font-mono font-bold text-red-600 dark:text-red-400">
            {trueIntegral.toFixed(4)}
          </p>
        </div>
        <div className="rounded bg-white dark:bg-slate-800 p-2 border border-gray-200 dark:border-slate-600">
          <p className="text-[10px] uppercase text-gray-500 dark:text-gray-400">|error|</p>
          <p className="font-mono font-bold text-amber-600 dark:text-amber-400">
            {error.toFixed(4)}
          </p>
        </div>
      </div>

      <div className="text-xs text-gray-600 dark:text-gray-300 text-center">
        <InlineMath math={`${latex}, \\quad \\int_{${a}}^{${b.toFixed(2)}} f(x)\\,dx`} />
      </div>
    </div>
  );
}
