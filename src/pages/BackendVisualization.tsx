
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

const BackendVisualization = () => {
  return (
    <div className="min-h-screen bg-black font-quicksand">
      <div className="w-full px-4 py-2 bg-black">
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
          <Card className="bg-black border-gold/20">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#F97316]">
                Scenario Forecasting - Multidimensional modelling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BusinessPositionMap 
                positions={businessPositions} 
                comparativeBusinesses={comparativeBusinesses}
              />
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ea384c" }} />
                    <span className="text-white">Tracked Company</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEC6A1" }} />
                    <span className="text-white">Hypergrowth Area</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#C8C8C9" }} />
                    <span className="text-white">Steady State Area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#DAA520" }} />
                    <span className="text-white">Similar Growth Area</span>
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

export default BackendVisualization;
