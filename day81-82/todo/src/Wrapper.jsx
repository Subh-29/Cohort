import { createContext } from "react";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid'

export const todoContext = createContext(null);

const Wrapper = (props) => {
    // console.log("HElllokwjij");

    // console.log(props.children);

    let initTodo = JSON.parse(localStorage.getItem("myTodos"));

    if (initTodo === null)
        initTodo = [{ id: nanoid(), title: "Gets started", isCompleted: false }];
    var [todos, setTodos] = useState(initTodo);
    useEffect(() => {

        localStorage.setItem("myTodos", JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        const stored = localStorage.getItem("myTodos");
        if (stored) {
            setTodos(JSON.parse(stored));
        }
    }, []);

    return (
        <todoContext.Provider value={[todos, setTodos]}>
            {props.children}
        </todoContext.Provider>
    );
};

export default Wrapper;