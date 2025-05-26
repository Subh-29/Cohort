import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className=" h-15 w-full md:min-w-[400px] px-5 top-[10px] flex justify-around items-center gap-5 md:gap-20 md:justify-evenly md:items-center bg-zinc-700/30 backdrop-blur-[5px] rounded-xl text-(--title) ">
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