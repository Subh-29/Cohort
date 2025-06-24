import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("user")) || null;
    } catch {
      return null;
    }
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // go back to home
  };

  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-white bg-[var(--button-primary)] backdrop-blur-sm px-4 py-2 rounded-md shadow-sm"
      : "text-zinc-300 hover:text-[var(--button-text)] hover:bg-[var(--button-secondary)]/50 px-4 py-2 rounded-md transition-all duration-200";

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-900/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-9">
        <div className="flex justify-between items-center h-16">
          <div className="text-white font-semibold text-xl tracking-tight">
            MyBrand
          </div>

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
            {user?.isAdmin ? 
            (<NavLink to="/admin" className={navLinkStyles}>
              Admin
            </NavLink>) : ""}
            {!user ? (
              <NavLink to="/login" className={navLinkStyles}>
                Login
              </NavLink>
            ) : (
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-white px-4 py-2 rounded-md transition-all duration-200"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
