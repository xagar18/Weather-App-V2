import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useSettings } from "@/contexts/SettingsContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Eye, Monitor, Moon, Sun, Type } from "lucide-react";

const SettingsPanel = ({ onClose }) => {
  const { theme, actualTheme, setTheme } = useTheme();
  const { settings, updateSetting, resetSettings } = useSettings();

  const handleResetSettings = () => {
    resetSettings();
    setTheme("auto");
  };

  const isDark = actualTheme === "dark";

  return (
    <div
      className={`absolute inset-x-4 top-4 bottom-16 max-h-[520px] rounded-xl shadow-2xl overflow-hidden z-40 transition-all duration-300 ${
        isDark
          ? "bg-gray-900 text-white border border-gray-700"
          : "bg-white text-gray-800 border border-gray-200"
      }`}
    >
      {/* Settings Title Bar */}
      <div
        className={`h-7 flex items-center justify-between px-3 border-b ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div
              className="w-2.5 h-2.5 bg-red-500 rounded-full cursor-pointer hover:bg-red-600 transition-colors"
              onClick={onClose}
            ></div>
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          </div>
          <span
            className={`text-xs font-semibold ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Settings
          </span>
        </div>
      </div>

      {/* Settings Content - Compact Layout */}
      <div className="h-[calc(100%-1.75rem)] overflow-auto p-3">
        <div className="space-y-4">
          {/* Theme Selection */}
          <div className="space-y-2">
            <h2
              className={`text-sm font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              } flex items-center gap-1`}
            >
              <Monitor className="w-3 h-3" />
              Theme
            </h2>
            <div className="flex gap-1">
              {[
                { value: "light", icon: Sun, label: "Light" },
                { value: "dark", icon: Moon, label: "Dark" },
                { value: "auto", icon: Monitor, label: "Auto" },
              ].map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => setTheme(value as any)}
                  className={`flex-1 flex items-center justify-center space-x-1 px-2 py-1.5 rounded text-xs font-medium transition-all ${
                    theme === value
                      ? isDark
                        ? "bg-blue-600 text-white"
                        : "bg-blue-600 text-white"
                      : isDark
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-2.5 h-2.5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Compact Grid Layout */}
          <div className="grid grid-cols-2 gap-3">
            {/* Display Settings */}
            <div className="space-y-3">
              <h3
                className={`text-xs font-semibold ${
                  isDark ? "text-gray-200" : "text-gray-800"
                } flex items-center gap-1`}
              >
                <Type className="w-3 h-3" />
                Display
              </h3>

              {/* Font Size */}
              <div
                className={`p-2 rounded ${
                  isDark
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <label
                  className={`block text-xs font-medium mb-1 ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Font Size
                </label>
                <Slider
                  value={[settings.fontSize]}
                  onValueChange={(value) => updateSetting("fontSize", value[0])}
                  min={12}
                  max={24}
                  step={1}
                  className="w-full mb-1"
                />
                <div
                  className={`flex justify-between text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span>12px</span>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {settings.fontSize}px
                  </span>
                  <span>24px</span>
                </div>
              </div>

              {/* Brightness */}
              <div
                className={`p-2 rounded ${
                  isDark
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <label
                  className={`block text-xs font-medium mb-1 ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Brightness
                </label>
                <Slider
                  value={[settings.brightness]}
                  onValueChange={(value) =>
                    updateSetting("brightness", value[0])
                  }
                  min={30}
                  max={100}
                  step={5}
                  className="w-full mb-1"
                />
                <div
                  className={`flex justify-between text-xs ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <span>30%</span>
                  <span
                    className={`font-semibold ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {settings.brightness}%
                  </span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            {/* Accessibility */}
            <div className="space-y-3">
              <h3
                className={`text-xs font-semibold ${
                  isDark ? "text-gray-200" : "text-gray-800"
                } flex items-center gap-1`}
              >
                <Eye className="w-3 h-3" />
                Accessibility
              </h3>

              {/* Eye Saving Mode */}
              <div
                className={`p-2 rounded ${
                  isDark
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className={`text-xs font-medium ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Eye Saving
                    </div>
                    <div
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Blue light filter
                    </div>
                  </div>
                  <Switch
                    checked={settings.eyeSavingMode}
                    onCheckedChange={(checked) =>
                      updateSetting("eyeSavingMode", checked)
                    }
                  />
                </div>
              </div>

              {/* High Contrast */}
              <div
                className={`p-2 rounded ${
                  isDark
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className={`text-xs font-medium ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      High Contrast
                    </div>
                    <div
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Enhanced visibility
                    </div>
                  </div>
                  <Switch
                    checked={settings.highContrast}
                    onCheckedChange={(checked) =>
                      updateSetting("highContrast", checked)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Weather Settings */}
          <div className="space-y-2">
            <h3
              className={`text-xs font-semibold ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Weather
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {/* Temperature Unit */}
              <div>
                <label
                  className={`block text-xs font-medium mb-1 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Temperature
                </label>
                <div className="flex gap-1">
                  {[
                    { value: "celsius", label: "°C" },
                    { value: "fahrenheit", label: "°F" },
                  ].map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() =>
                        updateSetting("temperatureUnit", value as any)
                      }
                      className={`flex-1 px-2 py-1 rounded text-xs font-medium transition-all ${
                        settings.temperatureUnit === value
                          ? isDark
                            ? "bg-blue-600 text-white"
                            : "bg-blue-600 text-white"
                          : isDark
                          ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Auto Refresh */}
              <div
                className={`p-2 rounded ${
                  isDark
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className={`text-xs font-medium ${
                        isDark ? "text-gray-200" : "text-gray-800"
                      }`}
                    >
                      Auto Refresh
                    </div>
                    <div
                      className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Every 10min
                    </div>
                  </div>
                  <Switch
                    checked={settings.autoRefresh}
                    onCheckedChange={(checked) =>
                      updateSetting("autoRefresh", checked)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Reset Button */}
          <div
            className={`pt-2 border-t ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <button
              onClick={handleResetSettings}
              className={`w-full px-3 py-1.5 rounded text-xs font-medium transition-all ${
                isDark
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              Reset All Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
