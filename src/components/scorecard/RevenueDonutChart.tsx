import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from 'react';

const data = [
  { name: 'AW24 suede boots', value: 15000 },
  { name: 'accessories', value: 12000 },
  { name: 'Collab A', value: 8000 },
  { name: 'Collab GCC', value: 5000 },
];

const COLORS = ['#F97316', '#ea384c', '#DAA520', '#B8860B'];

export const RevenueDonutChart = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart onClick={() => setIsDialogOpen(true)} style={{ cursor: 'pointer', background: 'transparent' }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#D4AF37"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1A1A1A",
              border: "1px solid #D4AF37",
              borderRadius: "4px",
            }}
            labelStyle={{ color: "#FFFFFF" }}
            itemStyle={{ color: "#FFFFFF" }}
            formatter={(value: number) => [new Intl.NumberFormat('en-US').format(value), "Revenue"]}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span className="text-gold">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-obsidian-light border-gold/30 w-[90vw] max-w-[600px] h-auto min-h-[300px] max-h-[90vh] p-4 sm:p-8">
          <button 
            onClick={() => setIsDialogOpen(false)}
            className="absolute right-4 top-4 text-gold hover:text-gold-light transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="space-y-4 text-gold overflow-y-auto max-h-[calc(90vh-4rem)]">
            <h3 className="text-xl font-semibold">Revenue Breakdown Analysis</h3>
            <p>The AW24 suede boots collection remains our strongest performer, contributing 37.5% of total revenue. This is followed by our accessories line at 30%, showing strong market acceptance.</p>
            <p>Collaborations (Collab A and GCC) together make up 32.5% of revenue, indicating successful partnership strategies.</p>
            <p className="text-gold-light/80 italic">Click outside or use the X button to close this window.</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};