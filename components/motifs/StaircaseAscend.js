// A minimal ascending staircase — for a stat cluster that is itself a
// story of steady climb (95% / 83% / +1 grade level).
export default function StaircaseAscend({ width = 160, height = 60, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 60"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 52 L4 40 L28 40 L28 28 L52 28 L52 16 L76 16 L76 4 L100 4" />
      <circle cx="100" cy="4" r="2.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
