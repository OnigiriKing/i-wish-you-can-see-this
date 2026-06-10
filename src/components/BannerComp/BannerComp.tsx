import { useState } from "react";

export default function BannerComp() {
  const [bannerState, setBannerState] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  function handleCloseBanner() {
    setIsClosing(true);

    setTimeout(() => {
      setBannerState(false);
    }, 300);
  }

  return (
    <>
      <div className={`h-full w-full absolute z-50 bg-white text-center items-center`}>
        <div>
          <h1>I wish you can read this</h1>
        </div>
        <div></div>
        <button onClick={handleCloseBanner}>Continue</button>
      </div>
    </>
  );
}
