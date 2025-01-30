import { cn } from "@/lib/utils";
import { ScorecardChart } from "./ScorecardChart";
import { RevenueDonutChart } from "./RevenueDonutChart";
import { useState } from "react";

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

  const handleClick = () => {
    if (id === 1) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className={cn(
        "w-full min-h-[300px] cursor-pointer perspective-1000",
        isEven 
          ? "bg-gradient-to-r from-obsidian-dark to-obsidian-light" 
          : "bg-gradient-to-l from-obsidian-DEFAULT to-obsidian-dark"
      )}
      onClick={handleClick}
      style={{ perspective: "1000px" }}
    >
      <div 
        className={cn(
          "relative w-full h-full transition-transform duration-500",
          "transform-style-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Front side */}
        <div 
          className={cn(
            "absolute w-full h-full backface-hidden",
            "transform-style-3d"
          )}
        >
          <div className="flex flex-col items-center justify-center p-8 h-full">
            {id !== 1 && (
              <h2 className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4 w-full text-2xl font-bold">
                {title}
              </h2>
            )}
            <p className="text-gold-light/80 text-lg mb-6">{subtitle}</p>
            {showDonutChart ? <RevenueDonutChart /> : <ScorecardChart data={chartData} sectionId={id} />}
          </div>
        </div>

        {/* Back side */}
        {id === 1 && (
          <div 
            className={cn(
              "absolute w-full h-full backface-hidden rotate-y-180",
              "bg-gradient-to-r from-obsidian-dark to-obsidian-light",
              "p-8 flex flex-col justify-center items-center"
            )}
          >
            <h3 className="text-2xl font-bold text-gold mb-4">Performance Analysis</h3>
            <p className="text-gold-light/80 text-lg text-center leading-relaxed">
              The AW24 suede boots collection leads our revenue generation, 
              demonstrating strong market acceptance and positioning. Accessories 
              maintain steady performance, while both collaborations show promising 
              growth trajectories. Strategic focus on these key segments continues 
              to drive our overall business success.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};