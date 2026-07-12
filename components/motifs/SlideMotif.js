import motifMap from "@/components/motifs/motifMap";

const POSITION_CLASSES = {
  "bottom-right": "bottom-8 right-10 sm:bottom-12 sm:right-16",
  "bottom-left": "bottom-8 left-10 sm:bottom-12 sm:left-16",
  "top-right": "top-24 right-10 sm:right-16",
  "bottom-center": "bottom-8 left-1/2 -translate-x-1/2 sm:bottom-10",
};

// Renders the small accent SVG mapped to a given slide id, if any.
// Must be placed inside a `relative` ancestor by the calling layout.
export default function SlideMotif({ id, colorClassName = "text-gold" }) {
  const entry = motifMap[id];
  if (!entry) return null;
  const { Component, size = 120, position = "bottom-right", opacity = 0.85 } = entry;
  const posClass = POSITION_CLASSES[position] || POSITION_CLASSES["bottom-right"];

  return (
    <div
      className={`pointer-events-none absolute z-0 hidden sm:block ${posClass} ${colorClassName}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <Component width={size} height={size} />
    </div>
  );
}
