import {TextField} from "@mui/material";


export default function SearchBar  () : JSX.Element {
		return(
			<TextField
				id="outlined-basic"
				variant="outlined"
				placeholder="Search..."
				sx={{
					alignSelf: 'center',
					'& .MuiOutlinedInput-root': {
						borderRadius: '15px',
					},
					'& .MuiOutlinedInput-input::placeholder': {
						fontSize: '12px', // Change this to your desired font size
					},
					width: '400px',
				}}
			/>


		)
}


