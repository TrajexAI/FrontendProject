import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScorecardSection } from "@/components/scorecard/ScorecardSection";
import { sections } from "@/data/scorecardSections";

const Scorecard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <img 
              src="/lovable-uploads/f824e481-f31c-4e45-8dae-43f9616aa4d9.png" 
              alt="Trajex Logo" 
              className="h-24 object-contain"
            />
            <Link 
              to="/" 
              className="inline-flex items-center text-gold hover:text-gold/80 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-gold">D'NA Scorecard</h1>
          <p className="text-gold/80 mt-2">Real-time performance tracker</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
        {sections.map((section, index) => (
          <div key={section.id}>
            <Card className="glass-panel">
              <CardHeader>
                <CardTitle className="text-gold">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ScorecardSection
                  {...section}
                  isEven={index % 2 === 0}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scorecard;