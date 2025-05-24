import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [complete, setComplete] = useState(false);
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("default");

  return (
    <>
      <h1>Create Tasks</h1>
      <hr />
      <form onSubmit={e => e.preventDefault()}>
        <input type="text"
        value={name}
        placeholder="Name"
        onChange={e => {setName(e.target.value)}} />
        <br />

        <input id="comp" 
        checked={complete}
        onChange={e => {setComplete(e.target.checked)}}
        type="checkbox" />
        <label htmlFor="comp">Completed</label>
        <br />

        <input type="radio" 
        value={"male"}
        name="male" 
        id="male"
        onChange={e => {setGender(e.target.value)}}
        checked = {gender == "male"} />
        <label htmlFor="male">Male</label>

        <input type="radio" 
        value={"female"}
        name="female" 
        id="female"
        onChange={e => setGender(e.target.value)}
        checked = {gender == "female"} />
        <label htmlFor="female">Female</label>
        <br />

        <select name="city" id="city" 
        onChange={e => setCity(e.target.value)}
        value={city}>
          <option value="default">Select City</option>
          <option value="kolkata">Kolkata</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
        </select>
        <br />

        <button>Submit</button>
      </form>
      <hr />
    </>
  );
};

export default App;