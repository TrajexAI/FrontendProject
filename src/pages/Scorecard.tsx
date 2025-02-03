import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScorecardSection } from "@/components/scorecard/ScorecardSection";
import { sections } from "@/data/scorecardSections";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Scorecard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <img 
              src="/lovable-uploads/d1aeb0e9-c67b-4f1b-96e0-94fd3225b22c.png" 
              alt="Logo" 
              className="h-24 object-contain"
            />
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2">
                <Menu className="h-6 w-6 text-gold" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-forest-dark">
                <DropdownMenuItem className="text-gold">
                  <Link to="/">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gold">
                  <Link to="/scorecard">Scorecard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gold">
                  <Link to="/investor-report">Investor Report</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gold">
                  <Link to="/contribution-margin">Contribution Margin</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gold">
                  <Link to="/notifications">Notifications</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gold">
                  <Link to="/forecast">Forecast</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <h1 className="text-2xl font-bold text-gold">D'NA Scorecard</h1>
          <p className="text-black mt-2">Real-time performance tracker</p>
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