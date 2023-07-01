

const NavItem = ({ setRendered, title, icon }) => {


		const handleClick = () => {
				setRendered(title);
		}


		return (
			<div className={"NavItem"}
					 onClick={handleClick}
			>
					<div className={"icon"}
							 style={{backgroundImage: `url(${icon})`}}>
					</div>
					<div className={"title"}>{title}</div>
			</div>
		)};

export default NavItem;


