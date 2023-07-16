import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {useDispatch, useSelector} from "react-redux";
import {Product} from "../../types";
import {setInventoryFocusOpen} from "../../redux/reducers/config";
import {setNewProduct, setSelectedProduct} from "../../redux/reducers/product";
import {useEffect} from "react";
import {getAllColors} from "../../api/product_colors";



export default function InventoryTable () : JSX.Element {

    const dispatch = useDispatch()
    const products = useSelector((state: any) => state.product.products)
    const filter = useSelector((state: any) => state.product.filter)



    useEffect(() => {
        getAllColors()
    }, [])


    const handleClick = (product : Product): void => {
        // @ts-ignore
        dispatch(setNewProduct(false));
        dispatch(setSelectedProduct(product));
        dispatch(setInventoryFocusOpen(true));
    }

    const filteredProducts = products.filter((product: Product) => product.category_id === filter);

    const productToMap = filter !== 0 ? filteredProducts : products;

 return (
     <TableContainer className={"table__container"}>
         <Table>
             <TableHead className={"table__head"}>
                 <TableRow
                     hover
                     sx={{ cursor: 'pointer' }}
                 >
                     <TableCell>Products</TableCell>
                     <TableCell align="right">Color</TableCell>
                     <TableCell align="right">Size</TableCell>
                     <TableCell align="right">Qty</TableCell>
                     <TableCell align="right">Cost Price&nbsp;(€)</TableCell>
                     <TableCell align="right">Selling Price&nbsp;(€)</TableCell>
                 </TableRow>
             </TableHead>
             <TableBody>
                 {productToMap.map((product) => (
                     <TableRow
                         hover
                         key={product.id}
                         onClick={() => handleClick(product)}
                         sx={{ cursor:"pointer", '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                         <TableCell align="left">{product.name}</TableCell>
                         <TableCell align="right">{product.color}</TableCell>
                         <TableCell align="right">{product.size}</TableCell>
                         <TableCell align="right">{product.quantity}</TableCell>
                         <TableCell align="right">{product.costPrice}</TableCell>
                         <TableCell align="right">{product.sellPrice}</TableCell>
                     </TableRow>
                 ))}
             </TableBody>
         </Table>
     </TableContainer>
 )
}