import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";
import { Grid } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers";
import {Box} from "@mui/system";




export default function Form () {

    const [category, setCategory] = useState('');
    const [discount, setDiscount] = useState('');

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeDiscount = (event) => {
        setDiscount(event.target.value);
    }


    return(
    <>
        <div className={"productFormContainer"}>
            <form className={"productForm"}>
                <TextField
                    id="outlined-basic"
                    label="Product Title"
                    variant="filled"
                />
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        label="Category"
                        onChange={handleChangeCategory}
                        variant="filled"
                    >
                        <MenuItem value={10}>Category 1</MenuItem>
                        <MenuItem value={20}>Category 2</MenuItem>
                        <MenuItem value={30}>Category 3</MenuItem>
                    </Select>
                </FormControl>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-basic"
                                label="Selling Price"
                                type="number"
                                variant="filled"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-basic"
                                label="Cost Price"
                                type="number"
                                variant="filled"
                                fullWidth
                                sx={{ marginBottom: '20px' }}
                            />
                        </Grid>
                    </Grid>
                    <InputLabel>Quantity in Stock</InputLabel>
                <FormControl fullWidth>
                    <InputLabel>Color</InputLabel>
                    <Select
                        value={category}
                        label="Category"
                        onChange={handleChangeCategory}
                        variant="filled"
                    >
                        <MenuItem value={10}>Category 1</MenuItem>
                        <MenuItem value={20}>Category 2</MenuItem>
                        <MenuItem value={30}>Category 3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: "1px",
                            mb: '20px',
                            '& > :not(style)': { m: 0, width: '20%' },
                        }}
                    >
                        <TextField
                            id="xs-size"
                            label="XS"
                            type="number"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            id="s-size"
                            label="S"
                            type="number"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            id="m-size"
                            label="M"
                            type="number"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            id="l-size"
                            label="L"
                            type="number"
                            variant="filled"
                            fullWidth
                        />
                        <TextField
                            id="xl-size"
                            label="XL"
                            type="number"
                            variant="filled"
                            fullWidth
                            sx={{ marginBottom: '20px' }}
                        />
                    </Box>
                </FormControl>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <InputLabel htmlFor="selling-price">Discount</InputLabel>
                    <FormControlLabel
                        control={<Switch />}
                        sx={{ alignSelf: 'flex-end'}}
                        label={
                            <Typography variant="body2" sx={{ fontSize: '12px' }}>
                                Add Discount
                            </Typography>
                        }
                    />
                </Box>

                <FormControl>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <InputLabel>Type</InputLabel>
                            <Select
                                value={category}
                                label="Category"
                                variant="filled"
                                onChange={handleChangeCategory}
                                fullWidth
                            >
                                <MenuItem value={10}>Category 1</MenuItem>
                                <MenuItem value={20}>Category 2</MenuItem>
                                <MenuItem value={30}>Category 3</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-basic"
                                label="Discount Amount"
                                type="number"
                                variant="filled"
                                fullWidth
                                sx={{ marginBottom: '10px' }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={6} >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Discount Start Date"
                                    slotProps={{ textField: { variant: 'filled' } }}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Discount End Date"
                                    slotProps={{ textField: { variant: 'filled' } }}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </FormControl>
                <TextField
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    rows={6}
                    variant="filled"
                    sx={{ marginTop: 'auto' }}
                />
            </form>
        </div>
    </>
  )


}


