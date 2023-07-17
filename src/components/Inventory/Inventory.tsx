import "../../assets/css/inventory.css"
import InventoryTable from "./InventoryTable";
import {useEffect} from "react";
import {getAllProducts} from "../../api/product";
import {useDispatch, useSelector} from "react-redux";
import ProductFocus from "./productFocus";
import Header from "./header";


export default function Inventory () {

    const dispatch = useDispatch()
    const isFocusOpen = useSelector((state: any) => state.config.inventoryFocusOpen)

    useEffect(() => {
        getAllProducts()
    }, [isFocusOpen])

  return (
      <>
      {
            isFocusOpen ?
            <ProductFocus/>
                :
        <div className="containerInventory">
            <Header/>
            <InventoryTable/>
        </div>
      }
      </>
  )

}
