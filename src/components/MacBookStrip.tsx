
import { useState, useEffect } from "react";
import WeatherApp from "./WeatherApp";
import RealTimeClock from "./RealTimeClock";
import RealTimeBattery from "./RealTimeBattery";
import AppleTaskbar from "./AppleTaskbar";
import SettingsPanel from "./SettingsPanel";
import DesktopWallpaper from "./DesktopWallpaper";
import LoadingScreen from "./LoadingScreen";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { SettingsProvider } from "@/contexts/SettingsContext";

const MacBookStrip = () => {
  const [isWeatherAppOpen, setIsWeatherAppOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleWeatherAppClick = () => {
    setIsWeatherAppOpen(!isWeatherAppOpen);
    // Close settings if it's open
    if (isSettingsOpen) setIsSettingsOpen(false);
  };

  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
    // Close weather app if it's open
    if (isWeatherAppOpen) setIsWeatherAppOpen(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <SettingsProvider>
        {/* Loading Screen */}
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        
        {/* Main Content */}
        <div 
          className={`min-h-screen bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center p-8 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          role="main"
          aria-label="MacBook weather display"
        >
          {/* MacBook Container */}
          <div className="relative" role="presentation">
            {/* MacBook Screen with Bezel - Enhanced shadow */}
            <div className="bg-black rounded-xl p-3 shadow-3xl" role="presentation">
              {/* Screen Content */}
              <div 
                className="bg-gray-100 rounded-lg overflow-hidden relative" 
                style={{ width: '1000px', height: '650px' }}
                role="application"
                aria-label="Weather application display"
              >
                {/* Menu Bar with better styling */}
                <div 
                  className="bg-gray-50/95 backdrop-blur-sm h-6 flex items-center justify-between px-3 text-xs border-b border-gray-200/50"
                  role="banner"
                  aria-label="System menu bar"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-black" role="img" aria-label="Apple logo">🍎</div>
                    <div className="text-gray-700 font-medium">Desktop</div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700" role="status" aria-label="System status indicators">
                    <RealTimeBattery />
                    <div aria-label="WiFi connected">📶</div>
                    <div aria-label="Sound on">🔊</div>
                    <div className="font-mono" aria-label="Current time">
                      <RealTimeClock />
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div 
                  className="h-[624px] overflow-hidden relative"
                  role="main"
                  aria-label="Desktop"
                >
                  {/* Desktop Wallpaper */}
                  {!isWeatherAppOpen && !isSettingsOpen && (
                    <div className="absolute inset-0">
                      <DesktopWallpaper />
                    </div>
                  )}

                  {/* Weather App Window with improved scaling */}
                  {isWeatherAppOpen && (
                    <div className="absolute inset-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-3xl overflow-hidden animate-scale-in">
                      {/* Window Title Bar with enhanced styling */}
                      <div className="bg-gray-900/90 backdrop-blur-sm h-8 flex items-center justify-between px-4 border-b border-gray-700/50">
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-1.5">
                            <div 
                              className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 transition-colors shadow-sm"
                              onClick={handleWeatherAppClick}
                            ></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600 transition-colors shadow-sm"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 transition-colors shadow-sm"></div>
                          </div>
                          <span className="text-sm text-gray-200 font-medium">Weather Nexus</span>
                        </div>
                      </div>
                      
                      {/* Weather App Content with optimized scaling */}
                      <div className="h-[calc(100%-2rem)] overflow-hidden">
                        <div className="transform scale-[0.88] origin-top-left w-[1136px] h-[706px]">
                          <WeatherApp />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Settings Panel Window */}
                  {isSettingsOpen && (
                    <SettingsPanel onClose={() => setIsSettingsOpen(false)} />
                  )}
                  
                  {/* Apple-style Taskbar */}
                  <AppleTaskbar 
                    onWeatherAppClick={handleWeatherAppClick}
                    onSettingsClick={handleSettingsClick}
                  />
                </div>
              </div>
            </div>

            {/* MacBook Base/Hinge with enhanced styling */}
            <div 
              className="bg-gradient-to-b from-gray-400 to-gray-600 h-2 rounded-b-lg mx-1 shadow-inner"
              role="presentation"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </SettingsProvider>
    </ThemeProvider>
  );
};

export default MacBookStrip;
