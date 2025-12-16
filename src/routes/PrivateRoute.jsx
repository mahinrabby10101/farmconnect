import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  
  if (loading) return <p className="p-10 text-center">Checking authentication...</p>;


  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

 
  return children;
}
