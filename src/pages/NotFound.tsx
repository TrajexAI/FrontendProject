
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import TopBanner from "@/components/TopBanner";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black">
      <TopBanner />
      <div className="pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#F97316]">404</h1>
          <p className="text-xl text-white mb-4">Oops! Page not found</p>
          <a href="/" className="text-[#F97316] hover:text-[#F97316]/80 underline">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
