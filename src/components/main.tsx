import App from './App';
// @ts-ignore
import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import {createRoot} from "react-dom/client";


const root = createRoot(document.getElementById('root'));

root.render(
            <React.StrictMode>
                <Provider store={store}>
                    <App />
                </Provider>
            </React.StrictMode>
);