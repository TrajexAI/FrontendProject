
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
        <p className="text-sm text-white/60">Click arrow to view detailed analysis</p>
      </CardContent>
    </Card>
  );
};

export default ProductAnalysisCard;
