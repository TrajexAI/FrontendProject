import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Forecast = () => {
  const forecastData = [
    { month: 'Jan', actual: 4000, forecast: 4100 },
    { month: 'Feb', actual: 3000, forecast: 3200 },
    { month: 'Mar', actual: 5000, forecast: 5300 },
    { month: 'Apr', actual: 2780, forecast: 3000 },
    { month: 'May', actual: null, forecast: 3500 },
    { month: 'Jun', actual: null, forecast: 4200 },
    { month: 'Jul', actual: null, forecast: 4800 },
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
          <Link 
            to="/" 
            className="inline-flex items-center text-gold hover:text-gold/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </div>
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="p-6 bg-obsidian-light/95 border-gold/30">
            <h2 className="text-2xl font-semibold text-gold mb-6">Revenue Forecast</h2>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={forecastData}>
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
        </div>
      </div>
    </div>
  );
};

export default Forecast;