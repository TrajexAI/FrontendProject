
import TopBanner from "@/components/TopBanner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gauge } from "lucide-react";

const Today = () => {
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Today;
