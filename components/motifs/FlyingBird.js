// A single minimal bird in flight — one continuous gestural line,
// New Yorker-spot-illustration register, not clipart.
export default function FlyingBird({ width = 120, height = 120, className = "" }) {
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
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 58 C24 40 34 40 48 52 C56 44 66 40 78 34" />
      <path d="M48 52 C58 46 66 50 72 60" />
      <path d="M46 51 C42 60 40 68 44 76" />
      <path d="M78 34 C82 32 86 32 90 30" />
    </svg>
  );
}
