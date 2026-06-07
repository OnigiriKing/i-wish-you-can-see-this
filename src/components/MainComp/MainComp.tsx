import MapComp from "./MainComp.MapComp/MapComp";
import SideMenu from "./MainComp.SideMenu/SideMenu";
import { useState } from "react";



export default function MainComp() {
  const [sideMenuState, setSideMenuState] = useState(false);

  return (
    <div className="relative flex">
      <MapComp setSideMenuState={setSideMenuState} />
      {sideMenuState && <SideMenu setSideMenuState={setSideMenuState} />}
    </div>
  );
}

