import { FiAlertTriangle, FiZap, FiPhoneCall, FiMapPin, FiClock } from 'react-icons/fi';
import { FaGraduationCap, FaAmbulance } from 'react-icons/fa';

export const EmergencyWarnings = () => {
  const warnings = [
    {
      id: 1,
      title: 'Monsoon Landslide Warning',
      location: 'Eastern Highway (Kathmandu-Pokhara)',
      severity: 'high',
      time: 'Issued 1 hour ago',
      description: 'High risk of landslides between Malekhu and Naubise due to continuous rainfall. Avoid travel unless necessary.',
    },
    {
      id: 2,
      title: 'Flood Advisory',
      location: 'Terai Region (Sunsari, Morang)',
      severity: 'medium',
      time: 'Issued 3 hours ago',
      description: 'River levels rising in Koshi and tributaries. Low-lying areas may experience flooding.',
    },
    {
      id: 3,
      title: 'Fog Advisory',
      location: 'Central Nepal (Kathmandu Valley)',
      severity: 'low',
      time: 'Issued 5 hours ago',
      description: 'Dense fog expected in valley during early morning hours. Visibility may drop below 100m.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiAlertTriangle className="h-4 w-4 text-indigo-600" />
        Emergency Road Warnings
      </h2>
      <div className="space-y-4">
        {warnings.map((warning) => (
          <div
            key={warning.id}
            className="border-l-4 border-indigo-500 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {warning.severity === 'high' && (
                  <FiZap className="h-5 w-5 text-red-500" />
                )}
                {warning.severity === 'medium' && (
                  <FaGraduationCap className="h-5 w-5 text-yellow-500" />
                )}
                {warning.severity === 'low' && (
                  <FiPhoneCall className="h-5 w-5 text-green-500" />
                )}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {warning.title}
                  </h3>
                  <span className="px-2 py-1 rounded-full text-xs font-medium">
                    {warning.severity === 'high' && (
                      <span className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200">
                        High
                      </span>
                    )}
                    {warning.severity === 'medium' && (
                      <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
                        Medium
                      </span>
                    )}
                    {warning.severity === 'low' && (
                      <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200">
                        Low
                      </span>
                    )}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <FiMapPin className="h-4 w-4 mr-2" /> {warning.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <FiClock className="h-4 w-4 mr-2" /> {warning.time}
                </p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                  {warning.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-md font-semibold mb-2 flex items-center space-x-2">
          <FaAmbulance className="h-4 w-4 text-indigo-600" />
          Emergency Contacts
        </h3>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <FiPhoneCall className="h-4 w-4 mr-2" />
            <span>Police: 100</span>
          </div>
          <div className="flex items-center">
            <FiPhoneCall className="h-4 w-4 mr-2" />
            <span>Ambulance: 102</span>
          </div>
          <div className="flex items-center">
            <FiPhoneCall className="h-4 w-4 mr-2" />
            <span>Fire Service: 101</span>
          </div>
          <div className="flex items-center">
            <FiPhoneCall className="h-4 w-4 mr-2" />
            <span>Highway Patrol: 9851000000</span>
          </div>
          <div className="flex items-center">
            <FiPhoneCall className="h-4 w-4 mr-2" />
            <span>Tourist Police: 977-1-4247041</span>
          </div>
        </div>
      </div>
    </div>
  );
};
