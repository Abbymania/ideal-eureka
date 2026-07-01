import { FiMapPin, FiAlertTriangle } from 'react-icons/fi';

export const HotspotAnalysis = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiMapPin className="h-4 w-4 text-indigo-600" />
        Hotspot Analysis
      </h2>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
        The system identifies and analyzes accident hotspots through:
      </p>
      <ul className="space-y-3 pl-5 text-gray-700 dark:text-gray-200 list-disc">
        <li>
          <strong>Spatial Analysis:</strong> Geographic Information Systems (GIS) techniques
          to cluster accident locations
        </li>
        <li>
          <strong>Temporal Analysis:</strong> Identifying peak accident times (hourly, daily,
          seasonal)
        </li>
        <li>
          <strong>Risk Scoring:</strong> Assigning risk levels based on accident frequency,
          severity, and trends
        </li>
        <li>
          <strong>Factor Analysis:</strong> Examining contributing factors (road condition,
          weather, vehicle type, human error)
        </li>
        <li>
          <strong>Predictive Hotspot Mapping:</strong> Using ML to predict potential future
          hotspots based on environmental and infrastructure factors
        </li>
      </ul>
    </div>
  );
};
