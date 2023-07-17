import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ReminderWidget from "./ReminderWidget";
import {useEffect} from "react";
import {getTasks} from "../../api/task";
import { Box, Typography } from "@mui/material";
import { DateCalendar } from '@mui/x-date-pickers';
import CalendarWidget from './calendarWidget';





export default function TaskWidget  () {

	useEffect(() => {
		getTasks();
	}, []);

	
	
		return (
			<div className={"task-widget"}>
				<div className={"task-widget__container"}>

				<div className={"task-widget__container-top"}>
					<CalendarWidget/>
				</div>
				
				<div className={"task-widget__container-bottom"}>
					<ReminderWidget/>
				</div>
				</div>
			</div>
			
		)
}

