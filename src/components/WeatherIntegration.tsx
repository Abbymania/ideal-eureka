import { FiCloud } from 'react-icons/fi';

export const WeatherIntegration = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiCloud className="h-4 w-4 text-indigo-600" />
        Weather Integration
      </h2>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
        YatraDristi integrates real-time weather data from multiple sources to enhance the
        accuracy of risk predictions:
      </p>
      <ul className="space-y-3 pl-5 text-gray-700 dark:text-gray-200 list-disc">
        <li>
          <strong>Real-time Weather APIs:</strong> Integrated with Nepal's Department of
          Hydrology and Meteorology and international weather services
        </li>
        <li>
          <strong>Weather Factors Considered:</strong> Precipitation, temperature, visibility,
          wind speed, humidity, and severe weather alerts
        </li>
        <li>
          <strong>Dynamic Risk Adjustment:</strong> Weather conditions modify the base risk
          score calculated from historical data
        </li>
        <li>
          <strong>Forecast Integration:</strong> Uses weather forecasts to predict risks for
          future travel times
        </li>
        <li>
          <strong>Historical Weather Patterns:</strong> Analyzes how weather has historically
          affected accident rates on specific routes
        </li>
      </ul>
    </div>
  );
};
