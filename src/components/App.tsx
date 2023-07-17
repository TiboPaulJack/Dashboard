import '../assets/css/app.css'
import '../assets/css/mediaQueries.css'
import {useEffect} from "react";
import {ThemeProvider} from "@mui/material/styles";
import {darkTheme, lightTheme} from "../assets/mui/muiStyles";
import Auth from "./auth/auth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setDarkTheme, setLightTheme} from "../redux/reducers/config";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import ErrorBoundary from './ErrorBoundary';


export default function App(): JSX.Element {
    const dispatch = useDispatch();
    const theme = useSelector((state : RootState) => state.config.theme);
    const loggedIn = useSelector((state : RootState) => state.auth.isLogged);
    let themeObject = theme === 'dark' ? darkTheme : lightTheme;


    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            dispatch(setDarkTheme());
        } else {
            dispatch(setLightTheme());
        }
    }, []);


    return (
        <ThemeProvider theme={themeObject}>
            <BrowserRouter>
                <ErrorBoundary>
                    <Routes>
                        {!loggedIn && <Route path="/*" element={<Auth />} />}
                        {loggedIn && (
                            <Route path="/*" element={<Dashboard />} />
                        )}
                    </Routes>
                </ErrorBoundary>
            </BrowserRouter>
        </ThemeProvider>
    );
}
