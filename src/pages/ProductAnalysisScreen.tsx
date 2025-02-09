
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
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
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis 
                  dataKey="name" 
                  tick={{ fill: '#FFFFFF' }}
                  axisLine={{ stroke: '#F97316' }}
                />
                <YAxis 
                  tick={{ fill: '#FFFFFF' }}
                  axisLine={{ stroke: '#F97316' }}
                  tickFormatter={(value) => `£${value.toLocaleString()}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#000',
                    border: '1px solid #F97316',
                    borderRadius: '4px',
                  }}
                  formatter={(value: number) => [`£${value.toLocaleString()}`, '']}
                />
                <Bar dataKey="sales" name="Sales" fill="#F97316" />
                <Bar dataKey="margin" name="Profit Margin" fill="#1EAEDB" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalysisScreen;
