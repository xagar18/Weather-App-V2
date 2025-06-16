
import { Monitor, Smartphone } from "lucide-react";

const MobileRedirect = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 font-mono">
      <div className="max-w-md w-full text-center">
        {/* Device Icons */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <div className="text-gray-400">
            <Smartphone size={48} />
          </div>
          <div className="text-2xl text-gray-500">≠</div>
          <div className="text-cyan-400">
            <Monitor size={48} />
          </div>
        </div>

        {/* Main Message */}
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6 mb-6">
          <h1 className="text-cyan-400 text-xl font-bold mb-4">Weather Nexus</h1>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            This MacBook-style weather app is designed for desktop screens.
          </p>
          <p className="text-yellow-400 text-sm mb-4">
            Please visit from a desktop or laptop for the best experience.
          </p>
          <div className="text-gray-500 text-xs">
            Minimum screen width: 1024px
          </div>
        </div>

        {/* Footer */}
        <div className="text-gray-600 text-xs">
          Weather Nexus © 2024 • Built with ❤️ by Sagar
        </div>
      </div>
    </div>
  );
};

export default MobileRedirect;
