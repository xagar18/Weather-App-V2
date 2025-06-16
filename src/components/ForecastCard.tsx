
import { 
  Cloud,
  CloudSun,
  Sun,
  CloudRain,
  Droplets,
  TrendingUp,
  TrendingDown
} from "lucide-react";

interface ForecastData {
  day: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
  precipitation: number;
}

interface ForecastCardProps {
  forecast: ForecastData;
}

const ForecastCard = ({ forecast }: ForecastCardProps) => {
  const getWeatherIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "sun": <Sun className="w-12 h-12 text-yellow-400 drop-shadow-lg" />,
      "cloud": <Cloud className="w-12 h-12 text-gray-300 drop-shadow-lg" />,
      "cloud-sun": <CloudSun className="w-12 h-12 text-yellow-400 drop-shadow-lg" />,
      "cloud-rain": <CloudRain className="w-12 h-12 text-blue-400 drop-shadow-lg" />
    };
    
    return iconMap[iconName] || <Sun className="w-12 h-12 text-yellow-400 drop-shadow-lg" />;
  };

  const isToday = forecast.day === "Today";

  return (
    <div className={`${
      isToday 
        ? 'bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border-cyan-500/30' 
        : 'bg-gray-900/50 border-gray-800'
    } backdrop-blur-xl rounded-2xl p-6 border hover:border-gray-700 hover:bg-gray-900/60 hover:scale-105 transition-all duration-500 group cursor-pointer relative overflow-hidden`}>
      
      {/* Today indicator */}
      {isToday && (
        <div className="absolute top-2 right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
      )}

      <div className="relative z-10 text-center space-y-4">
        {/* Day */}
        <div className={`${
          isToday ? 'text-cyan-300' : 'text-gray-400'
        } text-sm font-medium uppercase tracking-wider`}>
          {forecast.day}
        </div>
        
        {/* Weather Icon */}
        <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
          {getWeatherIcon(forecast.icon)}
        </div>
        
        {/* Temperature Range */}
        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <TrendingUp className="w-4 h-4 text-red-400" />
            <span className="text-2xl font-light text-white">{forecast.high}°</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <TrendingDown className="w-4 h-4 text-blue-400" />
            <span className="text-lg text-gray-400">{forecast.low}°</span>
          </div>
        </div>
        
        {/* Condition */}
        <div className="text-xs text-gray-500 uppercase tracking-wide">
          {forecast.condition}
        </div>
        
        {/* Precipitation */}
        <div className="flex items-center justify-center space-x-2 text-blue-400">
          <Droplets className="w-4 h-4" />
          <span className="text-sm font-medium">{forecast.precipitation}%</span>
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div 
              className={`${
                forecast.precipitation > 70 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                  : forecast.precipitation > 30 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400'
                    : 'bg-gradient-to-r from-green-400 to-cyan-400'
              } h-1.5 rounded-full transition-all duration-1000 group-hover:shadow-lg`}
              style={{ width: `${forecast.precipitation}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500">
            {forecast.precipitation > 70 ? 'High' : forecast.precipitation > 30 ? 'Moderate' : 'Low'} chance of rain
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
