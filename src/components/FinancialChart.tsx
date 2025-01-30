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
    { date: "Jul", value: 34900 },
    { date: "Aug", value: 42000 },
    { date: "Sep", value: 38500 },
    { date: "Oct", value: 45780 },
    { date: "Nov", value: 51890 },
    { date: "Dec", value: 55390 },
    { date: "Jan", value: 58490 },
  ];

  return (
    <div className={cn("h-[200px] w-full p-4", className)}>
      <h2 className="mb-4 text-xl font-semibold text-gold-light">Sales overview, last two quarters</h2>
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
            domain={[15000, 60000]}
            tickFormatter={(value) => `${value} SAR`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1A1A1A",
              border: "1px solid #D4AF37",
              borderRadius: "4px",
            }}
            labelStyle={{ color: "#D4AF37" }}
            formatter={(value: number) => [`${value} SAR`, "Value"]}
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