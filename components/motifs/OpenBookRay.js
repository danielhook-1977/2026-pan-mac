// An open book with a single ray/line rising from the gutter — book
// imagery tied directly to "starting again, on purpose."
export default function OpenBookRay({ width = 130, height = 130, className = "" }) {
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
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M50 40 C42 34 28 32 16 34 L16 68 C28 66 42 68 50 74" />
      <path d="M50 40 C58 34 72 32 84 34 L84 68 C72 66 58 68 50 74" />
      <line x1="50" y1="40" x2="50" y2="74" opacity="0.5" />
      <line x1="50" y1="26" x2="50" y2="10" />
      <line x1="42" y1="18" x2="50" y2="10" opacity="0.6" />
      <line x1="58" y1="18" x2="50" y2="10" opacity="0.6" />
    </svg>
  );
}
