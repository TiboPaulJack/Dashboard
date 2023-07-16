import StackedLineChart from "../Stats/StackedLineChart.js";

const ContentOverview = () => {
		return (
			<div className={"content-overview"}>
					<StatsVisitorsWidget/>
					<StatsOnlineWidget/>
					<div className={"logger-widget card"}>
						<StackedLineChart/>
					</div>
					<div className={"other-widget card"}>
						<h2>164</h2>
						<span>Registered</span>
					</div>
					<div className={"other2-widget card"}>
						<h2>25</h2>
						<span>New registered Today</span>
					</div>
			</div>
		)
}
const StatsVisitorsWidget = () => {
		return (
			<div className={"visitors-widget card"}>
					<h2>2845</h2>
					<span>Visitors today</span>
			</div>
		)
}

const StatsOnlineWidget = () => {
		return (
			<div className={"connected-widget card"}>
					<h2>548</h2>
					<span>Sells today</span>

			</div>
		)
}




export default ContentOverview;
