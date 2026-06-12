import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import allSvg from "../../../assets/svg/AllSvg";
import { renderToStaticMarkup } from "react-dom/server";
import type { Dispatch, SetStateAction } from "react";
import type { SideMenuMode, SelectedLocation } from "../MainComp";
import LocationPickEvent from "./MapCompFunctions/LocationPickEvent";
import type { Message } from "../../../assets/types/messageType";
import { useTranslation } from "react-i18next";

type MapCompProps = {
  chooseLocationMode: boolean;
  setChooseLocationMode: Dispatch<SetStateAction<boolean>>;
  setSelectedLocation: Dispatch<SetStateAction<SelectedLocation | null>>;
  setSideMenuState: Dispatch<SetStateAction<boolean>>;
  setSideMenuMode: Dispatch<SetStateAction<SideMenuMode>>;
  setSelectedMessageId: Dispatch<SetStateAction<string | null>>;
  messages: Message[];
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
  messages,
}: MapCompProps) {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 h-full w-full overflow-hidden">
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
        {messages.map((message) => (
          <Marker
            position={[message.latitude, message.longitude]}
            key={message.id}
            icon={customIcon}
          >
            <Popup className="max-w-50">
              <div className="flex flex-col gap-2 mb-2">
                <div className="flex flex-col gap-1 border-b border-zinc-300 font-semibold pb-1">
                  <div className="text-[14px]">{message.sender}</div>
                  <div>
                    {t("message.to")}: {message.receiver}
                  </div>
                  <div>
                    {new Date(message.created_at).toLocaleDateString("en-GB", {
                      day: "2-digit",

                      month: "long",

                      year: "numeric",
                    })}
                  </div>
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
                  {t("map.openMessage")}
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <button
        className="absolute bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] left-1/2 z-1000 -translate-x-1/2 cursor-pointer rounded-full border border-zinc-200 bg-white px-5 py-3 text-zinc-800 shadow-lg transition hover:bg-zinc-100 sm:bottom-6"
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
        {chooseLocationMode ? t("map.cancel") : t("map.leaveMessage")}
      </button>
    </div>
  );
}
