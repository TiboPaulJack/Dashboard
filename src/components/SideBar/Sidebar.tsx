import '../../assets/css/sidebar.css'
import NavList from "./NavList";
import NavSettings from "./NavSettings";
import DarkModeSwitch from "./DarkModeSwitch";



export default function Sidebar () {



    return (
      <div className={"sideBox"}>
          <div className={"sidebar"}>
              <div className={"top-separation"}/>
              <NavList />
              <NavSettings />
              <DarkModeSwitch/>
          </div>
      </div>
    )};






