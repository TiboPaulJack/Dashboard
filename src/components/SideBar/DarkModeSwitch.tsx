import { useState, useEffect } from "react";

export default function DarkModeSwitch ({ onDarkModeToggle, updateTheme }) {

		const [isChecked, setIsChecked] = useState(false);

		useEffect(() => {
				const currentTheme = localStorage.getItem("theme");
				if (currentTheme) {
						document.documentElement.setAttribute("data-theme", currentTheme);
						setIsChecked(currentTheme === "dark")
						updateTheme(currentTheme);

				}
			}, [isChecked]);

		const handleDarkModeChange = (event) => {
				const isChecked = event.target.checked;
				setIsChecked(isChecked);
				onDarkModeToggle(isChecked);
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
						<em>Night mode</em>
				</div>
		);
};




