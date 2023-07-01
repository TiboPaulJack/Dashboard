import '../../assets/css/product.css'
import Form from "./form";
import Preview from "./Preview";
import Options from "./Options";


export default function Product() {

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
