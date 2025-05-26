import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Product from "../components/Product";
import Service from "../components/Service";
import ProductDetails from "../components/ProductDetails";
import ServiceDetails from "../components/ServiceDetails";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/details/:name' element={<ProductDetails />} />
        <Route path="/service" element={<Service />}>
          <Route path="details/:name" element={<ServiceDetails />} />
        </Route>

        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
};

export default MainRoutes;