import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {MenuItem, Select, TextField} from "@mui/material";
import { Grid } from "@mui/material";
import {Box} from "@mui/system";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import {Button} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

export default function Preview() : JSX.Element {

    return (

        <div className="containerPreview">
            <Grid container spacing={2} height={'100%'} padding={"20px"}>
                <Grid item xs={6}>
                    <Box sx={{
                        display:"flex",
                        flexDirection: "column",
                        gap: "10px",
                        height : "100%"
                    }}>
                        <FormControl fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select
                                label="Category"
                                variant="filled"
                            >
                                <MenuItem value={10}>Category 1</MenuItem>
                                <MenuItem value={20}>Category 2</MenuItem>
                                <MenuItem value={30}>Category 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{gap:"20px"}}>
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
                            rows={3}
                            fullWidth
                        />
                        <Grid container spacing={1} >
                            <Grid item xs={6}>
                            <Button
                                variant="outlined"
                                fullWidth
                            >
                                Delete image
                            </Button>
                            </Grid>
                            <Grid item xs={6}>
                            <Button
                                variant="contained"
                                fullWidth
                            >
                                Save image
                            </Button>
                            </Grid>
                        </Grid>
                    </Box>


                </Grid>
                <Grid item xs={6}>
                    <ImageList sx={{ width: '100%', height: '100%' }} cols={3} >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} sx={{ cursor: 'pointer' }}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>


        </div>
    );
}




const itemData  = [
    {
        img: 'https://source.unsplash.com/pC2xOplxsVs',
        title: '',
    },
    {
        img: 'https://source.unsplash.com/pC2xOplxsVs',
        title: '',
    },
    {
        img: 'https://source.unsplash.com/pC2xOplxsVs',
        title: '',
    },
    {
        img: 'https://source.unsplash.com/pC2xOplxsVs',
        title: '',
    },
    {
        img: 'https://source.unsplash.com/pC2xOplxsVs',
        title: '',
    },
    {
        img: 'https://source.unsplash.com/pC2xOplxsVs',
        title: '',
    },
    {
        img: 'https://source.unsplash.com/pC2xOplxsVs',
        title: '',
    },
    {
        img: 'https://source.unsplash.com/pC2xOplxsVs',
        title: '',
    },
    {
        img: 'https://source.unsplash.com/pC2xOplxsVs',
        title: '',
    },


];
