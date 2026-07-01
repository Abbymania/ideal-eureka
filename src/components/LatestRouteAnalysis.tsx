import { FiMapPin, FiCalendar, FiClock, FiTruck, FiActivity } from 'react-icons/fi';

export const LatestRouteAnalysis = () => {
  const route = {
    from: 'Biratnagar',
    to: 'Kathmandu',
    date: 'June 28, 2026',
    time: '08:00 AM',
    vehicle: 'Car',
    risk: 'Medium',
    distance: '405 km',
    eta: '8 hours 30 min',
    weather: 'Partly Cloudy',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiMapPin className="h-4 w-4 text-indigo-600" />
        Latest Route Analysis
      </h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
          <FiMapPin className="h-4 w-4 text-indigo-600" />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              From: {route.from}
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              To: {route.to}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <FiCalendar className="h-4 w-4" />
            <span>{route.date}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <FiClock className="h-4 w-4" />
            <span>{route.time}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <FiTruck className="h-4 w-4" />
            <span>{route.vehicle}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <FiActivity className="h-4 w-4" />
            <span className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-200">
              {route.risk}
            </span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-20">Distance:</span>
            <span>{route.distance}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-20">ETA:</span>
            <span>{route.eta}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="w-20">Weather:</span>
            <span>{route.weather}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
