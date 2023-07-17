import NavItem from "./NavItem";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOut} from "../../redux/reducers/auth";



const NavSettings = () => {

		const dispatch = useDispatch()
		const navigate = useNavigate();

		const handleLogout = () => {
			dispatch(logOut())
		}

		return (
			<div className={"settings"}>
					<div className={"line-separation"}/>
					<NavItem key={"Account"}
									 title={"Profile"}
									 icon={"public/icons/icon-dark/user-fill.svg"}
					/>
					<NavItem key={"settings"}
									 title={"Settings"}
									 icon={"public/icons/icon-dark/settings-4-fill.svg"}
					/>
					<NavItem key={"logout"}
									 title={"Logout"}
									 icon={"public/icons/icon-dark/logout-circle-line.svg"}

					/>
			</div>
		)};


export default NavSettings;
