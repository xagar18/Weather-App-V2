// OpenWeather API configuration
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
  icon: string;
  feelsLike: number;
  temperatureUnit: 'celsius' | 'fahrenheit';
}

export const fetchWeatherData = async (
  city: string,
  unit: 'celsius' | 'fahrenheit' = 'celsius',
): Promise<WeatherData> => {
  try {
    const units = unit === 'fahrenheit' ? 'imperial' : 'metric';
    const response = await fetch(
      `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`,
    );

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      city: data.name,
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind?.speed * (unit === 'celsius' ? 3.6 : 1) || 0), // Convert m/s to km/h for celsius, keep mph for fahrenheit
      visibility: Math.round((data.visibility || 10000) / 1000), // Convert to km
      pressure: data.main.pressure,
      icon: mapWeatherIcon(data.weather[0].icon),
      feelsLike: Math.round(data.main.feels_like),
      temperatureUnit: unit,
    };
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
    throw error;
  }
};

const mapWeatherIcon = (openWeatherIcon: string): string => {
  const iconMap: { [key: string]: string } = {
    '01d': 'sun',
    '01n': 'sun',
    '02d': 'cloud-sun',
    '02n': 'cloud-sun',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'cloud',
    '04n': 'cloud',
    '09d': 'cloud-rain',
    '09n': 'cloud-rain',
    '10d': 'cloud-rain',
    '10n': 'cloud-rain',
    '11d': 'cloud-rain',
    '11n': 'cloud-rain',
    '13d': 'cloud',
    '13n': 'cloud',
    '50d': 'cloud',
    '50n': 'cloud',
  };

  return iconMap[openWeatherIcon] || 'sun';
};
