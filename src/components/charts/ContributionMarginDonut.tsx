import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface ContributionMarginData {
  name: string;
  value: number;
}

interface ContributionMarginDonutProps {
  data: ContributionMarginData[];
  colors: string[];
}

const ContributionMarginDonut = ({ data, colors }: ContributionMarginDonutProps) => {
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
          <Tooltip
            contentStyle={{
              backgroundColor: "#1A1A1A",
              border: "1px solid #D4AF37",
              borderRadius: "4px",
            }}
            labelStyle={{ color: "#FFFFFF" }}
            formatter={(value: number) => [`${value}%`, "Contribution Margin"]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ContributionMarginDonut;