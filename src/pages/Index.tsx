
import { useState } from "react";
import BusinessPositionMap from "@/components/BusinessPositionMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InsightCards from "@/components/InsightCards";

const businessPositions = [
  {
    year: "2024",
    sales: 1200,
    grossProfit: 800,
    netProfit: 400,
    color: "#F97316", // Current year (bright orange)
    isCurrent: true
  },
  {
    year: "2023",
    sales: 1000,
    grossProfit: 600,
    netProfit: 300,
    color: "#8B5CF6", // Last year (purple)
    isCurrent: true
  },
  {
    year: "2022",
    sales: 800,
    grossProfit: 500,
    netProfit: 200,
    color: "#1A1F2C", // Two years ago (dark)
    isCurrent: true
  }
];

const comparativeBusinesses = [
  {
    name: "Similar Growth Business",
    positions: [
      { year: "2024", sales: 1100, grossProfit: 750, netProfit: 380, color: "#22C55E" },
      { year: "2023", sales: 950, grossProfit: 580, netProfit: 290, color: "#22C55E" },
      { year: "2022", sales: 780, grossProfit: 480, netProfit: 190, color: "#22C55E" },
      { year: "2021", sales: 600, grossProfit: 350, netProfit: 150, color: "#22C55E" },
      { year: "2020", sales: 450, grossProfit: 250, netProfit: 100, color: "#22C55E" }
    ]
  },
  {
    name: "High Growth Business",
    positions: [
      { year: "2024", sales: 2000, grossProfit: 1400, netProfit: 800, color: "#3B82F6" },
      { year: "2023", sales: 1500, grossProfit: 1000, netProfit: 550, color: "#3B82F6" },
      { year: "2022", sales: 1000, grossProfit: 650, netProfit: 300, color: "#3B82F6" },
      { year: "2021", sales: 600, grossProfit: 350, netProfit: 150, color: "#3B82F6" },
      { year: "2020", sales: 300, grossProfit: 180, netProfit: 80, color: "#3B82F6" }
    ]
  },
  {
    name: "Steady State Business",
    positions: [
      { year: "2024", sales: 900, grossProfit: 600, netProfit: 300, color: "#EC4899" },
      { year: "2023", sales: 880, grossProfit: 590, netProfit: 290, color: "#EC4899" },
      { year: "2022", sales: 850, grossProfit: 570, netProfit: 285, color: "#EC4899" },
      { year: "2021", sales: 830, grossProfit: 550, netProfit: 275, color: "#EC4899" },
      { year: "2020", sales: 800, grossProfit: 530, netProfit: 265, color: "#EC4899" }
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
