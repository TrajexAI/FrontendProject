import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'AW24 suede boots', value: 15000 },
  { name: 'accessories', value: 12000 },
  { name: 'Collab A', value: 8000 },
  { name: 'Collab GCC', value: 5000 },
];

const COLORS = ['#FFD700', '#D4AF37', '#996515', '#B8860B'];

export const RevenueDonutChart = () => {
  return (
    <div className="h-[180px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
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
    </div>
  );
};