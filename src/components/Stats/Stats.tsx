import "../../../public/css/stats.css"
import StackedLineChart from "./StackedLineChart";

export default function Stats(): JSX.Element {

  return (
    <div className="containerStats">
      <h2 className={"section-title"}>Statistics</h2>

      <nav className="stats__nav">
        <select name="chart_section" id="chart_section" className="stats__select-section">
          <option value="1">Visits</option>
          <option value="2">Registered</option>
          <option value="3">Sales</option>
          <option value="4">Orders</option>
          <option value="5">Customers</option>

        </select>
        <div className={ "starts__nav-box-span" }><span className="stats__nav-item">Daily</span>
          <span className="stats__nav-item">Monthly</span>
          <span className="stats__nav-item">Yearly</span>
        </div>
      </nav>
      <StackedLineChart />
    </div>
  );

}
