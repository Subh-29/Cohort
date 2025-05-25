import { useContext } from "react";
import { toast } from "react-toastify";
import { todoContext } from "../Wrapper";

const Read = () => {

  const [todos, setTodos] = useContext(todoContext);
  // console.log(s);
  
  const deleteHandler = (id) => {
    let newTodos = todos.filter(todo => todo.id !== id);
    // console.log(`Deleted: ID: ${id}`);
    toast.error("Todo successfully deleted");
    setTodos(newTodos);
  }
  const list = todos.map((todos, idx) => {
    return (
      <li id={todos.id} key={todos.id}
        className=" text-[1.2rem] md:text-2xl  w-full px-4 py-3 flex items-center justify-between gap-2 md:gap-5 border-1 border-gray-800 rounded-2xl bg-gray-950 ">
        <p className=" w-full px-0 py-2 text-blue-700"><span className=" text-blue-400">{idx + 1}. </span> {todos.title}</p>
        <span className=" px-3 py-2  w-fit flex items-center justify-center bg-red-500 text-[#FFF] rounded-xl cursor-pointer active:scale-90 hover:bg-red-700 " onClick={() => deleteHandler(todos.id)}>Delete</span>
      </li>
    );
  });
  return (
    <div className=" w-full md:w-[50%] flex flex-col gap-10 ">
      <p className=" text-6xl">Pending <span className=" font-extrabold">Tasks</span></p>
      <ol className=" flex flex-col gap-2 md:overflow-y-scroll md:custom-scrollbar ">{list}</ol>
    </div>
  );
};

export default Read;