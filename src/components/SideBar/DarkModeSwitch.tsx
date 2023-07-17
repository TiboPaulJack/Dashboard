import { useState, useEffect } from "react";
import {setDarkTheme} from "../../redux/reducers/config";
import {useDispatch} from "react-redux";
import { Box, Switch } from "@mui/material";
import { NightsStay, WbSunny } from "@mui/icons-material";

export default function DarkModeSwitch () {

		const [isChecked, setIsChecked] = useState(false);
		const dispatch = useDispatch();

		useEffect(() => {
			if (isChecked) {
				document.documentElement.setAttribute("data-theme", "dark");
			} else {
				document.documentElement.setAttribute("data-theme", "light");
			}
		}, []);

		useEffect(() => {
				const currentTheme = localStorage.getItem("theme");
				if (currentTheme) {
						document.documentElement.setAttribute("data-theme", currentTheme);
						setIsChecked(currentTheme === "dark")
				}
			}, [isChecked]);



		const handleDarkModeChange = () => {
				if (isChecked) {
						localStorage.setItem("theme", "light");
						document.documentElement.setAttribute("data-theme", "light");
						setIsChecked(false);
						dispatch(setDarkTheme());
				} else {
						localStorage.setItem("theme", "dark");
						document.documentElement.setAttribute("data-theme", "dark");
						setIsChecked(true);
				}
		};

		return (
			
		<Box sx={{ display: 'flex', alignItems: 'center', m:'auto auto 15px auto', justifySelf:'flex-end' }}>
			<WbSunny fontSize="small" />
			<Switch
				type="checkbox"
				id="checkbox"
				checked={isChecked}
				onChange={handleDarkModeChange}
				sx={{ mx: 1}}
			/>
			<NightsStay fontSize="small" />
		</Box>
		);
};




