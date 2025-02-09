
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, AreaChart, Area } from "recharts";

interface ComparativePerformanceProps {
  centileHistory: Array<{
    month: string;
    salesCentile: number;
    profitCentile: number;
  }>;
  bellCurveData: Array<{
    x: number;
    y: number;
    salesMarker: number;
    profitMarker: number;
  }>;
}

const ComparativePerformanceCard = ({ centileHistory, bellCurveData }: ComparativePerformanceProps) => {
  return (
    <Card className="bg-black border border-[#F97316]/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-[#F97316]">Comparative Performance</CardTitle>
        <Dialog>
          <DialogTrigger>
            <ArrowRight className="h-3 w-3 text-[#F97316] cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="bg-black border border-[#F97316]/20 w-[90vw] max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-[#F97316]">Historical Performance Distribution</DialogTitle>
            </DialogHeader>
            <div className="h-[400px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={centileHistory}>
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
                </LineChart>
              </ResponsiveContainer>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="h-[60px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={bellCurveData}>
              <Area
                type="monotone"
                dataKey="y"
                stroke="#1EAEDB"
                fill="#1EAEDB"
                fillOpacity={0.1}
              />
              <Area
                type="monotone"
                dataKey="salesMarker"
                stroke="#0FA0CE"
                fill="#0FA0CE"
                fillOpacity={0.8}
              />
              <Area
                type="monotone"
                dataKey="profitMarker"
                stroke="#FF0000"
                fill="#FF0000"
                fillOpacity={0.8}
              />
              <XAxis stroke="#FFFFFF" tick={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center space-x-8 mt-1">
          <div className="flex flex-col items-center">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#0FA0CE] mb-0.5"></div>
            <span className="text-xs text-white">Sales: 25th centile</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FF0000] mb-0.5"></div>
            <span className="text-xs text-white">Gross Profit: 35th centile</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparativePerformanceCard;
