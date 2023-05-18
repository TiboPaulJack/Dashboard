


function Form () {

  return(
    <>
      <div className={"productFormContainer"}>
      <h2 className={"title-team"}>Add a product</h2>
      <form className={"productForm"}>
        <label htmlFor={"product-name"}>Product Name</label>
        <input type={"text"} id={"product-name"} name={"product-name"} placeholder={"Enter product name"}/>
        <select id={"product-category"} name={"product-category"}>
          <option value="" disabled selected hidden>Select product category</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
        <div className={"product-price"}>
          <input type={"number"} id={"product-price"} name={"product-price"} placeholder={"Selling Price"}/>
          <input type={"number"} id={"product-cost"} name={"product-cost"} placeholder={"Cost Price"}/>
        </div>
        <input type={"number"} id={"product-quantity"} name={"product-quantity"} placeholder={"Quantity in Stock"}/>
        <label id={"label-discount"} htmlFor={"discount"}>Discount</label>
        <div className={"product-discount"}>
          <select id={"discount-type"} name={"discount-type"}>
            <option value="" disabled selected hidden>Discount type</option>
            <option value="percentage">Percentage</option>
            <option value="amount">Amount</option>
          </select>
          <input type={"number"} id={"discount-value"} name={"discount-value"}/>
        </div>
        <div className={"product-discount-checkbox"}>
          <label htmlFor={"discount-active"}>Add discount</label>
          {/*<input type={"checkbox"} id={"discount-active"} name={"discount-active"}/>*/}
          <div className="status-switch-wrapper">
            <label className="member-switch" >
              <input type="checkbox" id="discount-active" name={"discount-active"}/>
              <div className="statusSlider round"></div>
            </label>
          </div>
        </div>
        <div className={"product-discount-date"}>
          <input type={'date'} id={"discount-start"} name={"discount-start"}/>
          <input type={'date'} id={"discount-end"} name={"discount-end"}/>
        </div>
        <div className={"product-discount-checkbox"}>
          <label htmlFor={"discount-date-active"}>Add dates</label>
          {/*<input type={"checkbox"} id={"discount-active"} name={"discount-date-active"}/>*/}
          <div className="status-switch-wrapper">
            <label className="member-switch" >
              <input type="checkbox" id="discount-active" name={"discount-date-active"}/>
              <div className="statusSlider round"></div>
            </label>
          </div>
        </div>
        <div className={"product-description"}>
          <label htmlFor={"product-description"}>Product Description</label>
          <textarea id={"product-description"} name={"product-description"}/>
        </div>

      </form>
      </div>
    </>
  )


}


export default Form;
