import '../../assets/css/profile.css'
import {Avatar, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Stack} from "@mui/system";



export default function Profile () {
  

  
  
  return (
    <div className="containerProfile">
      <section className="profile__banner">
      <Avatar 
        src="/broken-image.jpg"
        sx={{
          width: '90px',
          height: '90px',
          alignSelf: 'center',
        }}
      />
      <Typography
          variant="h5"
          fontFamily={"var(--font-primary)"}
          ml={4}
          alignSelf='center'
          letterSpacing={2}
          sx={{
            wordSpacing: '10px',
          }}

      >Firstname Lastname</Typography>
      <Stack 
        className="profile__banner-info"
        justifySelf={'flex-end'}
        ml={'auto'}
        p={2}
        spacing={1}
      >
        <Typography fontFamily={"var(--font-primary)"} fontSize={'12px'} >Status : status </Typography>
        <Typography fontFamily={"var(--font-primary)"} fontSize={'12px'} >Access : access </Typography>
      </Stack>
      </section>
      
      <div className="profile__bottom-container">
        <section className="profile__credentials">
          <Stack spacing={1} alignSelf={'end'}
              sx={{
                flexDirection: "column",
                height: "100%",
                width: "100%",
                justifyContent: "center",
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
              <Stack direction="row" spacing={1} alignItems="center" width={'100%'}>
                <Button variant="contained" fullWidth>Save</Button>
                <Button variant="contained" fullWidth>Edit</Button>
                <Button variant="contained" fullWidth>Cancel</Button>
              </Stack>
          </Stack>
        </section>
        <section className="profile__options">

        </section>
      </div>
    </div>
    
  )
  
}
