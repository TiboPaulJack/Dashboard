
// @ts-ignore
import data from "../../../data/navList.json";
import NavItem from "./NavItem";


export default function NavList  ()  {




		const navItems = data.map((item) =>
				<NavItem
					key={item.id}
				 	title={item.name}
				 	icon={item.icon}
				/>
		);

return (
		<div className="navList">
			{navItems}

		</div>
)
};





