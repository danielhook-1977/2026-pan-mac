// Derives a short human-readable label for a slide, used in the menu
// overlay and anywhere else we need a one-line summary regardless of layout.
export function getSlideTitle(slide) {
  const strip = (s) => (s ? String(s).replace(/\*/g, "") : "");

  if (slide.headline) return strip(slide.headline);
  if (slide.eyebrow) return `${strip(slide.eyebrow)}${slide.headline ? " — " + strip(slide.headline) : ""}`;
  if (slide.quote) return strip(slide.quote).slice(0, 70) + (slide.quote.length > 70 ? "…" : "");
  if (Array.isArray(slide.lines) && slide.lines.length) return strip(slide.lines[0]);
  if (Array.isArray(slide.stats) && slide.stats.length) {
    return slide.stats.map((s) => s.value).join(" / ");
  }
  if (Array.isArray(slide.items) && slide.items.length) return strip(slide.items[0]);
  return strip(slide.kicker) || `Slide ${slide.id}`;
}

export function getSlideCategory(slide) {
  const map = {
    title: "Title",
    section: "Section",
    statement: "Statement",
    quote: "Quote",
    stat: "Stat",
    list: "List",
    chart: "Chart",
    closing: "Closing",
  };
  return map[slide.layout] || slide.layout;
}
