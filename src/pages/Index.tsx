
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TopBanner from "@/components/TopBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-[#F97316]">
      <TopBanner />
      <div className="p-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
            <p className="text-white">Access your business analytics and insights</p>
            <div className="grid gap-4">
              <Link to="/backend-visualization">
                <Button className="w-full bg-[#F97316] text-white hover:bg-[#F97316]/80">
                  View Backend Visualization
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
