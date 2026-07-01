import { FiAlertTriangle, FiCloudRain, FiCloud, FiWifi, FiSlash, FiMapPin } from 'react-icons/fi';

export const CurrentAlerts = () => {
  const alerts = [
    {
      id: 1,
      title: 'Heavy rainfall in Itahari',
      icon: <FiCloudRain className="h-4 w-4 text-blue-500" />,
      severity: 'high',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Dense fog near Dharan',
      icon: <FiCloud className="h-4 w-4 text-gray-500" />,
      severity: 'medium',
      time: '4 hours ago',
    },
    {
      id: 3,
      title: 'High accident probability near Biratnagar',
      icon: <FiAlertTriangle className="h-4 w-4 text-red-500" />,
      severity: 'high',
      time: '6 hours ago',
    },
    {
      id: 4,
      title: 'Road congestion',
      icon: <FiWifi className="h-4 w-4 text-yellow-500" />,
      severity: 'low',
      time: '1 hour ago',
    },
    {
      id: 5,
      title: 'Low visibility',
      icon: <FiSlash className="h-4 w-4 text-gray-400" />,
      severity: 'medium',
      time: '3 hours ago',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiAlertTriangle className="h-4 w-4 text-indigo-600" />
        Current Alerts
      </h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
          >
            {alert.icon}
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {alert.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {alert.time}
              </p>
            </div>
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
        ))}
      </div>
    </div>
  );
};
