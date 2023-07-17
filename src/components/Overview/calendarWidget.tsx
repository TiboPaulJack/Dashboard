import * as React from 'react';
// @ts-ignore
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useSelector } from 'react-redux';

function TaskDay(props: PickersDayProps<Dayjs> & { tasks: any[] }) {
    const { tasks, day, ...other } = props;

    const taskForDay = tasks.find(task => task.status === 'pending' && dayjs(task.date).isSame(dayjs(day), 'day'));
    const backgroundColor = taskForDay ? taskForDay.color : 'transparent';

    return (
        <PickersDay {...other} day={day} style={{ backgroundColor }} />
    );
}

export default function CalendarWidget() {
    const tasks = useSelector((state: any) => state.task.tasks);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar className={'calendarWidget'}
                sx={{backgroundColor: 'var(--background-widget)',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'var(--border-radius)'}}
                slots={{
                    day: TaskDay,
                }}
                slotProps={{
                    day: {
                        // @ts-ignore
                        tasks,
                    },
                }}
            />
        </LocalizationProvider>
    );
}
