import {useState, useEffect} from "react";
import "../../assets/css/teamMgmt.css"
import Listing from "./Listing.jsx";
import Modifier from "./Modifier.jsx";

const TeamMgmt = () => {


	const [visible, setVisible] = useState(false);


	return(
		<div className={"containerTeam"}>
			<Listing setVisible={setVisible} /> {/* Passer la fonction setVisible à Listing */}
			<Modifier visible={visible} setVisible={setVisible} />
		</div>
	);
};

export default TeamMgmt;
