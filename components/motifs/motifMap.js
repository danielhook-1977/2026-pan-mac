import FlyingBird from "@/components/motifs/FlyingBird";
import ChainBreak from "@/components/motifs/ChainBreak";
import RadiatingFigure from "@/components/motifs/RadiatingFigure";
import OpenBookRay from "@/components/motifs/OpenBookRay";
import Scaffold from "@/components/motifs/Scaffold";
import Quill from "@/components/motifs/Quill";
import BookmarkMotif from "@/components/motifs/BookmarkMotif";
import PrintingPress from "@/components/motifs/PrintingPress";
import TangledLines from "@/components/motifs/TangledLines";

// Maps slide id -> small accent spot-illustration. Deliberately sparse —
// only the most thematically rich statement/quote/closing slides get
// one, so the deck stays restrained rather than over-decorated. This is
// presentation-layer only; it does not touch data/slides.js content.
export const motifMap = {
  5: { Component: FlyingBird, size: 110, position: "bottom-right", opacity: 0.85 },
  6: { Component: ChainBreak, size: 120, position: "bottom-right", opacity: 0.85 },
  7: { Component: RadiatingFigure, size: 120, position: "bottom-right", opacity: 0.85 },
  13: { Component: OpenBookRay, size: 130, position: "bottom-right", opacity: 0.85 },
  20: { Component: TangledLines, size: 130, position: "bottom-right", opacity: 0.7 },
  35: { Component: Scaffold, size: 110, position: "bottom-right", opacity: 0.85 },
  44: { Component: PrintingPress, size: 116, position: "bottom-right", opacity: 0.8 },
  45: { Component: Quill, size: 118, position: "bottom-right", opacity: 0.9 },
  46: { Component: BookmarkMotif, size: 128, position: "bottom-center", opacity: 0.8 },
};

export default motifMap;
