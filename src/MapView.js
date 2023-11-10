import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';

function MapView({ cities, selectedCities, shortestPath }) {
  return (
    <div>
        
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.name}
            position={[city.lat, city.lng]}
            title={city.name}
          />
        )}
        <Polyline
          positions={selectedCities.map((city) => [city.lat, city.lng])}
          color="blue"
        />
      </MapContainer>
    </div>
  );
}

export default MapView;
