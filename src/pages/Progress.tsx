
import TopBanner from "@/components/TopBanner";
import ProfitCard from "@/components/dashboard/ProfitCard";
import ComparativePerformanceCard from "@/components/dashboard/ComparativePerformanceCard";
import ProductAnalysisCard from "@/components/dashboard/ProductAnalysisCard";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

const ProgressScreen = () => {
  const [showCostDialog, setShowCostDialog] = useState(false);
  
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
            <Card className="bg-black border border-[#F97316]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-[#F97316]">Cost Analysis</CardTitle>
                <ArrowRight 
                  className="h-4 w-4 text-[#F97316] cursor-pointer hover:text-[#F97316]/80 transition-colors"
                  onClick={() => setShowCostDialog(true)}
                />
              </CardHeader>
              <div className="flex items-center justify-center py-4">
                <CircularProgress 
                  value={70}
                  currentValue="70%"
                  targetValue="Variable Costs"
                  label="30% Fixed Costs"
                  size={126}
                  strokeWidth={12}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={showCostDialog} onOpenChange={setShowCostDialog}>
        <DialogContent className="bg-black border-[#F97316]/20 text-white w-[90%] max-w-lg">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-white">Understanding Costs</DialogTitle>
            <X 
              className="h-4 w-4 cursor-pointer hover:text-white/80" 
              onClick={() => setShowCostDialog(false)}
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-white">Variable Costs (70%)</h3>
              <p className="text-white/80">These costs change in proportion to your business activity. Examples include raw materials, direct labor, and sales commissions. As your production or sales increase, these costs increase accordingly.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-white">Fixed Costs (30%)</h3>
              <p className="text-white/80">These costs remain constant regardless of your business activity level. Examples include rent, insurance, and salaries of permanent staff. They don't change with production or sales volume.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProgressScreen;
