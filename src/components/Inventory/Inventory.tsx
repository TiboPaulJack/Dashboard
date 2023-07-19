import "../../assets/css/inventory.css"
import InventoryTable from "./InventoryTable";
import {useEffect} from "react";
import {getAllProducts} from "../../api/product";
import {useDispatch, useSelector} from "react-redux";
import ProductFocus from "./productFocus";
import Header from "./header";
import {useState} from "react";
import {CircularProgress} from "@mui/material";


export default function Inventory () {

    const dispatch = useDispatch()
    const isFocusOpen = useSelector((state: any) => state.config.inventoryFocusOpen)
    const isloading = useSelector((state : any) => state.product.isLoading)

    useEffect(() => {
        getAllProducts()
    }, [isFocusOpen])

  return (
      <>
      {
            isFocusOpen
                ?
                     <ProductFocus/>
                :
                 <div className="containerInventory">
                    <Header/>
                     {isloading ? <CircularProgress color={'inherit'} sx={{margin: 'auto'}}/> : <InventoryTable/>}
                 </div>
      }
      </>
  )

}
