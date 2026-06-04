import { Link } from "react-router-dom"
export default function DropMenu() {

    const linkStyle: string = ""

    return (
        <div className="flex flex-col">
         <Link to={"/legal"}>Legal</Link>
         <Link to={"/contact"}>Contact</Link>
        </div>
    )
}