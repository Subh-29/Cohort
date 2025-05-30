import { useContext } from "react";
import { context } from "../contexts/MainContext";
import { nanoid } from 'nanoid'
import SingleRecipe from "./SingleRecipe";
import { useNavigate } from "react-router-dom";
const Recipe = () => {
  const [data] = useContext(context);
  const renderIngridients = (ingredients) => {
    const listIngred = ingredients.map((e, idx) => {
      return (
        <li key={nanoid()}>
          <span className=" font-bold text-(--third)">{idx + 1}.</span> {e.name} | {e.qty}
        </li>
      );
    });
    return listIngred;
  }
  const navigate = useNavigate();
  const ShowRecipeHandler = (id) => {
    console.log(id)
    navigate(`/recipe/details/${id}`)
  }
  //   console.log(data);
  const RenderData = data.map((e) => {
    return (
      <li key={nanoid()}>
        <div onClick={() => ShowRecipeHandler(e.id)} className=" w-full bg-(--darkbg) flex flex-col gap-3 px-3 py-4 rounded-2xl ">
          <div className=" flex gap-4 justify-between ">

            <p className=" w-fit text-(--third) text-5xl font-extrabold border-b ">
              {e.name}
            </p>
            <div>
              <img className=" object-cover object-center h-[100px] aspect-4/3 " src={e.image} alt={`${e.name} image`} />
            </div>
          </div>

          <ul className=" text-2xl ">{renderIngridients(e.ingredients)}</ul>
        </div>
      </li>
    );
  });
  return (
    <div>
      <ol className=" grid grid-cols-1 gap-2">{RenderData}</ol>
    </div>
  );
};

export default Recipe;
