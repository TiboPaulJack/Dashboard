
import '../assets/css/app.css'
import '../assets/css/mediaQueries.css'
import '../assets/css/styles.css'
import {useLayoutEffect} from "react";
import Auth from "./auth/auth";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setDarkTheme, setLightTheme} from "../redux/reducers/config";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import ErrorBoundary from './ErrorBoundary';


export default function App() {

    const dispatch = useDispatch();
    const loggedIn = useSelector((state : RootState) => state.auth.isLogged);


    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        !storedTheme && localStorage.setItem('theme', 'dark');
        if (storedTheme === 'dark') {
            dispatch(setDarkTheme());
        } else {
            dispatch(setLightTheme());
        }
    }, []);


    return (
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
    );
}