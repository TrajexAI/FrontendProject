import { useState } from "react";
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
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "w-full min-h-[300px] perspective-1000",
        isEven 
          ? "bg-gradient-to-r from-obsidian-dark to-obsidian-light" 
          : "bg-gradient-to-l from-obsidian-DEFAULT to-obsidian-dark"
      )}
    >
      <div
        className={cn(
          "relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of page */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-obsidian-light via-obsidian-DEFAULT to-obsidian-dark before:absolute before:inset-0 before:bg-obsidian-dark/95">
          <div className="relative z-10 flex flex-col items-center justify-center p-8 h-full text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4 w-full">
              {title}
            </h2>
            <p className="text-gold-light/80 text-lg mb-6">{subtitle}</p>
            {showDonutChart && <RevenueDonutChart />}
          </div>
        </div>

        {/* Back of page */}
        <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light before:absolute before:inset-0 before:bg-obsidian-dark/95">
          <div className="relative z-10 flex flex-col items-center justify-center p-8 h-full">
            <ScorecardChart data={chartData} sectionId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};