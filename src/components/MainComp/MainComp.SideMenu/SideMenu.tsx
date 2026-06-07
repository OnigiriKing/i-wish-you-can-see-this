import allSvg from "../../../assets/svg/AllSvg";
import MessageComp from "./SideMenu.MessageComp/MessageComp";
import type { Dispatch, SetStateAction } from "react";
import type { Message } from "../../../assets/testData/testMessageData";

const crossButton = allSvg(30).crossButton;

type SideMenuProps = {
  sideMenuState: boolean;
  setSideMenuState: Dispatch<SetStateAction<boolean>>;
  selectedMessage: Message | undefined;
  setSelectedMessageId: Dispatch<SetStateAction<string | null>>;
};

export default function SideMenu({
  sideMenuState,
  setSideMenuState,
  selectedMessage,
  setSelectedMessageId,
}: SideMenuProps) {
  return (
    <div
      className={`w-100 bg-white absolute right-0 top-0 h-full flex z-20 justify-center transition-transform duration-300 ease-in-out ${sideMenuState ? "translate-x-0" : "translate-x-full"}`}
    >
      <button
        className="absolute left-5 top-5 cursor-pointer transition hover:text-zinc-400 ease-in-out duration-300"
        onClick={() => {
          setSideMenuState(false);
          setSelectedMessageId(null);
        }}
      >
        {crossButton}
      </button>
      <div className="device device-iphone-14-pro my-15">
        <div className="device-frame">
          {/* Device content */}
          <div className="device-content bg-white w-full h-full rounded-[3rem]">
            {/* content container */}
            <MessageComp selectedMessage={selectedMessage} />
          </div>
        </div>

        <div className="device-stripe"></div>

        <div className="device-header"></div>

        <div className="device-sensors"></div>

        <div className="device-btns"></div>

        <div className="device-power"></div>
      </div>
    </div>
  );
}
