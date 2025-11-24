import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";
import { MapPin, Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");
  const { actualTheme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  const popularCities = [
    { name: "Jaipur", flag: "🇮🇳" },
    { name: "New Delhi", flag: "🇮🇳" },
    { name: "Mumbai", flag: "🇮🇳" },
    { name: "London", flag: "🇬🇧" },
  ];

  const cardClasses =
    actualTheme === "dark"
      ? "bg-gray-900/50 border-gray-800"
      : "bg-white/70 border-gray-200";

  const inputClasses =
    actualTheme === "dark"
      ? "bg-black/50 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
      : "bg-white/80 border-gray-300 text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20";

  const cityButtonClasses =
    actualTheme === "dark"
      ? "bg-black/30 hover:bg-black/50 border-gray-800 hover:border-gray-600 text-white"
      : "bg-white/50 hover:bg-white/70 border-gray-300 hover:border-gray-400 text-gray-800";

  return (
    <div
      className={`${cardClasses} backdrop-blur-xl rounded-2xl p-4 border shadow-xl transition-all duration-500`}
    >
      <form onSubmit={handleSubmit} className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <MapPin
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              actualTheme === "dark" ? "text-gray-400" : "text-gray-500"
            } transition-colors duration-500`}
          />
          <Input
            type="text"
            placeholder="Search city..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`pl-10 pr-4 py-4 text-sm rounded-xl transition-all duration-500 ${inputClasses}`}
          />
        </div>
        <Button
          type="submit"
          disabled={loading || !query.trim()}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-4 text-sm rounded-xl transition-all duration-300"
        >
          {loading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white"></div>
              <span>Loading...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Search</span>
            </div>
          )}
        </Button>
      </form>

      {/* Enhanced Popular Cities */}
      <div className="grid grid-cols-4 gap-2">
        {popularCities.map((city) => (
          <button
            key={city.name}
            onClick={() => {
              setQuery(city.name);
              onSearch(city.name);
            }}
            className={`px-3 py-2 border rounded-lg transition-all duration-300 text-center hover:scale-105 ${cityButtonClasses}`}
          >
            <div className="text-sm mb-1">{city.flag}</div>
            <div className="text-xs font-medium">{city.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
