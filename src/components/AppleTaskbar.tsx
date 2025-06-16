
import { Cloud, Settings } from "lucide-react";

interface AppleTaskbarProps {
  onWeatherAppClick: () => void;
  onSettingsClick: () => void;
}

const AppleTaskbar = ({ onWeatherAppClick, onSettingsClick }: AppleTaskbarProps) => {
  return (
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/20 backdrop-blur-2xl rounded-xl px-3 py-2 border border-white/30 shadow-2xl">
        <div className="flex items-center space-x-2">
          {/* Weather App Icon */}
          <div 
            className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer"
            title="Weather App"
            onClick={onWeatherAppClick}
          >
            <Cloud className="w-5 h-5 text-white" />
          </div>
          
          {/* Settings Icon */}
          <div 
            className="w-10 h-10 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer"
            title="Settings"
            onClick={onSettingsClick}
          >
            <Settings className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleTaskbar;
