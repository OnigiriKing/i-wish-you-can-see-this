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
          className={`fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top))] bottom-0 z-40 overflow-y-auto bg-zinc-50 px-6 py-10 text-center transition-all duration-400 sm:top-16 ${
            isClosing ? "-translate-y-6 opacity-0" : "translate-y-0 opacity-100"
          } `}
        >
          <div className="mx-auto w-full max-w-3xl py-8">
            <div>
              <h1 className="mb-8 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                {t("banner.title")}
              </h1>
            </div>
            <div className="flex flex-col gap-5 text-base leading-relaxed text-zinc-700 sm:text-lg">
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
              <p className="pt-2 font-semibold text-zinc-900">
                {t("banner.notAlone")}
              </p>
              <p className="font-semibold text-zinc-900">
                {t("banner.enough")}
              </p>
            </div>
            <button
              className="mt-10 cursor-pointer rounded-full border border-zinc-200 bg-white px-5 py-3 text-base text-zinc-800 shadow-lg transition hover:bg-zinc-100 sm:text-lg"
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
