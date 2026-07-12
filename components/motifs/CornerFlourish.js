// A small foliate corner ornament — a single curling stem with two tiny
// leaf terminals, gold-leaf filled. Drawn once for the top-left corner;
// callers mirror it with a CSS transform for the other three corners.
// Deliberately tiny and single-weight (trim decoration, not an
// illustrated border) — used by PageFrame and by the figure-plate mount
// on the portfolio chart slide.
export default function CornerFlourish({ size = 28, accent = false, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 2 C2 14 6 22 16 26 C24 29 27 33 27 38"
        stroke="url(#goldLeaf)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M9 9 C13 8 16.5 10 17 14 C13 14.5 9.5 12.5 9 9 Z"
        fill="url(#goldLeaf)"
        opacity="0.88"
      />
      <path
        d="M17.5 19.5 C21.5 18 25 20 25.5 24 C21.5 24.5 18.5 23 17.5 19.5 Z"
        fill="url(#goldLeaf)"
        opacity="0.82"
      />
      {accent && <circle cx="27" cy="38" r="1.7" fill="#7A2E27" />}
    </svg>
  );
}
