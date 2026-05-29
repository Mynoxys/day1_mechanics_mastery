import { ReactNode } from "react";

export interface MathFigureHelpers {
  xOf: (x: number) => number;
  yOf: (y: number) => number;
  w: number;
  h: number;
}

interface MathFigureProps {
  width?: number;
  height?: number;
  xRange: [number, number];
  yRange: [number, number];
  padding?: { l?: number; r?: number; t?: number; b?: number };
  xLabel?: string;
  yLabel?: string;
  gridStep?: number | { x?: number; y?: number };
  showAxes?: boolean;
  className?: string;
  children: (h: MathFigureHelpers) => ReactNode;
}

export function MathFigure({
  width = 360,
  height = 240,
  xRange,
  yRange,
  padding,
  xLabel,
  yLabel,
  gridStep = 1,
  showAxes = true,
  className,
  children,
}: MathFigureProps) {
  const padL = padding?.l ?? 36;
  const padR = padding?.r ?? 12;
  const padT = padding?.t ?? 12;
  const padB = padding?.b ?? 28;
  const w = width - padL - padR;
  const h = height - padT - padB;

  const [xMin, xMax] = xRange;
  const [yMin, yMax] = yRange;

  const xOf = (x: number) => padL + ((x - xMin) / (xMax - xMin)) * w;
  const yOf = (y: number) => padT + ((yMax - y) / (yMax - yMin)) * h;

  const gx = typeof gridStep === "number" ? gridStep : (gridStep.x ?? 1);
  const gy = typeof gridStep === "number" ? gridStep : (gridStep.y ?? 1);

  const xTicks: number[] = [];
  for (let v = Math.ceil(xMin / gx) * gx; v <= xMax + 1e-9; v += gx) {
    xTicks.push(Number(v.toFixed(6)));
  }
  const yTicks: number[] = [];
  for (let v = Math.ceil(yMin / gy) * gy; v <= yMax + 1e-9; v += gy) {
    yTicks.push(Number(v.toFixed(6)));
  }

  const axisX0 = xMin <= 0 && xMax >= 0 ? xOf(0) : padL;
  const axisY0 = yMin <= 0 && yMax >= 0 ? yOf(0) : padT + h;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className ?? "bg-white dark:bg-slate-800 rounded-md"}
      style={{ maxWidth: "100%" }}
    >
      <g className="text-gray-300 dark:text-slate-600">
        {xTicks.map((x) => (
          <line
            key={`vx-${x}`}
            x1={xOf(x)}
            x2={xOf(x)}
            y1={padT}
            y2={padT + h}
            stroke="currentColor"
            strokeWidth={0.5}
          />
        ))}
        {yTicks.map((y) => (
          <line
            key={`hy-${y}`}
            x1={padL}
            x2={padL + w}
            y1={yOf(y)}
            y2={yOf(y)}
            stroke="currentColor"
            strokeWidth={0.5}
          />
        ))}
      </g>

      {showAxes && (
        <g className="text-gray-600 dark:text-slate-300">
          <line x1={padL} x2={padL + w} y1={axisY0} y2={axisY0} stroke="currentColor" strokeWidth={1} />
          <line x1={axisX0} x2={axisX0} y1={padT} y2={padT + h} stroke="currentColor" strokeWidth={1} />
          {xTicks.filter((v) => v !== 0 || xMin > 0 || xMax < 0).map((v) => (
            <text
              key={`xt-${v}`}
              x={xOf(v)}
              y={Math.min(axisY0 + 12, padT + h + 12)}
              textAnchor="middle"
              fontSize={10}
              fill="currentColor"
            >
              {Number.isInteger(v) ? v : v.toFixed(1)}
            </text>
          ))}
          {yTicks.filter((v) => v !== 0 || yMin > 0 || yMax < 0).map((v) => (
            <text
              key={`yt-${v}`}
              x={axisX0 - 4}
              y={yOf(v) + 3}
              textAnchor="end"
              fontSize={10}
              fill="currentColor"
            >
              {Number.isInteger(v) ? v : v.toFixed(1)}
            </text>
          ))}
          {xLabel && (
            <text x={padL + w / 2} y={height - 4} textAnchor="middle" fontSize={11} fill="currentColor">
              {xLabel}
            </text>
          )}
          {yLabel && (
            <text
              x={10}
              y={padT + h / 2}
              textAnchor="middle"
              fontSize={11}
              fill="currentColor"
              transform={`rotate(-90 10 ${padT + h / 2})`}
            >
              {yLabel}
            </text>
          )}
        </g>
      )}

      {children({ xOf, yOf, w, h })}
    </svg>
  );
}
