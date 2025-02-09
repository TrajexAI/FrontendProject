
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ReferenceLine } from 'recharts';

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
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#F97316" opacity={0.2} />
        <XAxis 
          dataKey="units"
          stroke="#F97316"
          tick={{ fill: '#F97316' }}
        >
          <Label value="Units Sold" position="bottom" fill="#F97316" />
        </XAxis>
        <YAxis 
          stroke="#F97316"
          tick={{ fill: '#F97316' }}
          tickFormatter={(value) => `£${value.toLocaleString()}`}
        >
          <Label value="Revenue & Costs (£)" angle={-90} position="left" fill="#F97316" />
        </YAxis>
        <Tooltip
          contentStyle={{
            backgroundColor: '#000',
            border: '1px solid #F97316',
            borderRadius: '4px',
          }}
          formatter={(value: number) => [`£${value.toLocaleString()}`, '']}
          labelFormatter={(label) => `${productName} - ${label} units`}
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#F97316" 
          name="Total Revenue"
          strokeWidth={2}
        />
        <Line 
          type="monotone" 
          dataKey="totalCosts" 
          stroke="#FEC6A1" 
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
    </div>
  );
};

export default BreakevenChart;
