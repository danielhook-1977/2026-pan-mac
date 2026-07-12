import Emphasis from "@/components/Emphasis";
import Flourish from "@/components/motifs/Flourish";
import Fleuron from "@/components/motifs/Fleuron";
import DropCapFlourish from "@/components/motifs/DropCapFlourish";
import PageFrame from "@/components/PageFrame";

// Chapter-opening treatment: a hardback book's chapter divider, not a
// generic title card. Eyebrow text is rendered small-caps between a pair
// of ornamental rules; "Chapter N" eyebrows get a large, very faint
// roman-numeral watermark, others (Epilogue, dated interludes) get a
// restrained fleuron instead. The headline's first letter becomes a
// simple drop cap.
const ROMAN_NUMERALS = {
  "Chapter One": "I",
  "Chapter Two": "II",
  "Chapter Three": "III",
};

export default function SectionSlide({ slide }) {
  const headline = slide.headline || "";
  const hasEmphasis = headline.startsWith("*");
  const first = headline.charAt(0);
  const rest = headline.slice(1);
  const roman = ROMAN_NUMERALS[slide.eyebrow];

  return (
    <div className="relative flex h-full w-full flex-col items-start justify-center overflow-hidden px-10 sm:px-20 lg:px-32">
      <PageFrame />

      {/* Ghost watermark — roman numeral for numbered chapters, a fleuron otherwise */}
      <div
        className="pointer-events-none absolute -right-10 top-1/2 z-0 -translate-y-1/2 text-ink sm:-right-6"
        aria-hidden="true"
        style={{ opacity: 0.055 }}
      >
        {roman ? (
          <span
            className="block font-serif font-medium leading-none"
            style={{ fontSize: "clamp(240px, 36vw, 460px)" }}
          >
            {roman}
          </span>
        ) : (
          <Fleuron width={280} height={280} />
        )}
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-start">
        <Flourish className="h-4 w-40 text-gold/70 sm:w-56" />

        <span
          className="mt-5 font-serif text-[14px] not-italic tracking-[0.4em] text-gold sm:text-[15px]"
          style={{ fontVariant: "small-caps", fontFeatureSettings: '"smcp"' }}
        >
          {slide.eyebrow}
        </span>

        <Flourish className="mt-5 h-4 w-40 text-gold/70 sm:w-56" flip />

        {hasEmphasis ? (
          <h1 className="mt-10 max-w-4xl font-serif text-[36px] font-medium leading-[1.08] text-ink sm:text-[50px] lg:text-[58px]">
            <Emphasis text={headline} />
          </h1>
        ) : (
          <h1 className="mt-10 max-w-4xl font-serif font-medium leading-[1.05] text-ink">
            <span
              className="relative float-left mr-4 mt-[2px] leading-[0.78]"
              aria-hidden="true"
            >
              {/* faint versal panel — a whisper of tint behind the letter,
                  hairline gold border, the way a manuscript's initial sits
                  in its own small ground */}
              <span
                className="absolute z-0 rounded-md"
                style={{
                  inset: "-8px -6px -4px -6px",
                  background: "rgba(182,154,74,0.07)",
                  border: "1px solid rgba(138,109,30,0.22)",
                }}
              />
              <span
                className="gold-leaf-text relative z-10 font-serif"
                style={{
                  fontSize: "clamp(66px, 8vw, 112px)",
                  // Lean into Fraunces's own display character for the
                  // illuminated initial — max optical size plus a touch of
                  // its "soft" axis — rather than reaching for a script or
                  // blackletter face.
                  fontVariationSettings: "'opsz' 144, 'SOFT' 18",
                }}
              >
                {first}
              </span>
              <DropCapFlourish
                size={40}
                className="pointer-events-none absolute -bottom-1 -right-5 z-10 opacity-90"
              />
            </span>
            <span className="text-[34px] sm:text-[48px] lg:text-[56px]">{rest}</span>
            <span className="clear-both block" />
          </h1>
        )}

        {slide.subtext && (
          <p className="mt-6 max-w-xl font-serif text-lg italic text-ink-muted sm:text-xl">
            {slide.subtext}
          </p>
        )}
      </div>
    </div>
  );
}
