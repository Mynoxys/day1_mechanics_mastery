import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFigure } from "./MathFigure";
import { InlineMath } from "./Katex";

type TaylorKey = "exp" | "sin" | "cos" | "ln1px" | "geo";

interface TaylorDef {
  f: (x: number) => number;
  // coefficient_k for Taylor about a=0 (Maclaurin) — c_k * x^k
  // For non-Maclaurin, we recompute from f and Math.derivatives via finite diff (fallback)
  coefMaclaurin: (k: number) => number;
  latex: string;
  domain: [number, number];
}

const TAYLOR: Record<TaylorKey, TaylorDef> = {
  exp: {
    f: Math.exp,
    coefMaclaurin: (k) => 1 / fact(k),
    latex: "f(x) = e^x",
    domain: [-3, 3],
  },
  sin: {
    f: Math.sin,
    coefMaclaurin: (k) => {
      if (k % 2 === 0) return 0;
      const m = (k - 1) / 2;
      return Math.pow(-1, m) / fact(k);
    },
    latex: "f(x) = \\sin(x)",
    domain: [-2 * Math.PI, 2 * Math.PI],
  },
  cos: {
    f: Math.cos,
    coefMaclaurin: (k) => {
      if (k % 2 === 1) return 0;
      const m = k / 2;
      return Math.pow(-1, m) / fact(k);
    },
    latex: "f(x) = \\cos(x)",
    domain: [-2 * Math.PI, 2 * Math.PI],
  },
  ln1px: {
    f: (x) => Math.log(1 + x),
    coefMaclaurin: (k) => (k === 0 ? 0 : Math.pow(-1, k + 1) / k),
    latex: "f(x) = \\ln(1+x)",
    domain: [-0.95, 2],
  },
  geo: {
    f: (x) => 1 / (1 - x),
    coefMaclaurin: (_k) => 1,
    latex: "f(x) = \\frac{1}{1-x}",
    domain: [-0.95, 0.95],
  },
};

function fact(n: number): number {
  if (n <= 1) return 1;
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

interface Props {
  defaultFn?: TaylorKey;
  defaultN?: number;
  accentColor?: string;
}

export function TaylorPolyViz({
  defaultFn = "exp",
  defaultN = 4,
  accentColor = "#7c3aed",
}: Props) {
  const [key, setKey] = useState<TaylorKey>(defaultFn);
  const [n, setN] = useState(defaultN);
  const def = TAYLOR[key];

  const { fPts, tPts, yMax, yMin } = useMemo(() => {
    const N = 200;
    const fPts: [number, number][] = [];
    const tPts: [number, number][] = [];
    const ys: number[] = [];
    const [a, b] = def.domain;
    for (let i = 0; i <= N; i++) {
      const x = a + ((b - a) * i) / N;
      const fy = def.f(x);
      let ty = 0;
      for (let k = 0; k <= n; k++) {
        ty += def.coefMaclaurin(k) * Math.pow(x, k);
      }
      if (Number.isFinite(fy) && Math.abs(fy) < 50) {
        fPts.push([x, fy]);
        ys.push(fy);
      }
      if (Number.isFinite(ty) && Math.abs(ty) < 50) {
        tPts.push([x, ty]);
        ys.push(ty);
      }
    }
    return {
      fPts,
      tPts,
      yMax: Math.max(...ys, 1),
      yMin: Math.min(...ys, -1),
    };
  }, [key, n, def]);

  const polyParts: string[] = [];
  for (let k = 0; k <= n; k++) {
    const c = def.coefMaclaurin(k);
    if (Math.abs(c) < 1e-12) continue;
    const sign = c >= 0 && polyParts.length > 0 ? "+" : "";
    const coef = c === 1 && k > 0 ? "" : c === -1 && k > 0 ? "-" : c.toString();
    if (k === 0) polyParts.push(`${coef}`);
    else if (k === 1) polyParts.push(`${sign}${coef}x`);
    else polyParts.push(`${sign}${coef}x^{${k}}`);
  }
  const polyLatex = `T_{${n}}(x) = ${polyParts.join("")}`;

  return (
    <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
            Function
          </p>
          <select
            value={key}
            onChange={(e) => setKey(e.target.value as TaylorKey)}
            className="w-full text-sm rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-2 py-1.5"
          >
            <option value="exp">e^x</option>
            <option value="sin">sin(x)</option>
            <option value="cos">cos(x)</option>
            <option value="ln1px">ln(1 + x)</option>
            <option value="geo">1 / (1 − x)</option>
          </select>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
              Degree n = {n}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">center a = 0</p>
          </div>
          <Slider value={[n]} min={0} max={20} step={1} onValueChange={(v) => setN(v[0])} />
        </div>
      </div>

      <MathFigure
        width={520}
        height={260}
        xRange={def.domain}
        yRange={[Math.max(yMin, -10), Math.min(yMax, 10)]}
        xLabel="x"
        yLabel="y"
        gridStep={{
          x: Math.max(0.5, (def.domain[1] - def.domain[0]) / 6),
          y: 1,
        }}
      >
        {({ xOf, yOf }) => (
          <>
            <polyline
              fill="none"
              stroke="#dc2626"
              strokeWidth={2}
              points={fPts.map(([x, y]) => `${xOf(x)},${yOf(y)}`).join(" ")}
            />
            <polyline
              fill="none"
              stroke={accentColor}
              strokeWidth={2}
              strokeDasharray="4 3"
              points={tPts.map(([x, y]) => `${xOf(x)},${yOf(y)}`).join(" ")}
            />
            <text x={xOf(def.domain[1]) - 4} y={20} fontSize={10} fill="#dc2626" textAnchor="end">
              f(x)
            </text>
            <text x={xOf(def.domain[1]) - 4} y={32} fontSize={10} fill={accentColor} textAnchor="end">
              T_{n}(x)
            </text>
          </>
        )}
      </MathFigure>

      <div className="text-xs text-center text-gray-600 dark:text-gray-300 overflow-x-auto px-2">
        <InlineMath math={polyLatex} />
      </div>
    </div>
  );
}
