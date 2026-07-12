// A small knot of crossing lines — nineteen disparate systems, tangled.
export default function TangledLines({ width = 120, height = 100, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 84"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 10 C40 10 30 40 50 42 C70 44 60 12 94 12" opacity="0.85" />
      <path d="M10 60 C40 66 36 34 56 30 C76 26 66 60 92 56" opacity="0.6" />
      <path d="M4 38 C30 50 46 20 66 34 C78 42 82 48 96 40" opacity="0.4" />
    </svg>
  );
}
