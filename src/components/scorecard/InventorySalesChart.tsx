import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface InventorySalesChartProps {
  data: Array<{
    date: string;
    sales: number;
    inventory: number;
  }>;
}

export const InventorySalesChart = ({ data }: InventorySalesChartProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full h-[300px] cursor-pointer hover:opacity-90 transition-opacity">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
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
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.date === 'Jan' && entry.inventory < 20 ? '#ea384c' : '#F97316'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-obsidian-dark border-gold/20">
        <button className="absolute right-4 top-4 text-gold hover:text-gold/80 transition-colors">
          <X className="h-4 w-4" />
        </button>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gold mb-4">Inventory vs. Sales Analysis</h3>
          <p className="text-gold/80">
            The current inventory levels show a concerning trend, particularly in January where stock has dropped below 20 units. 
            This represents a critical inventory shortage that requires immediate attention. Key observations include:
          </p>
          <ul className="list-disc list-inside text-gold/80 mt-4 space-y-2">
            <li>Critical inventory shortage in January (below 20 units)</li>
            <li>Strong sales performance despite low inventory</li>
            <li>Potential lost sales opportunities due to stock limitations</li>
            <li>Urgent need for inventory replenishment</li>
          </ul>
          <p className="text-gold/80 mt-4">
            Recommended actions: Expedite restocking process and review inventory management strategies to prevent future shortages.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};