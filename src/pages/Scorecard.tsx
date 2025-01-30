import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ScorecardSection } from "@/components/scorecard/ScorecardSection";
import { sections } from "@/data/scorecardSections";

const Scorecard = () => {
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
            <ScorecardSection
              {...section}
              isEven={index % 2 === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scorecard;