// A simple standing figure with concentric arcs radiating outward —
// "more yourself," amplified rather than replaced.
export default function RadiatingFigure({ width = 120, height = 120, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="38" cy="24" r="9" />
      <path d="M22 82 C22 58 30 46 38 46 C46 46 54 58 54 82" />
      <path d="M64 20 C74 26 80 36 80 48" opacity="0.55" />
      <path d="M70 8 C86 16 94 32 94 50" opacity="0.3" />
      <path d="M58 40 C66 44 70 52 70 60" opacity="0.55" />
    </svg>
  );
}
