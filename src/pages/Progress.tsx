
import TopBanner from "@/components/TopBanner";
import ProfitCard from "@/components/dashboard/ProfitCard";
import ComparativePerformanceCard from "@/components/dashboard/ComparativePerformanceCard";
import ProductAnalysisCard from "@/components/dashboard/ProductAnalysisCard";
import SalesCard from "@/components/dashboard/SalesCard";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";

const ProgressScreen = () => {
  const productData = [
    { name: "Premium Boots", sales: 12000, margin: 3500 },
    { name: "Designer Bag", sales: 8000, margin: -1200 },
    { name: "Luxury Watch", sales: 15000, margin: 4200 },
    { name: "Fashion Scarf", sales: 3000, margin: -800 },
    { name: "Leather Wallet", sales: 5000, margin: 1500 },
  ];

  const profitDetails = {
    revenue: "£125,890",
    costs: "£80,212",
    grossProfit: "£45,678",
    profitMargin: "36.3%"
  };

  const centileHistory = [
    { month: 'Mar', salesCentile: 22, profitCentile: 48 },
    { month: 'Apr', salesCentile: 24, profitCentile: 49 },
    { month: 'May', salesCentile: 23, profitCentile: 47 },
    { month: 'Jun', salesCentile: 24, profitCentile: 48 },
    { month: 'Jul', salesCentile: 25, profitCentile: 49 },
    { month: 'Aug', salesCentile: 24, profitCentile: 48 },
    { month: 'Sep', salesCentile: 25, profitCentile: 49 },
    { month: 'Oct', salesCentile: 24, profitCentile: 50 },
    { month: 'Nov', salesCentile: 25, profitCentile: 50 },
    { month: 'Dec', salesCentile: 25, profitCentile: 50 },
    { month: 'Jan', salesCentile: 25, profitCentile: 50 },
    { month: 'Feb', salesCentile: 25, profitCentile: 50 },
  ];

  // Create bell curve data points with increased height
  const bellCurveData = Array.from({ length: 100 }, (_, i) => {
    const x = (i - 50) / 10;
    const y = Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI);
    return {
      x: i,
      y: y * 300,
      salesMarker: i === 35 ? y * 300 : 0,
      profitMarker: i === 42 ? y * 300 : 0,
    };
  });

  return (
    <div className="min-h-screen bg-black text-[#F97316]">
      <TopBanner />
      <div className="p-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <ProfitCard profitDetails={profitDetails} />
            <ComparativePerformanceCard 
              centileHistory={centileHistory}
              bellCurveData={bellCurveData}
            />
            <ProductAnalysisCard productData={productData} />
            <SalesCard />
            <Card className="bg-black border border-[#F97316]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-[#F97316]">Cost Analysis</CardTitle>
              </CardHeader>
              <div className="flex items-center justify-center py-4">
                <CircularProgress 
                  value={70}
                  currentValue="70%"
                  targetValue="Variable Costs"
                  label="30% Fixed Costs"
                  size={180}
                  strokeWidth={12}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressScreen;
