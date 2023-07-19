import '../../assets/css/mobileNav.css'
import NavList from "../SideBar/NavList.js";
import NavSettings from "../SideBar/NavSettings";
import {useEffect} from "react";


export default function MobileNav() {



    return (
      <div className={"mobileNav"}>
          <NavList/>
      </div>

    )

}
