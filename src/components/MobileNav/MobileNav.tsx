import '../../../public/css/mobileNav.css'
import NavList from "../SideBar/NavList.js";
import NavItem from "../SideBar/NavItem.js";


export default function MobileNav() {
    return (
      <div className={"mobileNav"}>
          <NavList >
              <NavItem title={"Settings"}
                       icon={"src/assets/icons/icon-dark/settings-4-fill.svg"}
              />
          </NavList>
      </div>

    )

}
