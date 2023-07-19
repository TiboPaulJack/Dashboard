import '../assets/css/app.css'
import '../assets/css/mediaQueries.css'
import '../assets/css/styles.css'
import {useLayoutEffect} from "react";
import Auth from "./auth/auth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setNightMode} from "../redux/reducers/config";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import ErrorBoundary from './ErrorBoundary';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import {darkTheme, lightTheme} from "../muiStyles";

export default function App() {

    const dispatch = useDispatch();
    const loggedIn = useSelector((state : RootState) => state.auth.isLogged);
    const theme = useSelector((state: RootState) => state.config.nightMode  ? darkTheme : lightTheme);


    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        !storedTheme && localStorage.setItem('theme', 'dark');
        if (storedTheme === 'dark') {
            dispatch(setNightMode(true));
        } else {
            dispatch(setNightMode(false));
        }

        const appHeight = () => {
            const doc = document.documentElement;
            doc.style.setProperty("--app-height", `${window.innerHeight}px`);
        };
        window.addEventListener("resize", appHeight);
        appHeight();

    }, []);


    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <ErrorBoundary>
                        <Routes>
                            {
                                !loggedIn && <Route path="/*" element={<Auth />} />
                            }
                            {
                                loggedIn &&
                                (
                                    <Route path="/*" element={<Dashboard />} />
                                )
                            }
                        </Routes>
                    </ErrorBoundary>
                </BrowserRouter>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}
