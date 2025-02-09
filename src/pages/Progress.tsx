
import TopBanner from "@/components/TopBanner";
import ProfitCard from "@/components/dashboard/ProfitCard";
import ComparativePerformanceCard from "@/components/dashboard/ComparativePerformanceCard";
import ProductAnalysisCard from "@/components/dashboard/ProductAnalysisCard";
import SalesCard from "@/components/dashboard/SalesCard";

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
      y: y * 50, // Increased scaling factor from 30 to 50 for more height
      salesMarker: i === 35 ? y * 50 : 0,
      profitMarker: i === 42 ? y * 50 : 0,
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressScreen;
