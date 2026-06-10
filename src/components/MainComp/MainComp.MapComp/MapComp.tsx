import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import allSvg from "../../../assets/svg/AllSvg";
import { renderToStaticMarkup } from "react-dom/server";
import testMessageData from "../../../assets/testData/testMessageData";
import type { Dispatch, SetStateAction } from "react";

type MapCompProps = {
  setSideMenuState: Dispatch<SetStateAction<boolean>>;
  setSelectedMessageId: Dispatch<SetStateAction<string | null>>;
};

const markerSvg = renderToStaticMarkup(allSvg(40).marker);

const customIcon = L.divIcon({
  className: "custom-map-marker",
  html: markerSvg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

export default function MapComp({ setSideMenuState, setSelectedMessageId }: MapCompProps) {
  return (
    <>
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
            <Popup className="max-w-50">
              <div className="flex flex-col gap-2 mb-2">
                <div className="flex flex-col gap-1 border-b border-zinc-300 font-semibold pb-1">
                  <div className="text-[14px]">{message.sender}</div>
                  <div>To: {message.receiver}</div>
                  <div>date</div>
                </div>
                <div className="text-[15px]">
                  {message.message.length > 40
                    ? message.message.slice(0, 40) + "..."
                    : message.message}
                </div>
              </div>
              <div className="w-full items-center justify-center flex">
                <button
                  className="cursor-pointer rounded-xl px-4 py-1.5 font-medium text-zinc-800 transition hover:bg-zinc-100 text-center border-zinc-200 border"
                  onClick={() => {
                    setSideMenuState(true);
                    setSelectedMessageId(message.id);
                  }}
                >
                  Open message
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <button
        className="absolute bottom-6 left-1/2 z-100 -translate-x-1/2 rounded-full  bg-black px-5 py-3 text-white shadow-lg cursor-pointer"
        onClick={() => {
          // setChooseLocationMode(true);
          // setSideMenuState(false);
          // setSideMenuMode("create");
          // setSelectedMessageId(null);
          // setSelectedLocation(null);
        }}
      >
        Leave your message
      </button>
    </>
  );
}
