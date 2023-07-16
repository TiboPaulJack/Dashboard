import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button, Stack} from "@mui/material";
import Clear from "@mui/icons-material/Clear";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {clearInAddProducts, clearNewProduct, setInAddProducts} from "../../redux/reducers/product";
import {Product} from "../../types";
import {createProduct} from "../../api/product";
import Checkbox from '@mui/material/Checkbox';
import {useEffect} from "react";
import {setInventoryFocusOpen} from "../../redux/reducers/config";
import DeleteIcon from "@mui/icons-material/Delete";


export default function Options() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const inAddProducts = useSelector((state: any) => state.product.inAddProducts);




    const handleSaveProduct = async () => {
        await inAddProducts.forEach((product: Product) => {
            createProduct(product);
        });
        dispatch(clearInAddProducts());
        dispatch(clearNewProduct());
        navigate("/inventory");
    }

    const handleDeleteInAddProducts = () => {
        let inAddProductsCopy = [...inAddProducts];
        inAddProductsCopy = inAddProductsCopy.filter((product: Product) => !product.checked);
        dispatch(setInAddProducts(inAddProductsCopy));
    }

    const handleClearInAddProducts = () => {
        dispatch(clearInAddProducts());
    }

    const handleCheckBox = (name: string, id? : number) => {
        if (name === "selectAll") {
            const allChecked = inAddProducts.every((product: Product) => product.checked);
            const updatedProducts = inAddProducts.map((product: Product) => {
                return { ...product, checked: !allChecked };
            });
            dispatch(setInAddProducts(updatedProducts));
        }
        else if (name === "select") {
                   const updatedProducts = inAddProducts.map((product: Product) =>
                       product.id === id ? { ...product, checked: !product.checked } : product
                   );
                   dispatch(setInAddProducts(updatedProducts));
               }
    };



    const inAddList = inAddProducts.map((product) => {
        return (
            <TableRow
                key={product.id}
                hover
                sx={{cursor:'pointer'}}
                onClick={() => handleCheckBox("select", product.id)}
            >
                <TableCell align="left" sx={{width:'10%'}}>
                    <Checkbox
                        name={"select"}
                        onChange={(event) => handleCheckBox(event.target.name, product.id)}
                        checked={product.checked}
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
                sx={{width: '100%' }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{minWidth:'10%'}}>
                                <Checkbox
                                    sx={{alignSelf:'center'}}
                                    onChange={(event) => handleCheckBox(event.target.name)}
                                    name={"selectAll"}
                                    checked={inAddProducts.length > 0 && inAddProducts.every((product: Product) => product.checked)}
                                    disabled={inAddProducts.length === 0}
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
                        {inAddProducts && inAddList}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack spacing={2}
                   direction={'row'}
                   justifyContent='flex-end'
                   alignSelf={'flex-end'}
                   sx={{width:'100%'}}
            >
                <Stack direction={'row'} spacing={2} sx={{width:'100%'}}>
                    <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Clear/>}
                    onClick={handleClearInAddProducts}
                    disabled={inAddProducts.length === 0}
                >
                    Clear
                </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<DeleteIcon/>}
                        onClick={handleDeleteInAddProducts}
                        disabled={inAddProducts.length === 0}
                    >
                        Delete
                    </Button></Stack>
                    <Button
                        variant="contained"
                        fullWidth
                        endIcon={<SaveAltIcon />}
                        disabled={inAddProducts.length === 0}
                        onClick={handleSaveProduct}

                    >
                        Save
                    </Button>
            </Stack>
        </div>
    )
}

