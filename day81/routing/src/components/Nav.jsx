import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className=" w-full md:min-w-[400px] min-w-[320px] p-2 relative top-[0px] flex justify-around gap-5 md:gap-20 md:justify-evenly md:items-center bg-zinc-700/30 backdrop-blur-[5px] rounded-xl text-[#333446] ">
                <NavLink
                    className={(e) => (e.isActive ? "text-blue-500" : "")} to="/" >Home</NavLink>
                <NavLink className={(e) => (e.isActive ? "text-blue-500" : "")} to="/product" >Product</NavLink>
                <NavLink className={(e) => (e.isActive ? "text-blue-500" : "")} to="/service" >Service</NavLink>
                <NavLink className={(e) => (e.isActive ? "text-blue-500" : "")} to="/about" >About</NavLink>

            </div>
        </>
    );
};

export default Nav;