interface ScopeTraceProps {
  width?: number;
  height?: number;
  signal: (t: number) => number;
  signal2?: (t: number) => number;
  vDiv: number;
  tDiv: number;
  divsX?: number;
  divsY?: number;
  trace1Color?: string;
  trace2Color?: string;
}

export function ScopeTrace({
  width = 480,
  height = 280,
  signal,
  signal2,
  vDiv,
  tDiv,
  divsX = 10,
  divsY = 8,
  trace1Color = "#06b6d4",
  trace2Color = "#f59e0b",
}: ScopeTraceProps) {
  const totalT = divsX * tDiv;
  const samplesPerDiv = 40;
  const samples = divsX * samplesPerDiv;

  const cx = width / 2;
  const cy = height / 2;
  const pxPerVolt = height / (vDiv * divsY);
  const pxPerSecond = width / totalT;

  const buildPath = (fn: (t: number) => number) => {
    const pts: string[] = [];
    for (let i = 0; i <= samples; i++) {
      const t = (i / samples) * totalT - totalT / 2;
      const v = fn(t);
      const x = cx + t * pxPerSecond;
      const y = cy - v * pxPerVolt;
      pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return pts.join(" ");
  };

  const gridLines = [];
  for (let i = 0; i <= divsX; i++) {
    const x = (i * width) / divsX;
    gridLines.push(
      <line
        key={`vx-${i}`}
        x1={x}
        x2={x}
        y1={0}
        y2={height}
        stroke={i === divsX / 2 ? "#94a3b8" : "#cbd5e1"}
        strokeWidth={i === divsX / 2 ? 1 : 0.5}
      />
    );
  }
  for (let j = 0; j <= divsY; j++) {
    const y = (j * height) / divsY;
    gridLines.push(
      <line
        key={`hy-${j}`}
        x1={0}
        x2={width}
        y1={y}
        y2={y}
        stroke={j === divsY / 2 ? "#94a3b8" : "#cbd5e1"}
        strokeWidth={j === divsY / 2 ? 1 : 0.5}
      />
    );
  }

  return (
    <div className="space-y-2">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        className="bg-slate-900 rounded-lg"
      >
        <g opacity={0.5}>{gridLines}</g>
        <path d={buildPath(signal)} fill="none" stroke={trace1Color} strokeWidth={2} />
        {signal2 && (
          <path d={buildPath(signal2)} fill="none" stroke={trace2Color} strokeWidth={2} />
        )}
      </svg>
      <div className="flex gap-4 text-xs font-mono text-gray-700 dark:text-gray-200">
        <span>
          V/div: <span className="font-bold">{vDiv}</span>
        </span>
        <span>
          t/div:{" "}
          <span className="font-bold">
            {tDiv >= 1
              ? `${tDiv} s`
              : tDiv >= 1e-3
                ? `${(tDiv * 1e3).toFixed(2)} ms`
                : tDiv >= 1e-6
                  ? `${(tDiv * 1e6).toFixed(2)} µs`
                  : `${(tDiv * 1e9).toFixed(2)} ns`}
          </span>
        </span>
      </div>
    </div>
  );
}
