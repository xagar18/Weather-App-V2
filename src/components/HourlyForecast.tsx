
import { 
  Cloud,
  CloudSun,
  Sun,
  CloudRain,
  Clock
} from "lucide-react";

interface HourlyData {
  time: string;
  temperature: number;
  condition: string;
  icon: string;
  precipitation: number;
}

interface HourlyForecastProps {
  data: HourlyData[];
}

const HourlyForecast = ({ data }: HourlyForecastProps) => {
  const getWeatherIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "sun": <Sun className="w-8 h-8 text-yellow-400" />,
      "cloud": <Cloud className="w-8 h-8 text-gray-300" />,
      "cloud-sun": <CloudSun className="w-8 h-8 text-yellow-400" />,
      "cloud-rain": <CloudRain className="w-8 h-8 text-blue-400" />
    };
    
    return iconMap[iconName] || <Sun className="w-8 h-8 text-yellow-400" />;
  };

  return (
    <div className="flex overflow-x-auto space-x-6 pb-4">
      {data.map((hour, index) => (
        <div
          key={index}
          className="flex-shrink-0 bg-black/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-gray-700 hover:bg-black/40 transition-all duration-300 group min-w-[120px]"
        >
          <div className="text-center space-y-4">
            {/* Time */}
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>{hour.time}</span>
            </div>
            
            {/* Weather Icon */}
            <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
              {getWeatherIcon(hour.icon)}
            </div>
            
            {/* Temperature */}
            <div className="text-2xl font-light text-white">
              {hour.temperature}°
            </div>
            
            {/* Precipitation */}
            <div className="text-xs text-blue-400">
              {hour.precipitation}%
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1 rounded-full transition-all duration-1000"
                style={{ width: `${hour.precipitation}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
