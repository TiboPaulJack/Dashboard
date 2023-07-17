import {useLocation, useNavigate} from "react-router-dom";
import {logOut} from "../../redux/reducers/auth";
import {useDispatch} from "react-redux";
import {setInventoryFocusOpen} from "../../redux/reducers/config";
import { useEffect } from "react";
import { useState } from "react";

const NavItem = ({title, icon }) => {

		const [isFocused, setIsFocused] = useState(false);

		const navigate = useNavigate();
		const dispatch = useDispatch()
		const location = useLocation();

		useEffect(() => {
			setIsFocused(false)
			if(location.pathname === `/${title.toLowerCase()}`){
				setIsFocused(true)
			}
		}, [location.pathname]);

		const handleClick = () => {
				if(title === "Logout"){
					window.location.reload();
					return
				}else if(title === "Dashboard"){
					return navigate("/")
				}else if(title === "Inventory"){
					/*dispatch(setInventoryFocusOpen(false))*/
					return navigate("/inventory")
				}
				else{
					navigate(`/${title.toLowerCase()}`);
				}
		}


		return (
			<div className={isFocused ? "NavItem focused" : "NavItem"}
					 onClick={handleClick}
			>
					<div className={"icon"}
							 style={{backgroundImage: `url(${icon})`}}>
					</div>
					<div className={"title"}>{title}</div>
			</div>
		)};

export default NavItem;


