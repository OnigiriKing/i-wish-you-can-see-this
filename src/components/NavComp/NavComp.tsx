import { Link } from "react-router-dom"
import allSvg from "../../assets/svg/AllSvg"
import { useState } from "react";
import DropMenu from "./NavComp.DropMenu/DropMenu";

export default function NavComp() {

    const [dropMenuState, setDropMenuState] = useState(false);
    const dropMenu = allSvg().dropMenu;
    const gitHub = allSvg(30).gitHub;

    return (
      <div className="w-full h-16 flex items-center justify-between px-20">
        <Link to={"/"} className="text-2xl">
          I wish you can read this
        </Link>
        <div className="flex gap-6 items-center">
          <div>
            <Link to="https://github.com/OnigiriKing" className="">
              {gitHub}
            </Link>
          </div>
          <button
            type="button"
            className={`items-center hover:text-orange-700 ease-in-out duration-300 cursor-pointer ${dropMenuState ? "rotate-90" : ""}`}
            onClick={() => {
              setDropMenuState(!dropMenuState);
            }}
          >
            {dropMenu}
          </button>
        </div>
        <div className={`absolute right-0 top-4`}>
        {DropMenu()}
        </div>
      </div>
    );
}
