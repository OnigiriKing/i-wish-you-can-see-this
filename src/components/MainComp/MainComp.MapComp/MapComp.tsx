import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import allSvg from "../../../assets/svg/AllSvg";
import { renderToStaticMarkup } from "react-dom/server";
import type { Dispatch, SetStateAction } from "react";
import type { SideMenuMode, SelectedLocation } from "../MainComp";
import LocationPickEvent from "./MapCompFunctions/LocationPickEvent";
import type { Message } from "../../../assets/testData/testMessageData";


type MapCompProps = {
  chooseLocationMode: boolean;
  setChooseLocationMode: Dispatch<SetStateAction<boolean>>;
  setSelectedLocation: Dispatch<SetStateAction<SelectedLocation | null>>;
  setSideMenuState: Dispatch<SetStateAction<boolean>>;
  setSideMenuMode: Dispatch<SetStateAction<SideMenuMode>>;
  setSelectedMessageId: Dispatch<SetStateAction<string | null>>;
  testMessage: Message[];
};

const markerSvg = renderToStaticMarkup(allSvg(40).marker);

const customIcon = L.divIcon({
  className: "custom-map-marker",
  html: markerSvg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});



export default function MapComp({
  chooseLocationMode,
  setChooseLocationMode,
  setSelectedLocation,
  setSideMenuState,
  setSideMenuMode,
  setSelectedMessageId,
  testMessage,
}: MapCompProps) {
  return (
    <div className="relative h-[calc(100vh-4rem)] w-full z-10">
      <MapContainer
        center={[35.6762, 139.6503]}
        zoom={3}
        className={`h-full w-full`}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationPickEvent
          chooseLocationMode={chooseLocationMode}
          setChooseLocationMode={setChooseLocationMode}
          setSelectedLocation={setSelectedLocation}
          setSideMenuState={setSideMenuState}
          setSideMenuMode={setSideMenuMode}
        />
        {testMessage.map((message) => (
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
                  <div>{message.date}</div>
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
                    setChooseLocationMode(false);
                    setSideMenuState(true);
                    setSelectedMessageId(message.id);
                    setSideMenuMode("view");
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
        className="absolute bottom-6 left-1/2 z-1000 -translate-x-1/2 rounded-full border  px-5 py-3  shadow-lg cursor-pointer bg-white text-zinc-800 transition hover:bg-zinc-100 border-zinc-200"
        onClick={() => {
          if (chooseLocationMode) {
            setChooseLocationMode(false);
            setSideMenuState(false);
            setSideMenuMode("view");
            setSelectedMessageId(null);
            setSelectedLocation(null);
            return;
          }
          setChooseLocationMode(true);
          setSideMenuState(false);
          setSideMenuMode("create");
          setSelectedMessageId(null);
          setSelectedLocation(null);
        }}
      >
        {chooseLocationMode ? "Cancel" : "Leave your message"}
      </button>
    </div>
  );
}
