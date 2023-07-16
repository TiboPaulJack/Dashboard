import { useState, useEffect } from "react";
import {setDarkTheme} from "../../redux/reducers/config";
import {useDispatch} from "react-redux";

export default function DarkModeSwitch ({ updateTheme }) {

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
				<div className="theme-switch-wrapper">
						<label className="theme-switch" htmlFor="checkbox">
								<input
										type="checkbox"
										id="checkbox"
										checked={isChecked}
										onChange={handleDarkModeChange}
								/>
								<div className="slider round"></div>
						</label>
						<em>Dark mode</em>
				</div>
		);
};




