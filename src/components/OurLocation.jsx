// src/components/OurLocation.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixing default icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const OurLocation = () => {
  const position = [23.160554583304265, 89.20188905087441]; // Example: Dhaka, Bangladesh

  return (
    <div className="my-16 px-4 max-w-screen-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Location</h2>
      <p className="text-gray-600 mb-6">Find our main office on the map below</p>

      <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full z-10">
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              Parcel Management Office <br /> Jashore,Khulna, Bangladesh
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default OurLocation;
