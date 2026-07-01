import { FiMap, FiMapPin, FiAlertTriangle } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

export const HotspotsMap = () => {
  const [selectedHotspot, setSelectedHotspot] = useState(null);

  const hotspots = [
    {
      id: 1,
      name: 'Biratnagar Junction',
      lat: 26.4525,
      lng: 87.2726,
      accidents: 45,
      deaths: 12,
      seriousInjuries: 28,
      commonVehicle: 'Motorcycle',
      commonCause: 'Overspeeding',
      historicalRisk: 'High',
      weatherTrend: 'Monsoon season increases risk',
    },
    {
      id: 2,
      name: 'Itahari Bypass',
      lat: 26.6514,
      lng: 87.2788,
      accidents: 32,
      deaths: 8,
      seriousInjuries: 19,
      commonVehicle: 'Truck',
      commonCause: 'Poor visibility',
      historicalRisk: 'High',
      weatherTrend: 'Fog during winter months',
    },
    {
      id: 3,
      name: 'Dharan Sub-Metro',
      lat: 26.8056,
      lng: 87.2889,
      accidents: 28,
      deaths: 5,
      seriousInjuries: 18,
      commonVehicle: 'Bus',
      commonCause: 'Road condition',
      historicalRisk: 'Medium',
      weatherTrend: 'Consistent throughout year',
    },
    {
      id: 4,
      name: 'Urlabari Market',
      lat: 26.7500,
      lng: 87.2900,
      accidents: 22,
      deaths: 3,
      seriousInjuries: 15,
      commonVehicle: 'Car',
      commonCause: 'Jaywalking',
      historicalRisk: 'Medium',
      weatherTrend: 'Slight increase in pre-monsoon',
    },
    {
      id: 5,
      name: 'Rangeli Highway',
      lat: 26.9000,
      lng: 87.3000,
      accidents: 18,
      deaths: 4,
      seriousInjuries: 10,
      commonVehicle: 'Motorcycle',
      commonCause: 'Overtaking',
      historicalRisk: 'Low',
      weatherTrend: 'Unaffected by weather',
    },
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'red';
      case 'medium': return 'orange';
      case 'low': return 'yellow';
      default: return 'green';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiMap className="h-4 w-4 text-indigo-600" />
        Accident Hotspots Map
      </h2>
      <div className="aspect-w-16 aspect-h-9">
        <MapContainer
          center={[26.7, 87.28]}
          zoom={10}
          scrollWheelZoom={false}
          className="rounded-lg"
          style={{ height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Hotspot markers */}
          {hotspots.map((spot) => (
            <Marker
              key={spot.id}
              position={[spot.lat, spot.lng]}
              // Using a circle marker for heatmap-like effect
            >
              <Circle
                center={[spot.lat, spot.lng]}
                radius={Math.sqrt(spot.accidents) * 5} // Scale radius by accident count
                color={getRiskColor(spot.historicalRisk)}
                fillColor={getRiskColor(spot.historicalRisk)}
                fillOpacity={0.6}
              >
                <Popup>
                  <div className="text-sm space-y-2">
                    <div className="font-bold">{spot.name}</div>
                    <div className="text-xs text-gray-500">
                      Accidents: {spot.accidents} |
                      Deaths: {spot.deaths} |
                      Serious Injuries: {spot.seriousInjuries}
                    </div>
                    <div className="text-xs text-gray-500">
                      Common Vehicle: {spot.commonVehicle}
                    </div>
                    <div className="text-xs text-gray-500">
                      Common Cause: {spot.commonCause}
                    </div>
                    <div className="text-xs text-gray-500">
                      Historical Risk: 
                      <span className={`px-1 py-0.5 rounded-full text-xs 
                        ${spot.historicalRisk === 'High' ? 'bg-red-100 text-red-800' :
                          spot.historicalRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'}`}>
                        {spot.historicalRisk}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 italic">
                      Weather Trend: {spot.weatherTrend}
                    </div>
                  </div>
                </Popup>
              </Circle>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
