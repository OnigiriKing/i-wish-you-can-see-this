import allSvg from "../../../../assets/svg/AllSvg";

const datePhone = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const wifiIcon = allSvg(22).wifiIcon;
const signalIcon = allSvg(22).signalIcon;
const batteryIcon = allSvg(25).batteryIcon;
const crossButton = allSvg(22).crossButton;

export default function MessageComp() {
  return (
    <div className="flex h-full flex-col">
      {/* actual text content */}
      <header className="border-b border-zinc-200 p-4">
        <div className="mx-4 flex flex-row justify-between items-center align-middle">
          <div className="font-semibold text-[1.1rem]">{datePhone}</div>
          <div className="flex gap-1.5 items-center align-middle">
            <div>{signalIcon}</div>
            <div>{wifiIcon}</div>
            <div>{batteryIcon}</div>
          </div>
        </div>
        <p className="text-center font-semibold my-7">Mom</p>

        <p className="text-center text-xs text-zinc-500">Today 22:15</p>
      </header>

      <main className="flex-1 p-4">
        <div className="ml-auto max-w-[80%] rounded-3xl bg-blue-500 px-4 py-3 text-white rounded-br-xs mb-6">
          I wish I told you how much you meant to me.
        </div>
        <div className="flex flex-row gap-2">
          <div className="p-1.5 rounded-4xl bg-gray-200 rotate-45">
            {crossButton}
          </div>
          <div className="p-1.5 rounded-4xl bg-gray-200 flex w-full">
            <div className="mx-2">
            <div className="text-gray-400">iMessage</div>
            <div></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
