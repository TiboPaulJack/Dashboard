import {Button, FormControl, InputLabel, MenuItem, Radio, Select, TextField} from "@mui/material";
import Stack from "@mui/material/Stack";
import {blue, orange, red} from "@mui/material/colors";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../api/user";
import {clearNewTask, clearSelectedTask, setTasks, setSelectedTask, setRefresh} from "../../redux/reducers/task";
import {createTask, deleteTask, updateTask} from "../../api/task";
import {Task} from "../../types";
import {setNewTask} from "../../redux/reducers/task";
import {Clear, Delete, Save, SaveAlt} from "@mui/icons-material";
// @ts-ignore
import dayjs from 'dayjs';



const colors = [
    "#B8AB8E",
    "#CF6153",
    "#91A8ED",
    "#7DB03F",
    "#E34430",
    "#24A094"
];


export default function Form () {

    const dispatch = useDispatch();


    const users = useSelector((state: any) => state.user.users);
    const tasks = useSelector((state: any) => state.task.tasks);
    const newTask = useSelector((state: any) => state.task.newTask);
    const selectedTask = useSelector((state: any) => state.task.selectedTask);

    useEffect(() => {
        getUsers()
    }, []);


    const handleClearForm = () => {
        dispatch(clearNewTask());
    }

    const handleChangeDate = (date) => {
        const name = "date";
        const value = date.toISOString().split('T')[0];
        console.log(value)
        if(Object.values(selectedTask).length !== 0){
            dispatch(setSelectedTask({ ...selectedTask, [name]: value }));
        }else{
            dispatch(setNewTask({ ...newTask, [name]: value }));
        }
    }


    const handleDeleteSelected = () => {
        tasks.map((task: Task) => {
            if(task.checked){
                deleteTask(task.id);
                dispatch(setRefresh(true))
            }
        });
        dispatch(clearSelectedTask());
    }

    const handleSaveTask = () => {
        if(Object.values(selectedTask).length !== 0){
            updateTask(selectedTask.id, selectedTask)
            dispatch(clearSelectedTask())
            dispatch(setRefresh(true))
        } else {
            createTask(newTask);
            dispatch(setRefresh(true))
            dispatch(clearNewTask());
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if(Object.values(selectedTask).length !== 0){
            dispatch(setSelectedTask({ ...selectedTask, [name]: value }));
        }else{
            dispatch(setNewTask({ ...newTask, [name]: value }));
        }
    };


    const radioColorList = colors.map((color) => {
        return (
            <Radio
                key={color}
                onChange={handleChange}
                checked={Object.values(selectedTask).length !== 0 ? selectedTask.color === color : newTask.color === color}
                value={color}
                name="color"
                sx={{color: color, '&.Mui-checked': {color: color}}}
            />
        )
    });

    const usersList = users.map((user: any) => {
        return (
            <MenuItem key={user.id} value={user.id}>{user.firstname + "  " + user.lastname}</MenuItem>
        )
    });


    return (
        <div className={"tasks-edit"}>
            <TextField
                id="filled-basic"
                label="Title"
                variant="filled"
                name={"title"}
                onChange={handleChange}
                value={Object.values(selectedTask).length !== 0 ? selectedTask.title : newTask.title}
            />
            <TextField
                label="Description"
                multiline
                rows={6}
                name={"content"}
                onChange={handleChange}
                value={Object.values(selectedTask).length !== 0 ? selectedTask.content : newTask.content}
            />
            <Stack direction="row" justifyContent={"center"}>
                {radioColorList}
            </Stack>
            <FormControl>
                <InputLabel shrink>User</InputLabel>
                <Select
                    onChange={handleChange}
                    name={"user"}
                    value={Object.values(selectedTask).length !== 0 ? selectedTask.user_id : newTask.user_id}
                >
                {usersList}
            </Select>
            </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        onChange={handleChangeDate}
                        value={
                            Object.values(selectedTask).length !== 0
                                ? (selectedTask.date ? dayjs(selectedTask.date) : null)
                                : (newTask.date ? dayjs(newTask.date) : null)
                        }
                    />
                </LocalizationProvider>
            <FormControl>
                <InputLabel shrink>Status</InputLabel>
                <Select
                    onChange={handleChange}
                    name={"status"}
                    value={Object.values(selectedTask).length !== 0 ? selectedTask.status : newTask.status}
                >
                    <MenuItem  value={"done"}>Done</MenuItem>
                    <MenuItem  value={"pending"}>Pending</MenuItem>
                </Select>
            </FormControl>
            <Stack sx={{mt:"auto"}} direction="row" spacing={2} >
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleDeleteSelected}
                    disabled={Object.values(selectedTask).length !== 0 ? false : !tasks.some((task: Task) => task.checked)}
                    startIcon={<Delete/>}
                >
                    Delete
                </Button>
                {Object.values(selectedTask).length !== 0 ?
                    <Button
                    variant="contained"
                    fullWidth
                    onClick={() => dispatch(clearSelectedTask())}
                    startIcon={<Clear/>}
                    >
                    Close
                    </Button>
                    :
                    <Button
                    variant="contained"
                    fullWidth
                    onClick={handleClearForm}
                    disabled={!newTask.title && !newTask.content && !newTask.color && !newTask.user_id && !newTask.date && !newTask.status}
                    startIcon={<Clear/>}
                    >
                    Clear
                    </Button>
                }
                    <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSaveTask}
                    disabled={Object.values(selectedTask).length !== 0 ? false : !newTask.title && !newTask.content && !newTask.color && !newTask.status}
                    startIcon={<SaveAlt/>}
                    >
                    Save
                    </Button>
            </Stack>
        </div>
    )


}