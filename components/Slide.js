import TitleSlide from "@/components/layouts/TitleSlide";
import SectionSlide from "@/components/layouts/SectionSlide";
import StatementSlide from "@/components/layouts/StatementSlide";
import QuoteSlide from "@/components/layouts/QuoteSlide";
import StatSlide from "@/components/layouts/StatSlide";
import ListSlide from "@/components/layouts/ListSlide";
import ChartSlide from "@/components/layouts/ChartSlide";
import ClosingSlide from "@/components/layouts/ClosingSlide";

const LAYOUTS = {
  title: TitleSlide,
  section: SectionSlide,
  statement: StatementSlide,
  quote: QuoteSlide,
  stat: StatSlide,
  list: ListSlide,
  chart: ChartSlide,
  closing: ClosingSlide,
};

export default function Slide({ slide }) {
  const Layout = LAYOUTS[slide.layout] || StatementSlide;
  return <Layout slide={slide} />;
}
