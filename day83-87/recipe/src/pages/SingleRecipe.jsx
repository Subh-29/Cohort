import { useContext } from "react";
import { useParams } from "react-router-dom";
import { context } from "../contexts/MainContext";
import { nanoid } from "nanoid";
import { useForm, useFieldArray } from 'react-hook-form'
const SingleRecipe = () => {
    const params = useParams();

    const [data, setData] = useContext(context);
    const recipe = data.find(element => element.id === parseInt(params.id));
    //console.log(recipe);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        defaultValues: {
            "id" : recipe.id,
            "name": recipe.name,
            "image": recipe.image,
            "about": recipe.about,
            "ingredients": recipe.ingredients
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients"
    });

    const SubmitHandler = (formData) => {
        const oldRecipes = [...data];
        console.log(formData);
        
        const newRecipeIndx =  oldRecipes.findIndex((oldRecipe, idx) => {
            if (oldRecipe.id === parseInt(formData.id))
                return idx;
        }) ;

        oldRecipes[newRecipeIndx] = { ...oldRecipes[newRecipeIndx], ...formData}
        console.log(oldRecipes);
        setData(oldRecipes);

    }
    return (
        <div className=" flex flex-col gap-4">
            <p className=" text-[clamp(1rem,20vw,5rem)] text-wrap leading-none text-(--third) font-bold ">{recipe.name}</p>
            <div>
                <img className=" rounded-2xl w-full aspect-square object-cover" src={recipe.image} alt={`${recipe.name} Image`} />
            </div>
            <p>{recipe.about}</p>
            <div className=" text-xl text-(--fourth) bg-(--third)/40 flex flex-col gap-3 px-3 py-4 rounded-2xl ">
                {recipe.ingredients.map((ingr, idx) => {
                    return (
                        <p key={nanoid()}><span className=" text-(--first) ">{idx + 1}.</span> {ingr.name} | {ingr.qty}</p>
                    )
                })}
            </div>

            <form onSubmit={handleSubmit(SubmitHandler)} className=" text-lg px-3 py-4 rounded-xl flex flex-col justify-center gap-4 bg-(--darkbg) ">
                {/* <h2 className=" text-center text-5xl text-(--third) ">Add Recipe</h2> */}
                <input
                    {...register("name", { required: "Recipe name is required!" })}
                    type="text"
                    placeholder="e.g. Pulao"
                    className="border-b-3 font-extrabold outline-none text-center text-5xl text-(--third) "
                />
                <small className="text-red-500">{errors.name?.message}</small>
                <div className="flex flex-col justify-evenly px-5 py-3 rounded-3xl gap-1 bg-(--first) ">
                    <label htmlFor="" className="text-xl text-(--third)">Recipe Image:</label>
                    <input
                        {...register("image", { required: "Recipe Image is required!!" })}
                        type="url" placeholder="e.g. https://exampleimage.com" className="border-b outline-none" />
                    <small className="text-red-500">{errors?.image?.message}</small>
                </div>
                <div className="flex flex-col justify-evenly px-5 py-3 rounded-3xl gap-1 bg-(--first) ">
                    <label htmlFor="" className="text-xl text-(--third)">Recipe Details:</label>
                    <textarea
                        {...register("about", { required: "Recipe details is required!!" })}
                        type="url" placeholder="e.g. https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="border-b outline-none" />
                    <small className="text-red-500">{errors?.image?.message}</small>
                </div>

                <div className="flex flex-col gap-5">
                    {fields.map((field, idx) => (
                        <div key={field.id} className="flex justify-evenly px-2 py-3 rounded-3xl gap-3 bg-(--first) ">
                            <div className="flex flex-col gap-1">
                                <label className=" text-xl text-(--third) ">Ingredient-{idx + 1}</label>

                                <input
                                    {...register(`ingredients.${idx}.name`, { required: "Ingredient name is required" })}
                                    type="text"
                                    placeholder="e.g. Rice"
                                    className="border-b outline-none"
                                />
                                <small className="text-red-500">{errors?.ingredients?.[idx]?.name?.message}</small>

                                <input
                                    {...register(`ingredients.${idx}.qty`, { required: "Quantity is required" })}
                                    type="text"
                                    placeholder="e.g. 100gm"
                                    className="border-b outline-none"
                                />
                                <small className="text-red-500">{errors?.ingredients?.[idx]?.qty?.message}</small>
                            </div>

                            <div className="flex flex-col gap-2 mt-6">
                                <button
                                    type="button"
                                    onClick={() => append({ name: "", qty: "" })}
                                    className="text-green-600"
                                >
                                    ➕
                                </button>
                                {fields.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => remove(idx)}
                                        className="text-red-600"
                                    >
                                        🗑️
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SingleRecipe;