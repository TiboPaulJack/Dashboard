import NavItem from "./NavItem.jsx";

const NavSettings = () => {
		return (
			<div className={"settings"}>
					<div className={"line-separation"}/>
					<NavItem key={"Account"}
									 title={"My Profile"}
									 icon={"src/assets/icons/icon-dark/user-fill.svg"}
					/>
					<NavItem key={"settings"}
									 title={"Settings"}
									 icon={"src/assets/icons/icon-dark/settings-4-fill.svg"}
					/>
					<NavItem key={"logout"}
									 title={"Logout"}
									 icon={"src/assets/icons/icon-dark/logout-circle-line.svg"}
					/>
			</div>
		)};


export default NavSettings;
