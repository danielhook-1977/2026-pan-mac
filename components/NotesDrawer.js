"use client";

export default function NotesDrawer({ open, notes, index, total }) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 transform border-t border-gold/30 bg-[#141310]/95 px-8 py-6 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-transform duration-250 ease-out sm:px-16 ${
        open ? "translate-y-0" : "translate-y-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
            Presenter notes · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Press N to hide
          </span>
        </div>
        <p className="font-mono text-[15px] leading-relaxed text-white/90 sm:text-base">
          {notes || "—"}
        </p>
      </div>
    </div>
  );
}
