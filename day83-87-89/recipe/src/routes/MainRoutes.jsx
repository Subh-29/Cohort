import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";
import About from "../pages/About";
import CreateRec from "../pages/CreateRec";
import SingleRecipe from "../pages/SingleRecipe";
import PageNotFound from "../pages/PageNotFound";
import Fav from "../pages/Fav";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/createrec" element={<CreateRec />} />
        <Route path="/recipe/details/:id" element={<SingleRecipe />} />
        <Route path="/favourites" element={<Fav />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default MainRoutes;