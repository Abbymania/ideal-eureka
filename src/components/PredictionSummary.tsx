import { FiMap, FiClock, FiCloud, FiActivity } from 'react-icons/fi';

export const PredictionSummary = () => {
  // Mock data - in real app this would come from ML model
  const prediction = {
    overallRisk: 'Medium',
    riskScore: 6.5,
    distance: '245 km',
    eta: '4 hours 20 min',
    weather: 'Partly Cloudy',
  };

  const riskColors = {
    Low: 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-200',
    Medium: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-200',
    High: 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-200',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiActivity className="h-4 w-4 text-indigo-600" />
        Prediction Summary
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center">
          <div className="flex items-center justify-center mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium">
              {riskColors[prediction.overallRisk as keyof typeof riskColors]}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Overall Risk
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {prediction.overallRisk}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center">
          <FiMap className="h-5 w-5 text-indigo-600 mb-3" />
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {prediction.distance}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Distance
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center">
          <FiClock className="h-5 w-5 text-indigo-600 mb-3" />
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {prediction.eta}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ETA
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center">
          <FiCloud className="h-5 w-5 text-indigo-600 mb-3" />
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Weather Condition
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {prediction.weather}
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center">
          <FiMap className="h-5 w-5 text-indigo-600 mb-3" />
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {prediction.riskScore}/10
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Risk Score
          </p>
        </div>
      </div>
    </div>
  );
};
