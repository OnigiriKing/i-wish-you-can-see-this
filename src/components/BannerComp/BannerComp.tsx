import { useState } from "react";

export default function BannerComp() {
  const [bannerState, setBannerState] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  function handleCloseBanner() {
    setIsClosing(true);

    setTimeout(() => {
      setBannerState(false);
    }, 400);
  }

  return (
    <>
      {bannerState && (
        <div
          className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-hidden bg-white text-center justify-center items-center transition-all duration-400 flex flex-col  ${
            isClosing ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"
          } `}
        >
          <div className="mx-auto w-[80%] max-w-3xl">
            <div>
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-zinc-950">
                I wish you could read this.
              </h1>
            </div>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-zinc-700">
              <p>A place for the unsent messages.</p>
              <div>
                <p>
                  For the feelings that still live in your heart: the grief, the
                  love, the pain, the goodbyes.
                </p>
                <p>All “I miss you”s, and “I love you"s left unsaid.</p>
              </div>
              <div>
                <p>For someone you lost.</p>
                <p>Someone who left.</p>
                <p>
                  Someone you still carry in your heart but can no longer reach.
                </p>
              </div>
              <p>You can put your thoughts here for someone to see. </p>
              <p className="pt-2 font-medium text-zinc-900">
                You are not alone.
              </p>
              <p className="font-medium text-zinc-900">
                And you are enough, just as you are.
              </p>
            </div>
            <button
              className="text-lg mt-10 rounded-full border  px-5 py-3  shadow-lg cursor-pointer bg-white text-zinc-800 transition hover:bg-zinc-100 border-zinc-200"
              onClick={handleCloseBanner}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
}
