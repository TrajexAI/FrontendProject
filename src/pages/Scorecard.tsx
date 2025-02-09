
import ScorecardHeader from "@/components/scorecard/ScorecardHeader";
import ScorecardGrid from "@/components/scorecard/ScorecardGrid";

const Scorecard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <ScorecardHeader />
      <ScorecardGrid />
    </div>
  );
};

export default Scorecard;
