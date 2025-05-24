import { useEffect, useState } from "react";
import Create from "./components/Create";
import { nanoid } from "nanoid";
import Read from "./components/Read";

const App = () => {
  let initTodo = JSON.parse(localStorage.getItem("myTodos"));
  //console.log({initTodo});
  if (initTodo === null)
    initTodo = [{ id: nanoid(), title: "Gets started", isCompleted: false }];
  var [todos, setTodos] = useState(initTodo);
  useEffect(() => {
  //console.log("Saving todos to localStorage:", todos);
  localStorage.setItem("myTodos", JSON.stringify(todos));
}, [todos]);

useEffect(() => {
  const stored = localStorage.getItem("myTodos");
  //console.log("Loaded todos from localStorage:", JSON.parse(stored));
  if (stored) {
    setTodos(JSON.parse(stored));
  }
}, []);


  return (
    <div className=" w-full max-h-[450px] p-5 flex flex-col md:flex-row justify-evenly gap-10 md:gap-2 text-3xl">
      <Create todos={todos} setTodos={setTodos} />
      <div className=" w-full h-[3px] md:w-[1px] md:h-auto bg-white"></div>
      <Read todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;