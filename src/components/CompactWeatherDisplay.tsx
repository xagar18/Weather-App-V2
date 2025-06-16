
import { 
  Cloud,
  CloudSun,
  Sun,
  CloudRain,
  MapPin,
  Wind,
  Droplets,
  Thermometer
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  icon: string;
  feelsLike: number;
  temperatureUnit: 'celsius' | 'fahrenheit';
}

interface CompactWeatherDisplayProps {
  weather: WeatherData;
}

const CompactWeatherDisplay = ({ weather }: CompactWeatherDisplayProps) => {
  const { actualTheme } = useTheme();

  const getWeatherIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "sun": <Sun className="w-12 h-12 text-yellow-400 drop-shadow-lg animate-pulse" />,
      "cloud": <Cloud className="w-12 h-12 text-gray-300 drop-shadow-lg" />,
      "cloud-sun": <CloudSun className="w-12 h-12 text-yellow-400 drop-shadow-lg" />,
      "cloud-rain": <CloudRain className="w-12 h-12 text-blue-400 drop-shadow-lg" />
    };
    
    return iconMap[iconName] || <Sun className="w-12 h-12 text-yellow-400 drop-shadow-lg animate-pulse" />;
  };

  const cardClasses = actualTheme === 'dark' 
    ? 'bg-black/60 border-gray-800/50 shadow-2xl shadow-cyan-500/10' 
    : 'bg-white/80 border-gray-200/50 shadow-2xl shadow-blue-500/10';

  const textClasses = actualTheme === 'dark' ? 'text-white' : 'text-gray-800';
  const subtextClasses = actualTheme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const mutedTextClasses = actualTheme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  const metricCardClasses = actualTheme === 'dark' 
    ? 'bg-black/30 hover:bg-black/40' 
    : 'bg-white/50 hover:bg-white/60';

  const tempUnit = weather.temperatureUnit === 'celsius' ? '°C' : '°F';
  const windUnit = weather.temperatureUnit === 'celsius' ? 'km/h' : 'mph';

  return (
    <div className={`${cardClasses} backdrop-blur-2xl rounded-2xl p-4 space-y-4 transition-all duration-500 hover:scale-[1.02] group`}>
      {/* Header with Location */}
      <div className="flex items-center space-x-2">
        <MapPin className="w-4 h-4 text-cyan-400 animate-pulse" />
        <h2 className={`text-lg font-light ${textClasses} transition-colors duration-500`}>{weather.city}</h2>
      </div>

      {/* Main Temperature Display with enhanced styling */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-baseline space-x-1 mb-1">
            <span className={`text-4xl font-light ${textClasses} transition-colors duration-500 group-hover:scale-105 transition-transform`}>
              {weather.temperature}
            </span>
            <span className={`text-xl ${mutedTextClasses} transition-colors duration-500`}>{tempUnit}</span>
          </div>
          <p className={`${subtextClasses} text-sm mb-1 capitalize transition-colors duration-500`}>{weather.condition}</p>
          <p className={`${mutedTextClasses} text-xs transition-colors duration-500`}>Feels like {weather.feelsLike}{tempUnit}</p>
        </div>
        
        <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
          {getWeatherIcon(weather.icon)}
        </div>
      </div>

      {/* Enhanced Weather Metrics with hover effects */}
      <div className="grid grid-cols-4 gap-2">
        <div className={`${metricCardClasses} rounded-lg p-2 text-center transition-all duration-300 hover:scale-105 cursor-pointer`}>
          <Wind className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
          <div className={`${textClasses} text-xs font-medium transition-colors duration-500`}>{weather.windSpeed}</div>
          <div className={`${mutedTextClasses} text-[10px] transition-colors duration-500`}>{windUnit}</div>
        </div>

        <div className={`${metricCardClasses} rounded-lg p-2 text-center transition-all duration-300 hover:scale-105 cursor-pointer`}>
          <Droplets className="w-4 h-4 text-blue-400 mx-auto mb-1" />
          <div className={`${textClasses} text-xs font-medium transition-colors duration-500`}>{weather.humidity}%</div>
          <div className={`${mutedTextClasses} text-[10px] transition-colors duration-500`}>Humidity</div>
        </div>

        <div className={`${metricCardClasses} rounded-lg p-2 text-center transition-all duration-300 hover:scale-105 cursor-pointer`}>
          <Thermometer className="w-4 h-4 text-green-400 mx-auto mb-1" />
          <div className={`${textClasses} text-xs font-medium transition-colors duration-500`}>{weather.visibility}</div>
          <div className={`${mutedTextClasses} text-[10px] transition-colors duration-500`}>km</div>
        </div>

        <div className={`${metricCardClasses} rounded-lg p-2 text-center transition-all duration-300 hover:scale-105 cursor-pointer`}>
          <div className="w-4 h-4 mx-auto mb-1 text-purple-400">⚡</div>
          <div className={`${textClasses} text-xs font-medium transition-colors duration-500`}>{weather.pressure}</div>
          <div className={`${mutedTextClasses} text-[10px] transition-colors duration-500`}>hPa</div>
        </div>
      </div>
    </div>
  );
};

export default CompactWeatherDisplay;
