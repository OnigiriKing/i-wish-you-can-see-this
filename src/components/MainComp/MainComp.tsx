import MapComp from "./MainComp.MapComp/MapComp";
import SideMenu from "./MainComp.SideMenu/SideMenu";
import { useState } from "react";
import { useEffect } from "react";
import type { Message } from "../../assets/types/messageType";

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

  // supabase
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    let ignore = false;

    async function getMessages() {
      try {
        const response = await fetch("/.netlify/functions/messages");

        if (!response.ok) {
          throw new Error(`Failed to fetch messages: ${response.status}`);
        }
        const data: Message[] = await response.json();

        if (!ignore) {
          setMessages(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    void getMessages();

    return () => {
      ignore = true;
    };
  }, []);

  // create message states
  const [chooseLocationMode, setChooseLocationMode] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState<SelectedLocation | null>(null);
  const [sideMenuMode, setSideMenuMode] = useState<SideMenuMode>("view");

  // test message data
  // const [testMessage, setTestMessage] = useState(testMessageData);

  const selectedMessage = messages.find(
    (message) => message.id === selectedMessageId,
  );

  return (
    <div className="relative flex h-[calc(100dvh-4rem-env(safe-area-inset-top))] overflow-hidden">
      <MapComp
        chooseLocationMode={chooseLocationMode}
        setChooseLocationMode={setChooseLocationMode}
        setSelectedLocation={setSelectedLocation}
        setSideMenuState={setSideMenuState}
        setSideMenuMode={setSideMenuMode}
        setSelectedMessageId={setSelectedMessageId}
        messages={messages}
      />
      <SideMenu
        sideMenuState={sideMenuState}
        setSideMenuState={setSideMenuState}
        selectedMessage={selectedMessage}
        setSelectedMessageId={setSelectedMessageId}
        sideMenuMode={sideMenuMode}
        selectedLocation={selectedLocation}
        setMessages={setMessages}
      />
    </div>
  );
}
