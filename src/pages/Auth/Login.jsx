import { useState, useContext } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


export default function Login() {
  const { signIn, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>

      <button
  onClick={handleGoogleLogin}
  className="btn btn-outline w-full flex items-center gap-2 mt-4"
>
  <FcGoogle className="text-xl" />
  Continue with Google
</button>


      <p className="mt-4 text-sm">
  Forgot password? 
  <Link 
    to="/forget-password" 
    state={{ email }}  
    className="text-blue-500"
  >
    Reset
  </Link>
</p>

      <p className="mt-2 text-sm">
        Don't have an account? <Link to="/register" className="text-blue-500">Sign Up</Link>
      </p>
    </div>
  );
}
