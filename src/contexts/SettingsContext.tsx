import { createContext, useContext, useEffect, useState } from "react";

export const defaultSettings = {
  fontSize: 16,
  brightness: 100,
  eyeSavingMode: false,
  highContrast: false,
  autoRefresh: true,
  temperatureUnit: "celsius",
};

const SettingsContext = createContext(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("weatherAppSettings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  // Save settings to localStorage and apply them
  useEffect(() => {
    localStorage.setItem("weatherAppSettings", JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = (newSettings) => {
    // Apply brightness (max 100%)
    const clampedBrightness = Math.min(newSettings.brightness, 100);
    document.documentElement.style.filter = `brightness(${clampedBrightness}%)`;

    // Apply font size
    document.documentElement.style.fontSize = `${newSettings.fontSize}px`;

    // Apply eye saving mode (blue light filter)
    if (newSettings.eyeSavingMode) {
      document.documentElement.style.filter +=
        " sepia(0.1) saturate(1.2) hue-rotate(-10deg)";
    }

    // Apply high contrast
    if (newSettings.highContrast) {
      document.documentElement.style.filter += " contrast(150%)";
    }
  };

  return (
    <SettingsContext.Provider
      value={{ settings, updateSetting, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
