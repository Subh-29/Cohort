import { useState } from "react";
import Create from "./components/Create";
import { nanoid } from "nanoid";
import Read from "./components/Read";

const App = () => {
  const [todos, setTodos] = useState([{id: nanoid(), title: "Gets started", isComplete: false}]);
  return (
    <div style={{padding: "20px", display: "flex", flexDirection: "column", gap: "20px"}}>
      <Create todos={todos} setTodos={setTodos} />
      <hr />
      <Read todos={todos} />
    </div>
  );
};

export default App;