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
          className={`h-full w-full absolute z-40 bg-white text-center justify-center items-center transition-all duration-400 flex flex-col  ${
            isClosing ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"
          } `}
        >
          <div>
            <h1 className="">I wish you can read this</h1>
          </div>
          <div></div>
          <button
            className="rounded-full border  px-5 py-3  shadow-lg cursor-pointer bg-white text-zinc-800 transition hover:bg-zinc-100 border-zinc-200"
            onClick={handleCloseBanner}
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
}
