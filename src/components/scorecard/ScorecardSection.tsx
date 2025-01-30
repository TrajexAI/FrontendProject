import { cn } from "@/lib/utils";
import { ScorecardChart } from "./ScorecardChart";
import { RevenueDonutChart } from "./RevenueDonutChart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ScorecardSectionProps {
  id: number;
  title: string;
  subtitle: string;
  chartData: Array<any>;
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
  const renderDualLineChart = () => {
    if (id === 2) {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" stroke="#B8860B" />
            <YAxis stroke="#B8860B" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1A1A1A', 
                border: '1px solid #B8860B',
                color: '#B8860B'
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#DAA520" 
              strokeWidth={2}
              dot={{ fill: '#DAA520' }}
            />
            <Line 
              type="monotone" 
              dataKey="inventory" 
              stroke="#CD853F" 
              strokeWidth={2}
              dot={{ fill: '#CD853F' }}
            />
          </LineChart>
        </ResponsiveContainer>
      );
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
        <div className="flex flex-col items-center justify-center p-8 h-full">
          {id !== 1 && (
            <h2 className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4 w-full text-2xl font-bold">
              {title}
            </h2>
          )}
          <p className="text-gold-light/80 text-lg mb-6">{subtitle}</p>
          {renderDualLineChart()}
        </div>
      </div>
    </div>
  );
};