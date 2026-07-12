// A fountain-pen / quill nib with a single trailing ink stroke —
// "author, not ghostwriter."
export default function Quill({ width = 120, height = 120, className = "" }) {
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
      <path d="M78 12 C60 22 40 40 26 62 L18 82 L38 74 C58 60 74 42 84 22 Z" />
      <line x1="26" y1="62" x2="18" y2="82" />
      <line x1="52" y1="36" x2="66" y2="24" opacity="0.5" />
      <path d="M18 82 C10 88 6 90 2 90" opacity="0.6" />
    </svg>
  );
}
