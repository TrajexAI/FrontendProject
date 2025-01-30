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
    if (value === "dna-scorecard") {
      navigate("/scorecard");
    } else if (value === "investor-report") {
      navigate("/investor-report");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Select onValueChange={handleValueChange}>
        <SelectTrigger className="w-full glass-panel border-gold/30 text-gold hover:border-gold/50 focus:ring-gold/30">
          <SelectValue placeholder="View live business performance" />
        </SelectTrigger>
        <SelectContent className="bg-obsidian-light/95 border-gold/30">
          <SelectItem value="dna-scorecard" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="font-semibold">D'NA scorecard</div>
          </SelectItem>
          <SelectItem value="investor-report" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="font-semibold">Custom report for D'NA investors</div>
          </SelectItem>
          <SelectItem value="profit" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="font-semibold">Your profit, unlocked</div>
          </SelectItem>
          <SelectItem value="growth" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="font-semibold">Growth and trends</div>
          </SelectItem>
          <SelectItem value="margin" className="text-gold hover:bg-gold/20 focus:bg-gold/20 focus:text-gold-light hover:text-gold-light">
            <div className="font-semibold">Contribution margin</div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default InsightCards;