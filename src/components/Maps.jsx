import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
//import "../styles/maps.css";

const Maps = ({ lat, lon }) => {
  const latitude = lat && lat;
  const longitude = lon  && lon;
 

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
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Maps;
