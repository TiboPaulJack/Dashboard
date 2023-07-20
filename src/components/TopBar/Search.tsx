import { TextField, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import {search} from "../../api/search";
import {useNavigate} from "react-router-dom";
import {setEditUserMode, setInventoryFocusOpen, setSearchValue, setTeamFormOpen, setSearch} from "../../redux/reducers/config";
import {setSelectedUser, setSelectedUserById} from "../../redux/reducers/user";
import {getUsers} from "../../api/user";

type Option = {
	firstname: string,
	lastname: string,
	source: string,
	id: number
}

export default function SearchBar() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [searchResults, setSearchResults] = useState<any>([]);
	const [key, setKey] = useState<string>("key");
	const users = useSelector((state: any) => state.user.users);
	const searchValue = useSelector((state: any) => state.config.search);

	const handleInputChange = (event, value) => {
		if (value !== '') handleSearch(value);
	};

	const handleSearch = async (value) => {
		dispatch(setSearchValue(value));
		const response = await search(value);
		setSearchResults(response);
	}

	useEffect(() => {
		setKey(Math.random().toString(36).substring(7));
	}, []);


	const handleClick = (source: string, id: number) => {
		if(source === "user") {
			!users && getUsers()
			dispatch(setTeamFormOpen(true));
			dispatch(setSelectedUserById(id));
			setKey("anotherKey")
			navigate("/team")
		} else if(source === "product") {
			dispatch(setInventoryFocusOpen(true));
			dispatch(setSelectedUserById(id));
			setKey("anotherKey")
			navigate("/inventory")
		}

	}

	return (
		<>
			<Autocomplete
				id={'searchBar'}
				freeSolo
				disableClearable
				key={key}
				onClose={() => {
					setKey(Math.random().toString(36).substring(7))
					dispatch(setSearch([]));
					dispatch(setSearchValue(''));
				}}
				renderOption={(props, option: Option) => (
					<li {...props} onClick={() => handleClick(option.source, option.id)}>
						{option.firstname} {option.lastname}
					</li>
				)}
				getOptionLabel={(option: Option) => option.firstname + ' ' + option.lastname}
				options={
					searchValue.length > 0
						? (searchResults.length !== 0 ? searchResults : [])
						: []
				}

				onInputChange={handleInputChange}
				sx={{
					width: '40%',
					alignSelf: 'center',
					backgroundColor: 'var(--background-color)',
					borderRadius:'10px'
				}}
				renderInput={(params) => (
					<TextField
						placeholder={'Search..'}
						{...params}
						InputProps={{
							...params.InputProps,
							type: 'search',
							sx: {
								borderRadius: '10px',
								'& fieldset': {
									borderColor: 'transparent',
								},
								'&:hover': {
									borderRadius: '10px',
									'fieldset': {
										borderColor: 'transparent',
									}
								},
								'&.Mui-focused': {
									borderRadius: '10px',
									'fieldset': {
										borderColor: 'transparent',
									},
								},
							},
						}}
					/>
				)}
			/>
		</>
	);


}
