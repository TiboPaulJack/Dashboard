import '../assets/css/styles.css'
// @ts-ignore
import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom/client'

import App from './App.js'
import {store} from "../redux/store";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import {StyledEngineProvider} from "@mui/material";

import {darkTheme, lightTheme} from "../muiStyles.js";

let themeName = localStorage.getItem('theme');
let themeObject = themeName === 'dark' ? darkTheme : lightTheme;


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themeObject}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>
)
