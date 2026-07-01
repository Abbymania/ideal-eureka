import { FiMap, FiAlertTriangle, FiBarChart2, FiPieChart } from 'react-icons/fi';
import { SummaryCards } from '../components/SummaryCards';
import { HotspotsMap } from '../components/HotspotsMap';
import { SidePanel } from '../components/SidePanel';

export const AccidentHotspots = () => {
  return (
    <div className="space-y-8">
      <SummaryCards />
      <div className="grid gap-6">
        <div className="col-span-2">
          <HotspotsMap />
        </div>
      </div>
      <div className="grid gap-6">
        <div className="col-span-1">
          <SidePanel />
        </div>
      </div>
    </div>
  );
};
