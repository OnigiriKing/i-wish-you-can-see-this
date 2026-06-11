import { Link } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

type DropMenuProps = {
  setDropMenuState: Dispatch<SetStateAction<boolean>>;
};

export default function DropMenu({ setDropMenuState }: DropMenuProps) {
  const linkStyle =
    "rounded-xl px-3 py-3 text-lg font-medium text-zinc-800 transition hover:bg-zinc-100 text-center";

  return (
    <nav className="absolute right-6 top-16 z-50 flex w-35 flex-col rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-xl backdrop-blur text-center">
      <Link
        to={"/guidelines"}
        className={linkStyle}
        onClick={() => setDropMenuState(false)}
      >
        Guidelines
      </Link>
      <Link
        to={"/legal"}
        className={linkStyle}
        onClick={() => setDropMenuState(false)}
      >
        Legal
      </Link>
      <Link
        to={"/contact"}
        className={linkStyle}
        onClick={() => setDropMenuState(false)}
      >
        Contact
      </Link>
    </nav>
  );
}
