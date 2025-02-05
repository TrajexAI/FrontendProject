
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface ContributionMarginData {
  name: string;
  value: number;
  opportunities: string;
}

interface ContributionMarginDonutProps {
  data: ContributionMarginData[];
  colors: string[];
}

const ContributionMarginDonut = ({ data, colors }: ContributionMarginDonutProps) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-obsidian-dark text-gold shadow-lg p-4 border border-gold/30 rounded-md">
          <p className="text-gold font-semibold">{item.name}</p>
          <p className="text-gold/90">{item.value}% Contribution Margin</p>
          <div className="mt-2 text-sm text-gold/90">
            <p>Optimization Opportunity:</p>
            <p>{item.opportunities}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#D4AF37"
            paddingAngle={5}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContributionMarginDonut;
