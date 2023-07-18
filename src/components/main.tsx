import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../muiStyles';
import App from './App';
// @ts-ignore
import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import {createRoot} from "react-dom/client";

localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;

console.log('theme', theme)

const root = createRoot(document.getElementById('root'));

root.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        </ThemeProvider>
    </StyledEngineProvider>
);