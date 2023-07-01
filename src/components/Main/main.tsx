import '../../assets/css/styles.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App.js'
import Auth from "../auth/auth.tsx";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route path="/" element={<App />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
