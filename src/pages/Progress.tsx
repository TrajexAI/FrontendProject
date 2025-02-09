import TopBanner from "@/components/TopBanner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, LineChart, PieChart, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, BarChart, Bar } from "recharts";

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

  return (
    <div className="min-h-screen bg-black text-[#F97316]">
      <TopBanner />
      <div className="p-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-black border border-[#F97316]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
                <CardTitle className="text-sm font-medium text-[#F97316]">Weekly Progress</CardTitle>
                <LineChart className="h-3 w-3 text-[#F97316]" />
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-1">
                  <Progress 
                    value={50} 
                    className="h-1.5 bg-[#1EAEDB]/20"
                    indicatorClassName="bg-[#1EAEDB]"
                  />
                  <p className="text-xs text-white/60">Week 26 of 52</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-[#F97316]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-[#F97316]">Centiles</CardTitle>
                <Dialog>
                  <DialogTrigger>
                    <ArrowRight className="h-3 w-3 text-[#F97316] cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="bg-black border border-[#F97316]/20 w-[90vw] max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-[#F97316]">Historical Centile Performance</DialogTitle>
                    </DialogHeader>
                    <div className="h-[400px] mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsLineChart data={centileHistory}>
                          <XAxis 
                            dataKey="month" 
                            stroke="#F97316" 
                            tick={{ fill: '#FFFFFF' }}
                          />
                          <YAxis 
                            stroke="#F97316"
                            tick={{ fill: '#FFFFFF' }}
                            tickFormatter={(value) => `${value}th`}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#000',
                              border: '1px solid #F97316',
                              borderRadius: '4px',
                            }}
                            formatter={(value: number) => [`${value}th centile`, '']}
                          />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="salesCentile" 
                            stroke="#F97316" 
                            name="Sales Centile"
                            dot={false}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="profitCentile" 
                            stroke="#1EAEDB" 
                            name="Profit Centile"
                            dot={false}
                          />
                        </RechartsLineChart>
                      </ResponsiveContainer>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white">Sales</span>
                    <span className="text-xs text-[#F97316] font-bold">25th</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white">Profit</span>
                    <span className="text-xs text-[#F97316] font-bold">50th</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border border-[#F97316]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-[#F97316]">Estimated Profit</CardTitle>
                <Dialog>
                  <DialogTrigger>
                    <ArrowRight className="h-4 w-4 text-[#F97316] cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="bg-black border border-[#F97316]/20">
                    <DialogHeader>
                      <DialogTitle className="text-[#F97316]">Profit Breakdown</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Revenue</span>
                        <span className="text-[#F97316] font-bold">{profitDetails.revenue}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Costs</span>
                        <span className="text-[#F97316] font-bold">{profitDetails.costs}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Gross Profit</span>
                        <span className="text-[#F97316] font-bold">{profitDetails.grossProfit}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Profit Margin</span>
                        <span className="text-[#F97316] font-bold">{profitDetails.profitMargin}</span>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">£45,678</div>
                  <TrendingUp className="h-4 w-4 text-[#F97316]" />
                </div>
                <p className="text-xs text-white/60 mt-2">Expected this month</p>
              </CardContent>
            </Card>

            <Card className="bg-black border border-[#F97316]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium text-[#F97316]">Product Analysis</CardTitle>
                <Dialog>
                  <DialogTrigger>
                    <ArrowRight className="h-4 w-4 text-[#F97316] cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="bg-black border border-[#F97316]/20 w-[90vw] max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-[#F97316]">Product Performance</DialogTitle>
                    </DialogHeader>
                    <div className="h-[400px] mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={productData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <XAxis 
                            dataKey="name" 
                            tick={{ fill: '#FFFFFF' }}
                            axisLine={{ stroke: '#F97316' }}
                          />
                          <YAxis 
                            tick={{ fill: '#FFFFFF' }}
                            axisLine={{ stroke: '#F97316' }}
                            tickFormatter={(value) => `£${value.toLocaleString()}`}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#000',
                              border: '1px solid #F97316',
                              borderRadius: '4px',
                            }}
                            formatter={(value: number) => [`£${value.toLocaleString()}`, '']}
                          />
                          <Bar dataKey="sales" name="Sales" fill="#F97316" />
                          <Bar dataKey="margin" name="Profit Margin" fill="#1EAEDB" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white/60">Click arrow to view detailed analysis</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressScreen;
