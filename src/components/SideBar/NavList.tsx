// @ts-ignore
import data from "../../../data/navList.json";
import NavItem from "./NavItem";
import NavSettings from "./NavSettings";
import DarkModeSwitch from "./DarkModeSwitch";

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
            <NavSettings />
            <DarkModeSwitch/>
        </div>
    )
};





