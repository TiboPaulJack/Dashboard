import '../../assets/css/sidebar.css'
import NavList from "./NavList";
import NavSettings from "./NavSettings";
import DarkModeSwitch from "./DarkModeSwitch";
import {useDispatch, useSelector} from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import {setIsSidebarOpen} from "../../redux/reducers/config";



export default function Sidebar () {

    const isSidebarOpen = useSelector((state : any) => state.config.isSidebarOpen);
    const dispatch = useDispatch();

    const handleHideSidebar = () => {
        if(isSidebarOpen){
            dispatch(setIsSidebarOpen(false))
        }else{
            dispatch(setIsSidebarOpen(true))
        }
    }

    return (
      <div className={isSidebarOpen ? "sideBox" : "sideBox sideBoxClosed"}>
          <div className={"sidebar"}>
              <div className="blankSpace">
                  <MenuIcon
                      onClick={handleHideSidebar}
                      sx={{
                          alignSelf: 'center',
                          padding:'10px',
                          cursor:'pointer',
                      }}
                  />
              </div>
              <div className={"top-separation"}/>
              <NavList />
              <NavSettings />
              <DarkModeSwitch/>
          </div>
      </div>
    )};






