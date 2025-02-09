
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";

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
              <DialogTitle className="text-[#F97316]">Performance Benchmarking</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <p className="text-white/80 leading-relaxed">
                Your advisor has conducted a comprehensive benchmarking analysis of your business performance against comparable businesses in your industry and adjacent sectors. This analysis helps assess your relative value creation and identify areas for potential improvement. The benchmarking takes into account various factors including market conditions, business size, and operational metrics to provide meaningful comparisons.
              </p>
              <Button 
                className="w-full bg-white hover:bg-white/90 text-black"
                onClick={() => console.log("Contact advisor clicked")}
              >
                Talk to my advisor for more details
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="h-[80px] mb-2">
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
        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#0FA0CE] mb-1"></div>
            <span className="text-xs text-white">Sales: 25th centile</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FF0000] mb-1"></div>
            <span className="text-xs text-white">Gross Profit: 35th centile</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ComparativePerformanceCard;
