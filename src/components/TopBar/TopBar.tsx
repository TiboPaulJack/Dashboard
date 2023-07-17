import '../../../dist/assets/css/topbar.css'
import SearchBar from './Search'
import BoxProfile from './Profile'
import IconBar from './Clock'

const TopBar = () => {

	return (
		<div className={"topBar"}>
			<IconBar/>
			<SearchBar/>
			<BoxProfile/>
		</div>
	)
}


export default TopBar;
