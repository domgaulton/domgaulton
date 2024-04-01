import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const iconPinBottle = new Leaflet.Icon({
  iconUrl: '/map/bottle-marker.svg',
  iconSize: new Leaflet.Point(40, 40),
});

const iconEmptyPinBottle = new Leaflet.Icon({
  iconUrl: '/map/empty-bottle-marker.svg',
  iconSize: new Leaflet.Point(40, 40),
});

const MapWithPins = ({ pins }: { pins: any }) => {
  console.log({ pins });
  return (
    <MapContainer
      center={[51.4752262, -0.052643]}
      zoom={12}
      style={{ height: '500px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pins.map((pin: any, index: number) => (
        <Marker
          position={pin.position}
          key={index}
          icon={pin.visited === 'TRUE' ? iconPinBottle : iconEmptyPinBottle}
        >
          <Popup>
            <b>{pin.name}</b>
            <br />
            {pin.date ? pin.date : 'On the list'}
            <br />
            <a href={pin.url} target="_blank" rel="noreferrer">
              Website
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithPins;
