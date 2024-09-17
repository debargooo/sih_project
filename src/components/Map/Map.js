// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import StackedBar from '../StackedBar/StackedBar'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixing the marker icons not showing up
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    iconSize: [25, 41],
    shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
    const position = [28.6139, 77.2090]; // Latitude and Longitude of Delhi

    return (
        <div className='h-screen w-screen p-9 flex justify-center items-center gap-8'>
            <MapContainer 
              center={position} 
              zoom={13} 
              style={{ height: '60vh', width: '30vw' }} // Using vh and vw for dynamic sizing
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        A marker in Delhi.
                    </Popup>
                </Marker>
            </MapContainer>
            <StackedBar/>
        </div>
    );
};

export default MapComponent;
