import allSvg from "../../../assets/svg/AllSvg";
import MessageComp from "./SideMenu.MessageComp/MessageComp";

const crossButton = allSvg(30).crossButton;

export default function SideMenu() {
  return (
    <div className="w-100 bg-white absolute right-0 top-0 h-full flex z-20 justify-center">
      <button className="absolute left-5 top-5 cursor-pointer transition hover:text-zinc-400 ease-in-out duration-300">
        {crossButton}
      </button>
      <div className="device device-iphone-14-pro my-15">
        <div className="device-frame">
          {/* Devide content */}
          <div className="device-content bg-white w-full h-full rounded-[3rem]">
            {/* content container */}
            <MessageComp />
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
