import {useNavigate} from "react-router-dom";
import {logOut} from "../../redux/reducers/auth";
import {useDispatch} from "react-redux";
import {setInventoryFocusOpen} from "../../redux/reducers/config";


const NavItem = ({title, icon }) => {

		const navigate = useNavigate();
		const dispatch = useDispatch()

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
			<div className={"NavItem"}
					 onClick={handleClick}
			>
					<div className={"icon"}
							 style={{backgroundImage: `url(${icon})`}}>
					</div>
					<div className={"title"}>{title}</div>
			</div>
		)};

export default NavItem;


