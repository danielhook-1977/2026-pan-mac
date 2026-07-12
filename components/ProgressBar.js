// A vertical "bookmark ribbon" progress indicator, fixed to the right
// edge of the page like a physical ribbon marker sewn into a hardback's
// spine — it lengthens as the deck progresses and ends in the small
// V-notch of a real ribbon marker. Rendered in rubrication red rather
// than gold: a ribbon should read as ribbon-coloured, not gilded. A
// diagonal sheen layer and a soft centre crease give it a little silk
// dimensionality.
export default function ProgressBar({ current, total }) {
  const pct = total > 1 ? current / (total - 1) : 0;
  const heightVh = 7 + pct * 84; // 7vh (always visible) up to ~91vh

  return (
    <div
      className="fixed right-0 top-0 z-30 w-[10px] sm:w-[13px]"
      style={{ height: `${heightVh}vh` }}
      aria-hidden="true"
    >
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 22%), " +
            "linear-gradient(180deg, #9B3A30 0%, #7A2E27 55%, #521C17 100%)",
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 11px), 50% 100%, 0 calc(100% - 11px))",
          boxShadow: "-3px 0 8px rgba(28,27,24,0.14)",
        }}
      />
      {/* faint centre crease, like a folded ribbon */}
      <div
        className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 opacity-30"
        style={{ background: "#38110D" }}
      />
    </div>
  );
}
