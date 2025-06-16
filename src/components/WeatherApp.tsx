
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import CompactWeatherDisplay from "./CompactWeatherDisplay";
import { useToast } from "@/hooks/use-toast";
import { fetchWeatherData, WeatherData } from "@/services/weatherService";
import { useTheme } from "@/contexts/ThemeContext";
import { useSettings } from "@/contexts/SettingsContext";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { actualTheme } = useTheme();
  const { settings } = useSettings();

  const handleSearch = async (city: string) => {
    setLoading(true);
    try {
      console.log(`Fetching weather data for: ${city} in ${settings.temperatureUnit}`);
      const data = await fetchWeatherData(city, settings.temperatureUnit);
      console.log('Weather data received:', data);
      
      setWeatherData(data);
      
      toast({
        title: "Weather Updated",
        description: `Weather data loaded for ${city}`,
      });
    } catch (error) {
      console.error('Weather fetch error:', error);
      toast({
        title: "Error",
        description: "Failed to fetch weather data. Please check your API key and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Load default city (Jaipur) on component mount and when temperature unit changes
  useEffect(() => {
    handleSearch("Jaipur");
  }, [settings.temperatureUnit]);

  const themeClasses = actualTheme === 'dark' 
    ? 'from-gray-900 via-gray-800 to-black' 
    : 'from-blue-50 via-white to-gray-100';

  const accentClasses = actualTheme === 'dark' 
    ? 'from-cyan-500/5 to-blue-500/5' 
    : 'from-blue-500/10 to-cyan-500/10';

  const textClasses = actualTheme === 'dark' 
    ? 'from-white via-cyan-200 to-blue-400' 
    : 'from-gray-800 via-blue-600 to-purple-600';

  const subtextClasses = actualTheme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeClasses} relative overflow-hidden transition-all duration-500`}>
      {/* Enhanced Background with animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r ${accentClasses} rounded-full blur-3xl transition-all duration-500 animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl transition-all duration-500 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-2xl transition-all duration-500 animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto p-3 space-y-3">
        {/* Header without border and smaller text */}
        <div className="text-center py-4">
          <h1 className={`text-2xl md:text-3xl font-thin text-transparent bg-clip-text bg-gradient-to-br ${textClasses} mb-2 tracking-wide transition-all duration-500`}>
            WEATHER NEXUS
          </h1>
          <p className={`${subtextClasses} text-sm font-light transition-colors duration-500`}>Real-time Weather Intelligence</p>
          <div className={`mt-2 text-xs ${subtextClasses} opacity-75`}>
            Displaying in {settings.temperatureUnit === 'celsius' ? 'Celsius' : 'Fahrenheit'}
          </div>
        </div>

        {/* Search Section with enhanced styling */}
        <div className="max-w-xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
          <SearchBar onSearch={handleSearch} loading={loading} />
        </div>

        {/* Weather Display with enhanced animations */}
        {weatherData && (
          <div className="max-w-xl mx-auto transform hover:scale-[1.01] transition-all duration-300 animate-fade-in">
            <CompactWeatherDisplay weather={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
