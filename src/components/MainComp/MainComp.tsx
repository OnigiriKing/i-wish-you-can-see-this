import MapComp from "./MainComp.MapComp/MapComp";
import SideMenu from "./MainComp.SideMenu/SideMenu";
import { useState } from "react";
import testMessageData from "../../assets/testData/testMessageData";

export default function MainComp() {
  const [sideMenuState, setSideMenuState] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(
    null,
  );

  // create message states
  const [chooseLocationMode, setChooseLocationMode] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [sideMenuMode, setSideMenuMode] = useState<"view" | "create">("view");

  const selectedMessage = testMessageData.find(
    (message) => message.id === selectedMessageId,
  );

  return (
    <div className="relative flex overflow-hidden">
      <MapComp
        setSideMenuState={setSideMenuState}
        setSelectedMessageId={setSelectedMessageId}
      />
      <SideMenu
        sideMenuState={sideMenuState}
        setSideMenuState={setSideMenuState}
        selectedMessage={selectedMessage}
        setSelectedMessageId={setSelectedMessageId}
      />
    </div>
  );
}
