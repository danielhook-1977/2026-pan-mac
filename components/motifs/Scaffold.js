// An unfinished ladder / scaffold — rungs stop partway up, rails keep
// going past them. "We taught 680 people to fly before finishing the
// ground beneath them."
export default function Scaffold({ width = 110, height = 130, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="30" y1="10" x2="26" y2="112" />
      <line x1="70" y1="10" x2="74" y2="112" />
      <line x1="27" y1="96" x2="73" y2="96" />
      <line x1="27.6" y1="80" x2="72.4" y2="80" />
      <line x1="28.2" y1="64" x2="71.8" y2="64" />
      {/* rungs stop here — the top is unfinished */}
      <line x1="28.8" y1="48" x2="45" y2="48" strokeDasharray="2 5" opacity="0.5" />
    </svg>
  );
}
