import type { Dispatch, SetStateAction } from "react";

type LanguageMenuProps = {
  setLanguageMenuState: Dispatch<SetStateAction<boolean>>;
};

export default function LanguageMenu({
  setLanguageMenuState,
}: LanguageMenuProps) {
  const linkStyle =
    "cursor-pointer rounded-xl px-4 py-2 text-lg font-medium text-zinc-800 transition hover:bg-zinc-100 text-center";

  return (
    <nav className="absolute right-25 top-16 z-50 flex w-30 flex-col rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-xl backdrop-blur">
      <button
        className={linkStyle}
        onClick={() => setLanguageMenuState(false)}
      >
        English
      </button>
      <button
        className={linkStyle}
        onClick={() => setLanguageMenuState(false)}
      >
        日本語
      </button>
      <button
        className={linkStyle}
        onClick={() => setLanguageMenuState(false)}
      >
        Русский
      </button>
    </nav>
  );
}
