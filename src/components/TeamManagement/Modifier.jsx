import "../../assets/css/teamModifier.css"


const Modifier = (props) => {

		const {visible, setVisible} = props;


		return(
			<div className={`modifier ${visible ? 'visible' : ''}`}>
					{visible && <span className={"close"} onClick={() => setVisible(false)}>X</span>}
				<section className="modifier__credentials">
					<h3 className="modifier__title">Credentials</h3>
					<form
						className="form__credentials"
						onSubmit={null}
					>
						<label htmlFor="firstname">Firstname</label>
						<input
							type="text"
							name="firstname"
							id="firstname"
						/>
						<label htmlFor="lastname">Lastname</label>
						<input
							type="text"
							name="lastname"
							id="lastname"
						/>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email" />
						<button
							className="save__credentials"
							type="submit">
							save credentials
						</button>
					</form>
					<div className="credentials__options">
						<button className="new__password">Generate new password</button>
						<button className="delete__account">Delete this user</button>
					</div>
				</section>
				<section className="modifier__access">
					<h3 className="modifier__title">Access</h3>
					<select name="appSelection" id="appSelection" className="access__app-select">
						<option value="option">to map</option>
					</select>
					<div className="access__team">
							<legend className="access__legend">Teams</legend>
						<section className={"access__section"}>
							<div className={"access__box-checkbox"}><label htmlFor="">Create</label>
								<input type="checkbox" name="team-create" id="team_checkbox"/></div>
							<div className={"access__box-checkbox"}><label htmlFor="">Read</label>
								<input type="checkbox" name="team-read" id="team_checkbox"/></div>
							<div className={"access__box-checkbox"}><label htmlFor="">Update</label>
								<input type="checkbox" name="team-update" id="team_checkbox"/></div>
							<div className={"access__box-checkbox"}><label htmlFor="">Delete</label>
								<input type="checkbox" name="team-delete" id="team_checkbox"/></div>
						</section>
					</div>
					<section className={"access__section"}></section>
					<div className="access__product">
							<legend className="access__legend">Products</legend>
						<section className={"access__section"}>
							<div className={"access__box-checkbox"}><label htmlFor="">Create</label>
								<input type="checkbox" name="product-create" id="product_checkbox"/></div>
							<div className={"access__box-checkbox"}><label htmlFor="">Read</label>
								<input type="checkbox" name="product-read" id="product_checkbox"/></div>
							<div className={"access__box-checkbox"}><label htmlFor="">Update</label>
								<input type="checkbox" name="product-update" id="product_checkbox"/></div>
							<div className={"access__box-checkbox"}><label htmlFor="">Delete</label>
								<input type="checkbox" name="product-delete" id="product_checkbox"/></div>
						</section>
					</div>
					<div className="access__checkbox">
							<legend className="access__legend">App</legend>
						<section className={"access__section"}>
							<div className={"access__box-checkbox"}><label htmlFor="">Create</label>
								<input type="checkbox" name="app-create" id="app_checkbox"/></div>
							<div className={"access__box-checkbox"}><label htmlFor="">Read</label>
								<input type="checkbox" name="app-read" id="app_checkbox"/></div>
							<div className={"access__box-checkbox"}><label htmlFor="">Update</label>
								<input type="checkbox" name="app-update" id="app_checkbox"/></div>
							<div className={"access__box-checkbox"}><label htmlFor="">Delete</label>
								<input type="checkbox" name="app-delete" id="app_checkbox"/></div>
						</section>
					</div>
					
				</section>
			</div>
		);
};

export default Modifier;
