import "../../assets/css/tasks.css"
import Header from "./Header";
import TasksTable from "./TasksTable";
import Form from "./Form";
import {useEffect} from "react";
import {getTasks} from "../../api/task";
import {useSelector} from "react-redux";
import {useState} from "react";
import {CircularProgress} from "@mui/material";
import {setRefresh} from "../../redux/reducers/task";
import {useDispatch} from "react-redux";



export default function Tasks () : JSX.Element {

    const dispatch = useDispatch();
    const [isloading, setIsLoading] = useState(null);
    const selectedTask = useSelector((state: any) => state.task.selectedTask);
    const refresh = useSelector((state: any) => state.task.refresh);


    useEffect(() => {
        setIsLoading(true)
        getTasks()
            .then((response) => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            });
        dispatch(setRefresh(false))
    }, [refresh === true]);


    return (
        <div className={"containerTasks"}>
            <div className={"tasks"}>
                {isloading
                    ?
                    <>
                        <Header/>
                        <div className={"table__container flex"}>
                            <CircularProgress color={'inherit'} sx={{margin: 'auto'}}/>
                        </div>
                    </>
                    :
                    <>
                        <Header/>
                        <TasksTable/>
                    </>
                }
            </div>
            <Form/>
        </div>
    )
}


