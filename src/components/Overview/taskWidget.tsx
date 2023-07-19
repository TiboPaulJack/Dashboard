import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ReminderWidget from "./ReminderWidget";
import {useEffect} from "react";
import {getTasks} from "../../api/task";
import {Box, CircularProgress, Typography} from "@mui/material";
import { DateCalendar } from '@mui/x-date-pickers';
import CalendarWidget from './calendarWidget';
import { useState } from 'react';
import {useSelector} from "react-redux";



export default function TaskWidget  () {

	const isloading = useSelector((state : any) => state.task.isLoading)
	const tasks = useSelector((state : any) => state.task.tasks)



	
		return (
			<div className={"task-widget"}>
				<div className={"task-widget__container"}>

				<div className={"task-widget__container-top"}>
					{
						isloading
							?
								<CircularProgress
									color={'inherit'}
									sx={{margin: 'auto'}}
								/>
							:
								<CalendarWidget/>
					}
				</div>
				
				<div className={"task-widget__container-bottom"}>
					{
						isloading
							?
								<div className={"task-widget__container-bottom-empty"}>
									<CircularProgress
										color={'inherit'}
										sx={{margin: 'auto'}}
									/>
								</div>
							:
								<ReminderWidget/>
					}
				</div>
				</div>
			</div>
			
		)
}

