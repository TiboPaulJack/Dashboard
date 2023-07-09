import '../assets/css/app.css'
import '../assets/css/mediaQueries.css'
import Sidebar from "./SideBar/Sidebar.jsx";
import TopBar from "./TopBar/TopBar";
import DisplayedComponent from "./DisplayedComponent";
import handleDarkModeToggle from "../assets/js/darkMode.js";
import {useEffect, useLayoutEffect, useState} from "react";
import Overview from "./Overview/Overview";
import TeamMgmt from "./TeamManagement/TeamMgmt";
import Product from "./Product/Product";
import Inventory from "./Inventory/Inventory";
import Stats from "./Stats/Stats";
import Tasks from "./Tasks/Tasks";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import MobileNav from "./MobileNav/MobileNav";
import {ThemeProvider} from "@mui/material/styles";
import {darkTheme, lightTheme} from "../assets/js/muyStyles";



export default function App(): JSX.Element {

    const [theme, setTheme] = useState('');
    const [rendered, setRendered] = useState("Dashboard")
    const themeObject = theme === 'dark' ? darkTheme : lightTheme;


    const updateTheme = (theme: string) => {
        setTheme(theme);
        console.log(theme);
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });



    return (
            <ThemeProvider theme={themeObject}>
                <div className={"app"}>
                    <Sidebar
                        setRendered={setRendered}
                        onDarkModeToggle={handleDarkModeToggle}
                        updateTheme={updateTheme}
                    />
                    <main>
                        <TopBar/>
                        <MobileNav
                            setRendered={setRendered}
                            onDarkModeToggle={handleDarkModeToggle}
                        />
                        <DisplayedComponent rendered={rendered} >
                            {rendered === "Dashboard" && <Overview />}
                            {rendered === "Team" && <TeamMgmt />}
                            {rendered === "Product" && <Product />}
                            {rendered === "Inventory" && <Inventory />}
                            {rendered === "Stats" && <Stats />}
                            {rendered === "Tasks" && <Tasks />}
                            {rendered === "Profile" && <Profile />}
                            {rendered === "Settings" && <Settings />}
                        </DisplayedComponent>
                    </main>
                </div>
            </ThemeProvider>
		)
};








