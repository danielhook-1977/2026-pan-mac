"use client";

import { useCallback, useEffect, useState } from "react";
import slides, { deckMeta } from "@/data/slides";
import Slide from "@/components/Slide";
import NavControls from "@/components/NavControls";
import ProgressBar from "@/components/ProgressBar";
import MenuOverlay from "@/components/MenuOverlay";
import NotesDrawer from "@/components/NotesDrawer";
import PageTexture from "@/components/PageTexture";
import GildedDefs from "@/components/motifs/GildedDefs";

const TOTAL = slides.length;

export default function Deck() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);

  const goTo = useCallback((i) => {
    setIndex(Math.min(Math.max(i, 0), TOTAL - 1));
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    function onKeyDown(e) {
      if (menuOpen) {
        if (e.key === "Escape") setMenuOpen(false);
        return;
      }
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prev();
          break;
        case "n":
        case "N":
          setNotesOpen((v) => !v);
          break;
        case "m":
        case "M":
          setMenuOpen((v) => !v);
          break;
        case "Escape":
          setNotesOpen(false);
          break;
        default:
          break;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, next, prev]);

  const slide = slides[index];
  const bg = slide.bg || "#F2E7CE";

  return (
    <div
      className="relative h-screen w-screen overflow-hidden transition-colors duration-250"
      style={{ backgroundColor: bg }}
      onClick={() => {
        if (!menuOpen) next();
      }}
    >
      <GildedDefs />
      <PageTexture />

      {/* Top-left: deck kicker */}
      <div className="fixed left-6 top-6 z-40 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted sm:left-10 sm:top-8">
        {deckMeta.title}
      </div>

      {/* Top-right: menu toggle */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((v) => !v);
        }}
        className="fixed right-8 top-6 z-40 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted transition hover:text-gold sm:right-12 sm:top-8"
      >
        {menuOpen ? "Close ✕" : "Menu ☰"}
      </button>

      {/* Slide content */}
      <div className="relative z-10 h-full w-full" style={{ perspective: "1600px" }}>
        <div key={slide.id} className="slide-enter relative h-full w-full">
          <Slide slide={slide} />
        </div>
      </div>

      <NavControls index={index} total={TOTAL} onPrev={prev} onNext={next} />
      <ProgressBar current={index} total={TOTAL} />

      {menuOpen && (
        <MenuOverlay
          slides={slides}
          current={index}
          onJump={(i) => {
            goTo(i);
            setMenuOpen(false);
          }}
          onClose={() => setMenuOpen(false)}
        />
      )}

      <NotesDrawer open={notesOpen} notes={slide.notes} index={index} total={TOTAL} />
    </div>
  );
}
