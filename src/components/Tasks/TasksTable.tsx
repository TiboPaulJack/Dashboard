import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getTasks} from "../../api/task";
import Checkbox from "@mui/material/Checkbox";
import {Task} from "../../types";
import {setInAddProducts} from "../../redux/reducers/product";
import {setSelectedTask, setTasks} from "../../redux/reducers/task";
import {useDispatch} from "react-redux";
import {useState} from "react";

export default function TasksTable () {




    const dispatch = useDispatch();
    const tasks = useSelector((state: any) => state.task.tasks);
    const [updateKey, setUpdateKey] = useState(Math.random());
    const tasksFilter = useSelector((state: any) => state.config.tasksFilter);


    const handleCheckBox = (name: string, id? : number) => {
        if (name === "selectAll") {
            const allChecked = tasks.every((task: Task) => task.checked);
            const selectedTasks = tasks.map((task: Task) => {
                return { ...task, checked: !allChecked };
            });
            setUpdateKey(Math.random())
            dispatch(setTasks(selectedTasks));

        }
        else if (name === "select") {
            const selectedTasks = tasks.map((task: Task) =>
                task.id === id ? { ...task, checked: !task.checked } : task
            );
            dispatch(setTasks(selectedTasks));
        }
    };


    const tasksList =
        tasks &&
        tasks
            .filter((task: Task) => tasksFilter === "all" ? true : task.status === tasksFilter)
            .map((task: any) => {
        return (
            <TableRow
                hover
                key={task.id}
                sx={{ cursor: 'pointer' }}
                onClick={() => dispatch(setSelectedTask(task))}
            >
                <TableCell align="left">
                    <Checkbox
                        name={"select"}
                        checked={task.checked}
                        onChange={() => handleCheckBox("select", task.id)}
                    />
                </TableCell>
                <TableCell align="left">{task.title}</TableCell>
                <TableCell align="center">{task.content}</TableCell>
            </TableRow>
        )
    });

    return (
        <TableContainer className={"table__container"} key={updateKey}>
            <Table>
                <TableHead className={"table__head"}>
                    <TableRow
                        hover
                        sx={{ cursor: 'pointer' }}
                    >
                        <TableCell align="left">
                            <Checkbox
                                name={"selectAll"}
                                checked={tasks.every((task: any) => task.checked)}
                                onChange={() => handleCheckBox("selectAll")}
                            />
                        </TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="center">Content</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasksList}
                </TableBody>
            </Table>
        </TableContainer>
    )


}