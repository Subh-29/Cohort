import { useContext } from "react";
import { context } from "../contexts/MainContext";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Fav = () => {
  const [data, , favs] = useContext(context);
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
  const RenderData = favs.length === 0 ? <p className=" text-5xl text-red-500 ">There is No favourites</p> :  data.map((e) => {
    return favs.includes(e.id)?(
      <li key={nanoid()}>
        <div onClick={() => ShowRecipeHandler(e.id)} className=" w-full bg-(--darkbg) flex flex-col gap-3 px-3 py-4 rounded-2xl ">
          <div className=" flex gap-4 justify-between ">

            <p className=" w-fit h-fit text-(--third) text-5xl font-extrabold border-b-3 ">
              {e.name}
            </p>
            <div>
              <img className=" object-cover object-center h-[100px] aspect-4/3 " src={e.image} alt={`${e.name} image`} />
            </div>
          </div>

          <ul className=" text-2xl ">{renderIngridients(e.ingredients)}</ul>
        </div>
      </li>
    ): false;
  });
  return (
    <div>
      <ol className=" grid grid-cols-1 gap-2">{RenderData}</ol>
    </div>
  );
};

export default Fav;