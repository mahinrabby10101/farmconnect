import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaLeaf } from "react-icons/fa";


export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center sticky top-0 z-50">
     
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold ">
      <FaLeaf className="text-yellow-300 text-3xl" />
    
        <span className="text-2xl font-extrabold tracking-wide"  style={{ fontFamily: "'Pacifico', cursive" }}>FarmConnect</span>
      </Link>

     
      <div className="flex items-center space-x-4">
        <NavLink to="/" className={({ isActive }) => isActive ? " font-semibold" : "text-gray-700"}>
          Home
        </NavLink>
        <NavLink
  to="/services"
  className={({ isActive }) =>
    isActive ? " font-semibold" : "text-gray-700"
  }
>
  Services
</NavLink>

        <NavLink to="/profile" className={({ isActive }) => isActive ? " font-semibold" : "text-gray-700"}>
          My Profile
        </NavLink>

       
        {user ? (
          <div className="flex items-center space-x-2">
            {user.photoURL && (
              <img
                src={user.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt={user.displayName || "User"}
                className="w-8 h-8 rounded-full object-cover border border-gray-300"
                referrerPolicy="no-referrer"
              />
            )}
            <span className="hidden md:inline">{user.displayName || "User"}</span>
            <button
              onClick={logOut}
              className="btn btn-sm btn-outline ml-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
            <Link to="/register" className="btn btn-sm btn-secondary">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
