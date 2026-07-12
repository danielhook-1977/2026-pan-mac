// A chain with its final link broken open — the constraint dropping
// away. Two intact links, a visible gap, and a third link falling clear.
export default function ChainBreak({ width = 120, height = 120, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <ellipse cx="26" cy="34" rx="13" ry="9" transform="rotate(-18 26 34)" />
      <ellipse cx="46" cy="42" rx="13" ry="9" transform="rotate(-18 46 42)" />
      {/* gap where the chain has broken */}
      <ellipse cx="76" cy="52" rx="12" ry="8.5" transform="rotate(24 76 52)" opacity="0.55" />
      <line x1="60" y1="46" x2="66" y2="49" strokeDasharray="1 5" opacity="0.6" />
      <line x1="80" y1="66" x2="86" y2="78" opacity="0.5" />
      <line x1="88" y1="64" x2="93" y2="74" opacity="0.35" />
    </svg>
  );
}
