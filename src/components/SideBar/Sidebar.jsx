import '../../assets/css/sidebar.css'
import BoxTop from "./TopBox.jsx";
import NavList from "./NavList.jsx";
import NavSettings from "./NavSettings.jsx";
import DarkMode from "./DarkMode.jsx";


const Sidebar = (props) => {

	const { onComponentSelect, onDarkModeToggle } = props;

	return (

		<div className={"sideBox"}>
			<BoxTop/>
			<div className={"sidebar"}>
				<div className={"top-separation"}/>
				<NavList onComponentSelect={onComponentSelect}/>
				<NavSettings/>
				<DarkMode onDarkModeToggle={onDarkModeToggle}/>
			</div>
		</div>
	)};


export default Sidebar;
