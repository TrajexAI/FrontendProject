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
    <div className={cn("h-[200px] w-full p-4", className)}>
      <h2 className="mb-4 text-xl font-semibold text-gold-light">Sales, Q3 and Q4 2024</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            stroke="#D4AF37"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            stroke="#D4AF37"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickFormatter={formatYAxis}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1A1A1A",
              border: "1px solid #D4AF37",
              borderRadius: "4px",
            }}
            labelStyle={{ color: "#D4AF37" }}
            formatter={(value: number) => [new Intl.NumberFormat('en-US').format(value), "Sales"]}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#D4AF37"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinancialChart;