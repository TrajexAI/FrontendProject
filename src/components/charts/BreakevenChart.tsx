
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ReferenceLine, ResponsiveContainer } from 'recharts';

interface BreakevenChartProps {
  fixedCosts: number;
  variableCostPerUnit: number;
  pricePerUnit: number;
  maxUnits: number;
  productName: string;
}

const BreakevenChart = ({ 
  fixedCosts, 
  variableCostPerUnit, 
  pricePerUnit, 
  maxUnits,
  productName
}: BreakevenChartProps) => {
  // Calculate break-even point in units
  const breakevenUnits = fixedCosts / (pricePerUnit - variableCostPerUnit);
  
  // Generate data points
  const data = Array.from({ length: maxUnits / 50 + 1 }, (_, i) => {
    const units = i * 50;
    const revenue = units * pricePerUnit;
    const totalCosts = fixedCosts + (units * variableCostPerUnit);
    return {
      units,
      revenue,
      totalCosts,
    };
  });

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF" opacity={0.2} />
          <XAxis 
            dataKey="units"
            stroke="#FFFFFF"
            tick={{ fill: '#FFFFFF' }}
          >
            <Label value="Units Sold" position="bottom" fill="#FFFFFF" />
          </XAxis>
          <YAxis 
            stroke="#FFFFFF"
            tick={{ fill: '#FFFFFF' }}
            tickFormatter={(value) => `£${value.toLocaleString()}`}
          >
            <Label 
              value="Revenue & Costs (£)" 
              angle={-90} 
              position="insideLeft" 
              fill="#FFFFFF"
              style={{ textAnchor: 'middle' }}
              offset={0}
            />
          </YAxis>
          <Tooltip
            contentStyle={{
              backgroundColor: '#000',
              border: '1px solid #FFFFFF',
              borderRadius: '4px',
            }}
            formatter={(value: number) => [`£${value.toLocaleString()}`, '']}
            labelFormatter={(label) => `${productName} - ${label} units`}
          />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#1EAEDB" 
            name="Total Revenue"
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="totalCosts" 
            stroke="#FFFFFF" 
            name="Total Costs"
            strokeWidth={2}
          />
          <ReferenceLine
            x={breakevenUnits}
            stroke="#ea384c"
            strokeDasharray="3 3"
            label={{
              value: 'Break-even',
              fill: '#ea384c',
              position: 'top'
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BreakevenChart;
