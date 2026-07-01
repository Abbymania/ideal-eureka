import { FiUser, FiMail, FiGithub, FiPhone } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

export const DeveloperInfo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiUser className="h-4 w-4 text-indigo-600" />
        Developer Information
      </h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <FiUser className="h-4 w-4 mt-1 text-indigo-500" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Lead Developer
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Acharya
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <FaGraduationCap className="h-4 w-4 mt-1 text-indigo-500" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              University
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              Tribhuvan University, Department of Computer Engineering
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <FiMail className="h-4 w-4 mt-1 text-indigo-500" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Email
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              acharya@example.com
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <FiGithub className="h-4 w-4 mt-1 text-indigo-500" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              GitHub
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              github.com/acharya/yatra-dristi
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <FiPhone className="h-4 w-4 mt-1 text-indigo-500" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Contact
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              +977-1-XXXXXXX
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-md font-semibold mb-2 flex items-center space-x-2">
          <FaGraduationCap className="h-4 w-4 text-indigo-600" />
          University Information
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          This project was developed as part of the final year project for the Bachelor
          of Engineering in Computer Engineering at Tribhuvan University. The
          project aims to contribute to road safety in Nepal through technological
          innovation.
        </p>
      </div>
    </div>
  );
};
