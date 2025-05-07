import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//let row = parseInt(prompt("Enter number of Rows"));
//let col = parseInt(prompt("Enter number of Columns"));
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App row={3} col={3}/>
  </StrictMode>,
)
