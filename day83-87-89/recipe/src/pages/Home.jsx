import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
     <div>
      <p onClick={() => navigate("/favourites")} className=" border w-fit px-3 py-2 rounded-2xl bg-blue-400/50 md:hover:bg-blue-700 cursor-pointer active:scale-90 ">See Favourites</p>
     </div>
  );
};

export default Home;