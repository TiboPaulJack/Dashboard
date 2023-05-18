import data from "../../../data/navList.json";
import NavItem from "./NavItem.jsx";

const NavList = (props) => {

		const { onComponentSelect } = props;
		const navItems = data.map((item) =>
				<NavItem
					key={item.id}
				 	title={item.name}
				 	icon={item.icon}
				 	onComponentSelect={onComponentSelect}
				/>
		);

		return <div>{navItems}</div>;
};

export default NavList;
