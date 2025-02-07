
import { useState } from "react";
import BusinessPositionMap from "@/components/BusinessPositionMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InsightCards from "@/components/InsightCards";

const businessPositions = [
  { year: "Dec 2024", sales: 1200, grossProfit: 800, netProfit: 400, color: "#ea384c", isCurrent: true },
  { year: "Nov 2024", sales: 1150, grossProfit: 780, netProfit: 380, color: "#ea384c", isCurrent: true },
  { year: "Oct 2024", sales: 1100, grossProfit: 750, netProfit: 360, color: "#ea384c", isCurrent: true },
  { year: "Sep 2024", sales: 1050, grossProfit: 720, netProfit: 340, color: "#ea384c", isCurrent: true },
  { year: "Aug 2024", sales: 1000, grossProfit: 680, netProfit: 320, color: "#ea384c", isCurrent: true },
  { year: "Jul 2024", sales: 950, grossProfit: 650, netProfit: 300, color: "#ea384c", isCurrent: true },
  { year: "Jun 2024", sales: 900, grossProfit: 620, netProfit: 280, color: "#ea384c", isCurrent: true },
  { year: "May 2024", sales: 850, grossProfit: 580, netProfit: 260, color: "#ea384c", isCurrent: true },
  { year: "Apr 2024", sales: 800, grossProfit: 550, netProfit: 240, color: "#ea384c", isCurrent: true },
  { year: "Mar 2024", sales: 750, grossProfit: 520, netProfit: 220, color: "#ea384c", isCurrent: true },
  { year: "Feb 2024", sales: 700, grossProfit: 480, netProfit: 200, color: "#ea384c", isCurrent: true },
  { year: "Jan 2024", sales: 650, grossProfit: 450, netProfit: 180, color: "#ea384c", isCurrent: true }
];

const comparativeBusinesses = [
  {
    name: "Similar Growth Business",
    positions: [
      { year: "Dec", sales: 1100, grossProfit: 750, netProfit: 380, color: "#DAA520" },
      { year: "Nov", sales: 1050, grossProfit: 720, netProfit: 360, color: "#DAA520" },
      { year: "Oct", sales: 1000, grossProfit: 680, netProfit: 340, color: "#DAA520" },
      { year: "Sep", sales: 950, grossProfit: 650, netProfit: 320, color: "#DAA520" },
      { year: "Aug", sales: 900, grossProfit: 620, netProfit: 300, color: "#DAA520" },
      { year: "Jul", sales: 850, grossProfit: 580, netProfit: 280, color: "#DAA520" },
      { year: "Jun", sales: 800, grossProfit: 550, netProfit: 260, color: "#DAA520" },
      { year: "May", sales: 750, grossProfit: 520, netProfit: 240, color: "#DAA520" },
      { year: "Apr", sales: 700, grossProfit: 480, netProfit: 220, color: "#DAA520" },
      { year: "Mar", sales: 650, grossProfit: 450, netProfit: 200, color: "#DAA520" },
      { year: "Feb", sales: 600, grossProfit: 420, netProfit: 180, color: "#DAA520" },
      { year: "Jan", sales: 550, grossProfit: 380, netProfit: 160, color: "#DAA520" }
    ]
  },
  {
    name: "High Growth Business",
    positions: [
      { year: "Dec", sales: 2000, grossProfit: 1400, netProfit: 800, color: "#FEC6A1" },
      { year: "Nov", sales: 1900, grossProfit: 1300, netProfit: 750, color: "#FEC6A1" },
      { year: "Oct", sales: 1800, grossProfit: 1200, netProfit: 700, color: "#FEC6A1" },
      { year: "Sep", sales: 1700, grossProfit: 1100, netProfit: 650, color: "#FEC6A1" },
      { year: "Aug", sales: 1600, grossProfit: 1000, netProfit: 600, color: "#FEC6A1" },
      { year: "Jul", sales: 1500, grossProfit: 900, netProfit: 550, color: "#FEC6A1" },
      { year: "Jun", sales: 1400, grossProfit: 800, netProfit: 500, color: "#FEC6A1" },
      { year: "May", sales: 1300, grossProfit: 700, netProfit: 450, color: "#FEC6A1" },
      { year: "Apr", sales: 1200, grossProfit: 600, netProfit: 400, color: "#FEC6A1" },
      { year: "Mar", sales: 1100, grossProfit: 500, netProfit: 350, color: "#FEC6A1" },
      { year: "Feb", sales: 1000, grossProfit: 400, netProfit: 300, color: "#FEC6A1" },
      { year: "Jan", sales: 900, grossProfit: 300, netProfit: 250, color: "#FEC6A1" }
    ]
  },
  {
    name: "Steady State Business",
    positions: [
      { year: "Dec", sales: 900, grossProfit: 600, netProfit: 300, color: "#C8C8C9" },
      { year: "Nov", sales: 895, grossProfit: 598, netProfit: 298, color: "#C8C8C9" },
      { year: "Oct", sales: 890, grossProfit: 595, netProfit: 297, color: "#C8C8C9" },
      { year: "Sep", sales: 885, grossProfit: 592, netProfit: 296, color: "#C8C8C9" },
      { year: "Aug", sales: 880, grossProfit: 590, netProfit: 295, color: "#C8C8C9" },
      { year: "Jul", sales: 875, grossProfit: 588, netProfit: 294, color: "#C8C8C9" },
      { year: "Jun", sales: 870, grossProfit: 585, netProfit: 293, color: "#C8C8C9" },
      { year: "May", sales: 865, grossProfit: 582, netProfit: 292, color: "#C8C8C9" },
      { year: "Apr", sales: 860, grossProfit: 580, netProfit: 291, color: "#C8C8C9" },
      { year: "Mar", sales: 855, grossProfit: 578, netProfit: 290, color: "#C8C8C9" },
      { year: "Feb", sales: 850, grossProfit: 575, netProfit: 289, color: "#C8C8C9" },
      { year: "Jan", sales: 845, grossProfit: 572, netProfit: 288, color: "#C8C8C9" }
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
