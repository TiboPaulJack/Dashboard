import { TextField, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import {search} from "../../api/search";
import {useNavigate} from "react-router-dom";
import {setEditUserMode, setInventoryFocusOpen, setTeamFormOpen} from "../../redux/reducers/config";
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
	const [searchValue, setSearchValue] = useState<string>('');
	const [searchResults, setSearchResults] = useState<any>([]);
	const [key, setKey] = useState<string>("key");
	const users = useSelector((state: any) => state.user.users);

	useEffect(() => {
		setSearchResults([]);
		setKey("anotherKeyMore")
	}, [searchValue.length === 0]);


	const handleSearch = async (value: string) => {
		const results = await search(value);
		setSearchResults(results);
	}

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
				freeSolo
				disableClearable
				key={key}
				onClose={() => {
					setSearchValue('');
					setSearchResults([]);
				}}
				renderOption={(props, option: Option) => (
					<li {...props} onClick={() => handleClick(option.source, option.id)}>
						{option.firstname} {option.lastname}
					</li>
				)}
				getOptionLabel={(option: Option) => option.firstname + ' ' + option.lastname}
				options={searchResults ? searchResults : (searchValue.length !== 0 ? [{firstname: "No results", lastname: "", source: "", id: 0}] : [])}
				onInputChange={(event, newInputValue) => {
					setSearchValue(newInputValue);
					handleSearch(searchValue);
				}}
				sx={{
					width: 400,
					alignSelf: 'center',
					backgroundColor: 'var(--background-color)',
					borderRadius:'10px'
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						InputProps={{
							...params.InputProps,
							type: 'search',
							disableOutline: true,
							sx: {
								borderRadius: '10px', // border radius à l'état normal
								'& fieldset': {
									borderColor: 'transparent',
								},
								'&:hover': {
									borderRadius: '10px', // border radius au hover
									'fieldset': {
										borderColor: 'transparent',
									}
								},
								'&.Mui-focused': {
									borderRadius: '10px', // border radius lorsqu'il est focus
									'fieldset': {
										borderColor: 'transparent',
									},
								},
							},
						}}
						label="Search.."
					/>
				)}
			/>
		</>
	);


}
