import NavItem from "./NavItem";
import {useNavigate} from "react-router-dom";



const NavSettings = ({setRendered}) => {

		const navigate = useNavigate()

		const handleLogout = () => {
			navigate('/auth')
		}

		return (
			<div className={"settings"}>
					<div className={"line-separation"}/>
					<NavItem key={"Account"}
									 title={"Profile"}
									 icon={"src/assets/icons/icon-dark/user-fill.svg"}
									 setRendered={setRendered}
					/>
					<NavItem key={"settings"}
									 title={"Settings"}
									 icon={"src/assets/icons/icon-dark/settings-4-fill.svg"}
									 setRendered={setRendered}
					/>
					<NavItem key={"logout"}
									 title={"Logout"}
									 icon={"src/assets/icons/icon-dark/logout-circle-line.svg"}
									 setRendered={handleLogout}

					/>
			</div>
		)};


export default NavSettings;
