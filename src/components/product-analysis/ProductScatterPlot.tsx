
import { useNavigate } from "react-router-dom";
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip, ZAxis, CartesianGrid } from "recharts";
import { Star } from "lucide-react";

interface ProductDataPoint {
  x: number;
  y: number;
  z: number;
  name: string;
  fill: string;
  isHighlight?: boolean;
  opacity?: number;
  shape?: (props: any) => JSX.Element;
}

interface ProductScatterPlotProps {
  scatterData: ProductDataPoint[];
  starHighlight: ProductDataPoint[];
}

const ProductScatterPlot = ({ scatterData, starHighlight }: ProductScatterPlotProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 30, right: 20, bottom: 30, left: 20 }}>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#FFFFFF" 
            strokeOpacity={0.2}
            horizontal={true}
            vertical={true}
          />
          <XAxis 
            type="number" 
            dataKey="x" 
            name="sales" 
            axisLine={{ stroke: '#F97316' }}
            tick={{ fill: '#FFFFFF' }}
            label={{ value: 'Sales (£)', position: 'bottom', fill: '#FFFFFF' }}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="profit margin"
            axisLine={{ stroke: '#F97316' }}
            tick={{ fill: '#FFFFFF' }}
            label={{ value: 'Profit Margin (£)', angle: -90, position: 'left', fill: '#FFFFFF' }}
          />
          <ZAxis 
            type="number" 
            dataKey="z" 
            range={[40, 300]} 
            name="sales"
          />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{
              backgroundColor: '#000',
              border: '1px solid #F97316',
              borderRadius: '4px',
              fontSize: '12px',
              padding: '8px'
            }}
            itemStyle={{
              color: '#FFFFFF'
            }}
            formatter={(value: any, name: string, props: any) => {
              const item = props.payload;
              return [
                `${item.name}\nSales: £${item.x.toLocaleString()}\nProfit Margin: £${item.y.toLocaleString()}`,
                ''
              ];
            }}
            labelFormatter={() => ''}
          />
          {/* Regular product scatter points */}
          <Scatter 
            data={scatterData} 
            fillOpacity={0.8}
          />
          {/* Star highlight for negative margin products */}
          <Scatter 
            data={starHighlight}
            shape="star"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductScatterPlot;
