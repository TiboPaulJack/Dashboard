import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
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
					dispatch(setInventoryFocusOpen(false))
					return navigate("/inventory")
				}
				else{
					navigate(`/${title.toLowerCase()}`);
				}
		}


	return (
		<div
			className={isFocused ? "NavItem focused" : "NavItem"}
			onClick={handleClick}
		>

			<Stack direction={'row'} alignItems={'center'} spacing={2}>
				{title === "Dashboard" && <DashboardIcon/>}
				{title === "Inventory" && <FormatListBulletedIcon/>}
				{title === "Product" && <SellIcon/>}
				{title === "Logout" && <LogoutIcon/>}
				{title === "Tasks" && <EventIcon/>}
				{title === "Charts" && <ShowChartIcon/>}
				{title === "Team" && <PeopleAltIcon/>}
				{title === "Profile" && <PersonIcon/>}
				{title === "Settings" && <TuneIcon/>}

				<Typography
					sx={{
						fontFamily: 'var(--font-primary)',
						fontSize: '1em'
					}}
				>
					{title}
				</Typography>
			</Stack>
		</div>
	)};




