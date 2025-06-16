
import { 
  Cloud,
  CloudSun,
  Sun,
  CloudRain,
  MapPin,
  Wind,
  Eye,
  Gauge,
  Droplets,
  Sunrise,
  Sunset,
  Thermometer
} from "lucide-react";

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
  uvIndex: number;
  sunrise: string;
  sunset: string;
  dewPoint: number;
  cloudCover: number;
}

interface MainWeatherDisplayProps {
  weather: WeatherData;
}

const MainWeatherDisplay = ({ weather }: MainWeatherDisplayProps) => {
  const getWeatherIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "sun": <Sun className="w-16 h-16 text-yellow-400" />,
      "cloud": <Cloud className="w-16 h-16 text-gray-300" />,
      "cloud-sun": <CloudSun className="w-16 h-16 text-yellow-400" />,
      "cloud-rain": <CloudRain className="w-16 h-16 text-blue-400" />
    };
    
    return iconMap[iconName] || <Sun className="w-16 h-16 text-yellow-400" />;
  };

  return (
    <div className="bg-black/60 backdrop-blur-2xl rounded-2xl border border-gray-800/50 shadow-xl p-6 space-y-6">
      {/* Header with Location */}
      <div className="flex items-center space-x-2">
        <MapPin className="w-4 h-4 text-cyan-400" />
        <h2 className="text-xl font-light text-white">{weather.city}</h2>
      </div>

      {/* Main Temperature Display */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-baseline space-x-1 mb-2">
            <span className="text-5xl font-light text-white">
              {weather.temperature}
            </span>
            <span className="text-2xl text-gray-400">°C</span>
          </div>
          <p className="text-gray-300 text-lg mb-2">{weather.condition}</p>
          <p className="text-gray-400 text-sm">Feels like {weather.feelsLike}°C</p>
        </div>
        
        <div className="flex-shrink-0">
          {getWeatherIcon(weather.icon)}
        </div>
      </div>

      {/* Weather Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-black/30 rounded-lg p-3 text-center">
          <Wind className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
          <div className="text-white text-sm font-medium">{weather.windSpeed} km/h</div>
          <div className="text-gray-500 text-xs">Wind Speed</div>
        </div>

        <div className="bg-black/30 rounded-lg p-3 text-center">
          <Droplets className="w-5 h-5 text-blue-400 mx-auto mb-2" />
          <div className="text-white text-sm font-medium">{weather.humidity}%</div>
          <div className="text-gray-500 text-xs">Humidity</div>
        </div>

        <div className="bg-black/30 rounded-lg p-3 text-center">
          <Eye className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
          <div className="text-white text-sm font-medium">{weather.visibility} km</div>
          <div className="text-gray-500 text-xs">Visibility</div>
        </div>

        <div className="bg-black/30 rounded-lg p-3 text-center">
          <Gauge className="w-5 h-5 text-purple-400 mx-auto mb-2" />
          <div className="text-white text-sm font-medium">{weather.pressure} hPa</div>
          <div className="text-gray-500 text-xs">Pressure</div>
        </div>
      </div>

      {/* Additional Weather Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-black/30 rounded-lg p-3 text-center">
          <Sunrise className="w-5 h-5 text-orange-400 mx-auto mb-2" />
          <div className="text-white text-sm font-medium">{weather.sunrise}</div>
          <div className="text-gray-500 text-xs">Sunrise</div>
        </div>

        <div className="bg-black/30 rounded-lg p-3 text-center">
          <Sunset className="w-5 h-5 text-red-400 mx-auto mb-2" />
          <div className="text-white text-sm font-medium">{weather.sunset}</div>
          <div className="text-gray-500 text-xs">Sunset</div>
        </div>

        <div className="bg-black/30 rounded-lg p-3 text-center">
          <Thermometer className="w-5 h-5 text-green-400 mx-auto mb-2" />
          <div className="text-white text-sm font-medium">{weather.dewPoint}°C</div>
          <div className="text-gray-500 text-xs">Dew Point</div>
        </div>

        <div className="bg-black/30 rounded-lg p-3 text-center">
          <Cloud className="w-5 h-5 text-gray-400 mx-auto mb-2" />
          <div className="text-white text-sm font-medium">{weather.cloudCover}%</div>
          <div className="text-gray-500 text-xs">Cloud Cover</div>
        </div>
      </div>

      {/* UV Index */}
      <div className="bg-black/30 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white text-sm font-medium mb-1">UV Index</h3>
            <p className="text-gray-400 text-xs">Moderate exposure risk</p>
          </div>
          <div className="text-right">
            <div className="text-white text-2xl font-light">{weather.uvIndex}</div>
            <div className="text-yellow-400 text-xs">Moderate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainWeatherDisplay;
