import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouter} from 'react-router-dom';
import NavBar from './components/NavBar.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <NavBar/>
    <App />
    </HashRouter>
  </React.StrictMode>,
)
