
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScorecardSection } from "@/components/scorecard/ScorecardSection";
import { sections } from "@/data/scorecardSections";

const ScorecardGrid = () => {
  return (
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
  );
};

export default ScorecardGrid;
