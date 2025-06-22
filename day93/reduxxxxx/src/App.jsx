import { useEffect } from "react";
import axios from "./api/axiosconfig";
const App = () => {

  const getData = async () => {
    try {
      const res = await axios.get("/products");
      console.log(res.data);
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>App</div>
  );
};

export default App;