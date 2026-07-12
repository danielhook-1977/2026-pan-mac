export default function SingleBarChart({ categories, unit = "%" }) {
  const width = 700;
  const height = 340;
  const padTop = 34;
  const padBottom = 54;
  const padLeft = 34;
  const padRight = 8;
  const plotW = width - padLeft - padRight;
  const plotH = height - padTop - padBottom;

  const maxValue = Math.max(...categories.map((c) => c.value)) * 1.15;
  const barGap = 44;
  const barW = (plotW - barGap * (categories.length - 1)) / categories.length;
  const scale = (v) => (v / maxValue) * plotH;

  const niceMax = Math.ceil(maxValue / 25) * 25;
  const gridTicks = [0, niceMax * 0.25, niceMax * 0.5, niceMax * 0.75, niceMax].map((v) =>
    Math.round(v)
  );

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
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
                x={padLeft - 8}
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
          const x = padLeft + i * (barW + barGap);
          const h = scale(cat.value);
          return (
            <g key={cat.label}>
              <rect
                className="bar-grow"
                style={{ animationDelay: `${i * 90}ms` }}
                x={x}
                y={padTop + plotH - h}
                width={barW}
                height={h}
                fill="#8A6D1E"
                rx="3"
              />
              <text
                x={x + barW / 2}
                y={padTop + plotH - h - 14}
                textAnchor="middle"
                fontSize="22"
                fontFamily="var(--font-plex-mono)"
                fontWeight="600"
                fill="#1C1B18"
              >
                +{cat.value}{unit}
              </text>
              <foreignObject x={x - 10} y={padTop + plotH + 14} width={barW + 20} height={32}>
                <div
                  style={{
                    fontFamily: "var(--font-plex-mono)",
                    fontSize: "13.5px",
                    color: "#3A3629",
                    textAlign: "center",
                    letterSpacing: "0.02em",
                  }}
                >
                  {cat.label}
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
