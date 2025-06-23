import { useEffect } from "react";
// import axios from "./api/axiosconfig";
import userAction from "./store/userAction";
import { useDispatch, useSelector } from 'react-redux'
import productAction from "./store/productAction";
import commentAction from "./store/commentAction";
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";
const App = () => {

  const data = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  console.log(data);

  // useEffect(() => {
  //   dispatch(userAction());
  //   dispatch(productAction());
  //   dispatch(commentAction());
  // }, []);

  return (
    <div className="
      bg-(--colour-primary-dark)
      text-(--text-light)
      min-h-full
      min-w-full
      overflow-x-hidden
      pt-17
      pb-5
      ">
      {/* <Nav /> */}


      <MainRoutes />

    </div>

  );
};

export default App;