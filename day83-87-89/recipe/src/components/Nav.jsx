import { NavLink } from "react-router-dom";



const Nav = () => {
  return (
    <div className=" px-3 nav-container w-full left-0 fixed top-[10px] z-[100] ">

     <div className=" px-3 py-3 grid w-full grid-cols-4 gap-1 items-center text-[0.9em] bg-zinc-500/30 backdrop-blur-[8px] rounded-2xl " >
        <NavLink className={(e) => ` h-12 flex justify-center items-center flex-wrap flex-col text-center  ${e.isActive ? ' text-(--third)' : ''}`} to={'/'}>Home</NavLink>
        <NavLink className={(e) => ` h-12 flex justify-center items-center flex-wrap flex-col text-center  ${e.isActive ? ' text-(--third)' : ''}`} to={'/recipe'}>Recipe</NavLink>
        <NavLink className={(e) => ` h-12 flex justify-center items-center flex-wrap flex-col text-center  ${e.isActive ? ' text-(--third)' : ''}`} to={'/about'}>About</NavLink>
        <NavLink className={(e) => ` h-12 flex justify-center items-center flex-wrap flex-col text-center font-extrabold bg-blue-500/60 rounded-xl  ${e.isActive ? ' text-(--first)' : ''}`} to={'/createrec'}>
          Create Recipe
        </NavLink>
     </div>
    </div>
  );
};

export default Nav;