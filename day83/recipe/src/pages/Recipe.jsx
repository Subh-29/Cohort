import { useContext } from "react";
import { context } from "../contexts/MainContext";
import {nanoid} from 'nanoid'
const Recipe = () => {
  const [data] = useContext(context);
  const renderIngridients = (ingridients) => {
        const listIngrid = ingridients.map((e, idx) => {
            return (
                <li key={nanoid()}>
                    <span className=" font-bold text-(--third)">{idx + 1}.</span> {e.name} | {e.qty}
                </li>
            );
        });
        return listIngrid;
  }
  //   console.log(data);
  const RenderData = data.map((e) => {
    return (
      <li key={nanoid()}>
        <div className=" w-full bg-(--darkbg) flex flex-col gap-3 px-3 py-4 rounded-2xl ">
          <p className=" w-fit text-(--third) text-5xl font-extrabold border-b ">
            {e.name}
          </p>
          <ul className=" text-2xl ">{renderIngridients(e.ingridients)}</ul>
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
