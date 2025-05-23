//Two Way Binding

import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [usernames, setUsernames] = useState([
    {
      name: "Subh", age: 19
    },
    {name: "Subh 2.0", age: 20},
    {
      name:"Hello", age: 23
    }
  ]);
  function nameHandler() {
    setUsernames("Subh 2.0")
  }



  
  return (
    <>
      {/* Components */}
      <Create />
      <hr />
      {/* Props Drilling */}
      <Read usernames={usernames} setUsernames={setUsernames}/>
      {/* Here Comes the Two Way binding */}
      {/* <span>Name: </span> */}
    </>
  );
}

export default App;
