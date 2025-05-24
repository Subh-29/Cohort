import { useState } from "react";
import {nanoid} from "nanoid"

const Create = ({todos, setTodos}) => {
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
        <>
            <h1>Create Tasks</h1>
            <form onSubmit={submitHandler}>
                <input type="text"
                value={title}
                placeholder="Task Name"
                onChange={e => setTitle(e.target.value)} />
                <button>Submit</button>
            </form>
        </>
    );
};

export default Create;