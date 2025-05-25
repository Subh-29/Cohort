import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className=" w-full md:w-[50%] min-w-[320px] p-2 relative top-[0px] flex justify-around gap-5 md:gap-20 md:justify-evenly md:items-center bg-zinc-700/30 backdrop-blur-[5px] rounded-xl text-[#333446] ">
        <Link to="/" >Home</Link>
        <Link to="/product" >Product</Link>
        <Link to="/service" >Service</Link>
        <Link to="/about" >About</Link>

      </div>
    </>
  );
};

export default Nav;