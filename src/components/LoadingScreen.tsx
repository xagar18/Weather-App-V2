import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showAppleLogo, setShowAppleLogo] = useState(false);
  const { actualTheme } = useTheme();

  const startupSteps = [
    "System initializing...",
    "Loading kernel modules...",
    "Starting system services...",
    "Mounting file systems...",
    "Initializing network interfaces...",
    "Loading weather services...",
    "Starting Weather Nexus...",
    "System ready!"
  ];

  useEffect(() => {
    // Show Apple logo first - reduced from 500ms to 200ms
    const logoTimer = setTimeout(() => {
      setShowAppleLogo(true);
    }, 200);

    // Start the boot sequence after logo - reduced from 2000ms to 800ms
    const bootTimer = setTimeout(() => {
      setShowAppleLogo(false);
      startBootSequence();
    }, 800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(bootTimer);
    };
  }, []);

  const startBootSequence = () => {
    let step = 0;
    let progressValue = 0;

    // Reduced interval from 600ms to 150ms for much faster loading
    const interval = setInterval(() => {
      if (step < startupSteps.length) {
        setCurrentStep(step);
        step++;
        
        // Update progress
        progressValue = Math.min((step / startupSteps.length) * 100, 100);
        setProgress(progressValue);
        
        if (step >= startupSteps.length) {
          // Reduced final delay from 800ms to 200ms
          setTimeout(() => {
            onLoadingComplete();
          }, 200);
          clearInterval(interval);
        }
      }
    }, 150);
  };

  const isDark = actualTheme === 'dark';

  if (showAppleLogo) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-500`}>
        <div className="text-center">
          <div className="text-8xl mb-8 animate-pulse">🍎</div>
          <div className={`w-32 h-1 ${isDark ? 'bg-gray-800' : 'bg-gray-200'} rounded-full mx-auto overflow-hidden`}>
            <div className={`h-full ${isDark ? 'bg-white' : 'bg-black'} rounded-full animate-pulse`} style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isDark ? 'bg-black' : 'bg-gray-900'} font-mono transition-colors duration-500`}>
      <div className="max-w-2xl w-full px-8">
        {/* Terminal Window */}
        <div className={`${isDark ? 'bg-gray-900/95' : 'bg-black/95'} backdrop-blur-sm rounded-lg border ${isDark ? 'border-gray-700/50' : 'border-gray-600/50'} shadow-2xl transition-all duration-500`}>
          {/* Terminal Header */}
          <div className={`${isDark ? 'bg-gray-800/95' : 'bg-gray-800/95'} px-4 py-3 rounded-t-lg flex items-center space-x-3 border-b ${isDark ? 'border-gray-700/50' : 'border-gray-600/50'}`}>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-300 text-sm font-medium">Terminal — System Boot</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 space-y-3">
            {/* Boot Messages */}
            <div className="space-y-2 min-h-[200px]">
              {startupSteps.slice(0, currentStep + 1).map((step, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-green-400 text-xs">$</span>
                  <span className={`text-xs ${index === currentStep ? 'text-cyan-400' : 'text-gray-400'} transition-colors duration-300`}>
                    {step}
                  </span>
                </div>
              ))}
              
              {/* Blinking cursor */}
              {currentStep < startupSteps.length && (
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 text-xs">$</span>
                  <span className="text-cyan-400 text-xs animate-pulse">_</span>
                </div>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 pt-4 border-t border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-xs">System Boot Progress</span>
                <span className="text-cyan-400 text-xs">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Status */}
            <div className="text-center mt-4">
              <div className="text-gray-500 text-xs">
                {progress < 100 ? 'Booting macOS...' : 'Welcome to Weather Nexus'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-6">
          <div className="text-gray-600 text-xs">
            Weather Nexus © 2024 • Built with ❤️ by Sagar
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
