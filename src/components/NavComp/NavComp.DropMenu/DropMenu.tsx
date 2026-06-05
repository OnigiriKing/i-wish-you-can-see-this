import { Link } from "react-router-dom";
export default function DropMenu() {
  const linkStyle: string =
    "rounded-xl px-6 py-3 text-lg font-medium text-zinc-800 transition hover:bg-zinc-100 text-center";

  return (
    <nav className="w-40 rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-xl backdrop-blur flex-col flex absolute right-4 top-16 z-50">
      <Link to={"/"} className={linkStyle}>
        Legal
      </Link>
      <Link to={"/"} className={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}
