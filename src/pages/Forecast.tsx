
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Activity, X } from "lucide-react";
import TopBanner from "@/components/TopBanner";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CircularProgress } from "@/components/ui/circular-progress";

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
    <div className="min-h-screen bg-black text-[#F97316]">
      <TopBanner />
      <div className="pt-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="bg-black border border-[#F97316]/20">
            <div className="flex justify-between items-center p-4">
              <div>
                <h2 className="text-lg font-semibold text-[#F97316] mb-2">SaaS Metrics</h2>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-white">LTV:CAC</p>
                    <p className="text-[#1EAEDB] text-2xl font-bold">3.5x</p>
                  </div>
                  <div>
                    <p className="text-white">Rule of 40</p>
                    <p className="text-[#1EAEDB] text-2xl font-bold">45%</p>
                  </div>
                  <div>
                    <p className="text-white">ARR</p>
                    <p className="text-[#1EAEDB] text-2xl font-bold">£2.4M</p>
                  </div>
                </div>
              </div>
              <ArrowRight 
                className="h-4 w-4 text-[#F97316] cursor-pointer hover:text-[#F97316]/80 transition-colors"
                onClick={() => setShowMetricsDialog(true)}
              />
            </div>
          </Card>

          <Card className="bg-black border border-[#F97316]/20">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-lg font-medium text-[#F97316]">3-way forecast</h2>
              <ArrowRight 
                className="h-4 w-4 text-[#F97316] cursor-pointer"
                onClick={() => setShowForecastDialog(true)}
              />
            </div>
          </Card>

          <Card className="bg-black border border-[#F97316]/20">
            <div className="p-4">
              <div className="text-center">
                <h2 className="text-lg font-medium text-[#F97316]">Scenario Analysis</h2>
                <div className="mt-2">
                  <h3 className="text-white">Hiring 1 FTE junior sales person</h3>
                  <p className="text-[#1EAEDB] text-3xl font-medium">2 months</p>
                  <p className="text-white text-xs">until profit recovers to pre-hiring level</p>
                </div>
              </div>
            </div>
          </Card>

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

          <Dialog open={showMetricsDialog} onOpenChange={setShowMetricsDialog}>
            <DialogContent className="bg-black border-[#F97316]/20 text-white w-[90%] max-w-lg">
              <div className="flex justify-between items-center">
                <DialogTitle className="text-white">SaaS Metrics Explained</DialogTitle>
                <X 
                  className="h-4 w-4 cursor-pointer hover:text-white/80" 
                  onClick={() => setShowMetricsDialog(false)}
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-white">LTV:CAC (3.5x)</h3>
                  <p className="text-white/80">Lifetime Value to Customer Acquisition Cost ratio. A healthy ratio is 3:1 or higher.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">Rule of 40 (45%)</h3>
                  <p className="text-white/80">Combined growth rate and profit margin should exceed 40%. Currently performing above benchmark.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-white">ARR (£2.4M)</h3>
                  <p className="text-white/80">Annual Recurring Revenue, showing steady growth trajectory.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showForecastDialog} onOpenChange={setShowForecastDialog}>
            <DialogContent className="bg-black border-[#F97316]/20 text-[#F97316] w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <DialogTitle className="text-[#F97316]">3-way forecast Details</DialogTitle>
                <X 
                  className="h-4 w-4 cursor-pointer hover:text-[#F97316]/80" 
                  onClick={() => setShowForecastDialog(false)}
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Revenue Forecast</h3>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="month" stroke="#FFFFFF" />
                        <YAxis stroke="#FFFFFF" />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #F97316', color: '#FFFFFF' }} />
                        <Line type="monotone" dataKey="actual" stroke="#1EAEDB" strokeWidth={2} dot={{ fill: '#1EAEDB' }} />
                        <Line type="monotone" dataKey="forecast" stroke="#FFFFFF" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#FFFFFF' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Cashflow Forecast</h3>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={cashflowData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="month" stroke="#FFFFFF" />
                        <YAxis stroke="#FFFFFF" />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #F97316', color: '#FFFFFF' }} />
                        <Line type="monotone" dataKey="inflow" stroke="#1EAEDB" strokeWidth={2} dot={{ fill: '#1EAEDB' }} />
                        <Line type="monotone" dataKey="outflow" stroke="#FFFFFF" strokeWidth={2} dot={{ fill: '#FFFFFF' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <Button 
                  className="w-full bg-white hover:bg-white/90 text-black"
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

