import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import About from "../pages/About";
import CreateRec from "../pages/CreateRec";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/createrec" element={<CreateRec />} />
      </Routes>
    </>
  );
};

export default MainRoutes;