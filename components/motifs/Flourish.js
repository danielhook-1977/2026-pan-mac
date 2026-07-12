// A thin rule with a small foliate centrepiece — the kind of ornamental
// line you'd see above/below a chapter number in a well-set hardback.
// The straight rule segments stay currentColor (so callers' text-gold/70
// opacity utilities keep working); the leaf ticks and the centre
// quatrefoil are gold-leaf gradient fills, for a touch more richness
// without turning this into an illustration. Pure line art, no clipart.
export default function Flourish({ className = "", flip = false }) {
  return (
    <svg
      viewBox="0 0 260 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <line x1="0" y1="10" x2="100" y2="10" />
      <line x1="160" y1="10" x2="260" y2="10" />

      {/* small leaf ticks along each rule segment */}
      <path
        d="M38 10 C38 6.2 41.2 4.6 44.4 6.2 C41.6 8.4 39.6 9.6 38 10 Z"
        fill="url(#goldLeaf)"
        stroke="none"
        opacity="0.85"
      />
      <path
        d="M222 10 C222 6.2 218.8 4.6 215.6 6.2 C218.4 8.4 220.4 9.6 222 10 Z"
        fill="url(#goldLeaf)"
        stroke="none"
        opacity="0.85"
      />

      {/* centre quatrefoil ornament */}
      <g transform="translate(130 10)" stroke="none">
        <path d="M0 0 C-3 -6.4 -9.4 -6.2 -10.4 0 C-9.4 6.2 -3 6.4 0 0 Z" fill="url(#goldLeaf)" opacity="0.92" />
        <path d="M0 0 C3 -6.4 9.4 -6.2 10.4 0 C9.4 6.2 3 6.4 0 0 Z" fill="url(#goldLeaf)" opacity="0.92" />
        <circle r="1.7" fill="url(#goldLeaf)" />
      </g>
    </svg>
  );
}
