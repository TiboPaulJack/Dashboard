import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setInventoryFocusOpen} from "../../redux/reducers/config";
import { useEffect } from "react";
import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SellIcon from '@mui/icons-material/Sell';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import TuneIcon from '@mui/icons-material/Tune';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import LogoutIcon from '@mui/icons-material/Logout';
import EventIcon from '@mui/icons-material/Event';
import { Stack } from "@mui/material";

export default function NavItem  ({title}) {

		const [isFocused, setIsFocused] = useState(false);
		const isSidebarOpen = useSelector((state : any) => state.config.isSidebarOpen)

		const navigate = useNavigate();
		const dispatch = useDispatch()
		const location = useLocation();

		useEffect(() => {
			setIsFocused(false)
			if(location.pathname === `/${title.toLowerCase()}`){
				setIsFocused(true)
			}
			if(location.pathname === "/" && title === "Dashboard"){
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
					dispatch(setInventoryFocusOpen(false))
					return navigate("/inventory")
				}
				else{
					navigate(`/${title.toLowerCase()}`);
				}
		}

		const iconStyle = {
			fontSize: '1.3em',
		}


	return (
		<div
			className={ (isFocused ? "NavItem focused" : "NavItem") + (!isSidebarOpen ? " navItem navItemSideBarClose" : "") }

			onClick={handleClick}
		>

			<Stack
				direction={'row'}
				alignItems={'center'}
				spacing={2}
				ml={isSidebarOpen && 2}
				sx={{boxSizing: 'border-box'}}
			>
				{title === "Dashboard" && <DashboardIcon sx={iconStyle}/>}
				{title === "Inventory" && <FormatListBulletedIcon sx={iconStyle}/>}
				{title === "Product" && <SellIcon sx={iconStyle}/>}
				{title === "Logout" && <LogoutIcon sx={iconStyle}/>}
				{title === "Tasks" && <EventIcon sx={iconStyle}/>}
				{title === "Charts" && <ShowChartIcon sx={iconStyle}/>}
				{title === "Team" && <PeopleAltIcon sx={iconStyle}/>}
				{title === "Profile" && <PersonIcon sx={iconStyle}/>}
				{title === "Settings" && <TuneIcon sx={iconStyle}/>}
				{
					isSidebarOpen &&
					<Typography
						sx={{
							fontFamily: 'var(--font-primary)',
							fontSize: '1em'
						}}
					>
						{title}
					</Typography>
				}
			</Stack>
		</div>
	)};




