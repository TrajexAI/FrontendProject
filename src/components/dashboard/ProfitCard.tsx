
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
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
  return (
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
  );
};

export default ProfitCard;
