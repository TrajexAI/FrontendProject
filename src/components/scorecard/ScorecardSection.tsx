import { cn } from "@/lib/utils";
import { ScorecardChart } from "./ScorecardChart";
import { RevenueDonutChart } from "./RevenueDonutChart";
import { BigNumberDisplay } from "./BigNumberDisplay";
import { InventorySalesChart } from "./InventorySalesChart";

interface ScorecardSectionProps {
  id: number;
  title: string;
  subtitle?: string;
  chartData: Array<any>;
  isEven: boolean;
  showDonutChart?: boolean;
  showBigNumber?: boolean;
  numberSuffix?: string;
}

export const ScorecardSection = ({
  id,
  title,
  subtitle,
  chartData,
  isEven,
  showDonutChart = false,
  showBigNumber = false,
  numberSuffix = "",
}: ScorecardSectionProps) => {
  const renderChart = () => {
    if (showBigNumber) {
      return (
        <BigNumberDisplay 
          value={chartData[0].value}
          suffix={numberSuffix}
          subtitle={subtitle}
        />
      );
    }

    if (id === 2) {
      return <InventorySalesChart data={chartData} />;
    }

    return showDonutChart ? <RevenueDonutChart /> : <ScorecardChart data={chartData} sectionId={id} />;
  };

  return (
    <div 
      className={cn(
        "w-full min-h-[300px]",
        isEven 
          ? "bg-gradient-to-r from-obsidian-dark to-obsidian-light" 
          : "bg-gradient-to-l from-obsidian-DEFAULT to-obsidian-dark"
      )}
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col items-center justify-center h-full">
          {renderChart()}
        </div>
      </div>
    </div>
  );
};