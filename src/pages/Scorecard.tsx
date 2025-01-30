import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface SectionData {
  id: number;
  title: string;
  subtitle: string;
  chartData: Array<{ date: string; value: number }>;
}

const sections: SectionData[] = [
  {
    id: 1,
    title: "Revenue Overview",
    subtitle: "Track your monthly revenue performance",
    chartData: [
      { date: "Jan", value: 30000 },
      { date: "Feb", value: 35000 },
      { date: "Mar", value: 45000 },
      { date: "Apr", value: 40000 },
      { date: "May", value: 50000 },
      { date: "Jun", value: 55000 },
    ]
  },
  {
    id: 2,
    title: "Profit Margins",
    subtitle: "Monitor profit trends across segments",
    chartData: [
      { date: "Jan", value: 15000 },
      { date: "Feb", value: 18000 },
      { date: "Mar", value: 22000 },
      { date: "Apr", value: 20000 },
      { date: "May", value: 25000 },
      { date: "Jun", value: 28000 },
    ]
  },
  {
    id: 3,
    title: "Customer Metrics",
    subtitle: "Track customer acquisition rates",
    chartData: [
      { date: "Jan", value: 1000 },
      { date: "Feb", value: 1200 },
      { date: "Mar", value: 1500 },
      { date: "Apr", value: 1800 },
      { date: "May", value: 2000 },
      { date: "Jun", value: 2200 },
    ]
  },
  {
    id: 4,
    title: "Operational Efficiency",
    subtitle: "Monitor key performance indicators",
    chartData: [
      { date: "Jan", value: 85 },
      { date: "Feb", value: 87 },
      { date: "Mar", value: 90 },
      { date: "Apr", value: 88 },
      { date: "May", value: 92 },
      { date: "Jun", value: 95 },
    ]
  },
  {
    id: 5,
    title: "Growth Indicators",
    subtitle: "Track business expansion metrics",
    chartData: [
      { date: "Jan", value: 10000 },
      { date: "Feb", value: 12000 },
      { date: "Mar", value: 15000 },
      { date: "Apr", value: 18000 },
      { date: "May", value: 22000 },
      { date: "Jun", value: 25000 },
    ]
  },
  {
    id: 6,
    title: "Financial Health",
    subtitle: "Review overall financial stability",
    chartData: [
      { date: "Jan", value: 50000 },
      { date: "Feb", value: 55000 },
      { date: "Mar", value: 60000 },
      { date: "Apr", value: 58000 },
      { date: "May", value: 65000 },
      { date: "Jun", value: 70000 },
    ]
  }
];

const Scorecard = () => {
  const [flippedSections, setFlippedSections] = useState<number[]>([]);

  const toggleFlip = (sectionId: number) => {
    setFlippedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const formatYAxis = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-gold hover:text-gold/80 transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gold">D'NA Scorecard</h1>
          <p className="text-gold/80 mt-2">Track your business health metrics</p>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {sections.map((section, index) => (
          <div key={section.id}>
            {index > 0 && (
              <Separator className="h-0.5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark opacity-30" />
            )}
            <div 
              className={cn(
                "w-full min-h-[300px] perspective-1000",
                index % 2 === 0 
                  ? "bg-gradient-to-r from-obsidian-dark to-obsidian-light" 
                  : "bg-gradient-to-l from-obsidian-DEFAULT to-obsidian-dark"
              )}
            >
              <div
                className={cn(
                  "relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer",
                  flippedSections.includes(section.id) ? "[transform:rotateY(180deg)]" : ""
                )}
                onClick={() => toggleFlip(section.id)}
              >
                {/* Front of page */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-obsidian-light via-obsidian-DEFAULT to-obsidian-dark before:absolute before:inset-0 before:bg-obsidian-dark/95">
                  <div className="relative z-10 flex flex-col items-center justify-center p-8 h-full">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gold-light/80 text-lg text-center">{section.subtitle}</p>
                  </div>
                </div>

                {/* Back of page */}
                <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light before:absolute before:inset-0 before:bg-obsidian-dark/95">
                  <div className="relative z-10 flex flex-col items-center justify-center p-8 h-full">
                    <div className="w-full h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={section.chartData}>
                          <defs>
                            <linearGradient id={`colorValue-${section.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis
                            dataKey="date"
                            stroke="#D4AF37"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                          />
                          <YAxis
                            stroke="#D4AF37"
                            tickLine={false}
                            axisLine={false}
                            tick={{ fontSize: 12 }}
                            tickFormatter={formatYAxis}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#1A1A1A",
                              border: "1px solid #D4AF37",
                              borderRadius: "4px",
                            }}
                            labelStyle={{ color: "#D4AF37" }}
                            formatter={(value: number) => [new Intl.NumberFormat('en-US').format(value), "Value"]}
                          />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#D4AF37"
                            fillOpacity={1}
                            fill={`url(#colorValue-${section.id})`}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scorecard;