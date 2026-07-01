import { FiTarget } from 'react-icons/fi';

export const ProjectObjectives = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiTarget className="h-4 w-4 text-indigo-600" />
        Project Objectives
      </h2>
      <ul className="space-y-3 text-gray-700 dark:text-gray-200 list-disc pl-5">
        <li>
          To reduce road accident fatalities by providing pre-trip risk assessments
        </li>
        <li>
          To analyze historical accident patterns and identify high-risk routes and locations
        </li>
        <li>
          To integrate real-time weather data for dynamic risk adjustment
        </li>
        <li>
          To provide travelers with actionable recommendations and precautions
        </li>
        <li>
          To create a user-friendly interface accessible to both technical and non-technical users
        </li>
        <li>
          To support sustainable travel planning through informed decision-making
        </li>
      </ul>
    </div>
  );
};
