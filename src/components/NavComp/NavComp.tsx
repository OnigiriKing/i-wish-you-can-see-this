import { Link } from "react-router-dom";
import allSvg from "../../assets/svg/AllSvg";
import { useState } from "react";
import DropMenu from "./NavComp.DropMenu/DropMenu";
import LanguageMenu from "./NavComp.LanguageMenu/LangaugeMenu";
import { useTranslation } from "react-i18next";

export default function NavComp() {
  const [dropMenuState, setDropMenuState] = useState(false);
  const [languageMenuState, setLanguageMenuState] = useState(false);
  const dropMenu = allSvg().dropMenu;
  const gitHub = allSvg(30).gitHub;
  const languageList = allSvg(32).languageList;
  const arrowDown = allSvg(21).arrowDown;

  // i18next
    const { t, i18n } = useTranslation();

  return (
    <>
      <header className="relative w-full h-16 flex items-center justify-between px-30 z-50">
        <Link to="/" className="text-2xl">
          {t("nav.title")}
        </Link>
        <div className="flex gap-6 items-center">
          <div>
            <Link
              to="https://github.com/OnigiriKing"
              target="_blank"
              className="transition hover:text-zinc-400 ease-in-out duration-300"
            >
              {gitHub}
            </Link>
          </div>
          <button
            className="items-center ease-in-out duration-300 cursor-pointer hover:text-zinc-400 flex flex-row text-transform: uppercase"
            onClick={() =>
              setLanguageMenuState((languageMenuState) => !languageMenuState)
            }
          >
            {languageList} {languageMenuState ? arrowDown : i18n.language}
          </button>
          <button
            type="button"
            className={`items-center ease-in-out duration-300 cursor-pointer hover:text-zinc-400 ${dropMenuState ? "rotate-90" : ""}`}
            onClick={() => {
              setDropMenuState((dropMenuState) => !dropMenuState);
            }}
          >
            {dropMenu}
          </button>
        </div>
      </header>
      {dropMenuState && <DropMenu setDropMenuState={setDropMenuState} />}
      {languageMenuState && (
        <LanguageMenu setLanguageMenuState={setLanguageMenuState} />
      )}
    </>
  );
}
