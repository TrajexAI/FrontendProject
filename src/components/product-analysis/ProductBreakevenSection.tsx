
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BreakevenChart from "@/components/charts/BreakevenChart";

const ProductBreakevenSection = () => {
  return (
    <>
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
    </>
  );
};

export default ProductBreakevenSection;
