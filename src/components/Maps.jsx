import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
//import "../styles/maps.css";
import L from 'leaflet'
import icon from "leaflet/dist/images/Marker-icon.png";
import iconShadow from "leaflet/dist/images/Marker-icon.png"

const iconUbication = new L.icon({
  iconUrl:icon,
  iconShadowUrl: iconShadow
})

const Maps = ({ lat, lon,city }) => {
  const latitude = lat && lat;
  const longitude = lon && lon;

  return (
    <>
      <MapContainer
        center={[latitude, longitude]}
        zoom={-12}
        scrollWheelZoom={false}
        className="min-h-[160px] min-w-[300px]  rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={iconUbication}>
          <Popup>
           {`estas en la ciudad ${city}}` }
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Maps;
