// Parses strings that use *word* markup (matching the deck-content spec's
// convention for italic accent words, e.g. "Turning the Page (Without *Losing* the Plot)")
// and renders the marked segments as italic, gold-tinted <em> spans.
export default function Emphasis({ text, emClassName = "" }) {
  if (!text) return null;
  const parts = String(text).split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          const inner = part.slice(1, -1);
          return (
            <em
              key={i}
              className={`italic text-gold ${emClassName}`}
              style={{ fontStyle: "italic", color: "#8A6D1E" }}
            >
              {inner}
            </em>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
