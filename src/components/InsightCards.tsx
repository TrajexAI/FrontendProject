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
    } else if (value === "forecast") {
      navigate("/forecast");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Select onValueChange={handleValueChange}>
        <SelectTrigger className="w-full glass-panel border-gold/30 text-black hover:border-gold/50 focus:ring-gold/30">
          <SelectValue placeholder="View live business performance" />
        </SelectTrigger>
        <SelectContent className="bg-forest-dark border-gold/30">
          <SelectItem value="home" className="text-white hover:bg-forest-light focus:bg-forest-light">
            <div className="space-y-1">
              <div className="font-semibold">Home</div>
              <p className="text-white/80 text-xs">Query your business data with Trajex SuperApp</p>
            </div>
          </SelectItem>
          <SelectItem value="notifications" className="text-white hover:bg-forest-light focus:bg-forest-light">
            <div className="space-y-1">
              <div className="font-semibold">Custom notifications and live opportunities</div>
              <p className="text-white/80 text-xs">Course correct in real-time and never miss a growth opportunity</p>
            </div>
          </SelectItem>
          <SelectItem value="dna-scorecard" className="text-white hover:bg-forest-light focus:bg-forest-light">
            <div className="space-y-1">
              <div className="font-semibold">D'NA scorecard</div>
              <p className="text-white/80 text-xs">Track your business health metrics</p>
            </div>
          </SelectItem>
          <SelectItem value="investor-report" className="text-white hover:bg-forest-light focus:bg-forest-light">
            <div className="space-y-1">
              <div className="font-semibold">Custom report for D'NA investors</div>
              <p className="text-white/80 text-xs">Detailed financial insights for investors</p>
            </div>
          </SelectItem>
          <SelectItem value="forecast" className="text-white hover:bg-forest-light focus:bg-forest-light">
            <div className="space-y-1">
              <div className="font-semibold">Forecast</div>
              <p className="text-white/80 text-xs">Discover future trends and opportunities</p>
            </div>
          </SelectItem>
          <SelectItem value="margin" className="text-white hover:bg-forest-light focus:bg-forest-light">
            <div className="space-y-1">
              <div className="font-semibold">Contribution margin</div>
              <p className="text-white/80 text-xs">Track and optimize your profit margins</p>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InsightCards;