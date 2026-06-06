import MapComp from "./MainComp.MapComp/MapComp";
import SideMenu from "./MainComp.SideMenu/SideMenu";

export default function MainComp() {
  return (
    <div className="relative flex">
    <MapComp />
    <SideMenu />
    </div>
  );
}

