import MemberList from "./MemberList.jsx";


const Listing = ({setVisible}) => { /* Déstructurer la fonction setVisible de props */
		return(
			<div className={"listing"}>
					<h2 className={"title-team"}>Team Management</h2>
					<div className={"legend"}>
							<h3 className={"name"}>Name</h3>
							<h3 className={"role"}>Role</h3>
							<h3 className={"service"}>Service</h3>
							<h3 className={"status"}>Status</h3>
							<h3 className={"edit"}>Edit</h3>

					</div>
					<MemberList setVisible={setVisible} /> {/* Passer la fonction setVisible à MemberList */}
			</div>
		);
};

export default Listing;
