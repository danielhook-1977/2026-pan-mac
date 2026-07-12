// A small hand-drawn tendril curling off an illuminated drop cap — thin
// single-weight gold line art with one small leaf and a single
// rubrication-red berry dot at the tip, evoking (at small scale) the
// foliate decoration on a manuscript's illuminated initial.
export default function DropCapFlourish({ size = 44, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8 C3 22 11 30 24 29 C33 28.3 38.5 21.5 37 12"
        stroke="url(#goldLeaf)"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M13 22 C17.5 18.5 23 20 24 25 C19 26.5 14.5 25 13 22 Z"
        fill="url(#goldLeaf)"
        opacity="0.86"
      />
      <circle cx="37" cy="12" r="2" fill="#7A2E27" />
    </svg>
  );
}
