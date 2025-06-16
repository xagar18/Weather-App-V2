
import { useEffect, useState } from "react";
import MacBookStrip from "@/components/MacBookStrip";
import MobileRedirect from "./MobileRedirect";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileDevice = mobileRegex.test(userAgent) || window.innerWidth < 768;
      
      setIsMobile(isMobileDevice);
      setIsLoading(false);
    };

    checkMobile();
    
    // Also check on window resize
    const handleResize = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return isMobile ? <MobileRedirect /> : <MacBookStrip />;
};

export default Index;
