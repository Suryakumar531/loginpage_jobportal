import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Login } from './Components/Login.jsx'


const root = createRoot(document.getElementById("root"))

root.render(<App />)
