
import { 
  Cloud,
  CloudSun,
  Sun,
  CloudRain,
  Thermometer,
  Activity,
  Wind,
  Eye
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
}

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const getWeatherIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "sun": <Sun className="w-32 h-32 text-yellow-400 drop-shadow-2xl" />,
      "cloud": <Cloud className="w-32 h-32 text-gray-300 drop-shadow-2xl" />,
      "cloud-sun": <CloudSun className="w-32 h-32 text-yellow-400 drop-shadow-2xl" />,
      "cloud-rain": <CloudRain className="w-32 h-32 text-blue-400 drop-shadow-2xl" />
    };
    
    return iconMap[iconName] || <Sun className="w-32 h-32 text-yellow-400 drop-shadow-2xl" />;
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-3xl"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-5xl font-thin text-white mb-3 tracking-wide">{weather.city}</h2>
            <p className="text-gray-400 text-xl font-light">{weather.condition}</p>
            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
              <div className="w-px h-3 bg-gray-700"></div>
              <span>{new Date().toLocaleDateString()} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        </div>

        {/* Main Weather Display */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1">
            <div className="flex items-baseline space-x-3 mb-6">
              <span className="text-9xl font-ultralight text-white tracking-tight">
                {weather.temperature}
              </span>
              <span className="text-4xl text-gray-400 font-light">°C</span>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Thermometer className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Feels like {weather.feelsLike}°</span>
              </div>
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-purple-400" />
                <span className="text-sm">UV Index {weather.uvIndex}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">{weather.windSpeed} km/h</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-green-400" />
                <span className="text-sm">{weather.visibility} km</span>
              </div>
            </div>
          </div>
          
          <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
            {getWeatherIcon(weather.icon)}
          </div>
        </div>

        {/* Enhanced Weather Metrics */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-800 hover:border-gray-700 hover:bg-black/40 transition-all duration-300">
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">Humidity</div>
            <div className="text-3xl font-light text-white mb-3">{weather.humidity}%</div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${weather.humidity}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-800 hover:border-gray-700 hover:bg-black/40 transition-all duration-300">
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">Pressure</div>
            <div className="text-3xl font-light text-white mb-1">{weather.pressure}</div>
            <div className="text-gray-500 text-sm">hPa</div>
          </div>

          <div className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm border border-gray-800 hover:border-gray-700 hover:bg-black/40 transition-all duration-300">
            <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">Wind Speed</div>
            <div className="text-3xl font-light text-white mb-1">{weather.windSpeed}</div>
            <div className="text-gray-500 text-sm">km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
