// @ts-ignore
import data from "../../../data/navList.json";
import NavItem from "./NavItem";

export default function NavList  ()  {




    const navItems = data.map((item) =>
        <NavItem
            key={item.id}
            title={item.name}
        />
    );

    return (
        <div className="navList">
            {navItems}
        </div>
    )
};





