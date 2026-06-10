import type { SelectedLocation, SideMenuMode } from "../../MainComp";
import type { Dispatch, SetStateAction } from "react";
import { useMapEvents } from "react-leaflet";

type LocationPickerEventsProps = {
  chooseLocationMode: boolean;
  setChooseLocationMode: Dispatch<SetStateAction<boolean>>;
  setSelectedLocation: Dispatch<SetStateAction<SelectedLocation | null>>;
  setSideMenuState: Dispatch<SetStateAction<boolean>>;
  setSideMenuMode: Dispatch<SetStateAction<SideMenuMode>>;
};

export default function LocationPickEvent({
  chooseLocationMode,
  setChooseLocationMode,
  setSelectedLocation,
  setSideMenuState,
  setSideMenuMode,
}: LocationPickerEventsProps) {
  useMapEvents({
    click(event) {
      if (!chooseLocationMode) return;

      setSelectedLocation({
        latitude: event.latlng.lat,
        longitude: event.latlng.lng,
      });

      setChooseLocationMode(false);
      setSideMenuState(true);
      setSideMenuMode("create");
    },
  });

  return null;
}
