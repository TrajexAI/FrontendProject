import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Forecast = () => {
  const revenueData = [
    { month: 'Jan', actual: 4000, forecast: 4100 },
    { month: 'Feb', actual: 3000, forecast: 3200 },
    { month: 'Mar', actual: 5000, forecast: 5300 },
    { month: 'Apr', actual: 2780, forecast: 3000 },
    { month: 'May', actual: null, forecast: 3500 },
    { month: 'Jun', actual: null, forecast: 4200 },
    { month: 'Jul', actual: null, forecast: 4800 },
  ];

  const productSuccessData = [
    { month: 'Jan', adoption: 75, satisfaction: 82 },
    { month: 'Feb', adoption: 78, satisfaction: 85 },
    { month: 'Mar', adoption: 82, satisfaction: 87 },
    { month: 'Apr', adoption: 85, satisfaction: 88 },
    { month: 'May', adoption: 88, satisfaction: 90 },
    { month: 'Jun', adoption: 92, satisfaction: 91 },
    { month: 'Jul', adoption: 95, satisfaction: 93 },
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
      </div>
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="p-6 bg-obsidian-light/95 border-gold/30">
            <h2 className="text-2xl font-semibold text-gold mb-6">Revenue Forecast</h2>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#B8860B" />
                  <YAxis stroke="#B8860B" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a1a', 
                      border: '1px solid #B8860B',
                      color: '#B8860B' 
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#B8860B" 
                    strokeWidth={2} 
                    dot={{ fill: '#B8860B' }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="forecast" 
                    stroke="#B8860B" 
                    strokeWidth={2} 
                    strokeDasharray="5 5"
                    dot={{ fill: '#B8860B' }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6 bg-obsidian-light/95 border-gold/30">
            <h2 className="text-2xl font-semibold text-gold mb-6">Product Success Forecast</h2>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={productSuccessData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#B8860B" />
                  <YAxis stroke="#B8860B" domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a1a', 
                      border: '1px solid #B8860B',
                      color: '#B8860B' 
                    }}
                    formatter={(value: number) => [`${value}%`]}
                  />
                  <Line 
                    type="monotone" 
                    name="Product Adoption"
                    dataKey="adoption" 
                    stroke="#FFD700" 
                    strokeWidth={2} 
                    dot={{ fill: '#FFD700' }} 
                  />
                  <Line 
                    type="monotone" 
                    name="Customer Satisfaction"
                    dataKey="satisfaction" 
                    stroke="#D4AF37" 
                    strokeWidth={2} 
                    dot={{ fill: '#D4AF37' }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
