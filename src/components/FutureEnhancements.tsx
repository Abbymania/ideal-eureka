import { FiTrendingUp, FiMap, FiShield, FiUsers } from 'react-icons/fi';

export const FutureEnhancements = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiTrendingUp className="h-4 w-4 text-indigo-600" />
        Future Enhancements
      </h2>
      <ul className="space-y-3 pl-5 text-gray-700 dark:text-gray-200 list-disc">
        <li>
          <strong>Real-time Traffic Integration:</strong> Incorporate live traffic data
          for dynamic routing and congestion avoidance
        </li>
        <li>
          <strong>Voice Assistant Integration:</strong> Allow users to interact with
          the system via voice commands for hands-free operation
        </li>
        <li>
          <strong>Community Reporting:</strong> Enable users to report accidents,
          hazards, and road conditions in real-time
        </li>
        <li>
          <strong>Multi-modal Travel Planning:</strong> Expand beyond road travel to
          include public transportation, walking, and cycling routes
        </li>
        <li>
          <strong>Predictive Route Optimization:</strong> Suggest optimal routes based
          on risk, time, and cost rather than just the shortest path
        </li>
        <li>
          <strong>Government & NGO Partnerships:</strong> Collaborate with traffic
          management agencies and road safety organizations for data sharing and
          coordinated interventions
        </li>
        <li>
          <strong>Augmented Reality (AR) Navigation:</strong> Overlay risk information
          onto the driver's view through AR-enabled navigation systems
        </li>
      </ul>
    </div>
  );
};
