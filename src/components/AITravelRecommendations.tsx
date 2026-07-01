import { FiCheckCircle, FiMap, FiShield, FiAlertTriangle, FiMapPin, FiPhoneCall, FiUsers } from 'react-icons/fi';
import { FaAmbulance } from 'react-icons/fa';

export const AITravelRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: 'Travel Decision',
      icon: <FiCheckCircle className="h-5 w-5 text-green-500" />,
      color: 'green',
      points: [
        'Overall risk level: MEDIUM',
        'Recommended: Proceed with caution',
        'Best departure time: 06:00 AM (avoid peak rain hours)',
      ],
    },
    {
      id: 2,
      title: 'Route Summary',
      icon: <FiMap className="h-5 w-5 text-blue-500" />,
      color: 'blue',
      points: [
        'Total distance: 245 km',
        'Estimated time: 4h 20m',
        'High-risk segments: 2 of 4',
        'Average risk score: 1.45/10',
      ],
    },
    {
      id: 3,
      title: 'Travel Advice',
      icon: <FiShield className="h-5 w-5 text-indigo-500" />,
      color: 'indigo',
      points: [
        'Use headlights during rain periods',
        'Maintain safe following distance',
        'Avoid overtaking in low visibility areas',
        'Consider alternative route if rain intensifies',
      ],
    },
    {
      id: 4,
      title: 'Precautions',
      icon: <FiAlertTriangle className="h-5 w-5 text-yellow-500" />,
      color: 'yellow',
      points: [
        'Check vehicle tires and brakes',
        'Carry emergency supplies',
        'Monitor weather updates during travel',
        'Keep mobile phone charged',
      ],
    },
    {
      id: 5,
      title: 'High Risk Segments',
      icon: <FiMapPin className="h-5 w-5 text-red-500" />,
      color: 'red',
      points: [
        'Biratnagar → Itahari (High risk)',
        'Itahari → Urlabari (Medium risk)',
        'Exercise extra caution in these areas',
        'Consider stopping for breaks in safe zones',
      ],
    },
    {
      id: 6,
      title: 'Alternative Suggestions',
      icon: <FiMap className="h-5 w-5 text-purple-500" />,
      color: 'purple',
      points: [
        'Alternative route via Dharan (lower risk)',
        'Adds ~15 km but reduces risk by 30%',
        'Recommended if weather worsens',
        'Check real-time traffic before deciding',
      ],
    },
    {
      id: 7,
      title: 'Emergency Preparation',
      icon: <FaAmbulance className="h-5 w-5 text-red-500" />,
      color: 'red',
      points: [
        'Emergency kit: First aid, flashlight, water',
        'Important contacts saved in phone',
        'Vehicle insurance documents accessible',
        'Share travel itinerary with family/friends',
      ],
    },
    {
      id: 8,
      title: 'Emergency Contacts',
      icon: <FiPhoneCall className="h-5 w-5 text-green-500" />,
      color: 'green',
      points: [
        'Police: 100',
        'Ambulance: 102',
        'Fire Service: 101',
        'Highway Patrol: 9851000000',
        'Tourist Police: 977-1-4247041',
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiUsers className="h-4 w-4 text-indigo-600" />
        AI Travel Recommendations
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="border-l-4 border-indigo-500 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-3 mb-3">
              {rec.icon}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {rec.title}
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-200 list-disc pl-5">
                  {rec.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
