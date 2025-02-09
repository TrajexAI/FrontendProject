
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip, ZAxis } from "recharts";
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
    { name: "Premium Boots", sales: 12000, margin: 3500 },
    { name: "Designer Bag", sales: 8000, margin: -1200 },
    { name: "Luxury Watch", sales: 15000, margin: 4200 },
    { name: "Fashion Scarf", sales: 3000, margin: -800 },
    { name: "Leather Wallet", sales: 5000, margin: 1500 },
  ];

  const data = productData || defaultData;

  // Transform data for scatter plot
  const scatterData = data.map((item, index) => ({
    x: index + 1, // x position for spacing
    y: item.margin, // y position based on margin
    z: item.sales, // bubble size based on sales
    name: item.name,
  }));

  return (
    <div className="min-h-screen bg-black">
      <TopBanner />
      <div className="p-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="text-[#F97316] hover:text-[#F97316]/80 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-[#F97316] text-xl ml-4">Product Performance</h1>
          </div>
          <div className="h-[600px] bg-black border border-[#F97316]/20 rounded-lg p-6">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 60 }}
              >
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="category" 
                  tick={false}
                  axisLine={{ stroke: '#F97316' }}
                  domain={[0, 6]}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="profit margin"
                  tick={{ fill: '#FFFFFF' }}
                  axisLine={{ stroke: '#F97316' }}
                  tickFormatter={(value) => `£${value.toLocaleString()}`}
                />
                <ZAxis 
                  type="number" 
                  dataKey="z" 
                  range={[50, 400]} 
                  name="sales"
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid #F97316',
                    borderRadius: '4px',
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
                  fill="#F97316"
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
