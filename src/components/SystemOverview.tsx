import { FiInfo } from 'react-icons/fi';

export const SystemOverview = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiInfo className="h-4 w-4 text-indigo-600" />
        System Overview
      </h2>
      <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
        YatraDristi is an intelligent road safety and route risk prediction system designed specifically for travelers in Nepal. 
        The system combines historical accident data, machine learning algorithms, real-time weather information, and route analysis 
        to provide accurate risk assessments for planned journeys. By analyzing multiple risk factors, YatraDristi helps travelers 
        make informed decisions about when and how to travel safely.
      </p>
    </div>
  );
};
