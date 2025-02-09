
import TopBanner from "@/components/TopBanner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gauge, BarChart2, ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Today = () => {
  const productData = [
    { name: "Product A", sales: 320 },
    { name: "Product B", sales: 450 },
    { name: "Product C", sales: 280 },
    { name: "Product D", sales: 390 },
    { name: "Product E", sales: 200 },
    { name: "Product F", sales: 340 },
    { name: "Product G", sales: 280 },
  ];

  const weekOverview = {
    sales: "£38,450",
    expenses: "£15,230",
    grossProfit: "£23,220",
    netProfit: "£18,576",
  };

  return (
    <div className="min-h-screen bg-black text-[#F97316]">
      <TopBanner />
      <div className="p-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Today's Overview</h1>
            <div className="grid gap-4">
              <Card className="bg-black border border-[#F97316]/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium text-[#F97316]">Sales</CardTitle>
                  <Gauge className="h-4 w-4 text-[#F97316]" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">£5,436</div>
                    <div className="flex items-center space-x-2">
                      <div className="text-sm text-white">65%</div>
                      <div className="h-2 w-16 rounded-full bg-[#F97316]/20">
                        <div 
                          className="h-2 rounded-full bg-[#F97316]" 
                          style={{ width: '65%' }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-white/60 mt-2">of daily target</p>
                </CardContent>
              </Card>

              <Card className="bg-black border border-[#F97316]/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium text-[#F97316]">Product Leaderboard</CardTitle>
                  <BarChart2 className="h-4 w-4 text-[#F97316]" />
                </CardHeader>
                <CardContent>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={productData}>
                        <XAxis 
                          dataKey="name" 
                          tick={{ fill: '#F97316', fontSize: 12 }}
                          axisLine={{ stroke: '#F97316' }}
                        />
                        <YAxis 
                          tick={{ fill: '#F97316', fontSize: 12 }}
                          axisLine={{ stroke: '#F97316' }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#000',
                            border: '1px solid #F97316',
                            borderRadius: '4px',
                          }}
                          labelStyle={{ color: '#F97316' }}
                        />
                        <Bar dataKey="sales" fill="#F97316" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black border border-[#F97316]/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium text-[#F97316]">Week Overview</CardTitle>
                  <Dialog>
                    <DialogTrigger>
                      <ArrowRight className="h-4 w-4 text-[#F97316] cursor-pointer" />
                    </DialogTrigger>
                    <DialogContent className="bg-black border border-[#F97316]/20">
                      <DialogHeader>
                        <DialogTitle className="text-[#F97316]">This Week's Performance</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white">Sales</span>
                          <span className="text-[#F97316] font-bold">{weekOverview.sales}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Expenses</span>
                          <span className="text-[#F97316] font-bold">{weekOverview.expenses}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Estimated Gross Profit</span>
                          <span className="text-[#F97316] font-bold">{weekOverview.grossProfit}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white">Estimated Net Profit</span>
                          <span className="text-[#F97316] font-bold">{weekOverview.netProfit}</span>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white">Click the arrow to view this week's performance details</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
