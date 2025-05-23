import { useState } from "react";


const Create = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`${name} & ${age}`);
    }
  
  return (
    <>
        <form onSubmit={submitHandler}>
            <input 
            onChange={e => {setName(e.target.value)}}
            type="text" 
            placeholder="Name" />
            <input 
            onChange={e => setAge(e.target.value)}
            type="number" 
            placeholder="Age" />
            <button>Submit</button>
        </form>
    </>
  );
};

export default Create;