import { nanoid } from "nanoid"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const Create = () => {

    const [todos, setTodos] = useContext(todoContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const submitHandler = data => {
        data.id = nanoid();
        data.isCompleted = false;
        console.log("Submited");
        // let copyTodos = [...todos];
        // copyTodos.push(data);
        // setTodos(copyTodos);

        //we can write this way:
        setTodos([...todos, data]);
        toast.success("Todo successfully created");
        reset();
    };
    return (
        <div className=" w-full md:w-[50%] flex flex-col gap-10">
            <h1 className=" text-6xl">Set <span className=" text-orange-600">Reminder</span> for <span className=" font-mono font-extrabold text-cyan-500">Tasks</span></h1>
            <form className=" flex h-15 justify-evenly  items-center bg-gray-950 border-1 border-gray-900 rounded-2xl" onSubmit={handleSubmit(submitHandler)}>
                <input type="text"
                    className=" w-[50%] text-[1rem] md:text-xl focus:outline-none"
                    {...register("title", { required: "Title can't be empty", })}
                    placeholder="Task Name" />
            <small className=" text-[0.7rem] relative top-[-35px] text-red-600 ">{errors?.title?.message}</small>
                <button className=" text-[1.05rem] md:text-xl px-4 py-1 w-fit md:w-max rounded-xl bg-green-500 cursor-pointer md:active:scale-90 flex justify-center">
                    <span className=" ">Create Todo</span>
                </button>
            </form>
            {/* {errors && errors.title && errors.title.message && <small className=" text-[0.7rem] relative top-[-35px] text-red-600 ">{errors.title.message}</small>} */}
        </div>
    );
};

export default Create;