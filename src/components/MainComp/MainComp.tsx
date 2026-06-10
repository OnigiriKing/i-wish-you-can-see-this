import MapComp from "./MainComp.MapComp/MapComp";
import SideMenu from "./MainComp.SideMenu/SideMenu";
import { useState } from "react";
import testMessageData from "../../assets/testData/testMessageData";

// additional types
export type SelectedLocation = {
  latitude: number;
  longitude: number;
};

export type SideMenuMode = "view" | "create";

export default function MainComp() {
  const [sideMenuState, setSideMenuState] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState<string | null>(
    null,
  );

  // create message states
  const [chooseLocationMode, setChooseLocationMode] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(null);
  const [sideMenuMode, setSideMenuMode] = useState<SideMenuMode>("view");

  // test message data
  const [testMessage, setTestMessage] = useState(testMessageData);

  const selectedMessage = testMessage.find(
    (message) => message.id === selectedMessageId,
  );

  return (
    <div className="relative flex overflow-hidden">
      <MapComp
        chooseLocationMode={chooseLocationMode}
        setChooseLocationMode={setChooseLocationMode}
        setSelectedLocation={setSelectedLocation}
        setSideMenuState={setSideMenuState}
        setSideMenuMode={setSideMenuMode}
        setSelectedMessageId={setSelectedMessageId}
        testMessage={testMessage}
      />
      <SideMenu
        sideMenuState={sideMenuState}
        setSideMenuState={setSideMenuState}
        selectedMessage={selectedMessage}
        setSelectedMessageId={setSelectedMessageId}
        sideMenuMode={sideMenuMode}
        selectedLocation={selectedLocation}
        setTestMessage={setTestMessage}
      />
    </div>
  );
}
