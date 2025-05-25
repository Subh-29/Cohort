
import Create from "./components/Create";
import { nanoid } from "nanoid";
import Read from "./components/Read";

const App = () => {
  


  return (
    <div className=" w-full max-h-[450px] p-5 flex flex-col md:flex-row justify-evenly gap-10 md:gap-2 text-3xl">
      <Create />
      <div className=" w-full h-[3px] md:w-[1px] md:h-auto bg-white"></div>
      <Read  />
    </div>
  );
};

export default App;