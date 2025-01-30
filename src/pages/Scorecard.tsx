import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface SectionData {
  id: number;
  title: string;
  frontContent: string;
  backContent: string;
}

const sections: SectionData[] = [
  {
    id: 1,
    title: "Revenue Overview",
    frontContent: "Track your monthly revenue trends and growth metrics",
    backContent: "Detailed revenue analysis and forecasting tools will be available here"
  },
  {
    id: 2,
    title: "Profit Margins",
    frontContent: "Monitor your profit margins across different business segments",
    backContent: "In-depth profit margin analysis and optimization recommendations coming soon"
  },
  {
    id: 3,
    title: "Customer Metrics",
    frontContent: "Analyze customer acquisition and retention rates",
    backContent: "Detailed customer behavior analytics and engagement metrics will be displayed here"
  },
  {
    id: 4,
    title: "Operational Efficiency",
    frontContent: "Track key operational performance indicators",
    backContent: "Comprehensive operational efficiency metrics and improvement suggestions coming soon"
  },
  {
    id: 5,
    title: "Growth Indicators",
    frontContent: "Monitor business growth and expansion metrics",
    backContent: "Detailed growth analysis and market opportunity insights will be available here"
  },
  {
    id: 6,
    title: "Financial Health",
    frontContent: "Review overall financial health and stability metrics",
    backContent: "In-depth financial analysis and forecasting tools coming soon"
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
                    <p className="text-gold-light/80 text-lg">{section.frontContent}</p>
                  </div>
                </div>

                {/* Back of page */}
                <div className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light before:absolute before:inset-0 before:bg-obsidian-dark/95">
                  <div className="relative z-10 flex flex-col items-center justify-center p-8 h-full">
                    <p className="text-gold/90 text-xl">{section.backContent}</p>
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