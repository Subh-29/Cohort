import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Products from '../pages/Products'
import Register from '../pages/Register'
import Cart from '../pages/Cart'
import Admin from '../pages/admin/Admin'
import CreateProductPage from '../pages/admin/CreateProduct'



const MainRoutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/admin/create-product' element={<CreateProductPage />}/>
     </Routes>
  );
};

export default MainRoutes;