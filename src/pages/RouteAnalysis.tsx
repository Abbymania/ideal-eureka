import { useState } from 'react';
import { FiMap, FiSearch, FiPlayCircle } from 'react-icons/fi';
import { RouteInputForm } from '../components/RouteInputForm';
import { PredictionSummary } from '../components/PredictionSummary';
import { SegmentRiskAnalysis } from '../components/SegmentRiskAnalysis';
import { InteractiveRouteMap } from '../components/InteractiveRouteMap';
import { AITravelRecommendations } from '../components/AITravelRecommendations';

export const RouteAnalysis = () => {
  const [showResults, setShowResults] = useState(false);

  const handlePredict = () => {
    setShowResults(true);
  };

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Route Risk Analysis
        </h1>
        <RouteInputForm onPredict={handlePredict} />
      </div>

      {/* Results Section */}
      {showResults && (
        <>
          <PredictionSummary />
          <SegmentRiskAnalysis />
          <div className="grid gap-6">
            <div className="col-span-2">
              <InteractiveRouteMap />
            </div>
          </div>
          <AITravelRecommendations />
        </>
      )}
    </div>
  );
};
