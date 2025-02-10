
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductScatterPlot from "../product-analysis/ProductScatterPlot";

interface ProductDataType {
  name: string;
  sales: number;
  margin: number;
}

interface ProductAnalysisProps {
  productData: ProductDataType[];
}

const ProductAnalysisCard = ({ productData }: ProductAnalysisProps) => {
  const navigate = useNavigate();
  
  // Sample data for the scatter plot
  const scatterData = [
    { x: 50000, y: 25000, z: 100, name: "Product A", fill: "#1EAEDB" },
    { x: 75000, y: 35000, z: 150, name: "Product B", fill: "#1EAEDB" },
    { x: 25000, y: -5000, z: 80, name: "Product C", fill: "#1EAEDB" },
    { x: 100000, y: 45000, z: 200, name: "Product D", fill: "#1EAEDB" },
  ];

  const starHighlight = [
    { x: 25000, y: -5000, z: 80, name: "Product C", fill: "#FF0000" },
  ];

  return (
    <Card className="bg-black border border-[#F97316]/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <CardTitle className="text-lg font-medium text-[#F97316]">Product Profitability</CardTitle>
          <TriangleAlert className="h-5 w-5 text-[#F97316]" />
        </div>
        <ArrowRight 
          className="h-4 w-4 text-[#F97316] cursor-pointer" 
          onClick={() => navigate('/product-analysis')}
        />
      </CardHeader>
      <CardContent>
        <div className="w-full h-[300px]">
          <ProductScatterPlot 
            scatterData={scatterData} 
            starHighlight={starHighlight}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductAnalysisCard;
