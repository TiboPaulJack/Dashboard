import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DateCalendar} from "@mui/x-date-pickers";
import CheckboxListSecondary from "../CheckBoxReminderList/CheckBoxList";
import {useEffect} from "react";
import {getTasks} from "../../api/task";


export default function TaskWidget  () {

	useEffect(() => {
		getTasks();
	}, []);
	
		return (
			<div className={"task-widget"}>
				<div className={"task-widget__container"}>
					<div className={"task-widget__container-top"}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DateCalendar />
						</LocalizationProvider>
					</div>
					<div className={"task-widget__container-bottom"}>
						<CheckboxListSecondary/>
					</div>
				</div>
				
			</div>
		)
}

