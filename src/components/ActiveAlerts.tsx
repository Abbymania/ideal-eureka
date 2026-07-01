import { FiAlertTriangle, FiCloudRain, FiCloud, FiWifi, FiSlash, FiMapPin, FiClock } from 'react-icons/fi';

export const ActiveAlerts = () => {
  const alerts = [
    {
      id: 1,
      location: 'Itahari',
      type: 'Heavy Rainfall',
      severity: 'high',
      time: '2 hours ago',
      weather: 'Heavy rain, 20mm/hr',
      suggestedAction: 'Avoid travel if possible. Use headlights and maintain safe distance.',
    },
    {
      id: 2,
      location: 'Near Dharan',
      type: 'Dense Fog',
      severity: 'medium',
      time: '4 hours ago',
      weather: 'Visibility < 50m',
      suggestedAction: 'Use fog lights. Avoid overtaking.',
    },
    {
      id: 3,
      location: 'Biratnagar',
      type: 'High Accident Probability',
      severity: 'high',
      time: '6 hours ago',
      weather: 'Partly cloudy, wet road',
      suggestedAction: 'Exercise caution. Speed limit reduced to 40km/h.',
    },
    {
      id: 4,
      location: 'Urlabari',
      type: 'Road Congestion',
      severity: 'low',
      time: '1 hour ago',
      weather: 'Clear',
      suggestedAction: 'Expect delays. Consider alternative route.',
    },
    {
      id: 5,
      location: 'Letang',
      type: 'Low Visibility',
      severity: 'medium',
      time: '3 hours ago',
      weather: 'Haze, visibility 2km',
      suggestedAction: 'Use low beam headlights. Increase following distance.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiAlertTriangle className="h-4 w-4 text-indigo-600" />
        Active Travel Alerts
      </h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="border-l-4 border-indigo-500 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {alert.severity === 'high' && (
                  <FiAlertTriangle className="h-5 w-5 text-red-500" />
                )}
                {alert.severity === 'medium' && (
                  <FiAlertTriangle className="h-5 w-5 text-yellow-500" />
                )}
                {alert.severity === 'low' && (
                  <FiAlertTriangle className="h-5 w-5 text-green-500" />
                )}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {alert.location}
                  </h3>
                  <span className="px-2 py-1 rounded-full text-xs font-medium">
                    {alert.severity === 'high' && (
                      <span className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200">
                        High
                      </span>
                    )}
                    {alert.severity === 'medium' && (
                      <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
                        Medium
                      </span>
                    )}
                    {alert.severity === 'low' && (
                      <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200">
                        Low
                      </span>
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <FiMapPin className="h-4 w-4 mr-2" /> {alert.type}
                </p>
                <div className="grid gap-2 sm:grid-cols-2 text-sm text-gray-500 dark:text-gray-400">
                  <div>
                    <FiClock className="h-4 w-4 mr-2" /> Time: {alert.time}
                  </div>
                  <div>
                    <FiCloud className="h-4 w-4 mr-2" /> Weather: {alert.weather}
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 font-medium">
                  Suggested Action:
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                  {alert.suggestedAction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
