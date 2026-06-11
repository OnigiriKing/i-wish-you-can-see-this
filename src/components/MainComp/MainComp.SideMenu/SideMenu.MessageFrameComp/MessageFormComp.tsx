import allSvg from "../../../../assets/svg/AllSvg";
import { useState } from "react";
import type { SubmitEvent } from "react";
import type { SelectedLocation } from "../../MainComp";
import type { Message } from "../../../../assets/testData/testMessageData";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

const datePhone = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const dateNow = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

type MessageFormProps = {
  selectedLocation: SelectedLocation | null;
  setTestMessage: Dispatch<SetStateAction<Message[]>>;
  setSideMenuState: Dispatch<SetStateAction<boolean>>;
};

const wifiIcon = allSvg(22).wifiIcon;
const signalIcon = allSvg(22).signalIcon;
const batteryIcon = allSvg(25).batteryIcon;
const crossButton = allSvg(21).crossButton;
const microphoneIcon = allSvg(22).microphoneIcon;
const arrowUpIcon = allSvg(22).arrowUpIcon;
const avatarIcon = allSvg(50).avatarIcon;

export default function MessageFormComp({
  selectedLocation,
  setTestMessage,
  setSideMenuState,
}: MessageFormProps) {

  const { t } = useTranslation();


  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  function resizeTextarea(textarea: HTMLTextAreaElement) {
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 512)}px`;
  }

  const isSubmitDisabled =
    sender.trim() === "" || receiver.trim() === "" || message.trim() === "";

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitDisabled || !selectedLocation) return;

    const newMessage = {
      id: crypto.randomUUID(),
      sender: sender.trim(),
      receiver: receiver.trim(),
      message: message.trim(),
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
      date: dateNow,
    };
    setTestMessage((prevMessage) => [...prevMessage, newMessage]);

    setSender("");
    setReceiver("");
    setMessage("");

    setSideMenuState(false);
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
          <div className="flex gap-2">
            <label className="text-center font-semibold">
              {t("message.from")}:
            </label>
            <input
              className="w-23 outline-none border-b"
              type="text"
              placeholder="Name"
              maxLength={12}
              required
              value={sender}
              onChange={(e) => setSender(e.target.value)}
            />
          </div>
          {/* to field */}
          <div className="flex gap-2">
            <label className="text-center font-semibold">
              {t("message.to")}:
            </label>
            <input
              className="w-23 outline-none border-b"
              type="text"
              placeholder="Her/Him"
              maxLength={12}
              required
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
          </div>
          <p className="text-center text-xs text-zinc-500">{dateNow}</p>
        </div>
      </header>

      <main className="flex flex-col flex-1 p-4 justify-end my-4">
        <div className="flex flex-row gap-2 mx-1 items-end">
          <div className="p-1.5 rounded-4xl bg-gray-100 rotate-45 shadow-sm flex justify-center items-center ">
            {crossButton}
          </div>
          <div className="p-1.5 rounded-4xl bg-gray-100 flex w-full shadow-sm ">
            <textarea
              className="w-full rounded-4xl px-4 outline-none placeholder:text-gray-400 overflow-y-auto resize-none bg-transparent"
              rows={1}
              placeholder="iMessage"
              required
              maxLength={500}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                resizeTextarea(e.currentTarget);
              }}
            />
            {message === "" ? (
              <div className="text-gray-400">{microphoneIcon}</div>
            ) : (
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className={`px-1.5 text-white self-end rounded-3xl max-h-6 ${isSubmitDisabled ? "cursor-not-allowed bg-gray-400" : "bg-[#007AFF] cursor-pointer"}`}
              >
                {arrowUpIcon}
              </button>
            )}
          </div>
        </div>
      </main>
    </form>
  );
}
