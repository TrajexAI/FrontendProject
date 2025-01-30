import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Scorecard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-dark via-obsidian-DEFAULT to-obsidian-light font-quicksand">
      <div className="w-full px-4 py-2 bg-obsidian-dark/50">
        <div className="max-w-4xl mx-auto">
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
      <div className="p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Placeholder for scorecard content */}
          <div className="glass-panel p-6 text-gold">
            Coming soon: Your business metrics and KPIs will be displayed here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;