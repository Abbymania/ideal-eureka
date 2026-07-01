import { FiSun, FiCloud, FiCloudRain, FiWind } from 'react-icons/fi';
import { FaTint } from 'react-icons/fa';

export const WeatherOverview = () => {
  const cities = [
    { name: 'Biratnagar', temp: '28°C', icon: <FiSun className="h-5 w-5 text-yellow-400" />, rain: '20%', visibility: '10 km', wind: '15 km/h' },
    { name: 'Itahari', temp: '26°C', icon: <FiCloud className="h-5 w-5 text-gray-400" />, rain: '40%', visibility: '8 km', wind: '12 km/h' },
    { name: 'Urlabari', temp: '27°C', icon: <FiCloudRain className="h-5 w-5 text-blue-400" />, rain: '60%', visibility: '6 km', wind: '18 km/h' },
    { name: 'Rangeli', temp: '25°C', icon: <FiCloud className="h-5 w-5 text-gray-400" />, rain: '30%', visibility: '9 km', wind: '10 km/h' },
    { name: 'Letang', temp: '24°C', icon: <FiWind className="h-5 w-5 text-indigo-400" />, rain: '10%', visibility: '12 km', wind: '22 km/h' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiCloud className="h-4 w-4 text-indigo-600" />
        Weather Overview
      </h2>
      <div className="space-y-3">
        {cities.map((city) => (
          <div
            key={city.name}
            className="flex items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            <div className="flex-1 space-x-3">
              {city.icon}
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {city.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {city.temp}
                </p>
              </div>
            </div>
            <div className="text-right space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <FaTint className="h-4 w-4 text-blue-500" />
                <span>{city.rain}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiWind className="h-4 w-4 text-gray-500" />
                <span>{city.wind}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
