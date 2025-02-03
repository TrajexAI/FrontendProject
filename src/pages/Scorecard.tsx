import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScorecardSection } from "@/components/scorecard/ScorecardSection";
import { sections } from "@/data/scorecardSections";
import InsightCards from "@/components/InsightCards";

const Scorecard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="flex justify-between items-center">
          <img 
            src="/lovable-uploads/d1aeb0e9-c67b-4f1b-96e0-94fd3225b22c.png" 
            alt="Logo" 
            className="h-24 object-contain"
          />
        </div>
        <InsightCards />
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