import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { context } from "../contexts/MainContext";
import { nanoid } from "nanoid";
import { useForm, useFieldArray } from 'react-hook-form'
import { toast } from "react-toastify";
const SingleRecipe = () => {
    const params = useParams();

    const [data, setData, favs, setFavs] = useContext(context);
    const recipe = data.find(element => element.id === params.id);

    const navigate = useNavigate();
    //console.log(recipe);
    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        defaultValues: {
            "id": recipe?.id,
            "name": recipe?.name,
            "image": recipe?.image,
            "about": recipe?.about,
            "ingredients": recipe?.ingredients
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "ingredients"
    });

    const UpdateHandler = (formData) => {
        const oldRecipes = [...data];
        //console.log(formData);
        console.log(`form data id at update: ${formData.name}`);
        
        const newRecipeIndx = oldRecipes.findIndex((oldRecipe, idx) => {
            
            if (oldRecipe.id === formData.id) {
                console.log("Old recipe id: ", oldRecipe.id);
                return idx;
            }
        });

        oldRecipes[newRecipeIndx] = { ...oldRecipes[newRecipeIndx], ...formData }
        console.log(oldRecipes[newRecipeIndx]);
        
        //console.log(oldRecipes);
        setData(oldRecipes);
        localStorage.setItem("recipes", JSON.stringify(oldRecipes));
        toast.success("Recipe Successfully Updated");
        // navigate(`/recipe/details/${params.id}`)

    };

    const DeleteHandler = () => {
        const filteredData = data.filter(d => d.id !== params.id);
        const filteredFavs = favs.filter(fav => fav !== params.id);
        setFavs(filteredFavs);
        localStorage.setItem("recipes", JSON.stringify(filteredData));
        localStorage.setItem("favs", JSON.stringify(filteredFavs));
        setData(filteredData);
        navigate("/recipe");
        toast.success("Recipe Successfully Deleted")

    };

    const FavHandler = () => {
        const newFavs = [...favs, params.id];
        localStorage.setItem("favs", JSON.stringify(newFavs));
        setFavs([...favs, params.id]);
    }
    const UnfavHandler = () => {
        const filteredFavs = favs.filter((fav) => fav !== params.id);
        localStorage.setItem("favs", JSON.stringify(filteredFavs));
        setFavs(filteredFavs);
    }
    return ( recipe?
        <div className=" flex flex-col gap-4">
            {favs.includes(params.id) ?
            <i className=" absolute right-3 top-22 text-red-500 text-3xl ri-heart-3-fill transition duration-100 ease-in-out active:scale-90 " onClick={UnfavHandler} ></i>
            :<i className=" absolute right-3 top-22 text-3xl ri-heart-3-line transition duration-100 ease-in-out active:scale-90 " onClick={FavHandler}  ></i>
        }
            {/* <i class="ri-heart-3-line"></i> */}
            <p className=" text-[clamp(1rem,20vw,5rem)] text-wrap leading-none text-(--third) font-bold " onClick={UnfavHandler} >{recipe?.name}</p>
            <div>
                <img className=" rounded-2xl w-full aspect-square object-cover" src={recipe?.image} alt={`${recipe?.name} Image`} />
            </div>
            <p>{recipe?.about}</p>
            <div className=" text-xl text-(--fourth) bg-(--third)/40 flex flex-col gap-3 px-3 py-4 rounded-2xl ">
                {recipe?.ingredients.map((ingr, idx) => {
                    return (
                        <p key={nanoid()}><span className=" text-(--first) ">{idx + 1}.</span> {ingr.name} | {ingr.qty}</p>
                    )
                })}
            </div>
            <button onClick={DeleteHandler} className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 active:scale-90">
                Delete Recipe
            </button>
            <form onSubmit={handleSubmit(UpdateHandler)} className=" text-lg px-3 py-4 rounded-xl flex flex-col justify-center gap-4 bg-(--darkbg) ">
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

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 active:scale-90">
                    Update
                </button>
            </form>
        </div> : <div>Loading.....</div>
    );
};

export default SingleRecipe;