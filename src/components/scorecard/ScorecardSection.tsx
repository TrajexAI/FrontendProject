import { cn } from "@/lib/utils";
import { ScorecardChart } from "./ScorecardChart";
import { RevenueDonutChart } from "./RevenueDonutChart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

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
  const renderDualLineChart = () => {
    if (showBigNumber) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px] text-gold">
          <Dialog>
            <DialogTrigger asChild>
              <div className="text-6xl font-bold cursor-pointer hover:opacity-90 transition-opacity">
                {chartData[0].value}{numberSuffix}
              </div>
            </DialogTrigger>
            <DialogContent className="bg-obsidian-dark border-gold/20">
              <button className="absolute right-4 top-4 text-gold hover:text-gold/80 transition-colors">
                <X className="h-4 w-4" />
              </button>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gold mb-4">Return Rate Analysis</h3>
                <p className="text-gold/80">
                  The current return rate of 3% shows a slight increase from last quarter's 2.9%. 
                  While this represents a marginal uptick, it remains within acceptable industry standards. 
                  Key factors contributing to returns include:
                </p>
                <ul className="list-disc list-inside text-gold/80 mt-4 space-y-2">
                  <li>Size fitting issues (40% of returns)</li>
                  <li>Style expectations (30% of returns)</li>
                  <li>Quality concerns (20% of returns)</li>
                  <li>Other reasons (10% of returns)</li>
                </ul>
              </div>
            </DialogContent>
          </Dialog>
          {subtitle && (
            <div className="text-gold/80 text-center text-sm max-w-md">
              From 1rst Oct. 2024 to today.<br />
              Last quarter: 2.9%
            </div>
          )}
        </div>
      );
    }

    if (id === 2) {
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
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
              stroke="#F97316"
              domain={[0, 100]}
              tick={{ fontSize: 10 }}
              label={{ value: 'Inventory (units)', angle: 90, position: 'insideRight', fill: '#F97316', fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1A1A1A', 
                border: '1px solid #B8860B',
                color: '#FFD700'
              }}
              formatter={(value: number, name: string) => {
                if (name === 'sales') {
                  return [`$${value.toLocaleString()}`, 'Sales'];
                }
                return [value, 'Inventory'];
              }}
              labelStyle={{ color: '#FFD700' }}
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
                  fill={entry.date === 'Jan' && entry.inventory < 20 ? '#ea384c' : '#F97316'}
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
        <div className="flex flex-col items-center justify-center h-full">
          {renderDualLineChart()}
        </div>
      </div>
    </div>
  );
};