import allSvg from "../../../../assets/svg/AllSvg";
import { useState } from "react";
import type { SubmitEvent } from "react";

const datePhone = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const wifiIcon = allSvg(22).wifiIcon;
const signalIcon = allSvg(22).signalIcon;
const batteryIcon = allSvg(25).batteryIcon;
const crossButton = allSvg(21).crossButton;
const microphoneIcon = allSvg(22).microphoneIcon;
const arrowUpIcon = allSvg(22).arrowUpIcon;
const avatarIcon = allSvg(50).avatarIcon;

export default function MessageFormComp() {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const newMessage = {
      sender,
      receiver,
      message,
    };
  }
  return (
    <form className="flex h-full flex-col" onSubmit={handleSubmit}>
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
        <div className="mt-3 justify-center items-center text-center flex flex-col gap-1">
          <div className="text-[#8A94A6]">{avatarIcon}</div>
          {/* from field */}
          <div className="flex gap-1">
            <label className="text-center font-semibold">From:</label>
            <input
              className="w-20"
              type="text"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
            />
          </div>
          {/* to field */}
          <div className="flex gap-1">
            <label className="text-center font-semibold">To:</label>
            <input
              className="w-20"
              type="text"
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
          </div>
          <p className="text-center text-xs text-zinc-500">Today 22:15</p>
        </div>
      </header>

      <main className="flex flex-col flex-1 p-4 justify-end my-4">
        <div className="flex flex-row gap-2 mx-1">
          <div className="p-1.5 rounded-4xl bg-gray-100 rotate-45 shadow-sm flex justify-center items-center ">
            {crossButton}
          </div>
          <div className="p-1.5 rounded-4xl bg-gray-100 flex w-full shadow-sm">
            <input
              className="cursor-default w-full rounded-4xl px-2 mr-2 outline-none"
              type="text"
              placeholder="iMessage"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {message === "" ? (
              <div className="text-gray-400">{microphoneIcon}</div>
            ) : (
              <button className="px-1.5 text-white bg-[#007AFF] rounded-3xl">
                {arrowUpIcon}
              </button>
            )}
          </div>
        </div>
      </main>
    </form>
  );
}
