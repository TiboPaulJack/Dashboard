import '../../assets/css/sidebar.css'
import NavList from "./NavList";
import {useDispatch, useSelector} from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import {setIsSidebarOpen} from "../../redux/reducers/config";
import { useEffect, useState } from 'react';




export default function Sidebar () {




    

    const isSidebarOpen = useSelector((state : any) => state.config.isSidebarOpen);
    const dispatch = useDispatch();

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth < 1000) {
            dispatch(setIsSidebarOpen(false));
        }
    }, [windowWidth]);


    const handleHideSidebar = () => {
        if(windowWidth < 1000) return;
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
                          color: windowWidth < 1000 ? 'var(--third-color)' : 'inerith',
                          alignSelf: 'center',
                          padding:'10px',
                          cursor:'pointer',
                      }}
                  />
              </div>
              <div className={"top-separation"}/>
              <NavList>
                  <div className={"line-separation"}/>
              </NavList>

          </div>
      </div>
    )};






