import allSvg from "../../../../assets/svg/AllSvg";
import type { Message } from "../../../../assets/types/messageType";
import { useTranslation } from "react-i18next";

const datePhone = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

type MessageCompProps = {
  selectedMessage: Message | undefined;
};

const wifiIcon = allSvg(22).wifiIcon;
const signalIcon = allSvg(22).signalIcon;
const batteryIcon = allSvg(25).batteryIcon;
const crossButton = allSvg(21).crossButton;
const microphoneIcon = allSvg(22).microphoneIcon;
const avatarIcon = allSvg(50).avatarIcon;

export default function MessageComp({ selectedMessage }: MessageCompProps) {
  const { t } = useTranslation();

  if (!selectedMessage) {
    return null;
  }

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
        <div className="mt-3 justify-center items-center text-center flex flex-col gap-1 text-lg">
          <div className="text-[#8A94A6]">{avatarIcon}</div>
          <p className="text-center font-semibold">
            {t("message.from")}: {selectedMessage.sender}
          </p>
          <p className="text-center font-semibold">
            {t("message.to")}: {selectedMessage.receiver}
          </p>
          <p className="text-center text-zinc-500">
            {new Date(selectedMessage.created_at).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </header>

      <main className="flex flex-col flex-1 p-4 justify-end my-4">
        <div className="ml-auto max-w-[80%] rounded-3xl bg-[#007AFF] px-4 py-3 text-lg text-white rounded-br-md mb-6">
          {selectedMessage.message}
        </div>
        <div className="flex flex-row gap-2 mx-1">
          <div className="p-1.5 rounded-4xl bg-gray-100 rotate-45 shadow-sm flex justify-center items-center ">
            {crossButton}
          </div>
          <div className="p-1.5 rounded-4xl bg-gray-100 flex w-full shadow-sm">
            <div className="mx-2 flex justify-between w-full text-gray-400">
              <div className="cursor-default">iMessage</div>
              <div>{microphoneIcon}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
