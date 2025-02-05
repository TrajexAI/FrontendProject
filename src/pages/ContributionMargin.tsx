
import { Card } from "@/components/ui/card";
import InsightCards from "@/components/InsightCards";
import CostAnalysisChart from "@/components/charts/CostAnalysisChart";
import ContributionMarginDonut from "@/components/charts/ContributionMarginDonut";
import MarginTrendsChart from "@/components/charts/MarginTrendsChart";
import { costData, marginTrendsData, COLORS } from "@/data/contributionMarginData";

const contributionMarginData = [
  { 
    name: 'AW24 Suede Boots', 
    value: 42,
    opportunities: 'Consider premium pricing strategy and seasonal promotions to maximize margins.'
  },
  { 
    name: 'Designer Handbag', 
    value: 38,
    opportunities: 'Review material costs and explore bulk purchasing options.'
  },
  { 
    name: 'Limited Edition Watch', 
    value: 35,
    opportunities: 'Analyze production efficiency and consider limited batch releases.'
  },
  { 
    name: 'Luxury Wallet', 
    value: 32,
    opportunities: 'Evaluate manufacturing processes and material alternatives.'
  },
  { 
    name: 'Premium Scarf', 
    value: 28,
    opportunities: 'Review pricing strategy and production costs to improve margins.'
  },
];

const ContributionMargin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/d1aeb0e9-c67b-4f1b-96e0-94fd3225b22c.png" 
            alt="Logo" 
            className="h-24 object-contain"
          />
        </div>
        <InsightCards />
        <h1 className="text-3xl font-bold text-gold">Contribution Margin Analysis</h1>
        <p className="text-black mt-2">Track and optimize your profit margins across products and services</p>
      </div>

      <div className="p-4 md:p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gold mb-4">Fixed vs Variable Cost Analysis</h2>
            <CostAnalysisChart costData={costData} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Contribution Margin by Product</h2>
              <ContributionMarginDonut data={contributionMarginData} colors={COLORS} />
            </Card>

            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Margin Trends</h2>
              <MarginTrendsChart 
                data={marginTrendsData} 
                products={contributionMarginData.map(item => item.name)}
                colors={COLORS}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionMargin;
