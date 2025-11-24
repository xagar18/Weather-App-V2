import { Battery, BatteryCharging } from "lucide-react";
import { useEffect, useState } from "react";

// Clock Component
export const RealTimeClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return <span>{formatTime(time)}</span>;
};

// Battery Component
export const RealTimeBattery = () => {
  const [batteryLevel, setBatteryLevel] = useState(87);
  const [isCharging, setIsCharging] = useState(false);

  useEffect(() => {
    let batteryAPI = null;

    const updateBatteryFromAPI = (battery) => {
      const level = Math.round(battery.level * 100);
      setBatteryLevel(level);
      setIsCharging(battery.charging);
    };

    const updateBatterySimulated = () => {
      const now = new Date();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const timeBasedLevel = 85 + Math.sin(minutes / 10) * 8;
      const secondVariation = Math.sin(seconds / 30) * 2;
      const level = Math.round(
        Math.max(20, Math.min(100, timeBasedLevel + secondVariation))
      );

      setBatteryLevel(level);

      const chargingProbability = level < 50 ? 0.7 : level < 80 ? 0.3 : 0.1;
      setIsCharging(Math.random() < chargingProbability);
    };

    if ("getBattery" in navigator) {
      (navigator as any)
        .getBattery()
        .then((battery: any) => {
          batteryAPI = battery;
          updateBatteryFromAPI(battery);
          battery.addEventListener("chargingchange", () =>
            updateBatteryFromAPI(battery)
          );
          battery.addEventListener("levelchange", () =>
            updateBatteryFromAPI(battery)
          );
        })
        .catch(() => {
          updateBatterySimulated();
          setInterval(updateBatterySimulated, 5000);
        });
    } else {
      updateBatterySimulated();
      const simulationTimer = setInterval(updateBatterySimulated, 5000);
      return () => clearInterval(simulationTimer);
    }

    return () => {
      if (batteryAPI) {
        batteryAPI.removeEventListener("chargingchange", () =>
          updateBatteryFromAPI(batteryAPI)
        );
        batteryAPI.removeEventListener("levelchange", () =>
          updateBatteryFromAPI(batteryAPI)
        );
      }
    };
  }, []);

  const getBatteryColor = () => {
    if (isCharging) return "text-green-400";
    if (batteryLevel <= 20) return "text-red-400";
    if (batteryLevel <= 50) return "text-yellow-400";
    return "text-white";
  };

  const BatteryIcon = isCharging ? BatteryCharging : Battery;

  return (
    <div className="flex items-center space-x-2">
      <BatteryIcon className={`w-5 h-5 ${getBatteryColor()}`} />
      <span className={getBatteryColor()}>{batteryLevel}%</span>
    </div>
  );
};

// Combined SystemInfo Component
const SystemInfo = () => {
  return (
    <div className="flex items-center space-x-6 text-sm">
      <RealTimeClock />
      <RealTimeBattery />
    </div>
  );
};

export default SystemInfo;
