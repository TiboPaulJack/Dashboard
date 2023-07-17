import "../../../public/css/overview.css"
import WelcomeBanner from "./welcomeBanner.js";
import ContentOverview from "./contentOverview";
import TaskWidget from "./taskWidget.js";


const Overview =  () =>  {

	return (
		<div className={"container"}>
			<WelcomeBanner/>
			<ContentOverview/>
			<TaskWidget/>
		</div>
	)};

export default Overview;





