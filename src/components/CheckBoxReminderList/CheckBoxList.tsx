import { Delete, Edit } from "@mui/icons-material";
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

export default function CheckboxListSecondary() {
    
    const [selected, setSelected] = useState(null);
    const [isLastElementClicked, setIsLastElementClicked] = useState(false);
    
    const tasks = useSelector((state: any) => state.task.tasks);
    const taskRefs = useRef([]);
    const listRef = useRef(null);
    
    useEffect(() => {
        taskRefs.current = tasks.map((_, i) => taskRefs.current[i] ?? createRef());
    }, [tasks]);
    
    
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
    
    
    let heightPlaceholderEmptyOtherTasks : string;
    if (tasks.length < 2 && selected !== null) {
        heightPlaceholderEmptyOtherTasks = 'calc(34.2% - 10px)'; 
    } else if (tasks.length < 2) {
        heightPlaceholderEmptyOtherTasks = '66%';
    } else if (tasks.length <= 3) {
        heightPlaceholderEmptyOtherTasks = 'calc(34.2% - 10px)';
    } else {
        heightPlaceholderEmptyOtherTasks = '66%'; 
    }
    
    
    
    
    return (
        tasks.length > 0 ?
        <List ref={listRef} sx={{overflow: 'auto', height: '100%', p: 0,}}>
        {tasks.map((task, index) => {
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
                    secondaryAction={ <Checkbox edge="end" /> }
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
                    secondaryTypographyProps={{ sx: { textAlign: 'left', height: '40px', mb:'auto' }}}
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
                        endIcon={<Edit/>}
                        >
                        Edit
                        </Button>
                        <Button
                        variant="contained"
                        fullWidth
                        endIcon={<Delete/>}
                        >
                        Delete
                        </Button>
                        </Stack>
                    }
                    </ListItem>
                    
                    </Paper>
                    );
                })}
                {tasks.length < 3 || isLastElementClicked && 
                    
                    <Paper 
                    sx={{
                        backgroundColor: `inherit`,
                        boxSizing: 'border-box',
                        color: 'white',
                        height: `${heightPlaceholderEmptyOtherTasks}`,
                        transition: 'height 0.5s',
                        '&:not(:last-child)': {
                            marginBottom: '10px',
                        }}}
                        key={tasks.length}  
                        >
                        <ListItem
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        >
                        <ListItemText
                        secondary={"No other tasks to display"}
                        secondaryTypographyProps={{ sx: { textAlign: 'left', mb:'auto', mt:'auto' }}}
                        sx={{
                            display: 'flex',
                            height: '100%',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 0,
                            m: 0,
                        }}
                        />
                        </ListItem>
                        </Paper>
                    }
                    </List>
                    :
                    <div className={"task-widget__container-bottom-empty"}>
                    No tasks to display
                    </div>
                    
                    );
                }