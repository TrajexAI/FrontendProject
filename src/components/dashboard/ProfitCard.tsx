
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProfitDetailsType {
  revenue: string;
  costs: string;
  grossProfit: string;
  profitMargin: string;
}

interface ProfitCardProps {
  profitDetails: ProfitDetailsType;
}

const ProfitCard = ({ profitDetails }: ProfitCardProps) => {
  const monthChange = 12.5; // Example value, replace with actual calculation
  const showPositiveChange = monthChange >= 0;

  return (
    <Card className="bg-black border border-[#F97316]/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-[#F97316]">Profit</CardTitle>
        <Dialog>
          <DialogTrigger>
            <ArrowRight className="h-4 w-4 text-[#F97316] cursor-pointer" />
          </DialogTrigger>
          <DialogContent className="bg-black border border-[#F97316]/20">
            <DialogHeader>
              <DialogTitle className="text-[#F97316]">Profit Breakdown</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-3 gap-4 pb-2 border-b border-[#F97316]/20">
                <span className="text-white">Metric</span>
                <span className="text-[#F97316]/80 text-right">vs Last Month</span>
                <span className="text-[#F97316]/80 text-right">vs Last Year</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span className="text-white">Revenue</span>
                <span className="text-green-500 text-right">+8.3%</span>
                <span className="text-green-500 text-right">+15.2%</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span className="text-white">Costs</span>
                <span className="text-red-500 text-right">+4.1%</span>
                <span className="text-red-500 text-right">+9.8%</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span className="text-white">Gross Profit</span>
                <span className="text-green-500 text-right">+10.5%</span>
                <span className="text-green-500 text-right">+18.3%</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <span className="text-white">Profit Margin</span>
                <span className="text-green-500 text-right">+2.2%</span>
                <span className="text-green-500 text-right">+3.1%</span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-4xl font-bold text-white">£45,678</div>
            <div className={`text-sm ${showPositiveChange ? 'text-green-500' : 'text-red-500'} flex items-center gap-1`}>
              {showPositiveChange ? '+' : ''}{monthChange}%
              {showPositiveChange ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            </div>
          </div>
        </div>
        <p className="text-xs text-white/60 mt-2">Expected this month</p>
      </CardContent>
    </Card>
  );
};

export default ProfitCard;

