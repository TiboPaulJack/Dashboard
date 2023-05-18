import '../../assets/css/topbar.css'
import SearchBar from './Search.jsx'
import BoxProfile from './Profile.jsx'
import IconBar from './Clock.jsx'

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
