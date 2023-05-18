const NavItem = (props) => {
		const handleClick = () => {
				props.onComponentSelect(props.title);
		}
		const {title, icon} = props
		return (
			<div className={"NavItem"} onClick={handleClick}>
					<div className={"icon"}
							 style={{backgroundImage: `url(${icon})`}}>
					</div>
					<div className={"title"}>{title}</div>
			</div>
		)};

export default NavItem;
