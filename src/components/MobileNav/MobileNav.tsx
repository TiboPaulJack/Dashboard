import '../../assets/css/mobileNav.css'
import NavList from "../SideBar/NavList.js";
import NavItem from "../SideBar/NavItem.js";
import NavSettings from "../SideBar/NavSettings";
import DarkModeSwitch from "../SideBar/DarkModeSwitch";


export default function MobileNav() {
    return (
      <div className={"mobileNav"}>
          <NavList/>
              <NavItem title={"Settings"}/>
          <NavSettings />
          <DarkModeSwitch/>
      </div>

    )

}
