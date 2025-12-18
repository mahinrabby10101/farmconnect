import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaLeaf } from "react-icons/fa";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  // Helper function to handle dynamic text colors against the blue background
  const navLinkStyles = ({ isActive }) => 
    isActive ? "text-white font-bold border-b-2 border-yellow-300 pb-1" : "text-blue-100 hover:text-white transition-colors";

  return (
    <nav className="bg-[#116EB0] text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
        <FaLeaf className="text-yellow-300 text-3xl" />
        <span className="text-2xl font-extrabold tracking-wide" style={{ fontFamily: "'Pacifico', cursive" }}>
          FarmConnect
        </span>
      </Link>

      <div className="flex items-center space-x-6">
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
        
        <NavLink to="/allcrops" className={navLinkStyles}>
          All Crops
        </NavLink>

        <NavLink to="/add-crop" className={navLinkStyles}>
          Add Crops
        </NavLink>

        <NavLink to="/profile" className={navLinkStyles}>
          My Profile
        </NavLink>

        {user ? (
          <div className="flex items-center space-x-3 bg-white/10 p-1 pr-3 rounded-full">
            <img
              src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt={user.displayName || "User"}
              className="w-8 h-8 rounded-full object-cover border-2 border-yellow-300"
              referrerPolicy="no-referrer"
            />
            <span className="hidden md:inline text-sm font-medium">{user.displayName || "User"}</span>
            <button
              onClick={logOut}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Link to="/login" className="px-4 py-2 text-sm font-semibold hover:text-yellow-300">Login</Link>
            <Link to="/register" className="bg-yellow-300 text-[#116EB0] px-4 py-2 rounded-md text-sm font-bold hover:bg-white transition-all">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}