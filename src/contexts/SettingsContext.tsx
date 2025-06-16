
import React, { createContext, useContext, useEffect, useState } from 'react';

export interface SettingsState {
  fontSize: number;
  brightness: number;
  eyeSavingMode: boolean;
  highContrast: boolean;
  autoRefresh: boolean;
  temperatureUnit: 'celsius' | 'fahrenheit';
}

interface SettingsContextType {
  settings: SettingsState;
  updateSetting: <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => void;
  resetSettings: () => void;
}

const defaultSettings: SettingsState = {
  fontSize: 16,
  brightness: 100,
  eyeSavingMode: false,
  highContrast: false,
  autoRefresh: true,
  temperatureUnit: 'celsius'
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SettingsState>(() => {
    const saved = localStorage.getItem('weatherAppSettings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  const updateSetting = <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  // Save settings to localStorage and apply them
  useEffect(() => {
    localStorage.setItem('weatherAppSettings', JSON.stringify(settings));
    applySettings(settings);
  }, [settings]);

  const applySettings = (newSettings: SettingsState) => {
    // Apply brightness (max 100%)
    const clampedBrightness = Math.min(newSettings.brightness, 100);
    document.documentElement.style.filter = `brightness(${clampedBrightness}%)`;
    
    // Apply font size
    document.documentElement.style.fontSize = `${newSettings.fontSize}px`;
    
    // Apply eye saving mode (blue light filter)
    if (newSettings.eyeSavingMode) {
      document.documentElement.style.filter += ' sepia(0.1) saturate(1.2) hue-rotate(-10deg)';
    }
    
    // Apply high contrast
    if (newSettings.highContrast) {
      document.documentElement.style.filter += ' contrast(150%)';
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
