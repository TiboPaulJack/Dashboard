import { Add, Delete, Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";
import { createRef, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTask } from "../../api/task";
import {setSelectedTask, setTasks} from "../../redux/reducers/task";

export default function ReminderWidget() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);
    const [isLastElementClicked, setIsLastElementClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const tasks = useSelector((state: any) => state.task.tasks);
    const taskRefs = useRef([]);
    const listRef = useRef(null);
    
    useEffect(() => {
        taskRefs.current = tasks.map((_, i) => taskRefs.current[i] ?? createRef());
    }, [tasks]);

    const handleNewTaskClick = () => {
        navigate('/tasks');
    }

    const handleChangeStatus = (event, id: number) => {
        const updatedTasks = tasks.map((task) => {
            if(task.id === id){
                return { ...task, status: "done" };
            }
            return task;
        });
        dispatch(setTasks(updatedTasks));
        updateTask(id, {status: "done"});
    }
    
    const handleEditTask = (task) => {
        navigate('tasks')
        dispatch(setSelectedTask(task))
    }
    
    const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        if(selected === index){
            setSelected(null);
            return;
        }
        setSelected(index);
        const element = taskRefs.current[index].current;
        const topPosition = element.offsetTop;
        
        if(index === tasks.length - 1){
            setIsLastElementClicked(true);
        }
        
        listRef.current.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
    };
    
    const pendingTasks = tasks.filter((task) => task.status === "pending");

    console.log(pendingTasks)
    
    let heightPlaceholderEmptyOtherTasks : string;
    if (pendingTasks.length < 2 && selected !== null) {
        heightPlaceholderEmptyOtherTasks = 'calc(34.2% - 10px)'; 
    } else if (pendingTasks.length < 2) {
        heightPlaceholderEmptyOtherTasks = '66%';
    } else if (pendingTasks.length <= 3) {
        heightPlaceholderEmptyOtherTasks = 'calc(34.2% - 10px)';
    } else {
        heightPlaceholderEmptyOtherTasks = '66%'; 
    }
    
    
    
    
    return (
        pendingTasks.length !== 0 ?
        <List ref={listRef} sx={{overflow: 'auto', height: '100%', p: 0,}}>
        {pendingTasks
            .filter((task) => task.status === "pending")
            .map((task, index) => {
            let ref = taskRefs.current[index];
            return (
                <Paper elevation={4} ref={ref}
                sx={{
                    backgroundColor: `${task.color}`,
                    color: 'white',
                    height: selected === index ? '66%' : 'calc(34.2% - 10px)',
                    transition: 'height 0.5s',
                    '&:not(:last-child)': {
                        marginBottom: '10px',
                    }}}
                    key={index}
                    >
                    <ListItem
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    secondaryAction={ <Checkbox edge="end" checked={task.status !== "pending"} onChange={(e) => handleChangeStatus(e, task.id)} /> }
                    >
                    <ListItemButton
                    sx={{
                        height: '100%',
                        width: '100%',
                    }}
                    onClick={(event) => handleListItemClick(event, index)}
                    >
                    <ListItemText
                    id={task.id}
                    primary={task.title}
                    primaryTypographyProps={{ sx: { textAlign: 'left', height: '30px' } }}
                    secondary={task.content}
                    secondaryTypographyProps={{ sx: { textAlign: 'left', height: '40px', mb:'auto', color:'#52535c' }}}
                    sx={{
                        display: 'flex',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        p: 0,
                        m: 0,
                    }}
                    />
                    </ListItemButton>
                    {
                        selected === index &&
                        <Stack spacing={2} direction={'row'} sx={{width:'100%', mb:2}}>
                        <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {handleEditTask(task)}}
                        endIcon={<Edit/>}
                        >
                        Edit
                        </Button>
                        </Stack>
                    }
                    </ListItem>
                    
                    </Paper>
                    );
                })}
 
                    <Paper elevation={4}
                    sx={{
                        backgroundColor: `inherit`,
                        boxSizing: 'border-box',
                        color: 'white',
                        height: `${heightPlaceholderEmptyOtherTasks}`,
                        margin: '0',

                    }}
                        key={tasks.length}  
                        >

                        <Button
                            sx={{
                                width:'100%',
                                height:'100%',
                                ' &:hover': {
                                    backgroundColor: 'var(--background-widget) !important',
                                },

                            }}
                            onClick={handleNewTaskClick}
                        >
                            <Add sx={{m:'auto', color:'grey'}}/>
                        </Button>
                        </Paper>

                    </List>
        :
                    <div 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)} 
                    className={"task-widget__container-bottom-empty"}
                    >
                    {!isHovered ? 
                        "No tasks to display"
                        :
                        <div style={{cursor:'pointer', width:'100%', height:'100%', display:'flex'}}
                        onClick={handleNewTaskClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        >                        
                            <Add sx={{m:'auto'}}/>
                        </div>
                    }
                    </div>
                    
                    );
                }