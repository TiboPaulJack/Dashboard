import "../../assets/css/inventory.css"
import MemberList from "../TeamManagement/MemberList.jsx";
export default function Inventory () {

  return (
    <div className={"containerInventory"}>


      <div className="appFilter">
      
      </div>
      <div className={"listing"}>
        <h2 className={"title-team"}>Inventory</h2>
        <div className={"legend"}>
          <h3 className={"name"}>Name</h3>
          <h3 className={"role"}>Size</h3>
          <h3 className={"service"}>Color</h3>
          <h3 className={"status"}>Qty in Stock</h3>
          <h3 className={"edit"}>Price</h3>
        </div>
      </div>


    </div>
  )

}
