import {FormControl, FormLabel, Radio, RadioGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";


export default function Header () {

    return (
        <>
            <FormControl sx={{margin:'auto'}} >
                <RadioGroup
                    row

                >
                    <Stack direction={'row'} spacing={5}>
                        <FormControlLabel value="female" control={<Radio/>} label="All"/>
                        <FormControlLabel value="male" control={<Radio/>} label="Pending"/>
                        <FormControlLabel value="other" control={<Radio/>} label="Done"/>
                    </Stack>

                </RadioGroup>
            </FormControl>
        </>
    )

}