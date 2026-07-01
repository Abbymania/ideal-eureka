import { FiLayers, FiCode, FiActivity, FiWifi, FiServer } from 'react-icons/fi';

export const TechnologyStack = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiLayers className="h-4 w-4 text-indigo-600" />
        Technology Stack
      </h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Frontend</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            React 18, TypeScript, Tailwind CSS, Leaflet (for maps), Chart.js (for data
            visualization), React Icons
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Backend</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Node.js with Express, Python (for ML models), RESTful API architecture
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Machine Learning</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Scikit-learn, TensorFlow/XGBoost, Pandas, NumPy for data processing and model
            training
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Maps & Location</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            OpenStreetMap, Leaflet, Geolocation APIs
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Weather APIs</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Nepal DHM, OpenWeatherMap, WeatherAPI.com
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">Database</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            PostgreSQL for spatial and temporal data, Redis for caching
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">DevOps & Deployment</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Docker, CI/CD pipelines, AWS/GCP cloud services, monitoring with Prometheus
            and Grafana
          </p>
        </div>
      </div>
    </div>
  );
};
