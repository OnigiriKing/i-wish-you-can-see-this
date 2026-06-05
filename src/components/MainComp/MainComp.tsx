import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MainComp() {
  return (
    <MapContainer
      center={[35.6762, 139.6503]}
      zoom={3}
      className="h-[calc(100vh-4rem)] w-full z-10"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[35.6762, 139.6503]}>
        <Popup>
          <p>Someone</p>

          <p>I wish I told you how much you meant to me.</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
