
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip, ZAxis, CartesianGrid } from "recharts";
import TopBanner from "@/components/TopBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BreakevenChart from "@/components/charts/BreakevenChart";

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

  // Transform data for scatter plot with brighter colors
  const scatterData = data.map((item) => ({
    x: item.sales,
    y: item.margin,
    z: item.sales,
    name: item.name,
    fill: item.margin < 0 ? '#D946EF' : '#0EA5E9'  // Brighter magenta for negative, bright blue for positive
  }));

  // Create data for highlight circle around negative margin products with increased visibility
  const negativeProducts = data.filter(item => item.margin < 0);
  const highlightCircle = negativeProducts.length > 0 ? [{
    x: (negativeProducts[0].sales + negativeProducts[1].sales) / 2,
    y: (negativeProducts[0].margin + negativeProducts[1].margin) / 2,
    z: Math.max(...negativeProducts.map(p => p.sales)) * 4, // Increased size
    isHighlight: true,
    fill: '#D946EF',
    opacity: 0.4  // Increased opacity
  }] : [];

  return (
    <div className="min-h-screen bg-black">
      <TopBanner />
      <div className="p-2 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-4">
            <button
              onClick={() => navigate('/scorecard')}
              className="text-[#F97316] hover:text-[#F97316]/80 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-[#F97316] text-lg ml-4">Product Profitability</h1>
          </div>
          
          <div className="grid gap-4">
            <Card className="bg-black border border-[#F97316]/20">
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-[#F97316] text-lg">Product Overview</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
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
                          fontSize: '12px'
                        }}
                        itemStyle={{
                          color: '#FFFFFF'
                        }}
                        formatter={(value: any, name: string, props: any) => {
                          if (props.payload.isHighlight) {
                            return ["Product A and C need attention. Analyse variable costs as these products are negatively impacting your profit.", ""];
                          }
                          if (name === 'profit margin') {
                            return [`£${props.payload.y.toLocaleString()}`, 'Profit Margin'];
                          }
                          if (name === 'sales') {
                            return [`£${props.payload.x.toLocaleString()}`, 'Sales'];
                          }
                          return [value, name];
                        }}
                        labelFormatter={(value, entries) => {
                          if (entries[0]?.payload.isHighlight) return "";
                          return entries[0]?.payload.name || '';
                        }}
                      />
                      {/* Highlight circle for negative margin products */}
                      <Scatter 
                        data={highlightCircle}
                        fill="#D946EF"
                        fillOpacity={0.4}
                      />
                      {/* Regular product scatter points */}
                      <Scatter 
                        data={scatterData} 
                        fillOpacity={0.8}
                      />
                    </ScatterChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-[#F97316]/20">
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-[#F97316] text-lg">Product A Breakeven Analysis</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <BreakevenChart
                  fixedCosts={80000}
                  variableCostPerUnit={200}
                  pricePerUnit={500}
                  maxUnits={500}
                  productName="Product A"
                />
              </CardContent>
            </Card>

            <Card className="bg-black border border-[#F97316]/20">
              <CardHeader className="p-4 pb-0">
                <CardTitle className="text-[#F97316] text-lg">Product C Breakeven Analysis</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <BreakevenChart
                  fixedCosts={120000}
                  variableCostPerUnit={1500}
                  pricePerUnit={3000}
                  maxUnits={300}
                  productName="Product C"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAnalysisScreen;
