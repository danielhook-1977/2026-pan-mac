import Kicker from "@/components/Kicker";
import Emphasis from "@/components/Emphasis";

export default function ListSlide({ slide }) {
  const items = slide.items || [];
  const stark = slide.tone === "stark";
  // Slide 2 (and any future reading-list slide) passes items as
  // { title, meta, url, image } objects instead of plain strings, which
  // renders as a small row of linked thumbnail cards rather than the
  // usual numbered list.
  const hasMedia = items.length > 0 && typeof items[0] === "object" && items[0] !== null;

  return (
    <div className="flex h-full w-full flex-col justify-center gap-8 px-10 sm:px-20 lg:px-32">
      {slide.kicker && <Kicker>{slide.kicker}</Kicker>}
      {slide.headline && (
        <h2 className="max-w-3xl font-serif text-[30px] leading-tight text-ink sm:text-[38px]">
          <Emphasis text={slide.headline} />
        </h2>
      )}

      {hasMedia ? (
        <ul className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <li key={i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-[3px] border border-ink/15 bg-white shadow-[0_14px_30px_-20px_rgba(28,27,24,0.5)] transition-transform duration-200 hover:-translate-y-1"
              >
                {item.image && (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-cream-dark">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-1.5 px-4 py-4">
                  <span className="font-serif text-base leading-snug text-ink sm:text-lg">
                    {item.title}
                  </span>
                  {item.meta && (
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
                      {item.meta}
                    </span>
                  )}
                  {item.url && (
                    <span className="mt-1 font-mono text-[11px] text-gold/80 underline decoration-gold/40 underline-offset-2 group-hover:text-gold">
                      {item.url.replace(/^https?:\/\//, "")}
                    </span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex max-w-3xl flex-col">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-5 border-t border-ink/10 py-4 first:border-t-0 sm:py-5"
            >
              {!stark && (
                <span className="mt-1 shrink-0 font-mono text-[13px] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              )}
              <span className="font-serif text-xl leading-snug text-ink sm:text-2xl">
                <Emphasis text={item} />
              </span>
            </li>
          ))}
        </ul>
      )}

      {slide.subtext && (
        <p className="max-w-2xl font-serif text-lg text-ink-muted sm:text-xl">
          {slide.subtext}
        </p>
      )}
    </div>
  );
}
