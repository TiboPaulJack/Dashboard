// @ts-ignore
import data from "../../../data/navList.json";
import NavItem from "./NavItem";
import DarkModeSwitch from "./DarkModeSwitch";

export default function NavList  ({children})  {




    const navItems = data.map((item) =>
        <NavItem
            key={item.id}
            title={item.name}
        />
    );

    return (
        <div className="navList">
            {navItems}
            {children}
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
            <DarkModeSwitch/>
        </div>
    )
};





