import { Link } from "react-router-dom"

export default function NavComp() {
    return (
        <div className="w-full h-16 flex items-center justify-between px-8">
            <Link to={"/"} className="">I wish you can read this</Link>
            <div className="flex gap-6">
            <div>Links</div>
            <div>Drop down menu</div>
            </div>
        </div>
    )
}
