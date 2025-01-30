import { cn } from "@/lib/utils";
import { ScorecardChart } from "./ScorecardChart";
import { RevenueDonutChart } from "./RevenueDonutChart";

interface ScorecardSectionProps {
  id: number;
  title: string;
  subtitle: string;
  chartData: Array<{ date: string; value: number }>;
  isEven: boolean;
  showDonutChart?: boolean;
}

export const ScorecardSection = ({
  id,
  title,
  subtitle,
  chartData,
  isEven,
  showDonutChart = false,
}: ScorecardSectionProps) => {
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
        <div className="flex flex-col items-center justify-center p-8 h-full">
          <h2 className={cn(
            "bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4 w-full",
            id === 1 ? "text-sm" : "text-2xl font-bold"
          )}>
            {title}
          </h2>
          <p className="text-gold-light/80 text-lg mb-6">{subtitle}</p>
          {showDonutChart ? <RevenueDonutChart /> : <ScorecardChart data={chartData} sectionId={id} />}
        </div>
      </div>
    </div>
  );
};