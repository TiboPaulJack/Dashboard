import Form from "../Inventory/form";
import Preview from "../Product/Preview";
import Options from "../Inventory/Options";
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
                <Preview/>
                <Options/>
            </section>
        </div>
    )
}