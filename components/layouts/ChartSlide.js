import Kicker from "@/components/Kicker";
import GroupedBarChart from "@/components/charts/GroupedBarChart";
import SingleBarChart from "@/components/charts/SingleBarChart";
import PortfolioSankey from "@/components/charts/PortfolioSankey";
import PageFrame from "@/components/PageFrame";

export default function ChartSlide({ slide }) {
  const { chartData } = slide;
  // Only the portfolio figure plate (slide 9) is a "set piece" that
  // carries the double-rule page-frame device — the data-dense bar
  // chart slides (27/28/40) stay clean and unframed on purpose.
  const isFigurePlate = chartData?.type === "sankey";

  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-6 px-10 sm:px-16 lg:px-24">
      {isFigurePlate && <PageFrame />}
      {slide.kicker && <Kicker>{slide.kicker}</Kicker>}
      {slide.headline && (
        <h2 className="max-w-4xl font-serif text-[27px] leading-tight text-ink sm:text-[33px] lg:text-[38px]">
          {slide.headline}
        </h2>
      )}

      <div className={chartData?.type === "sankey" ? "w-full max-w-6xl" : "max-w-5xl"}>
        {chartData?.type === "bar-grouped" && (
          <GroupedBarChart categories={chartData.categories} series={chartData.series} maxValue={chartData.maxValue || 100} />
        )}
        {chartData?.type === "bar-single" && (
          <SingleBarChart categories={chartData.categories} unit={chartData.unit || "%"} />
        )}
        {chartData?.type === "sankey" && <PortfolioSankey />}
      </div>

      {/* The sankey figure supplies its own figcaption, so skip the generic subtext line for it */}
      {slide.subtext && chartData?.type !== "sankey" && (
        <p className="max-w-2xl font-mono text-[12px] uppercase tracking-[0.1em] text-ink-muted sm:text-[13px]">
          {slide.subtext}
        </p>
      )}
    </div>
  );
}
