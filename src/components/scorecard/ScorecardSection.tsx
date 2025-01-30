import { cn } from "@/lib/utils";
import { ScorecardChart } from "./ScorecardChart";
import { RevenueDonutChart } from "./RevenueDonutChart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from 'react';

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const renderDualLineChart = () => {
    if (id === 2) {
      return (
        <div onClick={() => setIsDialogOpen(true)} style={{ cursor: 'pointer' }}>
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
        </div>
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
          {renderDualLineChart()}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-obsidian-light border-gold/30 w-[90vw] max-w-[600px] h-auto min-h-[300px] max-h-[90vh] p-4 sm:p-8">
          <button 
            onClick={() => setIsDialogOpen(false)}
            className="absolute right-4 top-4 text-gold hover:text-gold-light transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="space-y-4 text-gold overflow-y-auto max-h-[calc(90vh-4rem)]">
            <h3 className="text-xl font-semibold">Sales and Inventory Analysis</h3>
            <p>The graph shows a concerning trend in January where inventory levels have dropped below the critical threshold of 20 units (shown in red). This requires immediate attention to prevent stockouts.</p>
            <p>Sales have maintained a steady growth trajectory through Q4, with a notable peak in December at $80,000. However, the January dip in both sales and inventory suggests potential lost sales opportunities due to stock constraints.</p>
            <p>Recommended actions:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Expedite inventory replenishment for January</li>
              <li>Review supply chain bottlenecks</li>
              <li>Adjust reorder points based on Q4 sales velocity</li>
            </ul>
            <p className="text-gold-light/80 italic">Click outside or use the X button to close this window.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};