import '../../assets/css/auth.css'
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useState} from "react";
import Stack from "@mui/material/Stack";
import {Button, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {logIn} from "../../redux/reducers/auth";


interface LoginFormData {
    username: string;
    password: string;
}


export default function Auth () : JSX.Element  {

const dispatch: AppDispatch = useDispatch();


const navigate : NavigateFunction = useNavigate()
const [formValues, setFormValues] = useState<LoginFormData>({
    username: 'demo',
    password: 'demodemodemo'
})

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormValues({
        ...formValues,
        [name]: value
    })
}

const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(logIn());
    navigate('/')
}

const isFormValid = formValues.username.trim() !== '' && formValues.password.trim() !== '';

const buttonStyle = {
    ' &:hover': {
        backgroundColor: '#ADD0C0',
    },
}

    return (
    <div className="auth_page">
        <Paper className={'auth_container'}
            elevation={10}
            sx={{
                display:'flex',
                flexDirection: 'column',
                width:'30%',
                height: '43%',
                boxSizing: 'border-box',
                backgroundColor: '#2f302f'
            }}
        >
            <h2 className={"auth_title"}>Login</h2>
            <Stack
                spacing={3}
                padding={5}
                sx={{}}
                className={"auth_form"}
            >
                <TextField
                    label="Username"
                    variant="outlined"
                    name="username"
                    disabled={true}
                    value={formValues.username}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    disabled={true}
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                    fullWidth
                />
                <Button
                    variant="contained"
                    fullWidth
                    disabled={!isFormValid}
                    onClick={handleSubmit}
                    sx={buttonStyle}
                >
                    Login
                </Button>
                <span className={"help_lost"}>password lost</span>
            </Stack>
        </Paper>
    </div>
    )
}
