// A restrained typographic fleuron (leaf-and-stem ornament), used as a
// faint background watermark on section slides that aren't numbered
// chapters (e.g. "Epilogue") in place of a roman numeral. Kept ink-toned
// (not gold) since it sits at very low opacity as a quiet background
// mark rather than a foreground gilded accent; the leaves now carry a
// soft fill plus small berry terminals for a slightly fuller, more
// manuscript-like composition.
export default function Fleuron({ width = 200, height = 200, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M50 88 C50 60 50 40 50 12" />
      <path d="M50 30 C34 26 22 34 16 50 C34 52 46 44 50 30 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M50 30 C66 26 78 34 84 50 C66 52 54 44 50 30 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M50 55 C38 52 28 58 24 70 C38 71 47 65 50 55 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M50 55 C62 52 72 58 76 70 C62 71 53 65 50 55 Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M50 74 C43 73 37 77 34 84 C42 85 48 81 50 74 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M50 74 C57 73 63 77 66 84 C58 85 52 81 50 74 Z" fill="currentColor" fillOpacity="0.1" />
      <circle cx="16" cy="50" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="84" cy="50" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="50" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}
