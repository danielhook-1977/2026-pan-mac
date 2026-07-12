import Kicker from "@/components/Kicker";
import SlideMotif from "@/components/motifs/SlideMotif";
import PageFrame from "@/components/PageFrame";

export default function QuoteSlide({ slide }) {
  const isMission = slide.tone === "mission";
  const isHeavy = slide.tone === "heavy";

  if (isMission) {
    // Treated as an internal mission statement: bold typographic block,
    // no italic quote-mark styling, sits closer to a statement slide.
    return (
      <div className="relative flex h-full w-full flex-col justify-center gap-6 px-10 sm:px-20 lg:px-32">
        <PageFrame />
        <Kicker>MISSION</Kicker>
        <p className="max-w-4xl font-serif text-[32px] font-semibold not-italic leading-[1.2] text-ink sm:text-[44px] lg:text-[50px]">
          {slide.quote}
        </p>
        <div className="h-[3px] w-20 bg-gold" />
        <SlideMotif id={slide.id} />
      </div>
    );
  }

  return (
    <div className="relative flex h-full w-full flex-col justify-center px-10 sm:px-20 lg:px-32">
      <PageFrame />
      <div
        className={`relative max-w-3xl border-l-[3px] pl-8 sm:pl-10 ${
          isHeavy ? "border-ink" : "border-gold"
        }`}
      >
        {/* Illuminated opening quotation mark — a large gold-leaf glyph
            hung as a corner accent, with a single rubrication-red berry
            dot at its foot (real typography, not clipart). */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-9 -left-2 select-none sm:-top-14 sm:-left-3"
        >
          <span
            className="gold-leaf-text relative block font-serif leading-none"
            style={{ fontSize: "clamp(64px, 8vw, 128px)" }}
          >
            &ldquo;
          </span>
          <span
            className="absolute h-[5px] w-[5px] rounded-full"
            style={{ background: "#7A2E27", right: "10%", bottom: "16%" }}
          />
        </span>

        {slide.kicker && <Kicker className="relative mb-6">{slide.kicker}</Kicker>}
        <p
          className={`relative font-serif italic leading-[1.28] text-ink ${
            isHeavy
              ? "text-[26px] sm:text-[34px] lg:text-[38px]"
              : "text-[26px] sm:text-[34px] lg:text-[40px]"
          }`}
        >
          &ldquo;{slide.quote}&rdquo;
        </p>
        {slide.attribution && (
          <p className="relative mt-8 font-mono text-[12px] uppercase tracking-[0.15em] text-gold sm:text-[13px]">
            — {slide.attribution}
          </p>
        )}
      </div>
      <SlideMotif id={slide.id} />
    </div>
  );
}
