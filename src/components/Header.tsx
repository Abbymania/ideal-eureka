import { FiMenu, FiGlobe } from 'react-icons/fi';
import { AiOutlineBank } from 'react-icons/ai';

export const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-3">
            <FiGlobe className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                YatraDristi
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Intelligent Road Safety & Route Risk Prediction System
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <FiMenu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md transition-colors">
              <AiOutlineBank className="mr-2 h-4 w-4" />
              Premium Features
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
