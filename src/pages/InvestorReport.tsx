import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FinancialChart from "@/components/FinancialChart";

const InvestorReport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <img 
              src="/lovable-uploads/f824e481-f31c-4e45-8dae-43f9616aa4d9.png" 
              alt="Trajex Logo" 
              className="h-24 object-contain"
            />
            <Link 
              to="/" 
              className="inline-flex items-center text-gold hover:text-gold/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-gold">D'NA Investor Report</h1>
          <p className="text-gold/80 mt-2">Detailed financial insights for investors</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-gold">Revenue Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <FinancialChart data={[]} className="h-[300px]" />
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <CardTitle className="text-gold">Key Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gold-light">Gross Margin</span>
                <span className="text-gold font-semibold">42%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gold-light">Operating Margin</span>
                <span className="text-gold font-semibold">28%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gold-light">Net Profit Margin</span>
                <span className="text-gold font-semibold">18%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gold-light">Return on Investment</span>
                <span className="text-gold font-semibold">32%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestorReport;