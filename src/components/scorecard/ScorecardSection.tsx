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

  const handleFlip = () => {
    if (id === 1) { // Only enable flip for January leader board
      setIsFlipped(!isFlipped);
    }
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
      <div 
        className={cn(
          "relative w-full h-full perspective-1000",
          id === 1 && "cursor-pointer"
        )}
        onClick={handleFlip}
      >
        <div 
          className={cn(
            "relative w-full h-full transition-transform duration-500",
            id === 1 && "transform-style-3d",
            isFlipped && "rotate-y-180"
          )}
        >
          {/* Front of the card */}
          <div 
            className={cn(
              "flex flex-col items-center justify-center p-8 h-full",
              id === 1 && "absolute w-full backface-hidden"
            )}
          >
            {id !== 1 && (
              <h2 className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4 w-full text-2xl font-bold">
                {title}
              </h2>
            )}
            <p className="text-gold-light/80 text-lg mb-6">{subtitle}</p>
            {showDonutChart ? <RevenueDonutChart /> : <ScorecardChart data={chartData} sectionId={id} />}
          </div>

          {/* Back of the card - Only render for January leader board */}
          {id === 1 && (
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-r from-obsidian-dark to-obsidian-light p-8">
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                <h3 className="text-2xl font-bold text-gold">Performance Analysis</h3>
                <div className="text-gold-light/80 space-y-4 text-left">
                  <p>• Revenue growth shows strong upward trend in Q1</p>
                  <p>• Customer acquisition rate exceeded targets by 15%</p>
                  <p>• Market share increased by 2.3% compared to previous quarter</p>
                  <p>• New product lines contributing 23% to total revenue</p>
                </div>
                <p className="text-gold-light/60 text-sm mt-4">Click to return to chart view</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};