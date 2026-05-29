import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { MathFigure } from "./MathFigure";
import { InlineMath } from "./Katex";

type SeriesKey =
  | "geometric-half"
  | "geometric-third"
  | "harmonic"
  | "p-2"
  | "alternating-harmonic";

interface SeriesDef {
  term: (k: number) => number;
  latex: string;
  limit: number | null;
  verdict: string;
  test: string;
}

const SERIES: Record<SeriesKey, SeriesDef> = {
  "geometric-half": {
    term: (k) => Math.pow(0.5, k),
    latex: "\\sum_{k=0}^{\\infty} \\left(\\tfrac{1}{2}\\right)^k",
    limit: 2,
    verdict: "Converges to 2",
    test: "Geometric, |r| = 0.5 < 1",
  },
  "geometric-third": {
    term: (k) => Math.pow(1 / 3, k),
    latex: "\\sum_{k=0}^{\\infty} \\left(\\tfrac{1}{3}\\right)^k",
    limit: 1.5,
    verdict: "Converges to 3/2",
    test: "Geometric, |r| = 1/3 < 1",
  },
  "harmonic": {
    term: (k) => 1 / (k + 1),
    latex: "\\sum_{k=1}^{\\infty} \\frac{1}{k}",
    limit: null,
    verdict: "Diverges (slowly)",
    test: "p-series with p = 1",
  },
  "p-2": {
    term: (k) => 1 / ((k + 1) * (k + 1)),
    latex: "\\sum_{k=1}^{\\infty} \\frac{1}{k^2}",
    limit: Math.PI * Math.PI / 6,
    verdict: "Converges (Basel: π²/6)",
    test: "p-series with p = 2 > 1",
  },
  "alternating-harmonic": {
    term: (k) => Math.pow(-1, k) / (k + 1),
    latex: "\\sum_{k=1}^{\\infty} \\frac{(-1)^{k+1}}{k}",
    limit: Math.log(2),
    verdict: "Converges to ln 2",
    test: "Alternating series test",
  },
};

interface Props {
  defaultSeries?: SeriesKey;
  defaultN?: number;
  accentColor?: string;
}

export function SeriesPartialSumViz({
  defaultSeries = "geometric-half",
  defaultN = 12,
  accentColor = "#7c3aed",
}: Props) {
  const [key, setKey] = useState<SeriesKey>(defaultSeries);
  const [n, setN] = useState(defaultN);
  const def = SERIES[key];

  const partialSums = useMemo(() => {
    const out: number[] = [];
    let s = 0;
    for (let k = 0; k < n; k++) {
      s += def.term(k);
      out.push(s);
    }
    return out;
  }, [key, n, def]);

  const finalSum = partialSums[partialSums.length - 1] ?? 0;
  const yVals = partialSums.concat(def.limit !== null ? [def.limit] : []);
  const yMax = Math.max(...yVals, 0) * 1.1 + 0.5;
  const yMin = Math.min(...yVals, 0) * 1.1 - 0.2;

  return (
    <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
            Series
          </p>
          <select
            value={key}
            onChange={(e) => setKey(e.target.value as SeriesKey)}
            className="w-full text-sm rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-2 py-1.5"
          >
            <option value="geometric-half">Geometric (1/2)^k</option>
            <option value="geometric-third">Geometric (1/3)^k</option>
            <option value="harmonic">Harmonic Σ 1/k</option>
            <option value="p-2">p-series Σ 1/k²</option>
            <option value="alternating-harmonic">Alternating harmonic</option>
          </select>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
              n = {n} terms
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              S_n = {finalSum.toFixed(5)}
            </p>
          </div>
          <Slider value={[n]} min={1} max={150} step={1} onValueChange={(v) => setN(v[0])} />
        </div>
      </div>

      <MathFigure
        width={520}
        height={240}
        xRange={[0, n + 0.5]}
        yRange={[yMin, yMax]}
        xLabel="n"
        yLabel="S_n"
        gridStep={{ x: Math.max(1, Math.round(n / 8)), y: Math.max(0.1, (yMax - yMin) / 6) }}
      >
        {({ xOf, yOf }) => (
          <>
            {def.limit !== null && (
              <line
                x1={xOf(0)}
                x2={xOf(n + 0.5)}
                y1={yOf(def.limit)}
                y2={yOf(def.limit)}
                stroke="#dc2626"
                strokeWidth={1.5}
                strokeDasharray="4 4"
              />
            )}
            <polyline
              fill="none"
              stroke={accentColor}
              strokeWidth={1.5}
              opacity={0.6}
              points={partialSums.map((s, i) => `${xOf(i + 1)},${yOf(s)}`).join(" ")}
            />
            {partialSums.map((s, i) => (
              <circle
                key={i}
                cx={xOf(i + 1)}
                cy={yOf(s)}
                r={2.5}
                fill={accentColor}
              />
            ))}
            {def.limit !== null && (
              <text
                x={xOf(n + 0.5) - 4}
                y={yOf(def.limit) - 4}
                fontSize={10}
                fill="#dc2626"
                textAnchor="end"
              >
                limit = {def.limit.toFixed(4)}
              </text>
            )}
          </>
        )}
      </MathFigure>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <div className="rounded bg-white dark:bg-slate-800 p-2 border border-gray-200 dark:border-slate-600">
          <p className="text-[10px] uppercase text-gray-500 dark:text-gray-400">Verdict</p>
          <p className="font-semibold" style={{ color: accentColor }}>
            {def.verdict}
          </p>
        </div>
        <div className="rounded bg-white dark:bg-slate-800 p-2 border border-gray-200 dark:border-slate-600">
          <p className="text-[10px] uppercase text-gray-500 dark:text-gray-400">Which test</p>
          <p className="font-semibold text-gray-700 dark:text-gray-200">{def.test}</p>
        </div>
      </div>

      <div className="text-xs text-center text-gray-600 dark:text-gray-300">
        <InlineMath math={def.latex} />
      </div>
    </div>
  );
}
