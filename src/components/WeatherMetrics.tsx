
import { 
  Droplets,
  Sun,
  Activity,
  Zap,
  TrendingUp,
  BarChart3
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

interface WeatherMetricsProps {
  weather: WeatherData;
}

const WeatherMetrics = ({ weather }: WeatherMetricsProps) => {
  const getUVIndexLevel = (uvIndex: number) => {
    if (uvIndex <= 2) return { level: "Low", color: "text-green-400", bg: "bg-green-500/10" };
    if (uvIndex <= 5) return { level: "Moderate", color: "text-yellow-400", bg: "bg-yellow-500/10" };
    if (uvIndex <= 7) return { level: "High", color: "text-orange-400", bg: "bg-orange-500/10" };
    return { level: "Very High", color: "text-red-400", bg: "bg-red-500/10" };
  };

  const getHumidityLevel = (humidity: number) => {
    if (humidity < 30) return { level: "Dry", color: "text-orange-400" };
    if (humidity <= 60) return { level: "Comfortable", color: "text-green-400" };
    return { level: "Humid", color: "text-blue-400" };
  };

  const uvInfo = getUVIndexLevel(weather.uvIndex);
  const humidityInfo = getHumidityLevel(weather.humidity);

  return (
    <div className="space-y-6">
      {/* Humidity Card */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/50 to-cyan-600/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
        <div className="relative bg-black/60 backdrop-blur-2xl rounded-2xl border border-gray-800/50 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <Droplets className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white text-lg font-light">Humidity</h3>
                <p className="text-gray-400 text-sm">{humidityInfo.level}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-light text-white">{weather.humidity}%</div>
              <div className={`text-sm ${humidityInfo.color}`}>{humidityInfo.level}</div>
            </div>
          </div>
          
          {/* Humidity Progress Bar */}
          <div className="space-y-2">
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${weather.humidity}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      </div>

      {/* UV Index Card */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600/50 to-orange-600/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
        <div className="relative bg-black/60 backdrop-blur-2xl rounded-2xl border border-gray-800/50 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`p-3 ${uvInfo.bg} rounded-xl border border-yellow-500/20`}>
                <Sun className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white text-lg font-light">UV Index</h3>
                <p className={`text-sm ${uvInfo.color}`}>{uvInfo.level}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-light text-white">{weather.uvIndex}</div>
              <div className={`text-sm ${uvInfo.color}`}>{uvInfo.level}</div>
            </div>
          </div>
          
          {/* UV Index Scale */}
          <div className="space-y-2">
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-green-400 via-yellow-400 via-orange-400 to-red-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(weather.uvIndex / 11) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>Moderate</span>
              <span>High</span>
              <span>Extreme</span>
            </div>
          </div>
        </div>
      </div>

      {/* Air Quality Simulation */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600/50 to-green-600/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
        <div className="relative bg-black/60 backdrop-blur-2xl rounded-2xl border border-gray-800/50 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <Activity className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white text-lg font-light">Air Quality</h3>
                <p className="text-emerald-400 text-sm">Excellent</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-light text-white">95</div>
              <div className="text-sm text-emerald-400">AQI</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">PM2.5</span>
              <span className="text-emerald-400">12 μg/m³</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">PM10</span>
              <span className="text-emerald-400">18 μg/m³</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">O₃</span>
              <span className="text-emerald-400">65 μg/m³</span>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Analytics */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
        <div className="relative bg-black/60 backdrop-blur-2xl rounded-2xl border border-gray-800/50 p-6 shadow-xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white text-lg font-light">Weather Analytics</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-gray-800/50">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Temperature Trend</span>
              </div>
              <span className="text-green-400 text-sm">+2°C ↗</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-gray-800/50">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Comfort Index</span>
              </div>
              <span className="text-yellow-400 text-sm">Very High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherMetrics;
