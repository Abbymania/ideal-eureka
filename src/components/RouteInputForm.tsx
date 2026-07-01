import { useState } from 'react';
import { FiMapPin, FiCalendar, FiClock, FiTruck, FiSearch } from 'react-icons/fi';

interface RouteInputFormProps {
  onPredict: () => void;
}

export const RouteInputForm = ({ onPredict }: RouteInputFormProps) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    vehicle: '',
  });

  const nepaliCities = [
    'Biratnagar',
    'Itahari',
    'Urlabari',
    'Rangeli',
    'Letang',
    'Dharan',
    'Biratchowk',
    'Gaighat',
    'Katari',
    'Okhaldhunga',
    'Kathmandu',
    'Pokhara',
    'Lumbini',
    'Bharatpur',
    'Birgunj',
    'Janakpur',
  ];

  const travelTimes = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '23:30',
  ];

  const vehicleTypes = [
    'Car',
    'Bus',
    'Motorcycle',
    'Truck',
    'Van',
    'SUV',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.from && formData.to && formData.date && formData.time && formData.vehicle) {
      onPredict();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            From
          </label>
          <select
            value={formData.from}
            onChange={(e) =>
              setFormData({ ...formData, from: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select origin</option>
            {nepaliCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            To
          </label>
          <select
            value={formData.to}
            onChange={(e) =>
              setFormData({ ...formData, to: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select destination</option>
            {nepaliCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Travel Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            Travel Time
          </label>
          <select
            value={formData.time}
            onChange={(e) =>
              setFormData({ ...formData, time: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            {travelTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Travel Vehicle
        </label>
        <select
          value={formData.vehicle}
          onChange={(e) =>
            setFormData({ ...formData, vehicle: e.target.value })
          }
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          {vehicleTypes.map((vehicle) => (
            <option key={vehicle} value={vehicle}>
              {vehicle}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors hover:shadow-md transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiSearch className="mr-3 h-4 w-4" />
        Predict Risk
      </button>
    </form>
  );
};
