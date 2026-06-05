import { Link } from "react-router-dom";
import allSvg from "../../assets/svg/AllSvg";
import { useState } from "react";
import DropMenu from "./NavComp.DropMenu/DropMenu";
import mainColor from "../../assets/style/colours";

export default function NavComp() {
  const [dropMenuState, setDropMenuState] = useState(false);
  const dropMenu = allSvg().dropMenu;
  const gitHub = allSvg(30).gitHub;

  return (
    <>
      <div className=" w-full h-16 flex items-center justify-between px-20 z-100">
        <Link to="/" className="text-2xl">
          I wish you can read this
        </Link>
        <div className="flex gap-6 items-center">
          <div>
            <Link
              to="https://github.com/OnigiriKing"
              className={`transition hover:text-${mainColor} ease-in-out duration-300`}
            >
              {gitHub}
            </Link>
          </div>
          <button
            type="button"
            className={`items-center hover:text-${mainColor} ease-in-out duration-300 cursor-pointer ${dropMenuState ? "rotate-90" : ""}`}
            onClick={() => {
              setDropMenuState((dropMenuState) => !dropMenuState);
            }}
          >
            {dropMenu}
          </button>
        </div>
      </div>
      {dropMenuState && <DropMenu />}
    </>
  );
}

//${dropMenuState ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
