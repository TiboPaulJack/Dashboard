import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button, Stack} from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Clear from "@mui/icons-material/Clear";
import {useDispatch, useSelector} from "react-redux";
import {setEditProductMode, setInventoryFocusOpen} from "../../redux/reducers/config";
import product, {
    allProducts,
    clearInAddProducts, clearRelatedProducts,
    setInAddProducts,
    setRelatedProducts, setSelectedProduct
} from "../../redux/reducers/product";
import {Product} from "../../types";
import Checkbox from "@mui/material/Checkbox";
import {useEffect} from "react";
import {deleteProduct, updateProduct} from "../../api/product";



export default function Recap() {

    const dispatch = useDispatch();

    const allProducts = useSelector((state: any) => state.product.products) as Product[];
    const selectedProduct = useSelector((state: any) => state.product.selectedProduct);
    const relatedProducts = useSelector((state: any) => state.product.relatedProducts) as Product[];
    const isFocusOpen = useSelector((state: any) => state.config.inventoryFocusOpen)

    const closeFocus = () => {
        dispatch(setInventoryFocusOpen(false))
    }



    const relatedList = allProducts.filter(product => product.name === selectedProduct.name)
        .map((product) => { return {...product, checked: false, id: product.id}});


    useEffect(() => {
        dispatch(setRelatedProducts(relatedList))
    }, [selectedProduct])

    const handleEditProduct = () => {
        relatedProducts.forEach((product: any) => {
            if (product.checked) {
                dispatch(setSelectedProduct(product));
            }
        });
        dispatch(setEditProductMode(true));
    }

    const handleSaveEditedProduct = () => {
        relatedProducts.forEach((product: Product) => {
            if (product.isEdited) {
                updateProduct(product.id, product);
            }
        });
        dispatch(clearRelatedProducts());
        dispatch(setInventoryFocusOpen(false));
    }

    const handleDeleteProduct = () => {
        const checkedProducts = relatedProducts.filter((product: Product) => product.checked);
        checkedProducts.forEach((product: Product) => {
            deleteProduct(product.id);
        });
        dispatch(clearRelatedProducts());
        dispatch(setInventoryFocusOpen(false));
    }

    const handleCheckBoxSelect = (name: string, id? : number) => {
        if (name === "selectAll") {
            const allChecked = relatedProducts.every((product: Product) => product.checked);
            const updatedProducts = relatedProducts.map((product: Product) => {
                return { ...product, checked: !allChecked };
            });
            dispatch(setRelatedProducts(updatedProducts));
        }
        else if (name === "select") {
            const updatedProducts = relatedProducts.map((product: Product) =>
                product.id === id ? { ...product, checked: !product.checked } : product
            );
            dispatch(setRelatedProducts(updatedProducts));
        }
    };

    const productList = relatedProducts
        .map((product) => {
            return (
                <TableRow
                    key={product.id}
                    hover sx={{cursor:'pointer'}}
                    onClick={() => handleCheckBoxSelect("select", product.id)}
                >
                    <TableCell align="left" sx={{width:'10%'}}>
                        <Checkbox
                            name={"select"}
                            onChange={(event) => handleCheckBoxSelect(event.target.name, product.id)}
                            checked={product.checked}
                            disabled={relatedProducts.length === 0}
                        />
                    </TableCell>
                    <TableCell align="left" sx={{width:'30%'}}>{product.name}</TableCell>
                    <TableCell align="left" sx={{width:'10%'}}>{product.quantity}</TableCell>
                    <TableCell align="center" sx={{width:'20%'}}>{product.color}</TableCell>
                    <TableCell align="center" sx={{width:'10%'}}>{product.size}</TableCell>
                    <TableCell align="right"  sx={{width:'10%'}}>{product.costPrice}</TableCell>
                    <TableCell align="right" sx={{width:'10%'}}>{product.sellPrice}</TableCell>
                </TableRow>
            );
        });



    return (
        <div className={"product_options"}>
            <TableContainer
                sx={{width: '100%', overflow:'hidden' }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{minWidth:'10%'}}>
                                <Checkbox
                                    sx={{alignSelf:'center'}}
                                    onChange={(event) => handleCheckBoxSelect(event.target.name)}
                                    name={"selectAll"}
                                    checked={relatedProducts.length > 0 && relatedProducts.every((product: Product) => product.checked)}
                                />
                            </TableCell>
                            <TableCell align="left" sx={{width:'30%'}}>Name</TableCell>
                            <TableCell align="left" sx={{width:'10%'}}>Qty</TableCell>
                            <TableCell align="center" sx={{width:'20%'}}>Color</TableCell>
                            <TableCell align="center" sx={{width:'10%'}}>Size</TableCell>
                            <TableCell align="right" sx={{width:'10%'}}>C&nbsp;(€)</TableCell>
                            <TableCell align="right" sx={{width:'10%'}}>S&nbsp;(€)</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <TableContainer sx={{height:'100%'}}>
                <Table sx={{}}>
                    <TableBody sx={{overflowY:'auto'}}>
                        {productList}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack spacing={2}
                   direction={'row'}
                   justifyContent='flex-end'
                   alignSelf={'flex-end'}
                   sx={{width:'100%'}}
            >
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<Clear/>}
                        onClick={handleDeleteProduct}
                        disabled={relatedProducts.filter((product: Product) => product.checked).length === 0}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<DeleteIcon/>}
                        onClick={closeFocus}
                    >
                        Close
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<Edit/>}
                        disabled={relatedProducts.filter((product: Product) => product.checked).length !== 1}
                        onClick={handleEditProduct}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        endIcon={<SaveAltIcon />}
                        disabled={relatedProducts.filter((product: Product) => product.isEdited).length === 0}
                        onClick={handleSaveEditedProduct}
                    >
                        Save
                    </Button>
            </Stack>
        </div>
    )
}

