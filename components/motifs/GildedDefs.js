// Global SVG gradient definitions, mounted once (in Deck.js) so any inline
// SVG or CSS elsewhere in the page can reference them by id — this is the
// single source of truth for the deck's "gold-leaf" and "rubrication red"
// treatments, so every gilded stroke/fill across the deck reads as one
// consistent metal rather than a dozen slightly-different yellows.
export default function GildedDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        {/* Diagonal gold-leaf sheen: light highlight -> mid gold -> antique shadow. */}
        <linearGradient id="goldLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8C765" />
          <stop offset="42%" stopColor="#B69A4A" />
          <stop offset="100%" stopColor="#6B5314" />
        </linearGradient>
        {/* Vertical variant, used where the sheen should run top-to-bottom
            (e.g. the ribbon). */}
        <linearGradient id="goldLeafVertical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C765" />
          <stop offset="50%" stopColor="#B69A4A" />
          <stop offset="100%" stopColor="#6B5314" />
        </linearGradient>
      </defs>
    </svg>
  );
}
