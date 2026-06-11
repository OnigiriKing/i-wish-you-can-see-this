import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BannerComp() {
  const [bannerState, setBannerState] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  function handleCloseBanner() {
    setIsClosing(true);

    setTimeout(() => {
      setBannerState(false);
    }, 400);
  }

  const { t } = useTranslation();

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
                {t("banner.title")}
              </h1>
            </div>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-zinc-700">
              <p>{t("banner.place")}</p>
              <div>
                <p>{t("banner.feelings")}</p>
                <p>{t("banner.unsaid")}</p>
              </div>
              <div>
                <p>{t("banner.lost")}</p>
                <p>{t("banner.left")}</p>
                <p>{t("banner.carry")}</p>
              </div>
              <p>{t("banner.thoughts")}</p>
              <p className="pt-2 font-medium text-zinc-900">
                {t("banner.notAlone")}
              </p>
              <p className="font-medium text-zinc-900">{t("banner.enough")}</p>
            </div>
            <button
              className="text-lg mt-10 rounded-full border  px-5 py-3  shadow-lg cursor-pointer bg-white text-zinc-800 transition hover:bg-zinc-100 border-zinc-200"
              onClick={handleCloseBanner}
            >
              {t("banner.continue")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
