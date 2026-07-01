import { FiMapPin, FiActivity, FiShield } from 'react-icons/fi';

export const SummaryCards = () => {
  const stats = [
    {
      title: 'Total Hotspots',
      value: '1,247',
      icon: <FiMapPin className="h-5 w-5" />,
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      text: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      title: 'High Risk Zones',
      value: '89',
      icon: <FiActivity className="h-5 w-5" />,
      bg: 'bg-red-50 dark:bg-red-900/20',
      text: 'text-red-600 dark:text-red-400',
    },
    {
      title: 'Medium Risk Zones',
      value: '342',
      icon: <FiActivity className="h-5 w-5" />,
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      text: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      title: 'Low Risk Zones',
      value: '816',
      icon: <FiActivity className="h-5 w-5" />,
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600 dark:text-green-400',
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ${stat.bg}`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {stat.icon}
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.title}
              </h3>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {stat.value}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Accident-prone locations
          </p>
        </div>
      ))}
    </div>
  );
};
