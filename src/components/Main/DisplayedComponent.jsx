import TeamMgmt from "../TeamManagement/TeamMgmt.jsx";
import Overview from "../Overview/Overview.jsx";
import Product from "../Product/Product.jsx";
import Inventory from "../Inventory/Inventory.jsx";
import Stats from "../Stats/Stats.jsx";
import Logs from "../Logs/Logs.jsx";

function DisplayedComponent(props) {

		const {rendered} = props
		return (
			<>
					{rendered === "Dashboard" && <Overview />}
					{rendered === "Team" && <TeamMgmt />}
					{rendered === "Product" && <Product />}
					{rendered === "Inventory" && <Inventory />}
					{rendered === "Stats" && <Stats />}
					{rendered === "Logs" && <Logs />}
			</>
		)}

export default DisplayedComponent
