import { FiMapPin, FiCloud, FiEye, FiZap, FiActivity } from 'react-icons/fi';

export const SegmentRiskAnalysis = () => {
  const segments = [
    {
      id: 1,
      name: 'Biratnagar → Itahari',
      distance: '25 km',
      weather: 'Moderate Rain',
      visibility: '4 km',
      historical: 'High',
      weatherAdjustment: '+1.2',
      riskScore: 2.7,
      finalRisk: 'High',
    },
    {
      id: 2,
      name: 'Itahari → Urlabari',
      distance: '15 km',
      weather: 'Light Rain',
      visibility: '6 km',
      historical: 'Medium',
      weatherAdjustment: '+0.5',
      riskScore: 1.8,
      finalRisk: 'Medium',
    },
    {
      id: 3,
      name: 'Urlabari → Rangeli',
      distance: '20 km',
      weather: 'Partly Cloudy',
      visibility: '10 km',
      historical: 'Low',
      weatherAdjustment: '0',
      riskScore: 0.9,
      finalRisk: 'Low',
    },
    {
      id: 4,
      name: 'Rangeli → Letang',
      distance: '12 km',
      weather: 'Clear',
      visibility: '12 km',
      historical: 'Very Low',
      weatherAdjustment: '-0.3',
      riskScore: 0.4,
      finalRisk: 'Very Low',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiMapPin className="h-4 w-4 text-indigo-600" />
        Segment-wise Risk Analysis
      </h2>
      <div className="space-y-4">
        {segments.map((segment) => (
          <div
            key={segment.id}
            className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {segment.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {segment.distance} • {segment.weather}
                </p>
              </div>
              <div className="text-right">
                <span className="px-2 py-1 rounded-full text-xs font-medium">
                  {segment.finalRisk === 'High' && (
                    <span className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200">
                      High
                    </span>
                  )}
                  {segment.finalRisk === 'Medium' && (
                    <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
                      Medium
                    </span>
                  )}
                  {segment.finalRisk === 'Low' && (
                    <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200">
                      Low
                    </span>
                  )}
                  {segment.finalRisk === 'Very Low' && (
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200">
                      Very Low
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Visibility:</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {segment.visibility}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Historical:</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {segment.historical}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Weather Adj.:</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {segment.weatherAdjustment}
                </p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">Risk Score:</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {segment.riskScore}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
