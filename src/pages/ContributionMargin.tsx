import { Card } from "@/components/ui/card";
import InsightCards from "@/components/InsightCards";

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
      </div>

      <div className="p-4 md:p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gold">Contribution Margin Analysis</h1>
            <p className="text-gold-light/80 mt-2">Track and optimize your profit margins across products and services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Fixed vs Variable Cost Analysis</h2>
              <div className="h-[300px] flex items-center justify-center text-gold-light/50">
                Chart coming soon
              </div>
            </Card>

            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Product Breakdown</h2>
              <div className="h-[300px] flex items-center justify-center text-gold-light/50">
                Chart coming soon
              </div>
            </Card>

            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Margin Trends</h2>
              <div className="h-[300px] flex items-center justify-center text-gold-light/50">
                Chart coming soon
              </div>
            </Card>

            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Optimization Opportunities</h2>
              <div className="space-y-4 text-gold-light">
                <p>• Review pricing strategy for low-margin products</p>
                <p>• Analyze cost structure of key product lines</p>
                <p>• Identify high-performing product categories</p>
                <p>• Optimize inventory management</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionMargin;