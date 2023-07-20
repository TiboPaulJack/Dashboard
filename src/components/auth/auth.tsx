import '../../assets/css/auth.css'
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useState} from "react";
import Stack from "@mui/material/Stack";
import {Button, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store";
import {logIn, setIsLoading, setIsPasswordLost} from "../../redux/reducers/auth";
import Typography from "@mui/material/Typography";
import {CircularProgress} from "@mui/material";


interface LoginFormData {
    username: string;
    password: string;
}


export default function Auth () {

const dispatch: AppDispatch = useDispatch();


const navigate : NavigateFunction = useNavigate();
const nightMode = useSelector((state: RootState) => state.config.nightMode);
const isLoading = useSelector((state: RootState) => state.auth.isLoading);
const isPasswordLost = useSelector((state: RootState) => state.auth.isPasswordLost);
const [recoverModeUsername, setRecoverModeUsername] = useState('');
const [formValues, setFormValues] = useState<LoginFormData>({
    username: 'demo',
    password: 'demodemodemo'
});

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormValues({
        ...formValues,
        [name]: value
    })
}

const handlePasswordLost = () => {
    dispatch(setIsPasswordLost(true));
}

const handleSubmit = () => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
        dispatch(setIsLoading(false));
        dispatch(logIn());
        navigate('/')
    }, 1000);


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
                backgroundColor: '#33373A'
            }}
        >
            <Typography
                sx={{
                    letterSpacing : '5px',
                    margin: 'auto auto',
                    paddingTop : '20px',
                    color: nightMode ? 'white' : 'black',
                    fontSize: '25px',
                    fontFamily : 'var(--font-primary)',
            }}
            >Login
            </Typography>
            <Stack
                spacing={3}
                padding={5}
                sx={{}}
                className={"auth_form"}
            >
                {!isLoading ?
                    <Stack spacing={2} style={{height:'120px', width:'100%'}}>
                        {!isPasswordLost ?
                            <>
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
                            </>
                            :
                            <TextField
                                label="Enter your Email address"
                                variant="outlined"
                                type="text"
                                disabled={true}
                                name="username"
                                sx={{margin: 'auto'}}
                                value={recoverModeUsername}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        }
                    </Stack>
                    :
                    <Stack style={{height: '120px', width:'100%'}}>
                        <CircularProgress style={{margin: 'auto', color: '#ADD0C0'}}/>
                    </Stack>
                }

                {!isPasswordLost ?
                    <Button
                        variant="contained"
                        fullWidth
                        disabled={!isFormValid || isLoading}
                        onClick={handleSubmit}
                        sx={buttonStyle}
                    >
                        Login
                    </Button>
                    :
                    <Button
                        variant="contained"
                        fullWidth
                        disabled={true}
                        sx={buttonStyle}
                    >
                        Send recovery email
                    </Button>
                }

                {!isPasswordLost ?
                    <span
                    className={"help_lost"}
                    onClick={handlePasswordLost}
                    >password lost
                    </span>
                    :
                    <span
                        className={"help_lost"}
                        onClick={() => dispatch(setIsPasswordLost(false))}
                    >I remember my password
                    </span>

                }
            </Stack>
        </Paper>
    </div>
    )
}
