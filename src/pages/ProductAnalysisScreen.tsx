
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip, ZAxis, CartesianGrid } from "recharts";
import TopBanner from "@/components/TopBanner";

interface ProductDataType {
  name: string;
  sales: number;
  margin: number;
}

interface ProductAnalysisScreenProps {
  productData?: ProductDataType[];
}

const ProductAnalysisScreen = ({ productData }: ProductAnalysisScreenProps) => {
  const navigate = useNavigate();
  const defaultData = [
    { name: "Product A", sales: 2000, margin: -800 },
    { name: "Product B", sales: 15000, margin: 1500 },
    { name: "Product C", sales: 35000, margin: -1200 },
    { name: "Product D", sales: 55000, margin: 3500 },
    { name: "Product E", sales: 85000, margin: 4200 },
  ];

  const data = productData || defaultData;

  // Transform data for scatter plot
  const scatterData = data.map((item) => ({
    x: item.sales,
    y: item.margin,
    z: item.sales,
    name: item.name,
    fill: item.margin < 0 ? '#ea384c' : '#1EAEDB'
  }));

  return (
    <div className="min-h-screen bg-black">
      <TopBanner />
      <div className="p-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate('/scorecard')}
              className="text-[#F97316] hover:text-[#F97316]/80 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-[#F97316] text-lg ml-4">Product Profitability</h1>
          </div>
          <div className="w-full h-[300px] bg-black border border-[#F97316]/20 rounded-lg p-4">
            <div className="text-white text-sm mb-4">Product profitability vs Sales</div>
            <ResponsiveContainer width="100%" height="90%">
              <ScatterChart
                margin={{ top: 30, right: 20, bottom: 30, left: 20 }}
              >
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
                    fontSize: '12px'
                  }}
                  itemStyle={{
                    color: '#FFFFFF'
                  }}
                  formatter={(value: any, name: string, props: any) => {
                    if (name === 'profit margin') {
                      return [`£${props.payload.y.toLocaleString()}`, 'Profit Margin'];
                    }
                    if (name === 'sales') {
                      return [`£${props.payload.z.toLocaleString()}`, 'Sales Volume'];
                    }
                    return [value, name];
                  }}
                  labelFormatter={(value, entries) => entries[0]?.payload.name || ''}
                />
                <Scatter 
                  data={scatterData} 
                  fill="#1EAEDB"
                  fillOpacity={0.6}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalysisScreen;
