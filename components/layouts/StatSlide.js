import Kicker from "@/components/Kicker";
import StaircaseAscend from "@/components/motifs/StaircaseAscend";

export default function StatSlide({ slide }) {
  const stats = slide.stats || [];

  if (slide.symbol) {
    return (
      <div className="relative flex h-full w-full flex-col items-start justify-center gap-6 px-10 sm:px-20 lg:px-32">
        {slide.kicker && <Kicker>{slide.kicker}</Kicker>}
        <div className="gold-leaf-text font-mono text-[64px] leading-none sm:text-[90px]">
          {slide.symbol}
        </div>
        {slide.headline && (
          <h2 className="max-w-3xl font-serif text-[34px] leading-tight text-ink sm:text-[46px]">
            {slide.headline}
          </h2>
        )}
        {slide.subtext && (
          <p className="max-w-xl font-serif text-lg text-ink-muted sm:text-xl">
            {slide.subtext}
          </p>
        )}
      </div>
    );
  }

  const sizeClass =
    stats.length >= 3
      ? "text-[56px] sm:text-[76px] lg:text-[92px]"
      : "text-[64px] sm:text-[96px] lg:text-[128px]";

  // Slide 29 (95% / 83% / +1 grade level) gets a small ascending-steps
  // motif under the numbers — the cluster is itself a story of climb.
  const showStaircase = slide.id === 29;

  return (
    <div className="relative flex h-full w-full flex-col items-start justify-center gap-10 px-10 sm:px-20 lg:px-32">
      {slide.kicker && <Kicker>{slide.kicker}</Kicker>}
      {slide.headline && (
        <h2 className="max-w-3xl font-serif text-[30px] leading-tight text-ink sm:text-[38px]">
          {slide.headline}
        </h2>
      )}
      <div className="flex flex-wrap items-end gap-x-16 gap-y-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col gap-2">
            <span
              className={`gold-leaf-text font-mono font-medium leading-none tracking-tight ${sizeClass}`}
            >
              {s.value}
            </span>
            {s.label && (
              <span className="max-w-[16ch] font-serif text-base text-ink-muted sm:text-lg">
                {s.label}
              </span>
            )}
          </div>
        ))}
      </div>
      {showStaircase && (
        <StaircaseAscend width={150} height={56} className="text-gold/70" />
      )}
      {slide.subtext && (
        <p className="max-w-2xl font-serif text-lg text-ink-muted sm:text-xl">
          {slide.subtext}
        </p>
      )}
    </div>
  );
}
