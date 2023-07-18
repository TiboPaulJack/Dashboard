// @ts-ignore
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../muiStyles';
import App from './App';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

localStorage.setItem('theme', 'dark');
const theme = localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;


ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
        </ThemeProvider>
    </StyledEngineProvider>,
    document.getElementById('root')
);
