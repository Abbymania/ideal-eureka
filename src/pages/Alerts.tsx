import { ActiveAlerts } from '../components/ActiveAlerts';
import { SavedAlerts } from '../components/SavedAlerts';
import { EmergencyWarnings } from '../components/EmergencyWarnings';

export const Alerts = () => {
  return (
    <div className="space-y-8">
      <ActiveAlerts />
      <SavedAlerts />
      <EmergencyWarnings />
    </div>
  );
};
