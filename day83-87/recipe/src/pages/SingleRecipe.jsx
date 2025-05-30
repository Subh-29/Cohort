import { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../contexts/MainContext";

const SingleRecipe = () => {
    const params = useParams();
        
    const [data] = useContext(context);
    const recipe =data.find(element => element.id === parseInt(params.id));
    console.log(recipe);
    
    return (
        <div className=" flex flex-col gap-4">
            <p className=" text-8xl text-(--third) ">{recipe.name}</p>
            <div>
                <img className=" rounded-2xl w-full aspect-square object-cover" src={recipe.image} alt={`${recipe.name} Image`} />
            </div>
            <p>{recipe.about}</p>
            <div className=" text-xl text-(--fourth) bg-(--third)/40 flex flex-col gap-3 px-3 py-4 rounded-2xl ">
                {recipe.ingredients.map((ingr, idx) => {
                    return (
                        <p><span className=" text-(--first) ">{idx + 1}.</span> {ingr.name} | {ingr.qty}</p>
                    )
                })}
            </div>
        </div>
    );
};

export default SingleRecipe;