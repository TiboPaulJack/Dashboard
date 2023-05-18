import '../assets/css/app.css'
import Sidebar from "./SideBar/Sidebar.jsx";
import TopBar from "./TopBar/TopBar.jsx";
import DisplayedComponent from "./Main/DisplayedComponent.jsx";
import handleDarkModeToggle from "../utils/darkMode.js";

import {useState} from "react";
function App() {

		const [rendered, setRendered] = useState("Dashboard")

		const handleNavItemSelect  = (componentName => {
				setRendered(componentName)
		});


		return (
			<div className={"app"}>
				<Sidebar
					onComponentSelect={handleNavItemSelect}
					onDarkModeToggle={handleDarkModeToggle}
				/>
				<main>
					<TopBar/>
					<DisplayedComponent rendered={rendered}  />
				</main>
			</div>
		)
}


export default App





