import { useState } from "react";
import { nanoid } from "nanoid"

const Create = ({ todos, setTodos }) => {
    const [title, setTitle] = useState("");
    const submitHandler = e => {
        e.preventDefault();
        if (title.trim().length === 0) {
            alert("Task name can't be empty");
            return;
        }
        let copyTodos = [...todos];
        let newTask = {
            id: nanoid(),
            title: title,
            isComplete: false
        };
        console.log("Submited");
        copyTodos.push(newTask);
        setTodos(copyTodos);
        setTitle("");
    };
    return (
        <div className=" w-full md:w-[50%] flex flex-col gap-10">
            <h1 className=" text-6xl">Set <span className=" text-orange-600">Reminder</span> for <span className=" font-mono font-extrabold text-cyan-500">Tasks</span></h1>
            <form className=" flex h-15 justify-evenly  items-center bg-gray-950 border-1 border-gray-900 rounded-2xl" onSubmit={submitHandler}>
                <input type="text"
                    className=" w-[50%] text-[1rem] md:text-xl focus:outline-none"
                    value={title}
                    placeholder="Task Name"
                    onChange={e => setTitle(e.target.value)} />
                <button className=" text-[1.05rem] md:text-xl px-4 py-1 w-fit md:w-max rounded-xl bg-green-500 cursor-pointer md:active:scale-90 flex justify-center">
                    <span className=" ">Create Todo</span>
                </button>

            </form>
        </div>
    );
};

export default Create;