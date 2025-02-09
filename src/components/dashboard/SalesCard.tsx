
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";

const SalesCard = () => {
  return (
    <Card className="bg-black border border-[#F97316]/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-[#F97316]">Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-4">
          <CircularProgress 
            value={65}
            currentValue="£5,436"
            targetValue="£8,500"
            label="of daily target"
            size={180}
            strokeWidth={12}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesCard;
