import {useState, useEffect, useLayoutEffect} from "react";
import {setNightMode} from "../../redux/reducers/config";
import {useDispatch, useSelector} from "react-redux";
import { Box, Switch } from "@mui/material";
import { NightsStay, WbSunny } from "@mui/icons-material";

export default function DarkModeSwitch () {


		useLayoutEffect(() => {
			(window.innerWidth < 768) ? setIsSmallScreen(true) : setIsSmallScreen(false)
		}, []);

		const isSidebarOpen = useSelector((state : any) => state.config.isSidebarOpen);
		const nightMode = useSelector((state : any) => state.config.nightMode);
		const [isChecked, setIsChecked] = useState(false);
		const [isSmallScreen, setIsSmallScreen] = useState(false);
		const [isSidebarAnimationEnded, setIsSidebarAnimationEnded] = useState(false);
		const dispatch = useDispatch();

		useEffect(() => {
			if(isSidebarOpen) {
				setTimeout(() => {
					setIsSidebarAnimationEnded(true);
				}, 300);
			}else {
				setIsSidebarAnimationEnded(false);
			}
		}, [isSidebarOpen]);


		useEffect(() => {
				if (nightMode) {
						setIsChecked(true);
				}
			}, []);

		const handleClickDarkModeChange = () => {
			if(nightMode === true){
				dispatch(setNightMode(false));
			}else{
				dispatch(setNightMode(true));
			}
		};

		const handleDarkModeChange = () => {
				if (isChecked) {
						dispatch(setNightMode(false));
						setIsChecked(false);
				} else {
						dispatch(setNightMode(true));
						setIsChecked(true);
				}
		};

		return (
			<>
				{!isSmallScreen
					?
						(isSidebarAnimationEnded
						?
						<Box sx={{display: 'flex', alignItems: 'center', m: 'auto auto 15px auto', justifySelf: 'flex-end'}}>

							<WbSunny fontSize="small"/>
							<Switch
								type="checkbox"
								id="checkbox"
								checked={isChecked}
								onChange={handleDarkModeChange}
								sx={{mx: 1, animation:'fadeIn 0.4s linear'}}
							/>
							<NightsStay fontSize="small"/>
						</Box>
						:
						(
							nightMode
								?
								<NightsStay
									fontSize="small"
									onClick={handleClickDarkModeChange}
									sx={{cursor:'pointer', m:'auto'}}
								/>
								:
								<WbSunny
									fontSize="small"
									onClick={handleClickDarkModeChange}
									sx={{cursor:'pointer',  m:'auto'}}
								/>
						))
					:
					(
						nightMode
							?
							<NightsStay
								fontSize="small"
								onClick={handleClickDarkModeChange}
								sx={{cursor:'pointer', m:'auto'}}
							/>
							:
							<WbSunny
								fontSize="small"
								onClick={handleClickDarkModeChange}
								sx={{cursor:'pointer',  m:'auto'}}
							/>
					)
				}
			</>

);

};




