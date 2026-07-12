export default function Kicker({ children, className = "" }) {
  if (!children) return null;
  return (
    <div
      className={`font-mono uppercase tracking-[0.2em] text-[11px] sm:text-[12px] text-gold flex items-center gap-3 ${className}`}
    >
      <span className="inline-block h-[3px] w-[3px] rounded-full bg-gold" />
      {children}
    </div>
  );
}
