import { Link } from "react-router-dom"
import allSvg from "../../assets/svg/AllSvg"

export default function NavComp() {

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
            className="items-center hover:text-orange-700 ease-in-out duration-300 cursor-pointer"
          >
            {dropMenu}
          </button>
        </div>
      </div>
    );
}
