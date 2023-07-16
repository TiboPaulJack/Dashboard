import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import { Grid } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker, DateValidationError} from "@mui/x-date-pickers";
import {Box} from "@mui/system";
import Stack from "@mui/material/Stack";
import {Product} from "../../types";
import {PickerChangeHandlerContext} from "@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types";
import {useDispatch, useSelector} from "react-redux";
import {getAllCategories} from "../../api/product_categories";
import {getAllColors} from "../../api/product_colors";
import {Add, Clear} from "@mui/icons-material";
import product, {
    clearInAddProducts,
    clearQuantityPerSize,
    setInAddProducts,
    clearNewProduct
} from "../../redux/reducers/product";
import {setNewProduct, setQuantityPerSize} from "../../redux/reducers/product";
import {createProduct} from "../../api/product";

const sizes = {
    "XS": 1,
    "S": 2,
    "M": 3,
    "L": 4,
    "XL": 5,
}


export default function Form ()  {


    const dispatch = useDispatch()
    const newProduct = useSelector((state: any) => state.product.newProduct)
    const editProductMode = useSelector((state: any) => state.config.editProductMode)
    const categories = useSelector((state: any) => state.product.categories)
    const colors = useSelector((state: any) => state.product.colors)
    const quantityPerSize = useSelector((state: any) => state.product.quantityPerSize)
    const inAddProducts = useSelector((state: any) => state.product.inAddProducts)


    useEffect(() => {
        getAllCategories();
        getAllColors();
    }, [])



    const handleChangeValue= (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        dispatch(setNewProduct({...newProduct, [name]: value}))
    }

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        console.log(name, value)
        dispatch(setQuantityPerSize({...quantityPerSize, [name]: Number(value)}))
    };


    const handleAddProduct = () => {
        const QtyPerSize = Object.entries(quantityPerSize)
            .filter(([size, quantity]) => quantity !== 0 && quantity !== undefined);

        let updatedInAddProducts = [...inAddProducts];

        QtyPerSize.forEach(([size, quantity]) => {
            const productIndex = updatedInAddProducts.findIndex(product => product.size === size && product.color === newProduct.color);

            if (productIndex !== -1) {
                const product = { ...updatedInAddProducts[productIndex] };
                product.quantity = Number(product.quantity) + Number(quantity);
                updatedInAddProducts[productIndex] = product;
            } else {
                const id = updatedInAddProducts.length + 1;
                const newProductWithSize = { ...newProduct, size: size, quantity: Number(quantity), id: id };
                updatedInAddProducts = [...updatedInAddProducts, newProductWithSize];
            }
        });
        dispatch(setInAddProducts(updatedInAddProducts));
        dispatch(clearQuantityPerSize());
    };




    const handleClearForm = () => {
        dispatch(clearNewProduct());
        dispatch(clearQuantityPerSize());
    }


    const handleChangeDate = (value: string, context: PickerChangeHandlerContext<DateValidationError>) => {
    };


    const categoriesList = categories.map((category: any) => {
        return (
            <MenuItem value={category.id}>{category.name}</MenuItem>
        )
    });

    const colorList = colors.map((color: any) => {
        return (
            <MenuItem value={color.id}>{color.name}</MenuItem>
        )
    });

    const sizesList = Object.entries(sizes).map(([size, value]) => {
        return (
                <TextField
                    label={size}
                    type="number"
                    variant="filled"
                    name={value.toString()}
                    value={quantityPerSize[value]}
                    onChange={handleQuantityChange}
                    fullWidth
                />
        )
    });

    return(

        <div className={"productFormContainer"}>
            <div className={"productForm"}>
                <Stack spacing={1}>
                    <InputLabel>Product</InputLabel>
                    <TextField
                        label="Product Title"
                        variant="filled"
                        name="name"
                        value={newProduct.name}
                        onChange={handleChangeValue}
                    />
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                            label="Category"
                            variant="filled"
                            name="category"
                            value={newProduct.category}
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
                            name="sellPrice"
                            value={newProduct.sellPrice}
                            onChange={handleChangeValue}
                            fullWidth
                        />
                        <TextField
                            label="Cost Price"
                            type="number"
                            variant="filled"
                            name="costPrice"
                            value={newProduct.costPrice}
                            onChange={handleChangeValue}
                            fullWidth
                        />
                    </Stack>
                </Stack>
                <Stack spacing={1}>
                    <InputLabel >Quantity in Stock</InputLabel>
                    <FormControl fullWidth>
                        <InputLabel>Color</InputLabel>
                        <Select
                            label="Color"
                            name="color"
                            value={newProduct.color}
                            onChange={handleChangeValue}
                            variant="filled"
                        >
                            {colorList}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <Box sx={{display: 'flex', gap: "1px", '& > :not(style)': {m: 0, width: '20%'}}}>
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
                            name="isdiscounted"
                            value={newProduct.isDiscounted}
                        />
                    </Stack>
                    <FormControl>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <InputLabel>Type</InputLabel>
                                <Select
                                    label="Type"
                                    variant="filled"
                                    name="discountType"
                                    value={newProduct.discountType}
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
                                    value={newProduct.discountAmount}
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
                                    value={newProduct.discountStartDate}
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
                                    value={newProduct.discountEndDate}
                                    onChange={handleChangeDate}
                                    slotProps={{textField: {variant: 'filled'}}}
                                />
                            </LocalizationProvider>
                        </Stack>
                    </FormControl>
                </Stack>
                <TextField
                    label="Description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleChangeValue}
                    multiline
                    rows={4}
                    variant="filled"
                    sx={{ alignSelf: 'flex-end', width: '100%'}}
                />
                <Stack direction={'row'} spacing={2}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleClearForm}
                    >
                        <Clear/>
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleAddProduct}
                >
                        <Add/>
                    </Button>

                </Stack>
            </div>
        </div>

    )


}



