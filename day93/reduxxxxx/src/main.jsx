import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from './store/Store.jsx'
import Nav from './components/Nav.jsx';
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>

            <ToastContainer />
            <Nav />
            <App />
        </Provider>
    </BrowserRouter>
)
