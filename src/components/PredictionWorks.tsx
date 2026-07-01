import { FiZap } from 'react-icons/fi';

export const PredictionWorks = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiZap className="h-4 w-4 text-indigo-600" />
        How the Prediction Works
      </h2>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
        YatraDristi's prediction engine combines multiple data sources and analytical techniques:
      </p>
      <ol className="space-y-4 pl-6 list-decimal text-gray-700 dark:text-gray-200">
        <li>
          <strong>Historical Analysis:</strong> Processes years of accident data to identify patterns
          and hotspots
        </li>
        <li>
          <strong>Machine Learning Models:</strong> Trains models on historical data to predict
          accident probability based on route, time, weather, and vehicle type
        </li>
        <li>
          <strong>Real-time Weather Integration:</strong> Adjusts risk scores based on current
          and forecasted weather conditions
        </li>
        <li>
          <strong>Route-specific Factors:</strong> Considers road characteristics, elevation,
          curves, and infrastructure quality
        </li>
        <li>
          <strong>Risk Synthesis:</strong> Combines all factors into a comprehensive risk score
          (0-10 scale) with clear risk categories (Low, Medium, High)
        </li>
      </ol>
    </div>
  );
};
