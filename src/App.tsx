
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Index from "./pages/Index";
import Scorecard from "./pages/Scorecard";
import InvestorReport from "./pages/InvestorReport";
import ContributionMargin from "./pages/ContributionMargin";
import Notifications from "./pages/Notifications";
import Forecast from "./pages/Forecast";
import AskAnything from "./pages/AskAnything";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="pb-20">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ask-anything" element={<AskAnything />} />
            <Route path="/scorecard" element={<Scorecard />} />
            <Route path="/investor-report" element={<InvestorReport />} />
            <Route path="/contribution-margin" element={<ContributionMargin />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
