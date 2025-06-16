
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface HourlyData {
  time: string;
  temperature: number;
  condition: string;
  icon: string;
  precipitation: number;
}

interface WeatherChartProps {
  data: HourlyData[];
}

const WeatherChart = ({ data }: WeatherChartProps) => {
  const chartData = data.map(item => ({
    time: item.time,
    temp: item.temperature,
    rain: item.precipitation
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black/80 backdrop-blur-xl border border-gray-700 rounded-lg p-3 shadow-lg">
          <p className="text-white text-sm font-medium">{`Time: ${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey === 'temp' ? `Temperature: ${entry.value}°C` : `Rain: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-800 shadow-2xl h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-light text-white flex items-center gap-3">
          <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>
          Temperature Trend
        </h3>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis 
              dataKey="time" 
              stroke="#6B7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke="url(#tempGradient)" 
              strokeWidth={3}
              dot={{ fill: '#06B6D4', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, fill: '#06B6D4' }}
            />
            <Line 
              type="monotone" 
              dataKey="rain" 
              stroke="url(#rainGradient)" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 3 }}
            />
            <defs>
              <linearGradient id="tempGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="rainGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex items-center justify-center space-x-6 mt-4 text-xs text-gray-400">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
          <span>Temperature</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded border-dashed"></div>
          <span>Precipitation</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherChart;
