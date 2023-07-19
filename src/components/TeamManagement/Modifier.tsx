import "../../assets/css/teamModifier.css"
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Box} from "@mui/system";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setEditUserMode, setTeamFormOpen} from "../../redux/reducers/config";
import {useEffect} from "react";
import {
	clearNewUser,
	clearSelectedUser,
	removeIdFromSelectedUser,
	setNewUser, setRefresh,
	setSelectedUser
} from "../../redux/reducers/user";
import {createUser, updateUser, deleteUser} from "../../api/user";

const emptyUser = {
	id: 0,
	firstname: '',
	lastname: '',
	email: '',
	phone: '',
	role: '',
	title: '',
	status: '',
	access: '',
}

const titles = [
	"Developper",
	"Marketing Specialist",
	"Sales Manager",
	"SEO Specialist",
	"CTO",
	"CEO",
	"Customer Service Manager",
	"Brand Strategist",
	"Operation Manager",
	"Quality Assurance Manager",
	"Data Analyst",
	"HR Specialist",
	"Chief Sales Officer",
]


export default function Modifier  ()  {

	const dispatch = useDispatch();
	const selectedUser = useSelector((state : RootState) => state.user.selectedUser) || emptyUser ;
	const newUser = useSelector((state : RootState) => state.user.newUser);
	const newUserMode = useSelector((state : RootState) => state.config.newUserMode);
	const editMode = useSelector((state : RootState) => state.config.editUserMode);
	const teamFormOpen = useSelector((state : RootState) => state.config.teamFormOpen);


	useEffect(() => {
		if(newUserMode) {
			dispatch(setEditUserMode(true));
		}else {
			dispatch(setEditUserMode(false));
		}
	}, [selectedUser.id, newUserMode]);


	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		if(newUserMode){
			dispatch(setNewUser({...newUser, [name]: value}));
			return;
		}
		if(editMode){
			dispatch(setSelectedUser({...selectedUser, [name]: value}));
		}
	}

	const handleEditMode = () => {
		dispatch(setEditUserMode(true));
	}

	const handleSubmit = async () => {
		if(newUserMode){
			await createUser(newUser);
			dispatch(clearNewUser());
			dispatch(setTeamFormOpen(false));
			return;
		}
		if(editMode){
			dispatch(removeIdFromSelectedUser());
			await updateUser(selectedUser);
			dispatch(clearSelectedUser());
			dispatch(setTeamFormOpen(false));
			dispatch(setRefresh(true))
		}
	}

	const isInitialState = (user) => {
		for(let key in user) {
			if(user[key] !== '') {
				return false;
			}
		}
		return true;
	}

	const handleCancel = () => {
		if(newUserMode){
			dispatch(clearNewUser());
			dispatch(setTeamFormOpen(false));
			return
		}
		if(editMode){
			dispatch(clearSelectedUser());
			dispatch(setTeamFormOpen(false));
		}
		dispatch(setTeamFormOpen(false));

	}

	const handleDelete = async () => {
		await deleteUser(selectedUser.id);
		dispatch(clearSelectedUser());
		dispatch(setTeamFormOpen(false));
	}




	const titleList = titles.map((role) => {
		return (
			<MenuItem key={role} value={role}>
				{role}
			</MenuItem>
		)
	})



	return(
		<div className={`modifier ${teamFormOpen ? 'visible' : ''}`}>
			<Box
				sx={{
					display:"flex",
					flexDirection: "column",
					height: "100%",
					gap: "10px",
					width: "90%",
					boxSizing: "border-box",
					margin:"20px auto 0 auto",
					paddingBottom: "20px",
					}}
			>
				<TextField
					label="Name"
					variant="filled"
					name="firstname"
					value={!newUserMode ? selectedUser.firstname : newUser.firstname}
					disabled={!editMode}
					onChange={handleInputChange}
					InputLabelProps={{
						shrink: true,
					}}
					fullWidth
				/>
				<TextField
					label="LastName"
					variant="filled"
					name="lastname"
					disabled={!editMode}
					InputLabelProps={{
						shrink: true,
					}}
					value={!newUserMode ? selectedUser.lastname : newUser.lastname}
					onChange={handleInputChange}
					fullWidth
				/>
				<TextField
					label="Email"
					variant="filled"
					name="email"
					disabled={!editMode}
					value={!newUserMode ? selectedUser.email : newUser.email}
					InputLabelProps={{
						shrink: true,
					}}
					onChange={handleInputChange}
					fullWidth
				/>
				<TextField
					label="Phone Number"
					variant="filled"
					name="phone"
					disabled={!editMode}
					InputLabelProps={{
						shrink: true,
					}}
					value={!newUserMode ? selectedUser.phone : newUser.phone}
					onChange={handleInputChange}
					fullWidth
				/>
				<FormControl fullWidth>
					<InputLabel shrink>Title</InputLabel>
					<Select
						variant="filled"
						name="title"
						disabled={!editMode}
						value={!newUserMode ? selectedUser.title : newUser.title}
						onChange={handleInputChange}
					>
						{titleList}
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel shrink>Role</InputLabel>
					<Select
						variant="filled"
						name="role"
						disabled={!editMode}
						value={!newUserMode ? selectedUser.role : newUser.role}
						onChange={handleInputChange}
					>
						<MenuItem value={"user"}>User</MenuItem>
						<MenuItem value={"admin"}>Admin</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel shrink>Status</InputLabel>
					<Select
						variant="filled"
						name="status"
						disabled={!editMode}
						value={!newUserMode ? selectedUser.status : newUser.status}
						onChange={handleInputChange}
					>
						<MenuItem value={"active"}>Active</MenuItem>
						<MenuItem value={"disabled"}>Disabled</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel>Access</InputLabel>
					<Select
						name="access"
						disabled={!editMode}
						variant="filled"
						value={!newUserMode ? selectedUser.access : newUser.access}
						onChange={handleInputChange}
					>
						<MenuItem value={"team1product1"}>Full Access</MenuItem>
						<MenuItem value={"team1product0"}>Team Edit Only</MenuItem>
						<MenuItem value={"team0product1"}>Product Edit Only</MenuItem>
					</Select>
				</FormControl>
				<Button
					variant="outlined"
					fullWidth
				>
					Send recovery email
				</Button>
				<Button
					variant="contained"
					fullWidth
					onClick={handleEditMode}
				>
					Edit user
				</Button>
				<Button
					variant="contained"
					fullWidth
					onClick={handleDelete}
				>
					Delete user
				</Button>

				<Grid container
					  spacing={1}
					  sx={{
						  marginTop: "auto",
						  }}
				>
					<Grid item xs={6}>
						<Button
							variant="outlined"
							fullWidth
							onClick={handleCancel}

						>
							{isInitialState(newUser) && !editMode ? 'Close' : 'Cancel'}
						</Button>
					</Grid>
					<Grid item xs={6}>
						<Button
							variant="contained"
							fullWidth
							onClick={handleSubmit}
						>
							Save user
						</Button>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

