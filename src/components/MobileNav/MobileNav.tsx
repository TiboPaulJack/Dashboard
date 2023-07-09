import '../../assets/css/mobileNav.css'
import NavList from "../SideBar/NavList.js";
import NavItem from "../SideBar/NavItem.js";


export default function MobileNav({ setRendered, onDarkModeToggle }) {
    return (
      <div className={"mobileNav"}>
          <NavList setRendered={setRendered}>
              <NavItem title={"Settings"}
                       icon={"src/assets/icons/icon-dark/settings-4-fill.svg"}
                       setRendered={setRendered}
              />
          </NavList>
      </div>

    )

}
