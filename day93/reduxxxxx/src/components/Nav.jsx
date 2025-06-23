import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-white bg-(--button-primary) backdrop-blur-sm px-4 py-2 rounded-md shadow-sm"
      : "text-zinc-300 hover:text-(--button-text) hover:bg-(--button-secondary)/50 px-4 py-2 rounded-md transition-all duration-200";

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-900/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-9">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand */}
          <div className="text-white font-semibold text-xl tracking-tight">
            MyBrand
          </div>

          {/* Nav Links */}
          <div className="flex space-x-4">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkStyles}>
              Products
            </NavLink>
            <NavLink to="/cart" className={navLinkStyles}>
              Cart
            </NavLink>
            {/* <NavLink to="/register" className={navLinkStyles}>
              Register
            </NavLink> */}
            <NavLink to="/login" className={navLinkStyles}>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
