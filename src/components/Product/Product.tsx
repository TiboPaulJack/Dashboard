import '../../assets/css/product.css'
import Form from "./form";
import Preview from "./Preview";
import Options from "./Options";
import {useEffect} from "react";
import {getAllProducts} from "../../api/product";
import {useDispatch, useSelector} from "react-redux";
import {clearSelectedProduct} from "../../redux/reducers/product";
import {setInventoryFocusOpen} from "../../redux/reducers/config";
import {setNewProduct} from "../../redux/reducers/product";


export default function Product() {


    const dispatch = useDispatch()
    const newProduct = useSelector((state: any) => state.product.newProduct)

    useEffect(() => {
        dispatch(setInventoryFocusOpen(false))
    }, )



    return (
        <div className={"containerProduct"}>
            <Form/>
            <section className={"product_right"}>
                <Preview/>
                <Options/>
            </section>
        </div>
    )

}
