import React from 'react';
import { FiMapPin, FiCalendar, FiClock, FiTruck, FiBell, FiTrash2 } from 'react-icons/fi';

interface SavedAlert {
  id: number;
  from: string;
  to: string;
  date: string;
  time: string;
  vehicle: string;
  createdAt: string;
}

export const SavedAlerts = () => {
  // In a real app, this would come from localStorage or API
  const [savedAlerts, setSavedAlerts] = React.useState<SavedAlert[]>([
    {
      id: 1,
      from: 'Biratnagar',
      to: 'Kathmandu',
      date: '2026-07-05',
      time: '08:00',
      vehicle: 'Car',
      createdAt: '2026-07-01 10:30 AM',
    },
    {
      id: 2,
      from: 'Itahari',
      to: 'Pokhara',
      date: '2026-07-10',
      time: '07:00',
      vehicle: 'Bus',
      createdAt: '2026-07-01 09:15 AM',
    },
  ]);

  const handleDelete = (id: number) => {
    setSavedAlerts(savedAlerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiMapPin className="h-4 w-4 text-indigo-600" />
        Saved Travel Plans
      </h2>
      <div className="space-y-4">
        {savedAlerts.length > 0 ? (
          savedAlerts.map((alert) => (
            <div
              key={alert.id}
              className="border-l-4 border-indigo-500 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-start space-x-3">
                    <FiMapPin className="h-4 w-4 mt-1" />
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {alert.from} → {alert.to}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {alert.date} • {alert.time} • {alert.vehicle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-end space-x-2">
                  <FiCalendar className="h-4 w-4 text-gray-500" />
                  <FiClock className="h-4 w-4 text-gray-500 ml-2" />
                  <button
                    onClick={() => handleDelete(alert.id)}
                    className="p-2 rounded-hover hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                  >
                    <FiTrash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Saved: {alert.createdAt}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center py-8 text-gray-500 dark:text-gray-400">
            No saved travel plans yet. Save a plan to get alerts for your routes.
          </p>
        )}
      </div>
    </div>
  );
};
