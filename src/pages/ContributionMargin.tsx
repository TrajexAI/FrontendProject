import { Card } from "@/components/ui/card";
import InsightCards from "@/components/InsightCards";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const ContributionMargin = () => {
  const costData = [
    {
      category: 'Labor',
      fixed: 45000,
      variable: 65000,
    },
    {
      category: 'Materials',
      fixed: 20000,
      variable: 85000,
    },
    {
      category: 'Overhead',
      fixed: 35000,
      variable: 25000,
    },
    {
      category: 'Equipment',
      fixed: 55000,
      variable: 15000,
    },
    {
      category: 'Marketing',
      fixed: 25000,
      variable: 45000,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/d1aeb0e9-c67b-4f1b-96e0-94fd3225b22c.png" 
            alt="Logo" 
            className="h-24 object-contain"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="p-2">
              <Menu className="h-6 w-6 text-gold" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-forest-dark">
              <DropdownMenuItem className="text-gold">
                <Link to="/">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gold">
                <Link to="/scorecard">Scorecard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gold">
                <Link to="/investor-report">Investor Report</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gold">
                <Link to="/contribution-margin">Contribution Margin</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gold">
                <Link to="/notifications">Notifications</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gold">
                <Link to="/forecast">Forecast</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <InsightCards />
      </div>

      <div className="p-4 md:p-8">
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gold">Contribution Margin Analysis</h1>
            <p className="text-black mt-2">Track and optimize your profit margins across products and services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-obsidian-light/50 border-gold/30">
              <h2 className="text-xl font-semibold text-gold mb-4">Fixed vs Variable Cost Analysis</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={costData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#D4AF37" opacity={0.2} />
                    <XAxis 
                      dataKey="category" 
                      stroke="#D4AF37"
                      tick={{ fill: '#D4AF37' }}
                    />
                    <YAxis 
                      stroke="#D4AF37"
                      tick={{ fill: '#D4AF37' }}
                      tickFormatter={(value) => `$${value.toLocaleString()}`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid #D4AF37',
                        borderRadius: '4px',
                      }}
                      labelStyle={{ color: '#D4AF37' }}
                      formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                    />
                    <Legend 
                      wrapperStyle={{ color: '#D4AF37' }}
                    />
                    <Bar dataKey="fixed" name="Fixed Costs" fill="#D4AF37" />
                    <Bar dataKey="variable" name="Variable Costs" fill="#8B7355" />
                  </BarChart>
                </ResponsiveContainer>
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
