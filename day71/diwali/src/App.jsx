import { useState } from "react";


function handleClick(count, setCount) {
    setCount(count => count + 1);
    console.log("Hello ", count);
}

let App = () => {
    let [count, setCount] = useState(0); 
    return <>
        <div>
            <h1>Happy Diwali</h1>
        </div>
        <button onClick={() => handleClick(count, setCount)}>Click Me</button>
    </>
}

export default App;