import { SystemOverview } from '../components/SystemOverview';
import { ProjectObjectives } from '../components/ProjectObjectives';
import { PredictionWorks } from '../components/PredictionWorks';
import { MLWorkflow } from '../components/MLWorkflow';
import { WeatherIntegration } from '../components/WeatherIntegration';
import { HotspotAnalysis } from '../components/HotspotAnalysis';
import { TechnologyStack } from '../components/TechnologyStack';
import { FutureEnhancements } from '../components/FutureEnhancements';
import { DeveloperInfo } from '../components/DeveloperInfo';

export const About = () => {
  return (
    <div className="space-y-8">
      <SystemOverview />
      <ProjectObjectives />
      <PredictionWorks />
      <MLWorkflow />
      <WeatherIntegration />
      <HotspotAnalysis />
      <TechnologyStack />
      <FutureEnhancements />
      <DeveloperInfo />
    </div>
  );
};
