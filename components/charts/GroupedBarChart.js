const COLOR_WEEK1 = "#C9B37E"; // muted gold
const COLOR_WEEK12 = "#3B3421"; // deep ink/olive

export default function GroupedBarChart({ categories, series, maxValue = 100 }) {
  const width = 820;
  const height = 360;
  const padTop = 26;
  const padBottom = 60;
  const padLeft = 40;
  const padRight = 8;
  const plotW = width - padLeft - padRight;
  const plotH = height - padTop - padBottom;

  const groupCount = categories.length;
  const groupGap = 30;
  const groupW = (plotW - groupGap * (groupCount - 1)) / groupCount;
  const barGap = 7;
  const barW = (groupW - barGap) / 2;

  const scale = (v) => (v / maxValue) * plotH;
  const gridTicks = [0, 25, 50, 75, 100];

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
        {/* gridlines + axis labels */}
        {gridTicks.map((t) => {
          const y = padTop + plotH - scale(t);
          return (
            <g key={t}>
              <line
                x1={padLeft}
                y1={y}
                x2={width - padRight}
                y2={y}
                stroke="#1C1B18"
                strokeOpacity={t === 0 ? 0.22 : 0.08}
                strokeWidth="1"
                strokeDasharray={t === 0 ? "0" : "2 4"}
              />
              <text
                x={padLeft - 10}
                y={y + 4}
                textAnchor="end"
                fontSize="11"
                fontFamily="var(--font-plex-mono)"
                fill="#8A7F63"
              >
                {t}
              </text>
            </g>
          );
        })}

        {categories.map((cat, i) => {
          const gx = padLeft + i * (groupW + groupGap);
          const [v1, v2] = cat.values;
          const h1 = scale(v1);
          const h2 = scale(v2);
          const delay = i * 60;
          return (
            <g key={cat.label}>
              <rect
                className="bar-grow"
                style={{ animationDelay: `${delay}ms` }}
                x={gx}
                y={padTop + plotH - h1}
                width={barW}
                height={h1}
                fill={COLOR_WEEK1}
                rx="2"
              />
              <text
                x={gx + barW / 2}
                y={padTop + plotH - h1 - 10}
                textAnchor="middle"
                fontSize="14"
                fontFamily="var(--font-plex-mono)"
                fontWeight="600"
                fill="#8A6D1E"
              >
                {v1}%
              </text>

              <rect
                className="bar-grow"
                style={{ animationDelay: `${delay + 70}ms` }}
                x={gx + barW + barGap}
                y={padTop + plotH - h2}
                width={barW}
                height={h2}
                fill={COLOR_WEEK12}
                rx="2"
              />
              <text
                x={gx + barW + barGap + barW / 2}
                y={padTop + plotH - h2 - 10}
                textAnchor="middle"
                fontSize="14"
                fontFamily="var(--font-plex-mono)"
                fontWeight="600"
                fill="#1C1B18"
              >
                {v2}%
              </text>

              <foreignObject
                x={gx - 8}
                y={padTop + plotH + 12}
                width={groupW + 16}
                height={padBottom - 12}
              >
                <div
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: "13.5px",
                    lineHeight: 1.28,
                    color: "#3A3629",
                    textAlign: "center",
                    letterSpacing: "0.01em",
                  }}
                >
                  {cat.label}
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>

      <div className="mt-5 flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted">
        {series.map((s) => (
          <div key={s.name} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: s.name.toLowerCase().includes("12") ? COLOR_WEEK12 : COLOR_WEEK1 }}
            />
            {s.name}
          </div>
        ))}
      </div>
    </div>
  );
}
