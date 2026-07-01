import { KPICards } from '../components/KPICards';
import { LatestRouteAnalysis } from '../components/LatestRouteAnalysis';
import { CurrentAlerts } from '../components/CurrentAlerts';
import { TopAccidentHotspots } from '../components/TopAccidentHotspots';
import { WeatherOverview } from '../components/WeatherOverview';

export const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* KPI Cards Section */}
      <KPICards />
      
      {/* Two Column Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <LatestRouteAnalysis />
          <CurrentAlerts />
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          <TopAccidentHotspots />
          <WeatherOverview />
        </div>
      </div>
    </div>
  );
};
