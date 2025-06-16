
import WeatherApp from "./WeatherApp";

const MacBookContainer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-4">
      {/* MacBook Pro Frame */}
      <div className="relative">
        {/* MacBook Body */}
        <div className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-3xl p-6 shadow-2xl border border-gray-400">
          {/* Screen Frame */}
          <div className="bg-black rounded-2xl p-2 shadow-inner relative">
            {/* Screen Bezel */}
            <div className="absolute inset-1 rounded-xl border border-gray-800"></div>
            
            {/* macOS Desktop */}
            <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-xl overflow-hidden shadow-lg relative z-10 w-[1000px] h-[600px]">
              {/* macOS Menu Bar */}
              <div className="bg-black/20 backdrop-blur-xl px-4 py-1 border-b border-white/10">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-6">
                    <div className="font-semibold">🍎</div>
                    <div className="font-medium">Safari</div>
                    <div className="text-white/70">File</div>
                    <div className="text-white/70">Edit</div>
                    <div className="text-white/70">View</div>
                    <div className="text-white/70">History</div>
                    <div className="text-white/70">Bookmarks</div>
                    <div className="text-white/70">Window</div>
                    <div className="text-white/70">Help</div>
                  </div>
                  <div className="flex items-center space-x-4 text-white/90">
                    <div>🔋 92%</div>
                    <div>📶</div>
                    <div>🔊</div>
                    <div className="font-mono">2:34 PM</div>
                  </div>
                </div>
              </div>

              {/* Browser Window */}
              <div className="absolute top-8 left-4 right-4 bottom-16 bg-white rounded-lg overflow-hidden shadow-2xl">
                {/* Browser Header */}
                <div className="bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    {/* Traffic Lights */}
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer shadow-sm"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer shadow-sm"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer shadow-sm"></div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex items-center space-x-1 text-gray-600">
                      <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded transition-colors text-lg">←</button>
                      <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded transition-colors text-lg opacity-50">→</button>
                      <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded transition-colors text-lg">↻</button>
                    </div>
                    
                    {/* Address Bar */}
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-lg px-4 py-2 text-sm text-gray-700 border border-gray-300 shadow-inner flex items-center space-x-2">
                        <div className="text-green-600">🔒</div>
                        <div className="text-gray-900 font-medium">weather-nexus.netlify.app</div>
                        <div className="text-gray-500">- Premium Weather Analytics</div>
                      </div>
                    </div>
                    
                    {/* Browser Actions */}
                    <div className="flex items-center space-x-2 text-gray-600">
                      <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">⭐</button>
                      <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-200 rounded transition-colors">⋮</button>
                    </div>
                  </div>
                </div>
                
                {/* Browser Content Area with proper scaling */}
                <div className="w-full h-full overflow-hidden bg-white">
                  <div className="transform scale-[0.58] origin-top-left w-[1720px] h-[1000px]">
                    <WeatherApp />
                  </div>
                </div>
              </div>

              {/* macOS Dock */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/20 backdrop-blur-xl rounded-2xl px-4 py-2 border border-white/30 shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg">🌐</div>
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg">📁</div>
                    <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg">🎵</div>
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg">📷</div>
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg">⚙️</div>
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg">🗑️</div>
                  </div>
                </div>
              </div>

              {/* Desktop Icons */}
              <div className="absolute top-12 left-6 space-y-4">
                <div className="flex flex-col items-center space-y-1 text-white cursor-pointer hover:bg-white/10 rounded-lg p-2 transition-colors">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">📊</div>
                  <div className="text-xs font-medium drop-shadow-lg">Weather Data</div>
                </div>
                <div className="flex flex-col items-center space-y-1 text-white cursor-pointer hover:bg-white/10 rounded-lg p-2 transition-colors">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">📈</div>
                  <div className="text-xs font-medium drop-shadow-lg">Analytics</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Apple Logo */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-gray-400 to-gray-500 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full opacity-40"></div>
          </div>
        </div>
        
        {/* MacBook Base/Keyboard */}
        <div className="bg-gradient-to-b from-gray-300 to-gray-400 h-10 rounded-b-3xl shadow-lg relative border-l border-r border-b border-gray-400">
          {/* Trackpad */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-500 rounded-lg shadow-inner border border-gray-600"></div>
          
          {/* Keyboard rows indication */}
          <div className="absolute top-1 left-8 right-8 space-y-0.5">
            <div className="h-0.5 bg-gray-400 rounded-full opacity-60"></div>
            <div className="h-0.5 bg-gray-400 rounded-full opacity-50"></div>
            <div className="h-0.5 bg-gray-400 rounded-full opacity-40"></div>
          </div>
          
          {/* Speaker grilles */}
          <div className="absolute top-2 left-12 w-8 h-1 bg-gray-600 rounded-full opacity-50"></div>
          <div className="absolute top-2 right-12 w-8 h-1 bg-gray-600 rounded-full opacity-50"></div>
        </div>
        
        {/* MacBook Shadow */}
        <div className="absolute -bottom-8 left-4 right-4 h-8 bg-black/20 rounded-full blur-xl"></div>
        
        {/* Desk reflection */}
        <div className="absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default MacBookContainer;
