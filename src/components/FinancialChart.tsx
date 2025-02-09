
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";

interface FinancialChartProps {
  data: Array<{
    date: string;
    value: number;
  }>;
  className?: string;
}

const FinancialChart = ({ data, className }: FinancialChartProps) => {
  const chartData = [
    { date: "Jul", value: 15_000 },
    { date: "Aug", value: 30_000 },
    { date: "Sep", value: 45_000 },
    { date: "Oct", value: 20_000 },
    { date: "Nov", value: 45_000 },
    { date: "Dec", value: 60_000 },
    { date: "Jan", value: 30_000 },
  ];

  const formatYAxis = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className={cn("w-full p-4", className)}>
      <h2 className="mb-4 text-xl font-semibold text-white">Sales, Q3 and Q4 2024</h2>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B8860B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#B8860B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              stroke="#B8860B"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#F97316" }}
            />
            <YAxis
              stroke="#B8860B"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#F97316" }}
              tickFormatter={formatYAxis}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1A1A1A",
                border: "1px solid #B8860B",
                borderRadius: "4px",
              }}
              labelStyle={{ color: "#F97316" }}
              formatter={(value: number) => [new Intl.NumberFormat('en-US').format(value), "Sales"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#B8860B"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center gap-4">
        <img 
          src="/lovable-uploads/c3fb9e39-1d26-4891-b9bf-c9c1a1b22da2.png" 
          alt="Wafeq Logo" 
          className="h-6 object-contain"
        />
        <img 
          src="/lovable-uploads/9145ccdc-a9c3-483f-bf74-3a38371b42a0.png" 
          alt="QOYOD Logo" 
          className="h-6 object-contain"
        />
      </div>
    </div>
  );
};

export default FinancialChart;
