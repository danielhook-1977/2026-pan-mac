export default function NavControls({ index, total, onPrev, onNext }) {
  return (
    <>
      {/* Bottom-left: folio / running-foot style counter, closer to a
          printed book's page number than a raw digital readout. */}
      <div className="fixed bottom-6 left-6 z-40 flex items-baseline gap-2 sm:bottom-8 sm:left-10">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink-muted/70">
          Page
        </span>
        <span className="font-serif text-[15px] italic leading-none text-ink">
          {index + 1}
        </span>
        <span className="h-px w-3 bg-ink-muted/40" />
        <span className="font-mono text-[10px] tracking-wide text-ink-muted/70">
          of {total}
        </span>
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 sm:bottom-8 sm:right-10">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          disabled={index === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-cream text-ink transition hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:text-ink"
        >
          <span aria-hidden>←</span>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          disabled={index === total - 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-cream text-ink transition hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:text-ink"
        >
          <span aria-hidden>→</span>
        </button>
      </div>
    </>
  );
}
