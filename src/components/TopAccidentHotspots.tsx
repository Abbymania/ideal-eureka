import { FiMap, FiFile } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const TopAccidentHotspots = () => {
  const hotspots = [
    { name: 'Biratnagar Junction', lat: 26.4525, lng: 87.2726, accidents: 45 },
    { name: 'Itahari Bypass', lat: 26.6514, lng: 87.2788, accidents: 32 },
    { name: 'Dharan Sub-Metro', lat: 26.8056, lng: 87.2889, accidents: 28 },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center space-x-2">
        <FiMap className="h-4 w-4 text-indigo-600" />
        Top Accident Hotspots
      </h2>
      <div className="aspect-w-16 aspect-h-9">
        <MapContainer
          center={[26.6, 87.28]}
          zoom={10}
          scrollWheelZoom={false}
          className="rounded-lg"
          style={{ height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {hotspots.map((spot) => (
            <Marker key={spot.name} position={[spot.lat, spot.lng]}>
              <Popup>
                <div className="text-sm">
                  <strong>{spot.name}</strong><br />
                  Accidents: {spot.accidents}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
