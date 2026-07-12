"use client";

import { getSlideTitle, getSlideCategory } from "@/components/slideTitle";

export default function MenuOverlay({ slides, current, onJump, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#F2E7CE]"
      role="dialog"
      aria-modal="true"
      aria-label="Slide menu"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between border-b border-ink/10 px-8 py-6 sm:px-16">
        <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-gold">
          All slides
        </span>
        <button
          type="button"
          onClick={onClose}
          className="font-mono text-[12px] uppercase tracking-[0.2em] text-ink-muted transition hover:text-gold"
        >
          Close ✕
        </button>
      </div>

      <div className="no-scrollbar flex-1 overflow-y-auto px-8 py-6 sm:px-16">
        <div className="grid grid-cols-1 gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => onJump(i)}
              className={`group flex items-start gap-4 rounded px-2 py-3 text-left transition hover:bg-ink/5 ${
                i === current ? "bg-ink/5" : ""
              }`}
            >
              <span
                className={`mt-0.5 shrink-0 font-mono text-[12px] ${
                  i === current ? "text-gold" : "text-ink-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex flex-col">
                <span className="font-serif text-base leading-snug text-ink group-hover:text-gold">
                  {getSlideTitle(slide)}
                </span>
                <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                  {getSlideCategory(slide)}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
