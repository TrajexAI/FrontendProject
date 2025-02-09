
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNav from "./components/BottomNav";
import Index from "./pages/Index";
import Today from "./pages/Today";
import Coach from "./pages/Coach";
import CoachScreen2 from "./pages/CoachScreen2";
import Progress from "./pages/Progress";
import Customize from "./pages/Customize";
import Forecast from "./pages/Forecast";
import NotFound from "./pages/NotFound";
import ProductAnalysisScreen from "./pages/ProductAnalysisScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="pb-20">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/index" element={<Index />} />
            <Route path="/ask-anything" element={<Coach />} />
            <Route path="/coach-screen-2" element={<CoachScreen2 />} />
            <Route path="/scorecard" element={<Progress />} />
            <Route path="/notifications" element={<Customize />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/product-analysis" element={<ProductAnalysisScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
