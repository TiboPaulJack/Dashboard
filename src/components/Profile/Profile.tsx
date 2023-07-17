import '../../../public/css/profile.css'
import {Checkbox, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {Box} from "@mui/system";



export default function Profile () {
  
  
  
  return (
    <div className="containerProfile">
      <section className="profile__banner">
      <h2 className={"section-title"}>Your Profile</h2>
      </section>
    
      <section className="profile__credentials">
        <Box
            sx={{
              display:"flex",
              flexDirection: "column",
              height: "100%",
              gap: "10px",
              width: "40%",
              boxSizing: "border-box",
              paddingBottom: "20px",
              margin:'auto',
            }}
        >
          <TextField
              label="Name"
              variant="filled"
              fullWidth
          />
          <TextField
              label="LastName"
              variant="filled"
              fullWidth
          />
          <TextField
              label="Email"
              variant="filled"
              fullWidth
          />
          <TextField
              label="Phone Number"
              variant="filled"
              fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select
                variant="filled"
            >
              <MenuItem value={10}>Role 1</MenuItem>
              <MenuItem value={20}>Role 2</MenuItem>
              <MenuItem value={30}>Role 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Service</InputLabel>
            <Select
                variant="filled"
            >
              <MenuItem value={10}>Service 1</MenuItem>
              <MenuItem value={20}>Service 2</MenuItem>
              <MenuItem value={30}>Service 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
                variant="filled"
            >
              <MenuItem value={10}>Status 1</MenuItem>
              <MenuItem value={20}>Status 2</MenuItem>
              <MenuItem value={30}>Status 3</MenuItem>
            </Select>
          </FormControl>

        </Box>
      </section>
    </div>
    
  )
  
}
