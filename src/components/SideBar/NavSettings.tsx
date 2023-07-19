import NavItem from "./NavItem";



const NavSettings = () => {



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
