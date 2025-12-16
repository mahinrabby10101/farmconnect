import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const { createUser, updateUserProfile, googleLogin } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!/[A-Z]/.test(password)) return toast.error("Password must have an uppercase letter");
    if (!/[a-z]/.test(password)) return toast.error("Password must have a lowercase letter");
    if (password.length < 6) return toast.error("Password must be at least 6 characters");

    try {
      const userCredential = await createUser(email, password);
      console.log("UserCredential:", userCredential);

      await updateUserProfile(name, photo);

      toast.success("Account created successfully!");
      navigate("/");
    } catch (err) {
      console.error("Registration Error:", err);
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Logged in with Google!");
      navigate("/");
    } catch (err) {
      console.error("Google Login Error:", err);
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full flex items-center gap-2 mt-4"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>

      <p className="mt-2 text-sm">
        Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
      </p>
    </div>
  );
}
