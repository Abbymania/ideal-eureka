import { FiMapPin, FiMap } from 'react-icons/fi';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const InteractiveRouteMap = () => {
  // Mock route coordinates (Biratnagar to Letang via Itahari, Urlabari, Rangeli)
  const routePoints: [number, number][] = [
    [26.4525, 87.2726], // Biratnagar
    [26.5500, 87.2800], // Point 1
    [26.6514, 87.2788], // Itahari
    [26.7000, 87.2800], // Point 2
    [26.7500, 87.2850], // Point 3
    [26.8056, 87.2889], // Dharan (near Urlabari area)
    [26.8200, 87.2900], // Point 4
    [26.8500, 87.2950], // Point 5
    [26.9000, 87.3000], // Rangeli area
    [26.9500, 87.3050], // Point 6
    [26.9800, 87.3100], // Point 7
    [27.0000, 87.3150], // Letang area
  ];

  // Risk levels for each segment (0-10 scale)
  const segmentRisks = [2.7, 1.8, 0.9, 0.4, 0.6, 1.2, 0.8, 0.5, 0.3, 0.4];

  const getRiskColor = (risk: number) => {
    if (risk >= 2.0) return 'red';
    if (risk >= 1.0) return 'orange';
    if (risk >= 0.5) return 'yellow';
    return 'green';
  };

  const getRiskWeight = (risk: number) => {
    if (risk >= 2.0) return 8;
    if (risk >= 1.0) return 7;
    if (risk >= 0.5) return 6;
    return 5;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiMap className="h-4 w-4 text-indigo-600" />
        Interactive Route Map
      </h2>
      <div className="aspect-w-16 aspect-h-9">
        <MapContainer
          center={[26.75, 87.29]}
          zoom={11}
          scrollWheelZoom={false}
          className="rounded-lg"
          style={{ height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Route segments with different colors based on risk */}
          {routePoints.slice(0, -1).map((start, index) => {
            const end = routePoints[index + 1];
            const risk = segmentRisks[index] || 0;
            const color = getRiskColor(risk);
            const weight = getRiskWeight(risk);
            
            return (
              <Polyline
                key={`segment-${index}`}
                positions={[start, end]}
                color={color}
                weight={weight}
                opacity={0.8}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>Segment {index + 1}</strong><br />
                    Risk: {risk.toFixed(1)}/10<br />
                    Color: {color.toUpperCase()}
                  </div>
                </Popup>
              </Polyline>
            );
          })}
          
          {/* Markers for key points */}
          <Marker position={routePoints[0]}>
            <Popup>
              <div className="text-sm">
                <strong>Origin: Biratnagar</strong>
              </div>
            </Popup>
          </Marker>
          <Marker position={routePoints[routePoints.length - 1]}>
            <Popup>
              <div className="text-sm">
                <strong>Destination: Letang</strong>
              </div>
            </Popup>
          </Marker>
          
          {/* Hotspot markers */}
          {[1, 2, 4, 6].map((index) => (
            <Marker
              key={`hotspot-${index}`}
              position={routePoints[index]}
            >
              <Popup>
                <div className="text-sm">
                  <strong>Accident Hotspot</strong><br />
                  Elevated risk area
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
