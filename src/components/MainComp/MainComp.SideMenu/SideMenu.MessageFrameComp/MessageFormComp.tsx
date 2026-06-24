import allSvg from "../../../../assets/svg/AllSvg";
import { useState } from "react";
import type { SubmitEvent } from "react";
import type { SelectedLocation } from "../../MainComp";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";
import { supabase } from "../../../../lib/supabaseClient";

const datePhone = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

type MessageFormProps = {
  selectedLocation: SelectedLocation | null;
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
  setSideMenuState,
}: MessageFormProps) {
  const { t } = useTranslation();

  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  // message successful state
  const [showSubmitToast, setShowSubmitToast] = useState(false);

  function resizeTextarea(textarea: HTMLTextAreaElement) {
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 512)}px`;
  }

  const isSubmitDisabled =
    sender.trim() === "" || receiver.trim() === "" || message.trim() === "";

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitDisabled || !selectedLocation) return;

    const newMessage = {
      sender: sender.trim(),
      receiver: receiver.trim(),
      message: message.trim(),
      latitude: selectedLocation.latitude,
      longitude: selectedLocation.longitude,
      is_approved: false,
      is_hidden: false,
    };

    const { error } = await supabase.from("messages").insert(newMessage);

    if (error) {
      console.error(error);
      return;
    }

    // reset message
    setSender("");
    setReceiver("");
    setMessage("");

    // show popup
    setShowSubmitToast(true);

    window.setTimeout(() => {
      // delete popup
      setShowSubmitToast(false);
      // close side menu
      setSideMenuState(false);
    }, 1600);
  }

  return (
    <form className="relative flex h-full flex-col" onSubmit={handleSubmit}>
      {/* popup message */}
      {showSubmitToast && (
        <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-zinc-950 px-5 py-3 text-center text-lg font-medium text-white shadow-xl">
          {t("map.submitted")}
        </div>
      )}
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
          <div className="flex gap-2 text-lg">
            <label className="text-center font-semibold">
              {t("message.from")}:
            </label>
            <input
              className="w-23 outline-none border-b"
              type="text"
              placeholder={t("message.senderPlaceholder")}
              maxLength={12}
              required
              value={sender}
              onChange={(e) => setSender(e.target.value)}
            />
          </div>
          {/* to field */}
          <div className="flex gap-2 text-lg">
            <label className="text-center font-semibold">
              {t("message.to")}:
            </label>
            <input
              className="w-23 outline-none border-b"
              type="text"
              placeholder={t("message.receiverPlaceholder")}
              maxLength={12}
              required
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
            />
          </div>
          <p className="text-center text-zinc-500">
            {new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </header>

      <main className="flex flex-col flex-1 p-4 justify-end my-4">
        <div className="flex flex-row gap-2 mx-1 items-end">
          <div className="p-2 rounded-4xl bg-gray-100 rotate-45 shadow-sm flex justify-center items-center ">
            {crossButton}
          </div>
          <div className="p-1.5 rounded-4xl bg-gray-100 flex w-full shadow-sm ">
            <textarea
              className="w-full rounded-4xl px-4 outline-none text-lg placeholder:text-gray-400 overflow-y-auto resize-none bg-transparent"
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
                className={`px-2 text-white self-end rounded-3xl max-h-7 h-7 ${isSubmitDisabled ? "cursor-not-allowed bg-gray-400" : "bg-[#007AFF] cursor-pointer"}`}
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
