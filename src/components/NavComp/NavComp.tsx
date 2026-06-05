import { Link } from "react-router-dom";
import allSvg from "../../assets/svg/AllSvg";
import { useState } from "react";
import DropMenu from "./NavComp.DropMenu/DropMenu";
import LanguageMenu from "./NavComp.LanguageMenu/LangaugeMenu";

export default function NavComp() {
  const [dropMenuState, setDropMenuState] = useState(false);
  const [languageMenuState, setLanguageMenuState] = useState(false);
  const dropMenu = allSvg().dropMenu;
  const gitHub = allSvg(30).gitHub;
  const languageList = allSvg(32).languageList;
  const arrowDown = allSvg(21).arrowDown;

  return (
    <>
      <header className="relative w-full h-16 flex items-center justify-between px-20 z-50">
        <Link to="/" className="text-2xl">
          I wish you can read this
        </Link>
        <div className="flex gap-6 items-center">
          <div>
            <Link
              to="https://github.com/OnigiriKing"
              target="_blank"
              className={`transition hover:text-zinc-400 ease-in-out duration-300`}
            >
              {gitHub}
            </Link>
          </div>
          <button
            className="items-center ease-in-out duration-300 cursor-pointer hover:text-zinc-400 flex flex-row"
            onClick={() =>
              setLanguageMenuState((languageMenuState) => !languageMenuState)
            }
          >
            {languageList} {languageMenuState ? arrowDown : "EN"}
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
