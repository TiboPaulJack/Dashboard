import {FormControl, FormLabel, Radio, RadioGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTasksFilter } from "../../redux/reducers/config";


export default function Header () {

    const dispatch = useDispatch();
    const tasksFilter = useSelector((state: any) => state.config.tasksFilter);

    const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTasksFilter(event.target.value));
    }

    return (
        <div className={"tasks__header"}>
            <FormControl sx={{margin:'auto'}} >
                <RadioGroup
                value={tasksFilter}
                onChange={handleChangeFilter}
                    row
                >
                    <Stack direction={'row'} spacing={5}>
                        <FormControlLabel value="pending" control={<Radio />} label="Pending"/>
                        <FormControlLabel value="done" control={<Radio />} label="Done"/>
                        <FormControlLabel value="all" control={<Radio />} label="All"/>
                    </Stack>
                </RadioGroup>
            </FormControl>
        </div>
    )
}
