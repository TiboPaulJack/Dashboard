import "../../assets/css/tasks.css"
import Header from "./Header";
import TasksTable from "./TasksTable";
import Form from "./Form";
import {useEffect} from "react";
import {getTasks} from "../../api/task";
import {useSelector} from "react-redux";




export default function Tasks () : JSX.Element {





    return (
        <div className={"containerTasks"}>
                <div className={"tasks"}>
                    <Header/>
                    <TasksTable/>
                </div>
            <Form/>
        </div>
    )
}


