
import { useState, useEffect } from 'react';

const RealTimeBattery = () => {
  const [batteryLevel, setBatteryLevel] = useState(87);
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    let batteryAPI: any = null;

    const updateBatteryFromAPI = (battery: any) => {
      const level = Math.round(battery.level * 100);
      setBatteryLevel(level);
      setIsCharging(battery.charging);
      
      console.log(`Battery API - Level: ${level}%, Charging: ${battery.charging}`);
    };

    const updateBatterySimulated = () => {
      const now = new Date();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      
      // More realistic battery simulation
      const timeBasedLevel = 85 + Math.sin(minutes / 10) * 8; // Varies between 77-93
      const secondVariation = Math.sin(seconds / 30) * 2; // Small variation
      const level = Math.round(Math.max(20, Math.min(100, timeBasedLevel + secondVariation)));
      
      setBatteryLevel(level);
      
      // Simulate realistic charging patterns - charging more likely when battery is low
      const chargingProbability = level < 50 ? 0.7 : level < 80 ? 0.3 : 0.1;
      setIsCharging(Math.random() < chargingProbability);
      
      console.log(`Simulated Battery - Level: ${level}%, Charging: ${Math.random() < chargingProbability}`);
    };

    // Try to use the real Battery API first
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        batteryAPI = battery;
        
        // Initial update
        updateBatteryFromAPI(battery);
        
        // Listen for battery events
        battery.addEventListener('chargingchange', () => updateBatteryFromAPI(battery));
        battery.addEventListener('levelchange', () => updateBatteryFromAPI(battery));
        
        console.log('Using real Battery API');
      }).catch(() => {
        console.log('Battery API failed, using simulation');
        updateBatterySimulated();
      });
    } else {
      console.log('Battery API not supported, using simulation');
      updateBatterySimulated();
    }

    // Fallback timer for simulation or API refresh
    const timer = setInterval(() => {
      if (batteryAPI) {
        updateBatteryFromAPI(batteryAPI);
      } else {
        updateBatterySimulated();
      }
    }, 3000); // Update every 3 seconds for better synchronization

    return () => {
      clearInterval(timer);
      if (batteryAPI) {
        batteryAPI.removeEventListener('chargingchange', updateBatteryFromAPI);
        batteryAPI.removeEventListener('levelchange', updateBatteryFromAPI);
      }
    };
  }, []);

  const getBatteryColor = () => {
    if (isCharging) return 'bg-green-500';
    if (batteryLevel > 50) return 'bg-green-500';
    if (batteryLevel > 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex items-center space-x-1" aria-label={`Battery ${isCharging ? 'charging' : 'discharging'} at ${batteryLevel} percent`}>
      {isCharging && <span className="text-green-600 animate-pulse">⚡</span>}
      <span className="text-xs font-mono">{batteryLevel}%</span>
      <div className="w-6 h-3 border border-gray-600 rounded-sm relative bg-white">
        <div 
          className={`h-full rounded-sm absolute top-0 left-0 transition-all duration-500 ${getBatteryColor()}`}
          style={{ width: `${Math.max(2, batteryLevel)}%` }}
        ></div>
        <div className="w-0.5 h-1 bg-gray-600 rounded-r absolute -right-1 top-1"></div>
      </div>
    </div>
  );
};

export default RealTimeBattery;
