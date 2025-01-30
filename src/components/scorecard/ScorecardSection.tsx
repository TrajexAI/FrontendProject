import { cn } from "@/lib/utils";
import { ScorecardChart } from "./ScorecardChart";
import { RevenueDonutChart } from "./RevenueDonutChart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface ScorecardSectionProps {
  id: number;
  title: string;
  chartData: Array<any>;
  isEven: boolean;
  showDonutChart?: boolean;
}

export const ScorecardSection = ({
  id,
  title,
  chartData,
  isEven,
  showDonutChart = false,
}: ScorecardSectionProps) => {
  const renderDualLineChart = () => {
    if (id === 2) {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis 
              dataKey="date" 
              stroke="#B8860B" 
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              yAxisId="left"
              orientation="left"
              stroke="#DAA520"
              domain={[0, 90000]}
              tick={{ fontSize: 10 }}
              label={{ value: 'Sales ($)', angle: -90, position: 'insideLeft', fill: '#DAA520', fontSize: 10 }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="#CD853F"
              domain={[0, 100]}
              tick={{ fontSize: 10 }}
              label={{ value: 'Inventory (units)', angle: 90, position: 'insideRight', fill: '#CD853F', fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1A1A1A', 
                border: '1px solid #B8860B',
                color: '#B8860B'
              }}
              formatter={(value: number, name: string) => {
                if (name === 'sales') {
                  return [`$${value.toLocaleString()}`, 'Sales'];
                }
                return [value, 'Inventory'];
              }}
            />
            <Bar 
              yAxisId="left"
              dataKey="sales" 
              fill="#DAA520" 
              name="sales"
            />
            <Bar 
              yAxisId="right"
              dataKey="inventory" 
              name="inventory"
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={entry.date === 'Jan' && entry.inventory < 20 ? '#FF0000' : '#CD853F'}
                />
              ))}
            </Bar>
          </BarChart>
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
        <div className="flex flex-col items-center justify-center p-4 h-full">
          {id !== 1 && (
            <h2 className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4 w-full text-2xl font-bold">
              {title}
            </h2>
          )}
          {renderDualLineChart()}
        </div>
      </div>
    </div>
  );
};