import "../../assets/css/tasks.css"
import Header from "./Header";
import TasksTable from "./TasksTable";
import Form from "./Form";
import {useEffect} from "react";
import {getTasks} from "../../api/task";
import {useSelector} from "react-redux";




export default function Tasks () : JSX.Element {

    const newTask = useSelector((state: any) => state.task.newTask);
    const selectedTask = useSelector((state: any) => state.task.selectedTask);



    useEffect(() => {
        getTasks();
    }, [newTask]);


    return (
        <div className={"containerTasks"}>
                <div className={"tasks"}>
                    <div className={"tasks__header"}>
                        <Header/>
                    </div>
                    <TasksTable/>
                </div>
            <Form/>
        </div>
    )
}


