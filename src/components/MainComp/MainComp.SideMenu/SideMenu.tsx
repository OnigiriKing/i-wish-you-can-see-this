import allSvg from "../../../assets/svg/AllSvg";
import MessageComp from "./SideMenu.MessageFrameComp/MessageComp";
import type { Dispatch, SetStateAction } from "react";
import type { Message } from "../../../assets/types/messageType";
import MessageFormComp from "./SideMenu.MessageFrameComp/MessageFormComp";
import type { SelectedLocation, SideMenuMode } from "../MainComp";
import { supabase } from "../../../lib/supabaseClient";

const crossButton = allSvg(35).crossButton;
const reportButton = allSvg(45).reportIcon;

type SideMenuProps = {
  sideMenuState: boolean;
  setSideMenuState: Dispatch<SetStateAction<boolean>>;
  selectedMessage: Message | undefined;
  setSelectedMessageId: Dispatch<SetStateAction<string | null>>;
  sideMenuMode: SideMenuMode;
  selectedLocation: SelectedLocation | null;
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

export default function SideMenu({
  sideMenuState,
  setSideMenuState,
  selectedMessage,
  setSelectedMessageId,
  sideMenuMode,
  selectedLocation,
}: SideMenuProps) {
  async function handleReport() {
    if (!selectedMessage) return;

    const confirmed = window.confirm("Report this message?");

    if (!confirmed) return;

    const newReport = {
      message_id: selectedMessage.id,
    };

    const { error } = await supabase.from("message_reports").insert(newReport);

    if (error) {
      console.error(error);
      return;
    }
    alert("Thank you. This message was reported.");
  }

  return (
    <div
      className={`absolute inset-0 z-40 flex w-full items-start justify-center overflow-y-auto bg-zinc-50 px-4 py-8 transition-transform duration-300 ease-in-out lg:inset-y-0 lg:right-0 lg:left-auto lg:w-105 lg:px-0 lg:py-0 ${sideMenuState ? "translate-x-0" : "translate-x-full"}`}
    >
      <button
        className="absolute left-5 top-5 z-50 cursor-pointer transition duration-300 ease-in-out hover:text-zinc-400"
        onClick={() => {
          setSideMenuState(false);
          setSelectedMessageId(null);
        }}
      >
        {crossButton}
      </button>
      {selectedMessage ? (
        <button
          className="absolute right-5 top-5 z-50 cursor-pointer transition duration-300 ease-in-out hover:text-zinc-400"
          onClick={handleReport}
        >
          {reportButton}
        </button>
      ) : (
        ""
      )}
      <div className="phone-device-wrapper">
        <div className="device device-iphone-14-pro sm:my-15">
          <div className="device-frame">
            {/* Device content */}
            <div className="device-content bg-white w-full h-full rounded-[3rem]">
              {/* content container */}
              {sideMenuMode === "view" && (
                <MessageComp selectedMessage={selectedMessage} />
              )}

              {sideMenuMode === "create" && (
                <MessageFormComp
                  selectedLocation={selectedLocation}
                  setSideMenuState={setSideMenuState}
                />
              )}
            </div>
          </div>

          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      </div>
    </div>
  );
}
