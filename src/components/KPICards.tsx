import { FiFolder, FiTrendingUp, FiAlertCircle, FiBell, FiMap } from 'react-icons/fi';

export const KPICards = () => {
  const kpis = [
    {
      title: 'Routes Analyzed',
      value: '1,247',
      icon: <FiFolder className="h-5 w-5" />,
      description: 'Total routes analyzed this month',
      trend: {
        value: '+12%',
        isPositive: true,
      },
    },
    {
      title: 'High Risk Routes',
      value: '89',
      icon: <FiAlertCircle className="h-5 w-5" />,
      description: 'Routes with high accident probability',
      trend: {
        value: '-5%',
        isPositive: false,
      },
    },
    {
      title: 'Accident Hotspots Identified',
      value: '342',
      icon: <FiMap className="h-5 w-5" />,
      description: 'Known accident-prone locations',
      trend: {
        value: '+8%',
        isPositive: true,
      },
    },
    {
      title: 'Active Alerts',
      value: '12',
      icon: <FiBell className="h-5 w-5" />,
      description: 'Currently active travel alerts',
      trend: {
        value: '+3',
        isPositive: false,
      },
    },
  ];

  return (
    <div className="gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.title}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow transform hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {kpi.icon}
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {kpi.title}
              </h3>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {kpi.value}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {kpi.description}
          </p>
        </div>
      ))}
    </div>
  );
};
