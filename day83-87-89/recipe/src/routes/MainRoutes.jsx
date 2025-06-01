import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import About from "../pages/About";
import CreateRec from "../pages/CreateRec";
import SingleRecipe from "../pages/SingleRecipe";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/createrec" element={<CreateRec />} />
        <Route path="/recipe/details/:id" element={<SingleRecipe />} />
      </Routes>
    </>
  );
};

export default MainRoutes;