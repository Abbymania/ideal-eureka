import { FiBarChart2, FiPieChart, FiMapPin, FiAlertTriangle } from 'react-icons/fi';

export const SidePanel = () => {
  // Data for charts (mock data)
  const topLocations = [
    { name: 'Biratnagar Junction', accidents: 45 },
    { name: 'Itahari Bypass', accidents: 32 },
    { name: 'Dharan Sub-Metro', accidents: 28 },
    { name: 'Urlabari Market', accidents: 22 },
    { name: 'Rangeli Highway', accidents: 18 },
    { name: 'Biratchowk', accidents: 15 },
    { name: 'Gaighat', accidents: 12 },
    { name: 'Katari', accidents: 10 },
    { name: 'Okhaldhunga', accidents: 8 },
    { name: 'Lahan', accidents: 6 },
  ];

  const monthlyData = [
    { month: 'Jan', accidents: 65 },
    { month: 'Feb', accidents: 58 },
    { month: 'Mar', accidents: 72 },
    { month: 'Apr', accidents: 88 },
    { month: 'May', accidents: 95 },
    { month: 'Jun', accidents: 110 },
    { month: 'Jul', accidents: 125 },
    { month: 'Aug', accidents: 120 },
    { month: 'Sep', accidents: 105 },
    { month: 'Oct', accidents: 90 },
    { month: 'Nov', accidents: 75 },
    { month: 'Dec', accidents: 70 },
  ];

  const vehicleData = [
    { vehicle: 'Motorcycle', count: 420 },
    { vehicle: 'Bus', count: 280 },
    { vehicle: 'Car', count: 310 },
    { vehicle: 'Truck', count: 190 },
    { vehicle: 'Van', count: 80 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiMapPin className="h-4 w-4 text-indigo-600" />
        Side Panel
      </h2>
      <div className="space-y-6">
        {/* Top 10 Accident Prone Locations */}
        <div>
          <h3 className="text-md font-semibold mb-2 flex items-center space-x-2">
            <FiMapPin className="h-4 w-4 text-indigo-600" />
            Top 10 Accident Prone Locations
          </h3>
          <div className="space-y-2">
            {topLocations.map((loc, index) => (
              <div key={loc.name} className="flex justify-between items-center px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <span className="text-sm font-medium">{index + 1}. {loc.name}</span>
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{loc.accidents}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Accident Distribution */}
        <div>
          <h3 className="text-md font-semibold mb-2 flex items-center space-x-2">
            <FiBarChart2 className="h-4 w-4 text-indigo-600" />
            Monthly Accident Distribution
          </h3>
          <div className="h-32 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            {/* In a real app, we would use a chart library like Chart.js or Recharts here.
                For now, we'll just show a placeholder. */}
            <div className="flex h-full items-center justify-center text-gray-500 dark:text-gray-400">
              Bar Chart Placeholder
            </div>
          </div>
        </div>

        {/* Vehicle Involvement */}
        <div>
          <h3 className="text-md font-semibold mb-2 flex items-center space-x-2">
            <FiPieChart className="h-4 w-4 text-indigo-600" />
            Vehicle Involvement
          </h3>
          <div className="h-32 bg-gray-50 dark:bg-gray-700/50 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              Pie Chart Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
