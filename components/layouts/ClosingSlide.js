import Emphasis from "@/components/Emphasis";
import SlideMotif from "@/components/motifs/SlideMotif";
import PageFrame from "@/components/PageFrame";

export default function ClosingSlide({ slide }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 px-10 pb-20 text-center">
      <PageFrame />
      <span className="h-px w-10 bg-gold" />
      <h1 className="max-w-3xl font-serif text-[40px] leading-tight text-ink sm:text-[56px] lg:text-[64px]">
        <Emphasis text={slide.headline} />
      </h1>
      {slide.subtext && (
        <p className="max-w-xl font-serif text-xl italic text-ink-muted sm:text-2xl">
          {slide.subtext}
        </p>
      )}
      <span className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
        Daniel Hook · CEO, Digital Science
      </span>
      <SlideMotif id={slide.id} />
    </div>
  );
}
