const Member = (props) => {
		const handleClick = () => {
				props.setVisible(true); /* Utilisation de la fonction setVisible passée en tant que prop */
		};

		const {name, role, service} = props;

		return(
			<div className={"member"} >
					<h3 className={"name"}>{name}</h3>
					<h3 className={"role"}>{role}</h3>
					<h3 className={"service"}>{service}</h3>

					<div className="status-switch-wrapper">
							<label className="member-switch" >
									<input type="checkbox" id="memberCheckbox"/>
									<div className="statusSlider round"></div>
							</label>
					</div>
					<button className={"editMemberButton"} onClick={handleClick}>edit</button>

			</div>

		);
};

export default Member;
