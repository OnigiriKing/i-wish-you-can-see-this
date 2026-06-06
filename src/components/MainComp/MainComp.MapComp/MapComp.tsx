import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import allSvg from "../../../assets/svg/AllSvg";
import { renderToStaticMarkup } from "react-dom/server";
import testMessageData from "../../../assets/testData/testMessageData";

const markerSvg = renderToStaticMarkup(allSvg(40).marker);

const customIcon = L.divIcon({
  className: "custom-map-marker",
  html: markerSvg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function MapComp() {
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
      {testMessageData.map((message) => (
        <Marker
          position={[message.latitude, message.longitude]}
          key={message.id}
          icon={customIcon}
        >
          <Popup>
            <p>{message.sender}</p>

            <p>{message.message}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
