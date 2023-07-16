import {MenuItem, Select, TextField} from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import {Button} from "@mui/material";
import Stack from "@mui/material/Stack";
import {useState} from "react";

export default function Preview() : JSX.Element {

    const [selected, setSelected] = useState<number>(0);

    const handleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: number) => {
        if(selected === id){
            setSelected(0);
            return;
        }
        setSelected(id);
    }

    return (

        <div className="containerPreview">
            <Stack spacing={2}
                   direction={"row"}
                   p={"20px"}
                   sx={{
                       height:'100%',
                       boxSizing: "border-box",
                   }}
            >
                <Stack sx={{width:"50%"}}  justifyContent={"space-between"} >
                    <Stack spacing={1}>
                        <Stack direction={'row'} spacing={2}>
                            <Button
                            variant="contained"
                            fullWidth
                        >
                            Upload image
                        </Button>
                            <Button
                                variant="contained"
                                fullWidth
                            >
                                Show
                            </Button>
                        </Stack>
                        <FormControl fullWidth>
                            <InputLabel>Color</InputLabel>
                            <Select
                                label="Category"
                                variant="filled"
                            >
                                <MenuItem value={10}>Category 1</MenuItem>
                                <MenuItem value={20}>Category 2</MenuItem>
                                <MenuItem value={30}>Category 3</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Image Description"
                            variant="filled"
                            multiline
                            rows={2}
                            fullWidth
                        />
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                        <Button
                            variant="outlined"
                            fullWidth
                        >
                            Delete image
                        </Button>
                        <Button
                            variant="contained"
                            fullWidth
                        >
                            Save image
                        </Button>
                    </Stack>
                </Stack>

                <Stack sx={{width:"50%", height:'100%'}}>
                    <div className={"containerImage"}>
                        <div className={selected === 1 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 1)}></div>
                        <div className={selected === 2 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 2)}></div>
                        <div className={selected === 3 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 3)}></div>
                        <div className={selected === 4 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 4)}></div>
                        <div className={selected === 5 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 5)}></div>
                        <div className={selected === 6 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 6)}></div>
                        <div className={selected === 7 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 7)}></div>
                        <div className={selected === 8 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 8)}></div>
                        <div className={selected === 9 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 9)}></div>
                        <div className={selected === 10 ? "image selected" : "image"} onClick={(event) => handleSelect(event, 10)}></div>
                    </div>
                </Stack>
            </Stack>


        </div>
    );
}



