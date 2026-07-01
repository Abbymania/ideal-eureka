import { FiRotateCcw } from 'react-icons/fi';

export const MLWorkflow = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiRotateCcw className="h-4 w-4 text-indigo-600" />
        Machine Learning Workflow
      </h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
              <FiRotateCcw className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Data Collection</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Gather historical accident data, weather data, road Infrastructure data, and traffic
              patterns from government sources and sensors
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
              <FiRotateCcw className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Data Preprocessing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Clean, normalize, and feature-engineer the data. Handle missing values and outliers.
              Convert categorical variables and create temporal features
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
              <FiRotateCcw className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Model Training</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Train multiple algorithms (Random Forest, XGBoost, Neural Networks) and select the
              best performing model based on accuracy and precision metrics
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
              <FiRotateCcw className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Validation & Testing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Validate model performance using cross-validation and test on unseen data. Fine-tune
              hyperparameters for optimal results
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
              <FiRotateCcw className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Deployment & Monitoring</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Deploy the model in a production environment. Monitor performance and retrain
              periodically with new data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
