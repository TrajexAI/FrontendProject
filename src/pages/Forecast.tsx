
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import TopBanner from "@/components/TopBanner";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Forecast = () => {
  const [showMetricsDialog, setShowMetricsDialog] = useState(false);
  const [showForecastDialog, setShowForecastDialog] = useState(false);

  const revenueData = [
    { month: 'Jan', actual: 4000, forecast: 4100 },
    { month: 'Feb', actual: 3000, forecast: 3200 },
    { month: 'Mar', actual: 5000, forecast: 5300 },
    { month: 'Apr', actual: 2780, forecast: 3000 },
    { month: 'May', actual: null, forecast: 3500 },
    { month: 'Jun', actual: null, forecast: 4200 },
    { month: 'Jul', actual: null, forecast: 4800 },
  ];

  const cashflowData = [
    { month: 'Jan', inflow: 5000, outflow: 4000 },
    { month: 'Feb', inflow: 4500, outflow: 3800 },
    { month: 'Mar', inflow: 6000, outflow: 5000 },
    { month: 'Apr', inflow: 5500, outflow: 4800 },
    { month: 'May', inflow: 7000, outflow: 6000 },
    { month: 'Jun', inflow: 8000, outflow: 6500 },
    { month: 'Jul', inflow: 8500, outflow: 7000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand pb-20">
      <TopBanner />
      <div className="pt-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* SaaS Metrics Card */}
          <Card className="p-6 bg-obsidian-light/95 border-gold/30">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gold">SaaS Metrics</h2>
              <ArrowRight 
                className="w-6 h-6 text-gold cursor-pointer hover:text-gold/80 transition-colors"
                onClick={() => setShowMetricsDialog(true)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 border border-gold/20 rounded-lg">
                <p className="text-gold/80 mb-2">LTV:CAC</p>
                <p className="text-2xl font-bold text-gold">3.5x</p>
              </div>
              <div className="text-center p-4 border border-gold/20 rounded-lg">
                <p className="text-gold/80 mb-2">Rule of 40</p>
                <p className="text-2xl font-bold text-gold">45%</p>
              </div>
              <div className="text-center p-4 border border-gold/20 rounded-lg">
                <p className="text-gold/80 mb-2">ARR</p>
                <p className="text-2xl font-bold text-gold">$2.4M</p>
              </div>
            </div>
          </Card>

          {/* 3-way Forecast Card */}
          <Card className="p-6 bg-obsidian-light/95 border-gold/30">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gold">3-way Forecast</h2>
              <ArrowRight 
                className="w-6 h-6 text-gold cursor-pointer hover:text-gold/80 transition-colors"
                onClick={() => setShowForecastDialog(true)}
              />
            </div>
            <div className="h-[300px]">
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

          {/* Metrics Dialog */}
          <Dialog open={showMetricsDialog} onOpenChange={setShowMetricsDialog}>
            <DialogContent className="bg-obsidian-dark border-gold/20 text-gold">
              <DialogHeader>
                <DialogTitle className="text-gold">SaaS Metrics Explained</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">LTV:CAC (3.5x)</h3>
                  <p className="text-gold/80">Lifetime Value to Customer Acquisition Cost ratio. A healthy ratio is 3:1 or higher.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Rule of 40 (45%)</h3>
                  <p className="text-gold/80">Combined growth rate and profit margin should exceed 40%. Currently performing above benchmark.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">ARR ($2.4M)</h3>
                  <p className="text-gold/80">Annual Recurring Revenue, showing steady growth trajectory.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Forecast Dialog */}
          <Dialog open={showForecastDialog} onOpenChange={setShowForecastDialog}>
            <DialogContent className="bg-obsidian-dark border-gold/20 text-gold max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-gold">3-way Forecast Details</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Revenue Forecast</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="month" stroke="#B8860B" />
                        <YAxis stroke="#B8860B" />
                        <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #B8860B', color: '#B8860B' }} />
                        <Line type="monotone" dataKey="actual" stroke="#B8860B" strokeWidth={2} dot={{ fill: '#B8860B' }} />
                        <Line type="monotone" dataKey="forecast" stroke="#B8860B" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#B8860B' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Cashflow Forecast</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={cashflowData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="month" stroke="#B8860B" />
                        <YAxis stroke="#B8860B" />
                        <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #B8860B', color: '#B8860B' }} />
                        <Line type="monotone" dataKey="inflow" stroke="#4CAF50" strokeWidth={2} dot={{ fill: '#4CAF50' }} />
                        <Line type="monotone" dataKey="outflow" stroke="#F44336" strokeWidth={2} dot={{ fill: '#F44336' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gold hover:bg-gold/80 text-black"
                  onClick={() => console.log("Exporting forecast...")}
                >
                  Export 3-way complete forecast
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
