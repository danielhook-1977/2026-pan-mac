// A simple letterpress plate / press frame — publishing's own tools,
// for the "you get to decide what good looks like" beat.
export default function PrintingPress({ width = 120, height = 120, className = "" }) {
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
      <rect x="20" y="16" width="60" height="14" rx="1" />
      <line x1="30" y1="16" x2="30" y2="30" opacity="0.5" />
      <line x1="42" y1="16" x2="42" y2="30" opacity="0.5" />
      <line x1="54" y1="16" x2="54" y2="30" opacity="0.5" />
      <line x1="66" y1="16" x2="66" y2="30" opacity="0.5" />
      <line x1="50" y1="30" x2="50" y2="52" />
      <rect x="26" y="52" width="48" height="10" rx="1" />
      <line x1="34" y1="62" x2="30" y2="84" />
      <line x1="66" y1="62" x2="70" y2="84" />
      <line x1="26" y1="84" x2="74" y2="84" />
    </svg>
  );
}
