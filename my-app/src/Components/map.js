import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './style/map.css';

const Map = () => {
  const latitude = -1.2921;
  const longitude = 36.8219;
  const zoomLevel = 100;

  const markerIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className='mapss'>
        <div id="map-container">
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoomLevel}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} icon={markerIcon}>
          <Popup>
            Nairobi, Kenya <br />
            Latitude: {latitude}, Longitude: {longitude}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    </div>
    
  );
};

export default Map;
