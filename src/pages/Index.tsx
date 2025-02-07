
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
    color: "#F97316" // Current year (bright orange)
  },
  {
    year: "2023",
    sales: 1000,
    grossProfit: 600,
    netProfit: 300,
    color: "#8B5CF6" // Last year (purple)
  },
  {
    year: "2022",
    sales: 800,
    grossProfit: 500,
    netProfit: 200,
    color: "#1A1F2C" // Two years ago (dark)
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
              <BusinessPositionMap positions={businessPositions} />
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
