import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ScorecardChartProps {
  data: Array<{ date: string; value: number }>;
  sectionId: number;
}

export const ScorecardChart = ({ data, sectionId }: ScorecardChartProps) => {
  const formatYAxis = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id={`colorValue-${sectionId}`} x1="0" y1="0" x2="0" y2="1">
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
            formatter={(value: number) => [new Intl.NumberFormat('en-US').format(value), "Value"]}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#D4AF37"
            fillOpacity={1}
            fill={`url(#colorValue-${sectionId})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};