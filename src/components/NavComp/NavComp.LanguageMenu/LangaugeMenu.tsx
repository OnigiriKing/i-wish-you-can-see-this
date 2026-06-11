import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

type LanguageMenuProps = {
  setLanguageMenuState: Dispatch<SetStateAction<boolean>>;
};

export default function LanguageMenu({
  setLanguageMenuState,
}: LanguageMenuProps) {
  const linkStyle =
    "cursor-pointer rounded-xl px-2 py-2 text-lg font-medium text-zinc-800 transition hover:bg-zinc-100 text-center";

    // i18next
    const { i18n } = useTranslation();

  return (
    <nav className="absolute right-27 top-16 z-50 flex w-30 flex-col rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-xl backdrop-blur">
      <button
        className={linkStyle}
        onClick={() => {
          setLanguageMenuState(false);
          i18n.changeLanguage("en");
        }}
      >
        English
      </button>
      <button
        className={linkStyle}
        onClick={() => {
          setLanguageMenuState(false);
          i18n.changeLanguage("ja");
        }}
      >
        日本語
      </button>
      <button
        className={linkStyle}
        onClick={() => {
          setLanguageMenuState(false);
          i18n.changeLanguage("ko");
        }}
      >
        한국어
      </button>
      <button
        className={linkStyle}
        onClick={() => {
          setLanguageMenuState(false);
          i18n.changeLanguage("ru");
        }}
      >
        Русский
      </button>
    </nav>
  );
}
