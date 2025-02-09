
import InsightCards from "@/components/InsightCards";

const ScorecardHeader = () => {
  return (
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
  );
};

export default ScorecardHeader;
