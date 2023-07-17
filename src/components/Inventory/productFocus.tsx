import Form from "../Inventory/form";
import ImagesForm from "../Product/ImagesForm";
import Recap from "./Recap";
import DeleteIcon from "@mui/icons-material/Delete";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setInventoryFocusOpen} from "../../redux/reducers/config";


export default function ProductFocus () {

    const dispatch = useDispatch()


    return (
        <div className={"productFocus"}>
            <Form/>
            <section className={"product_right"}>
                <ImagesForm/>
                <Recap/>
            </section>
        </div>
    )
}