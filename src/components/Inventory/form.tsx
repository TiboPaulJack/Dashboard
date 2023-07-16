import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useEffect} from "react";
import { Grid } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker, DateValidationError} from "@mui/x-date-pickers";
import {Box} from "@mui/system";
import Stack from "@mui/material/Stack";
import {PickerChangeHandlerContext} from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../api/product_categories";
import {getAllColors} from "../../api/product_colors";
import {Add, ConfirmationNumber, Done} from "@mui/icons-material";
import {setRelatedProducts, setSelectedProduct} from "../../redux/reducers/product";

const sizes = {
    "XS": 1,
    "S": 2,
    "M": 3,
    "L": 4,
    "XL": 5,
}



export default function Form ()  {


    const dispatch = useDispatch()
    const selectedProduct = useSelector((state: any) => state.product.selectedProduct)
    const newProduct = useSelector((state: any) => state.product.newProduct)
    const editProductMode = useSelector((state: any) => state.config.editProductMode)
    const categories = useSelector((state: any) => state.product.categories)
    const colors = useSelector((state: any) => state.product.colors)
    const relatedProducts = useSelector((state: any) => state.product.relatedProducts)

    useEffect(() => {
        getAllCategories();
        getAllColors();
    }, [])

    const handleChangeValue= (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        console.log(name, value)
        dispatch(setSelectedProduct({...selectedProduct, [name]: value}));
    }

    const handleChangeDate = (value: string, context: PickerChangeHandlerContext<DateValidationError>) => {

    };

    const handleAddToEditedRelatedProducts = () => {

        const editedProduct = {...selectedProduct, isEdited: true};

        relatedProducts.forEach((product: any) => {
            if (product.id === editedProduct.id) {
                dispatch(setRelatedProducts([...relatedProducts.filter((product: any) => product.id !== editedProduct.id), editedProduct]))
            }
        });
    }



    const categoriesList = categories.map((category: any) => {
        return (
            <MenuItem value={category.name}>{category.name}</MenuItem>
        )
    });

    const colorList = colors.map((color: any) => {
        return (
            <MenuItem value={color.name}>{color.name}</MenuItem>
        )
    });

    const sizesList = Object.entries(sizes).map(([size, value]) => {
        return (
            <TextField
                label={size}
                type="number"
                variant="filled"
                InputLabelProps={{
                    shrink: true,
                }}
                name={"quantity"}
                inputProps={{shrunk: true}}
                disabled={selectedProduct.size !== size || !editProductMode}
                onChange={handleChangeValue}
                value={selectedProduct.size === size ? selectedProduct.quantity : 0}
                fullWidth
            />
        )
    });

    return(

        <div className={"productFormContainer"}>
            <div className={"productForm"}>
                <Stack spacing={1}>
                    <TextField
                        label="Product Title"
                        variant="filled"
                        name="title"
                        disabled={!editProductMode}
                        value={selectedProduct.name}
                        onChange={handleChangeValue}
                    />
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                            label="Category"
                            variant="filled"
                            name="category"
                            disabled={!editProductMode}
                            value={selectedProduct.category}
                            onChange={handleChangeValue}
                        >
                            {categoriesList}
                        </Select>
                    </FormControl>
                    <Stack direction={'row'} spacing={2}>
                        <TextField
                            label="Selling Price"
                            type="number"
                            variant="filled"
                            disabled={!editProductMode}
                            name="sellPrice"
                            value={selectedProduct.sellPrice}
                            onChange={handleChangeValue}
                            fullWidth
                        />
                        <TextField
                            label="Cost Price"
                            type="number"
                            variant="filled"
                            disabled={!editProductMode}
                            name="costPrice"
                            value={selectedProduct.costPrice}
                            onChange={handleChangeValue}
                            fullWidth
                        />
                    </Stack>
                </Stack>
                <Stack spacing={1}>
                    <InputLabel>Quantity in Stock</InputLabel>
                    <FormControl fullWidth>
                        <InputLabel>Color</InputLabel>
                        <Select
                            label="Color"
                            name="color"
                            disabled={!editProductMode}
                            value={selectedProduct.color}
                            onChange={handleChangeValue}
                            variant="filled"
                        >
                            {colorList}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <Box
                            sx={{display: 'flex', gap: "1px", '& > :not(style)': {m: 0, width: '20%'},}}>
                            {sizesList}
                        </Box>
                    </FormControl>
                </Stack>
                <Stack spacing={1}>
                    <Stack direction={'row'} justifyContent='space-between' alignItems='center'>
                        <InputLabel htmlFor="selling-price">Discount</InputLabel>
                        <FormControlLabel
                            control={<Switch/>}
                            sx={{alignSelf: 'flex-end'}}
                            label={
                                <Typography variant="body2" sx={{fontSize: '12px'}}>
                                    Add Discount
                                </Typography>
                            }
                            disabled={!editProductMode}
                            name="isdiscounted"
                            value={selectedProduct.isDiscounted}
                        />
                    </Stack>
                    <FormControl>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <InputLabel>Type</InputLabel>
                                <Select
                                    label="Type"
                                    variant="filled"
                                    disabled={!editProductMode}
                                    name="discountType"
                                    value={selectedProduct.discountType}
                                    onChange={handleChangeValue}
                                    fullWidth
                                >
                                </Select>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Discount Amount"
                                    type="number"
                                    variant="filled"
                                    name="discountAmount"
                                    disabled={!editProductMode}
                                    value={selectedProduct.discountAmount}
                                    onChange={handleChangeValue}
                                    fullWidth
                                    sx={{marginBottom: '10px'}}
                                />
                            </Grid>
                        </Grid>
                        <Stack direction={"row"} spacing={2} sx={{width: '100%'}}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Discount Start Date"
                                    sx={{width: '100%'}}
                                    // @ts-ignore
                                    name="discountStartDate"
                                    disabled={!editProductMode}
                                    value={selectedProduct.discountStartDate}
                                    onChange={handleChangeDate}
                                    slotProps={{textField: {variant: 'filled'}}}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Discount End Date"
                                    // @ts-ignore
                                    name="discountEndDate"
                                    sx={{width: '100%'}}
                                    disabled={!editProductMode}
                                    value={selectedProduct.discountEndDate}
                                    onChange={handleChangeDate}
                                    slotProps={{textField: {variant: 'filled'}}}
                                />
                            </LocalizationProvider>
                        </Stack>
                    </FormControl>
                </Stack>
                <Stack spacing={1}>
                    <TextField
                    label="Description"
                    name="description"
                    value={selectedProduct.description}
                    disabled={!editProductMode}
                    onChange={handleChangeValue}
                    multiline
                    rows={4}
                    variant="filled"
                />
                    <Button
                        variant="contained"
                        fullWidth
                        disabled={!editProductMode}
                        onClick={handleAddToEditedRelatedProducts}
                    >
                        <Done/>
                    </Button></Stack>
            </div>
        </div>

    )


}


