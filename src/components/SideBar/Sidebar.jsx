import '../../assets/css/sidebar.css'
import BoxTop from "./TopBox";
import NavList from "./NavList";
import NavSettings from "./NavSettings";
import DarkModeSwitch from "./DarkModeSwitch";


const Sidebar = ({ setRendered, onDarkModeToggle }) => {


    return (
      <div className={"sideBox"}>
          <BoxTop/>
          <div className={"sidebar"}>
              <div className={"top-separation"}/>
              <NavList setRendered={setRendered}/>
              <NavSettings setRendered={setRendered}/>
              <DarkModeSwitch onDarkModeToggle={onDarkModeToggle}/>
          </div>
      </div>
    )};


export default Sidebar;




