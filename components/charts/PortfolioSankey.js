/*
  Portfolio chart — the presenter's actual original graphic.

  Sourced directly from his Adobe Illustrator file ("DS Development.ai"),
  converted losslessly to /public/portfolio-sankey.svg (text converted to
  vector paths, so it renders identically everywhere with no font
  dependency), with a high-res PNG fallback at /public/portfolio-sankey.png.

  This is presented as a book "figure plate" — a mounted illustration with
  a printed caption — rather than redrawn or relabelled in the deck's own
  chart style, since the chart's own colour key (customer type) and era
  bands along the bottom (B2C / Publisher / Institutional / G&F /
  Corporate / B2C) are load-bearing details in their own right and
  shouldn't be paraphrased.
*/

import CornerFlourish from "@/components/motifs/CornerFlourish";

export default function PortfolioSankey() {
  return (
    // Sized to 80% of the container width (was pushing the kicker/headline/
    // caption out of alignment at full width) — mx-auto keeps it centred
    // within the slide's max-w-6xl chart container.
    <figure className="mx-auto flex w-[80%] max-w-none flex-col items-center">
      <div className="relative w-full rounded-[3px] border border-ink/15 bg-white p-4 shadow-[0_18px_40px_-22px_rgba(28,27,24,0.45)] sm:p-6">
        {/* small gold-leaf corner ornaments, like a mounted plate in a
            fine printed book — each carries a single rubrication-red
            accent dot at its tip. */}
        <span className="pointer-events-none absolute left-1 top-1">
          <CornerFlourish size={22} accent />
        </span>
        <span className="pointer-events-none absolute right-1 top-1" style={{ transform: "scaleX(-1)" }}>
          <CornerFlourish size={22} accent />
        </span>
        <span className="pointer-events-none absolute bottom-1 left-1" style={{ transform: "scaleY(-1)" }}>
          <CornerFlourish size={22} accent />
        </span>
        <span className="pointer-events-none absolute bottom-1 right-1" style={{ transform: "scale(-1, -1)" }}>
          <CornerFlourish size={22} accent />
        </span>

        <img
          src="/portfolio-sankey.svg"
          alt="Digital Science portfolio chart, 2010–2027: companies acquired, invested in, and launched across six colour-coded customer segments (B2C/Researcher, Institution, Publisher, Equipment Supplier, Corporate, Funder), banded into six eras from B2C Era through Publisher, Institutional, G&F, Corporate, and back to B2C Era."
          className="h-auto w-full select-none"
          draggable={false}
        />
      </div>

      <figcaption className="mt-4 flex max-w-3xl flex-col items-center gap-1 text-center">
        <span className="font-serif text-[15px] italic text-ink-muted sm:text-base">
          Fig. 1 — the original portfolio chart, 2010–2027.
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted/80">
          Colour = customer segment · bands = era
        </span>
      </figcaption>
    </figure>
  );
}
