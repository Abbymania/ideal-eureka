import { NavLink } from 'react-router-dom';
import {
  FiHome,
  FiMap,
  FiAlertTriangle,
  FiInfo,
  FiWifi,
  FiServer,
  FiMapPin,
  FiClock,
  FiGlobe,
} from 'react-icons/fi';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="px-4 pt-5 pb-3">
        <div className="flex items-center space-x-3">
          <FiGlobe className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
          <div className="space-y-0.5">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              YatraDristi
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Road Safety System
            </p>
          </div>
        </div>
      </div>
      <nav className="mt-10 space-y-1 px-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `
            flex items-center p-2 text-sm font-medium rounded-md transition-colors 
            ${isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}

          `}
        >
          <FiHome className="mr-3 h-4 w-4" />
          Dashboard
        </NavLink>
        <NavLink
          to="/route-analysis"
          end
          className={({ isActive }) => `
            flex items-center p-2 text-sm font-medium rounded-md transition-colors 
            ${isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}

          `}
        >
          <FiMap className="mr-3 h-4 w-4" />
          Route Analysis
        </NavLink>
        <NavLink
          to="/hotspots"
          end
          className={({ isActive }) => `
            flex items-center p-2 text-sm font-medium rounded-md transition-colors 
            ${isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}

          `}
        >
          <FiMapPin className="mr-3 h-4 w-4" />
          Accident Hotspots
        </NavLink>
        <NavLink
          to="/alerts"
          end
          className={({ isActive }) => `
            flex items-center p-2 text-sm font-medium rounded-md transition-colors 
            ${isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}

          `}
        >
          <FiAlertTriangle className="mr-3 h-4 w-4" />
          Alerts
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) => `
            flex items-center p-2 text-sm font-medium rounded-md transition-colors 
            ${isActive ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}

          `}
        >
          <FiInfo className="mr-3 h-4 w-4" />
          About
        </NavLink>
      </nav>
      <div className="mt-auto px-4 pt-5 pb-4 border-t border-gray-200 dark:border-gray-700">
        <div className="space-y-3 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <FiWifi className="mr-2 h-4 w-4 text-indigo-400" />
            <span>System Status</span>
          </div>
          <div className="flex items-center">
            <FiServer className="mr-2 h-4 w-4 text-indigo-400" />
            <span>ML Model Online</span>
          </div>
          <div className="flex items-center">
            <FiWifi className="mr-2 h-4 w-4 text-indigo-400" />
            <span>Weather API Connected</span>
          </div>
          <div className="flex items-center">
            <FiMapPin className="mr-2 h-4 w-4 text-indigo-400" />
            <span>Routing Service Active</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Current Time</span>
            <span className="font-mono">--:--:--</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Version</span>
            <span className="font-mono">v1.0.0</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
