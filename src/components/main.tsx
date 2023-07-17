import '../../dist/assets/css/styles.css'
// @ts-ignore
import React from 'react'
// @ts-ignore
import ReactDOM from 'react-dom/client'

import App from './App.js'
import {store} from "../redux/store";
import {Provider} from "react-redux";


ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)