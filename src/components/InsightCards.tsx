import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InsightCards = () => {
  const navigate = useNavigate();

  const handleValueChange = (value: string) => {
    if (value === "home") {
      navigate("/");
    } else if (value === "dna-scorecard") {
      navigate("/scorecard");
    } else if (value === "investor-report") {
      navigate("/investor-report");
    } else if (value === "margin") {
      navigate("/contribution-margin");
    } else if (value === "notifications") {
      navigate("/notifications");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Select onValueChange={handleValueChange}>
        <SelectTrigger className="w-full glass-panel border-gold/30 text-gold hover:border-gold/50 focus:ring-gold/30">
          <SelectValue placeholder="View live business performance" />
        </SelectTrigger>
        <SelectContent className="bg-obsidian-light/95 border-gold/30">
          <SelectItem value="home" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="space-y-1">
              <div className="font-semibold">Home</div>
              <p className="text-gold-light/80 text-xs">Query your business data with Trajex SuperApp</p>
            </div>
          </SelectItem>
          <SelectItem value="notifications" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="space-y-1">
              <div className="font-semibold">Custom notifications and live opportunities</div>
              <p className="text-gold-light/80 text-xs">Course correct in real-time and never miss a growth opportunity</p>
            </div>
          </SelectItem>
          <SelectItem value="dna-scorecard" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="space-y-1">
              <div className="font-semibold">D'NA scorecard</div>
              <p className="text-gold-light/80 text-xs">Track your business health metrics</p>
            </div>
          </SelectItem>
          <SelectItem value="investor-report" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="space-y-1">
              <div className="font-semibold">Custom report for D'NA investors</div>
              <p className="text-gold-light/80 text-xs">Detailed financial insights for investors</p>
            </div>
          </SelectItem>
          <SelectItem value="profit" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="space-y-1">
              <div className="font-semibold">Your profit, unlocked</div>
              <p className="text-gold-light/80 text-xs">Discover hidden opportunities and maximize your returns</p>
            </div>
          </SelectItem>
          <SelectItem value="growth" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="space-y-1">
              <div className="font-semibold">Growth and trends</div>
              <p className="text-gold-light/80 text-xs">Analyze market patterns and growth trajectories</p>
            </div>
          </SelectItem>
          <SelectItem value="margin" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="space-y-1">
              <div className="font-semibold">Contribution margin</div>
              <p className="text-gold-light/80 text-xs">Track and optimize your profit margins</p>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InsightCards;