import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // NavLink style function
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-white font-bold border-b-2 border-yellow-300 pb-1"
      : "text-blue-100 hover:text-white transition-colors";

  return (
    <nav className="bg-[#116EB0] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
        <FaLeaf className="text-yellow-300 text-3xl" />
        <span
          className="text-2xl font-extrabold tracking-wide"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          FarmConnect
        </span>
      </Link>

      {/* Hamburger for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`flex-col md:flex md:flex-row md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-[#116EB0] md:bg-transparent transition-all ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <NavLink to="/" className={(navData) => navLinkStyles(navData) + " px-4 py-2"}>
          Home
        </NavLink>

        <NavLink
          to="/allcrops"
          className={(navData) => navLinkStyles(navData) + " px-4 py-2"}
        >
          All Crops
        </NavLink>

        <NavLink
          to="/add-crop"
          className={(navData) => navLinkStyles(navData) + " px-4 py-2"}
        >
          Add Crops
        </NavLink>

        {user && (
          <>
            <NavLink
              to="/my-posts"
              className={(navData) => navLinkStyles(navData) + " px-4 py-2"}
            >
              My Posts
            </NavLink>

            <NavLink
              to="/my-interests"
              className={(navData) => navLinkStyles(navData) + " px-4 py-2"}
            >
              My Interests
            </NavLink>
          </>
        )}

        <NavLink
          to="/profile"
          className={(navData) => navLinkStyles(navData) + " px-4 py-2"}
        >
          My Profile
        </NavLink>

        {/* User / Login-Register */}
        {user ? (
          <div className="flex flex-col md:flex-row md:items-center md:space-x-3 px-4 py-2">
            <img
              src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt={user.displayName || "User"}
              className="w-8 h-8 rounded-full object-cover border-2 border-yellow-300 mb-2 md:mb-0"
              referrerPolicy="no-referrer"
            />
            <span className="text-sm font-medium mb-2 md:mb-0">{user.displayName || "User"}</span>
            <button
              onClick={logOut}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-center md:space-x-2 px-4 py-2">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-semibold hover:text-yellow-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-yellow-300 text-[#116EB0] px-4 py-2 rounded-md text-sm font-bold hover:bg-white transition-all"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
