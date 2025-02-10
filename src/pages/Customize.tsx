
import TopBanner from "@/components/TopBanner";
import { ArrowDown, ArrowRight, DollarSign, TrendingUp, PieChart, Building } from "lucide-react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Customize = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const platforms = [
    "Xero",
    "QuickBooks",
    "HubSpot",
    "Monday",
    "Pipedrive",
    "Shopify",
    "WooCommerce"
  ];

  const growthPlans = [
    {
      title: "Improve working capital and cash flow",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Hypergrowth",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Improve profit margin",
      icon: <PieChart className="w-6 h-6" />
    },
    {
      title: "Prepare for a sale or an exit",
      icon: <Building className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-[#F97316]">
      <TopBanner />
      <div className="p-4 pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <CollapsiblePrimitive.Root
              open={isOpen}
              onOpenChange={setIsOpen}
              className="bg-black border border-[#F97316]/20 rounded-lg p-6"
            >
              <CollapsiblePrimitive.Trigger className="flex justify-between items-center w-full">
                <span className="text-xl font-medium">Connected platforms</span>
                <ArrowDown className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </CollapsiblePrimitive.Trigger>
              <CollapsiblePrimitive.Content className="mt-4 space-y-4">
                {platforms.map((platform) => (
                  <div key={platform} className="flex justify-between items-center">
                    <span className="text-lg">{platform}</span>
                    <Switch />
                  </div>
                ))}
              </CollapsiblePrimitive.Content>
            </CollapsiblePrimitive.Root>

            <div className="bg-black border border-[#F97316]/20 rounded-lg p-6">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="text-xl font-medium">Request a custom feature</span>
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-black border border-[#F97316]/20 rounded-lg p-6">
              <h2 className="text-xl font-medium mb-6">Find a growth plan that works for you</h2>
              <div className="space-y-4">
                {growthPlans.map((plan) => (
                  <div 
                    key={plan.title}
                    className="flex items-center space-x-4 p-4 border border-[#F97316]/20 rounded-lg cursor-pointer hover:bg-[#F97316]/5 transition-colors"
                  >
                    {plan.icon}
                    <span className="text-lg">{plan.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
