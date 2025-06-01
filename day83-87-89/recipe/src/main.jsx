import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainContext from './contexts/MainContext.jsx'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <MainContext>
    <BrowserRouter >
      <App />
      <ToastContainer
        position='top-center'
        theme='dark' />
    </BrowserRouter >
  </MainContext>

)
