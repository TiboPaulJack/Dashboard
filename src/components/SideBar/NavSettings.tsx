import NavItem from "./NavItem";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOut} from "../../redux/reducers/auth";



const NavSettings = () => {

		const dispatch = useDispatch();
		const navigate = useNavigate();

		const handleLogout = () => {
			dispatch(logOut());
		}

		return (
			<div className={"settings"}>
				<div className={"line-separation"}/>
				<NavItem
					key={"Account"}
					title={"Profile"}
				/>
				<NavItem key={"settings"}
						 title={"Settings"}
				/>
				<NavItem key={"logout"}
						 title={"Logout"}

				/>
			</div>
		)};


export default NavSettings;
