import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface MarginTrendsData {
  month: string;
  [key: string]: string | number;
}

interface MarginTrendsChartProps {
  data: MarginTrendsData[];
  products: string[];
  colors: string[];
}

const MarginTrendsChart = ({ data, products, colors }: MarginTrendsChartProps) => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#D4AF37" opacity={0.2} />
          <XAxis 
            dataKey="month" 
            stroke="#D4AF37"
            tick={{ fill: '#D4AF37' }}
          />
          <YAxis 
            stroke="#D4AF37"
            tick={{ fill: '#D4AF37' }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1A1A1A",
              border: "1px solid #D4AF37",
              borderRadius: "4px",
            }}
            labelStyle={{ color: "#D4AF37" }}
            formatter={(value: number) => [`${value}%`, "Contribution Margin"]}
          />
          <Legend 
            wrapperStyle={{ color: '#D4AF37' }}
          />
          {products.map((product, index) => (
            <Line
              key={product}
              type="monotone"
              dataKey={product}
              stroke={colors[index % colors.length]}
              strokeWidth={2}
              dot={{ fill: colors[index % colors.length] }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarginTrendsChart;