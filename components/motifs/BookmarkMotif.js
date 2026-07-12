// A small open book with a ribbon marker laid across it — echoes the
// "open book + ray" motif for the deck's closing beat, without repeating
// it outright.
export default function BookmarkMotif({ width = 130, height = 110, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 84"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M50 20 C42 14 28 12 16 14 L16 54 C28 52 42 54 50 60" />
      <path d="M50 20 C58 14 72 12 84 14 L84 54 C72 52 58 54 50 60" />
      <line x1="50" y1="20" x2="50" y2="60" opacity="0.4" />
      <path d="M60 0 L60 34 L66 27 L72 34 L72 0 Z" opacity="0.75" />
    </svg>
  );
}
