import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CostData {
  category: string;
  fixed: number;
  variable: number;
}

interface CostAnalysisChartProps {
  costData: CostData[];
}

const CostAnalysisChart = ({ costData }: CostAnalysisChartProps) => {
  return (
    <div className="relative h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={costData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#D4AF37" opacity={0.2} />
          <XAxis 
            dataKey="category" 
            stroke="#D4AF37"
            tick={{ fill: '#D4AF37' }}
          />
          <YAxis 
            stroke="#D4AF37"
            tick={{ fill: '#D4AF37' }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #D4AF37',
              borderRadius: '4px',
            }}
            labelStyle={{ color: '#D4AF37' }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
          />
          <Legend 
            wrapperStyle={{ color: '#D4AF37' }}
          />
          <Bar dataKey="fixed" name="Fixed Costs" fill="#D4AF37" />
          <Bar dataKey="variable" name="Variable Costs" fill="#8B7355" />
        </BarChart>
      </ResponsiveContainer>
      <div className="absolute bottom-0 left-4 flex items-center gap-4">
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

export default CostAnalysisChart;