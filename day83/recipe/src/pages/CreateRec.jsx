//   148416
import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import {toast}  from 'react-toastify'
import { context } from '../contexts/MainContext'

const CreateRec = () => {
  //   const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useContext(context);
  const [ingredients, setIngredients] = useState([
    {
      id: nanoid(),
      name: "",
    },
  ]);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors }
  } = useForm({
    mode: "all"
  });
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    console.log(recipe);
    console.log("submit");
    setData([...data, recipe]);
    reset();
  };
  console.log(data);
  const ingredientHandler = () => {
    const val = getValues();
    const lastValue = val[`ingr-${ingredients.length - 1}`];

    if (!lastValue || lastValue.trim() === "") {
      console.log("empty!!");
      return;
    }

    setIngredients([...ingredients, { id: nanoid(), name: "" }]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <p>Add Recipe</p>
        <input
          {...register("recipeName", { required: "Recipe name is required!" })}
          type="text"
          id={nanoid()}
          placeholder="Enter Recipe Name"
          className=" border-b outline-none"
        />
        <div className=" flex flex-col gap-5 ">

          {ingredients.map((ingredient, idx) => {
            return (
              <div key={ingredient.id} className=" flex gap-1 items-center">
                <span className=" flex flex-col justify-center ">
                  <label htmlFor={ingredient.id}>Ingredient-{idx + 1}: </label>

                  <input
                    {...register(`ingr-${idx}-name`, { required: "Ingredient name is required", })}
                    type="text"
                    id={`name-${ingredient.id}`}
                    className=" border-b outline-none"
                    placeholder="Rice"
                  />
                    <small>
  
                      {errors[`ingr-${idx}-name`]?.message}
                    </small>
                  <input
                    {...register(`ingr-${idx}-qty`, { required: "Quantity is required", })}
                    type="text"
                    id={`qty-${ingredient.id}`}
                    className=" border-b outline-none"
                    placeholder="100gm"
                    />
                    <small>
  
                      {errors[`ingr-${idx}-qty`]?.message}
                    </small>
                </span>



                <span
                  onClick={() => ingredientHandler(ingredient)}
                  className=" cursor-pointer "
                >
                  Add
                </span>
              </div>
            );
          })}
        </div>
          <button className="  " >Submit</button>
      </form>
    </div>
  );
};

export default CreateRec;
