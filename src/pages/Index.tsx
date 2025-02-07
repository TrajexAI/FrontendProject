import { useState } from "react";
import BusinessPositionMap from "@/components/BusinessPositionMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InsightCards from "@/components/InsightCards";

const businessPositions = [
  { year: "Dec 2024", sales: 1200, grossProfit: 800, netProfit: 400, color: "#ea384c", isCurrent: true },
  { year: "Nov 2024", sales: 1000, grossProfit: 650, netProfit: 280, color: "#ea384c", isCurrent: true },
  { year: "Oct 2024", sales: 950, grossProfit: 600, netProfit: 320, color: "#ea384c", isCurrent: true },
  { year: "Sep 2024", sales: 1100, grossProfit: 750, netProfit: 380, color: "#ea384c", isCurrent: true },
  { year: "Aug 2024", sales: 900, grossProfit: 580, netProfit: 260, color: "#ea384c", isCurrent: true },
  { year: "Jul 2024", sales: 850, grossProfit: 520, netProfit: 240, color: "#ea384c", isCurrent: true },
  { year: "Jun 2024", sales: 950, grossProfit: 620, netProfit: 300, color: "#ea384c", isCurrent: true },
  { year: "May 2024", sales: 1050, grossProfit: 680, netProfit: 340, color: "#ea384c", isCurrent: true },
  { year: "Apr 2024", sales: 900, grossProfit: 550, netProfit: 250, color: "#ea384c", isCurrent: true },
  { year: "Mar 2024", sales: 800, grossProfit: 500, netProfit: 220, color: "#ea384c", isCurrent: true },
  { year: "Feb 2024", sales: 850, grossProfit: 520, netProfit: 230, color: "#ea384c", isCurrent: true },
  { year: "Jan 2024", sales: 750, grossProfit: 480, netProfit: 200, color: "#ea384c", isCurrent: true }
];

const comparativeBusinesses = [
  {
    name: "Hypergrowth, small fashion brand",
    positions: [
      { year: "Current", sales: 2000, grossProfit: 1400, netProfit: 800, color: "#FEC6A1" }
    ]
  },
  {
    name: "Steady state, small retailer",
    positions: [
      { year: "Current", sales: 900, grossProfit: 600, netProfit: 300, color: "#C8C8C9" }
    ]
  },
  {
    name: "New entrant, e-commerce",
    positions: [
      { year: "Current", sales: 1100, grossProfit: 750, netProfit: 380, color: "#DAA520" }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-quicksand">
      <div className="w-full px-4 py-2 bg-white">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/d1aeb0e9-c67b-4f1b-96e0-94fd3225b22c.png" 
            alt="Logo" 
            className="h-24 object-contain"
          />
        </div>
        <InsightCards />
      </div>
      <div className="p-4 md:p-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gold">
                Business Performance Map (2022-2024)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BusinessPositionMap 
                positions={businessPositions} 
                comparativeBusinesses={comparativeBusinesses}
              />
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#F97316" }} />
                    <span>2024 (Current)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#8B5CF6" }} />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1A1F2C" }} />
                    <span>2022</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#22C55E" }} />
                    <span>Similar Growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3B82F6" }} />
                    <span>High Growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#EC4899" }} />
                    <span>Steady State</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
