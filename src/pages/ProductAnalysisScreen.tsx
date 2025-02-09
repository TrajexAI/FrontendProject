
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
    { name: "Fashion Scarf", sales: 2000, margin: -800 },
    { name: "Leather Wallet", sales: 15000, margin: 1500 },
    { name: "Designer Bag", sales: 35000, margin: -1200 },
    { name: "Premium Boots", sales: 55000, margin: 3500 },
    { name: "Luxury Watch", sales: 85000, margin: 4200 },
  ];

  const data = productData || defaultData;

  // Transform data for scatter plot
  const scatterData = data.map((item, index) => ({
    x: index + 1,
    y: item.margin,
    z: item.sales,
    name: item.name,
  }));

  return (
    <div className="min-h-screen bg-black">
      <TopBanner />
      <div className="p-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="text-[#F97316] hover:text-[#F97316]/80 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-[#F97316] text-lg ml-4">Product Performance</h1>
          </div>
          <div className="w-full h-[300px] bg-black border border-[#F97316]/20 rounded-lg p-4">
            <div className="text-[#F97316] text-sm mb-4">Product profitability vs Sales</div>
            <ResponsiveContainer width="100%" height="90%">
              <ScatterChart
                margin={{ top: 30, right: 30, bottom: 30, left: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#FFFFFF" strokeOpacity={0.2} />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="category" 
                  tick={false}
                  axisLine={{ stroke: '#F97316' }}
                  domain={[0, 6]}
                  fontSize={11}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="profit margin"
                  tick={false}
                  axisLine={{ stroke: '#F97316' }}
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
