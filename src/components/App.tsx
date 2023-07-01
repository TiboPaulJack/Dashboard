import '../assets/css/app.css'
import '../assets/css/mediaQueries.css'
import Sidebar from "./SideBar/Sidebar.jsx";
import TopBar from "./TopBar/TopBar";
import DisplayedComponent from "./DisplayedComponent";
import handleDarkModeToggle from "../assets/js/darkMode.js";
import { useEffect, useState } from "react";
import Overview from "./Overview/Overview";
import TeamMgmt from "./TeamManagement/TeamMgmt";
import Product from "./Product/Product";
import Inventory from "./Inventory/Inventory";
import Stats from "./Stats/Stats";
import Logs from "./Logs/Logs";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import MobileNav from "./MobileNav/MobileNav";




export default function App() {

		const [rendered, setRendered] = useState("Dashboard")

		return (
				<div className={"app"}>
            <Sidebar
                setRendered={setRendered}
                onDarkModeToggle={handleDarkModeToggle}
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
                    {rendered === "Logs" && <Logs />}
                    {rendered === "Profile" && <Profile />}
                    {rendered === "Settings" && <Settings />}
                </DisplayedComponent>
            </main>
				</div>
		)
};








