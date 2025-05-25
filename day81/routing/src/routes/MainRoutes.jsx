import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Product from "../components/Product";
import Service from "../components/Service";

const MainRoutes = () => {
  return (
    <>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
        </Routes>
    </>
  );
};

export default MainRoutes;