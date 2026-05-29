import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MathFigure } from "./MathFigure";
import { InlineMath } from "./Katex";

interface Props {
  defaultSlope?: string;
  xRange?: [number, number];
  yRange?: [number, number];
  defaultH?: number;
  accentColor?: string;
}

const SAFE_RE = /^[\sxy0-9+\-*/().,^a-zA-Z]+$/;
const ALLOWED_FNS = ["sin", "cos", "tan", "exp", "log", "sqrt", "abs", "PI", "E"];

function compileSlope(src: string): ((x: number, y: number) => number) | null {
  if (!SAFE_RE.test(src)) return null;
  const tokens = src.match(/[a-zA-Z_]+/g) ?? [];
  for (const t of tokens) {
    if (t === "x" || t === "y") continue;
    if (!ALLOWED_FNS.includes(t)) return null;
  }
  try {
    const expr = src.replace(/\^/g, "**");
    const fn = new Function(
      "x",
      "y",
      `with(Math){ return (${expr}); }`,
    ) as (x: number, y: number) => number;
    fn(0, 0);
    return fn;
  } catch {
    return null;
  }
}

export function DirectionFieldViz({
  defaultSlope = "x - y",
  xRange = [-3, 3],
  yRange = [-3, 3],
  defaultH = 0.2,
  accentColor = "#f59e0b",
}: Props) {
  const [src, setSrc] = useState(defaultSlope);
  const [h, setH] = useState(defaultH);
  const [start, setStart] = useState<[number, number]>([
    xRange[0] + (xRange[1] - xRange[0]) * 0.2,
    0,
  ]);

  const slope = useMemo(() => compileSlope(src), [src]);

  const fieldVectors = useMemo(() => {
    if (!slope) return [];
    const out: { x: number; y: number; m: number }[] = [];
    const nx = 14;
    const ny = 12;
    for (let i = 0; i <= nx; i++) {
      for (let j = 0; j <= ny; j++) {
        const x = xRange[0] + ((xRange[1] - xRange[0]) * i) / nx;
        const y = yRange[0] + ((yRange[1] - yRange[0]) * j) / ny;
        let m: number;
        try {
          m = slope(x, y);
          if (!Number.isFinite(m)) continue;
        } catch {
          continue;
        }
        out.push({ x, y, m });
      }
    }
    return out;
  }, [slope, xRange, yRange]);

  const eulerPath = useMemo(() => {
    if (!slope) return [] as [number, number][];
    const pts: [number, number][] = [start];
    let [x, y] = start;
    const steps = Math.ceil((xRange[1] - x) / h);
    for (let i = 0; i < Math.min(steps, 400); i++) {
      let m: number;
      try {
        m = slope(x, y);
      } catch {
        break;
      }
      if (!Number.isFinite(m) || Math.abs(m) > 1000) break;
      x = x + h;
      y = y + h * m;
      if (y < yRange[0] - 5 || y > yRange[1] + 5) break;
      pts.push([x, y]);
    }
    return pts;
  }, [slope, start, h, xRange, yRange]);

  const handleSvgClick: React.MouseEventHandler<SVGSVGElement> = (e) => {
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const local = pt.matrixTransform(ctm.inverse());
    const padL = 36;
    const padR = 12;
    const padT = 12;
    const padB = 28;
    const w = 460 - padL - padR;
    const h2 = 320 - padT - padB;
    const xVal = xRange[0] + ((local.x - padL) / w) * (xRange[1] - xRange[0]);
    const yVal = yRange[1] - ((local.y - padT) / h2) * (yRange[1] - yRange[0]);
    if (xVal >= xRange[0] && xVal <= xRange[1] && yVal >= yRange[0] && yVal <= yRange[1]) {
      setStart([xVal, yVal]);
    }
  };

  const segLen = 0.18;

  return (
    <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">
            dy/dx = f(x, y)
          </p>
          <Input
            value={src}
            onChange={(e) => setSrc(e.target.value)}
            placeholder="e.g. x - y, sin(x), x*y"
            className="font-mono text-sm"
          />
          {!slope && (
            <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">
              Invalid expression. Use x, y, +, −, *, /, ^, sin, cos, exp, sqrt, log…
            </p>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
              Euler step h = {h.toFixed(3)}
            </p>
            <Button
              size="sm"
              variant="ghost"
              className="text-xs h-6 px-2"
              onClick={() => setStart([xRange[0] + (xRange[1] - xRange[0]) * 0.2, 0])}
            >
              Reset start
            </Button>
          </div>
          <Slider value={[h]} min={0.02} max={0.6} step={0.01} onValueChange={(v) => setH(v[0])} />
        </div>
      </div>

      <div onClickCapture={(e) => e.stopPropagation()}>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
          Click anywhere on the field to place the Euler start point.
        </p>
        <svg
          width={460}
          height={320}
          viewBox="0 0 460 320"
          onClick={handleSvgClick}
          className="bg-white dark:bg-slate-800 rounded-md cursor-crosshair"
          style={{ maxWidth: "100%" }}
        >
          <foreignObject x={0} y={0} width={460} height={320}>
            <div style={{ width: "100%", height: "100%" }}>
              <MathFigure
                width={460}
                height={320}
                xRange={xRange}
                yRange={yRange}
                xLabel="x"
                yLabel="y"
                gridStep={1}
              >
                {({ xOf, yOf }) => (
                  <>
                    {fieldVectors.map((v, i) => {
                      const dx = segLen / Math.sqrt(1 + v.m * v.m);
                      const dy = v.m * dx;
                      return (
                        <line
                          key={i}
                          x1={xOf(v.x - dx)}
                          y1={yOf(v.y - dy)}
                          x2={xOf(v.x + dx)}
                          y2={yOf(v.y + dy)}
                          stroke={accentColor}
                          strokeWidth={1.4}
                          opacity={0.75}
                        />
                      );
                    })}
                    {eulerPath.length > 1 && (
                      <polyline
                        fill="none"
                        stroke="#dc2626"
                        strokeWidth={2}
                        points={eulerPath.map(([x, y]) => `${xOf(x)},${yOf(y)}`).join(" ")}
                      />
                    )}
                    <circle cx={xOf(start[0])} cy={yOf(start[1])} r={4} fill="#dc2626" />
                  </>
                )}
              </MathFigure>
            </div>
          </foreignObject>
        </svg>
      </div>

      <div className="text-xs text-center text-gray-600 dark:text-gray-300">
        Start: ({start[0].toFixed(2)}, {start[1].toFixed(2)}) ·{" "}
        Euler:{" "}
        <InlineMath math={`y_{n+1} = y_n + h \\cdot f(x_n, y_n)`} />
      </div>
    </div>
  );
}
