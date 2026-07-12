import Kicker from "@/components/Kicker";
import Emphasis from "@/components/Emphasis";
import SlideMotif from "@/components/motifs/SlideMotif";

export default function StatementSlide({ slide }) {
  const align = slide.align === "left" ? "items-start text-left" : "items-center text-center";
  const isThesis = slide.tone === "thesis";
  const isLines = Array.isArray(slide.lines) && slide.lines.length > 0;

  const headlineSize = isThesis
    ? "text-[38px] sm:text-[52px] lg:text-[68px]"
    : "text-[30px] sm:text-[42px] lg:text-[52px]";

  return (
    <div
      className={`relative flex h-full w-full flex-col justify-center gap-8 px-10 sm:px-20 lg:px-32 ${align}`}
    >
      {slide.kicker && <Kicker>{slide.kicker}</Kicker>}

      {isLines ? (
        <div className={`flex flex-col gap-3 ${align === "items-center text-center" ? "items-center" : "items-start"}`}>
          {slide.lines.map((line, i) => (
            <p
              key={i}
              className="max-w-4xl font-serif leading-[1.15] text-ink"
              style={{
                fontSize: `${34 + i * 10}px`,
                opacity: 0.55 + i * 0.225,
              }}
            >
              <Emphasis text={line} />
            </p>
          ))}
        </div>
      ) : (
        <h2
          className={`max-w-4xl text-balance font-serif ${headlineSize} font-medium leading-[1.12] text-ink`}
        >
          <Emphasis text={slide.headline} />
        </h2>
      )}

      {slide.subtext && (
        <p className="max-w-2xl font-serif text-lg leading-snug text-ink-muted sm:text-xl">
          <Emphasis text={slide.subtext} />
        </p>
      )}

      {isThesis && <div className="h-[3px] w-20 bg-gold" />}

      <SlideMotif id={slide.id} />
    </div>
  );
}
