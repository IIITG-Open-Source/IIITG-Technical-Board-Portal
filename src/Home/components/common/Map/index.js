import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map(props) {
    return (
        <MapContainer center={[26.0812401, 91.5598021]} zoom={14} scrollWheelZoom={true} className={props.className}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[26.0812401, 91.5598021]}>
                <Popup>
                    Academic Building of the Indian Institute of Information Technology Guwahati.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;