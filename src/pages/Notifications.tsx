import { Card } from "@/components/ui/card";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "Revenue Alert",
      message: "Monthly revenue is 15% above target. Great performance!",
      time: "2 hours ago"
    },
    {
      id: 2,
      title: "Inventory Warning",
      message: "Stock levels for 'Product X' are below threshold. Consider reordering.",
      time: "5 hours ago"
    },
    {
      id: 3,
      title: "Customer Insight",
      message: "Significant increase in repeat customers this month.",
      time: "1 day ago"
    }
  ];

  const opportunities = [
    {
      id: 1,
      title: "Cross-selling Opportunity",
      description: "Customers who bought Product A are likely to be interested in Product B",
      potential: "High",
      impact: "+12% Revenue"
    },
    {
      id: 2,
      title: "Market Expansion",
      description: "Growing demand detected in the Southeast region",
      potential: "Medium",
      impact: "+8% Growth"
    }
  ];

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
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Notifications Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gold">Notifications</h2>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="glass-panel rounded-xl p-4 animate-fade-in backdrop-blur-lg border border-gold/20 hover:border-gold/30 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-gold font-semibold">{notification.title}</h3>
                    <p className="text-gold-light/80 mt-1">{notification.message}</p>
                  </div>
                  <span className="text-xs text-gold-light/60">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Live Opportunities Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gold">Live Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {opportunities.map((opportunity) => (
              <Card
                key={opportunity.id}
                className="glass-panel border-gold/20 hover:border-gold/30 transition-all"
              >
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-gold font-semibold">{opportunity.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-gold/20 text-gold">
                      {opportunity.potential}
                    </span>
                  </div>
                  <p className="text-gold-light/80">{opportunity.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gold-light">Potential Impact:</span>
                    <span className="text-gold font-semibold">{opportunity.impact}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notifications;