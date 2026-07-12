import Kicker from "@/components/Kicker";
import Emphasis from "@/components/Emphasis";
import PageFrame from "@/components/PageFrame";

export default function TitleSlide({ slide }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-center px-10 sm:px-20 lg:px-32">
      <PageFrame />
      <Kicker className="mb-8">{slide.kicker}</Kicker>
      <h1 className="max-w-5xl font-serif text-[44px] leading-[1.05] tracking-tight text-ink sm:text-[60px] lg:text-[72px]">
        <Emphasis text={slide.headline} />
      </h1>
      {slide.subtext && (
        <p className="mt-8 max-w-2xl font-serif text-xl text-ink-muted sm:text-2xl">
          {slide.subtext}
        </p>
      )}
      {slide.byline && slide.byline.length > 0 && (
        <div className="mt-14 flex flex-col gap-1 border-l-2 border-gold pl-5">
          {slide.byline.map((line, i) => (
            <span
              key={i}
              className={`font-mono text-[12px] tracking-wide sm:text-[13px] ${
                i === 0 ? "text-ink" : "text-ink-muted"
              }`}
            >
              {line}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
