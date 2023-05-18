import "../../assets/css/overview.css"
import WelcomeBanner from "./welcomeBanner.jsx";
import ContentOverview from "./contentOverview.jsx";
import TaskWidget from "./taskWidget.jsx";


const Overview =  () =>  {

	return (
		<div className={"container"}>
			<WelcomeBanner/>
			<ContentOverview/>
			<TaskWidget/>
		</div>
	)};

export default Overview;





