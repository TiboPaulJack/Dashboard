
// @ts-ignore
import data from "../../../data/navList.json";
import NavItem from "./NavItem";


const NavList = ({ setRendered, children }) => {


		const navItems = data.map((item) =>
				<NavItem
					key={item.id}
				 	title={item.name}
				 	icon={item.icon}
					setRendered={setRendered}
				/>
		);

		return <>
			{navItems}
			{children}
		</>;
};

export default NavList;




