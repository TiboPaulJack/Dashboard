import Sidebar from "./SideBar/Sidebar";
import TopBar from "./TopBar/TopBar";
import MobileNav from "./MobileNav/MobileNav";
import {Routes, Route} from "react-router-dom";
import TeamMgmt from "./TeamManagement/TeamMgmt";
import Product from "./Product/Product";
import Inventory from "./Inventory/Inventory";
import Stats from "./Stats/Stats";
import Tasks from "./Tasks/Tasks";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Overview from "./Overview/Overview";
import {useEffect} from "react";
import {getTasks} from "../api/task";

export default function Dashboard () {


useEffect(() => {
    getTasks()
}, [])


    return (
        <div className={"app"}>
            <Sidebar/>
            <main>
                <TopBar/>
                <MobileNav />
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/team" element={<TeamMgmt />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/charts" element={<Stats />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </main>
        </div>
    );
};

