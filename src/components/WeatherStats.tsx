
import { 
  Eye,
  Gauge,
  Droplets,
  Wind,
  Sun,
  CloudRain,
  Thermometer,
  Activity,
  Compass,
  Zap
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

interface WeatherStatsProps {
  weather: WeatherData;
}

const WeatherStats = ({ weather }: WeatherStatsProps) => {
  const stats = [
    {
      icon: <Eye className="w-6 h-6 text-emerald-400" />,
      label: "Visibility",
      value: weather.visibility,
      unit: "km",
      color: "from-emerald-400 to-teal-400",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: <Gauge className="w-6 h-6 text-orange-400" />,
      label: "Pressure",
      value: weather.pressure,
      unit: "hPa",
      color: "from-orange-400 to-red-400",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: <Sun className="w-6 h-6 text-yellow-400" />,
      label: "UV Index",
      value: weather.uvIndex,
      unit: "",
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: <Wind className="w-6 h-6 text-cyan-400" />,
      label: "Wind Speed",
      value: weather.windSpeed,
      unit: "km/h",
      color: "from-cyan-400 to-blue-400",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: <Thermometer className="w-6 h-6 text-red-400" />,
      label: "Feels Like",
      value: weather.feelsLike,
      unit: "°C",
      color: "from-red-400 to-pink-400",
      bgColor: "bg-red-500/10"
    },
    {
      icon: <Droplets className="w-6 h-6 text-blue-400" />,
      label: "Humidity",
      value: weather.humidity,
      unit: "%",
      color: "from-blue-400 to-indigo-400",
      bgColor: "bg-blue-500/10"
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-light text-white mb-8 flex items-center gap-3">
        <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"></div>
        Atmospheric Conditions
      </h3>
      
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 hover:border-gray-700 hover:bg-gray-900/60 transition-all duration-500 group cursor-pointer"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className={`p-4 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300 border border-gray-800`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-gray-400 text-sm font-light uppercase tracking-wider">{stat.label}</div>
                <div className="text-3xl font-light text-white flex items-baseline space-x-2 mt-1">
                  <span>{stat.value}</span>
                  {stat.unit && <span className="text-lg text-gray-500">{stat.unit}</span>}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <div className="w-3 h-3 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300"></div>
              <div className="w-2 h-2 bg-gray-700 rounded-full group-hover:bg-gray-500 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced Weather Summary Card */}
      <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-light text-white flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-400" />
            Weather Intelligence
          </h4>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">AI Analysis</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-300 text-sm leading-relaxed">
            Current conditions in {weather.city} show {weather.condition.toLowerCase()} with optimal visibility at {weather.visibility}km. 
            Temperature feels comfortable at {weather.feelsLike}°C with {weather.humidity}% humidity levels.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
            <div className="flex items-center space-x-3">
              <Compass className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase">Air Quality</div>
                <div className="text-sm text-white">Excellent</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Activity className="w-4 h-4 text-green-400" />
              <div>
                <div className="text-xs text-gray-500 uppercase">Comfort Level</div>
                <div className="text-sm text-white">Very High</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherStats;
