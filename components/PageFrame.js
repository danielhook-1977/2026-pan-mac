import CornerFlourish from "@/components/motifs/CornerFlourish";

// A restrained manuscript-page device: a thin double hairline rule inset
// from the slide edge, with small foliate corner terminals — evoking a
// ruled margin, not a heavy illustrated border. Reserved for the deck's
// "set piece" slides (title, section dividers, quotes, closing, and the
// portfolio figure plate) — deliberately withheld from statement/list/stat
// and the data-carrying chart slides so the deck doesn't feel busy
// throughout a live talk. Must be the first child of a `relative` parent
// that fills the slide.
export default function PageFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <div
        className="absolute"
        style={{ inset: "20px", border: "1px solid rgba(138,109,30,0.36)" }}
      />
      <div
        className="absolute"
        style={{ inset: "25px", border: "1px solid rgba(138,109,30,0.2)" }}
      />

      <div className="absolute" style={{ top: 8, left: 8 }}>
        <CornerFlourish size={30} />
      </div>
      <div className="absolute" style={{ top: 8, right: 8, transform: "scaleX(-1)" }}>
        <CornerFlourish size={30} />
      </div>
      <div className="absolute" style={{ bottom: 8, left: 8, transform: "scaleY(-1)" }}>
        <CornerFlourish size={30} />
      </div>
      <div className="absolute" style={{ bottom: 8, right: 8, transform: "scale(-1, -1)" }}>
        <CornerFlourish size={30} />
      </div>
    </div>
  );
}
