
import ForecastCard from "./ForecastCard";
import { Calendar, TrendingUp } from "lucide-react";

interface ForecastData {
  day: string;
  high: number;
  low: number;
  condition: string;
  icon: string;
  precipitation: number;
}

interface WeeklyForecastProps {
  forecast: ForecastData[];
}

const WeeklyForecast = ({ forecast }: WeeklyForecastProps) => {
  // Generate animation styles for forecast cards
  const getCardStyle = (index: number) => ({
    animationDelay: `${index * 100}ms`,
    animation: 'fadeInUp 0.6s ease-out forwards'
  });

  return (
    <div className="relative group">
      {/* Holographic Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/50 via-blue-600/50 to-cyan-600/50 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
      
      <div className="relative bg-black/60 backdrop-blur-2xl rounded-3xl border border-gray-800/50 shadow-2xl p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
              <Calendar className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h2 className="text-3xl font-light text-white tracking-wide">7-Day Forecast</h2>
              <p className="text-gray-400 text-lg">Extended weather outlook</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>Accuracy: 94%</span>
          </div>
        </div>

        {/* Forecast Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {forecast.map((item, index) => (
            <div
              key={index}
              className="transform transition-all duration-500 hover:scale-105"
              style={getCardStyle(index)}
            >
              <ForecastCard forecast={item} />
            </div>
          ))}
        </div>

        {/* Weekly Summary */}
        <div className="mt-8 pt-6 border-t border-gray-800/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-light text-white">
                {Math.max(...forecast.map(f => f.high))}°
              </div>
              <div className="text-gray-400 text-sm">Week High</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-light text-white">
                {Math.min(...forecast.map(f => f.low))}°
              </div>
              <div className="text-gray-400 text-sm">Week Low</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-light text-white">
                {Math.round(forecast.reduce((acc, f) => acc + f.precipitation, 0) / forecast.length)}%
              </div>
              <div className="text-gray-400 text-sm">Avg Precipitation</div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default WeeklyForecast;
