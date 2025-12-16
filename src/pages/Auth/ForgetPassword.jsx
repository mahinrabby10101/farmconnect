import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast, Toaster } from "react-hot-toast";

export default function ForgetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const { resetPassword } = useContext(AuthContext);

  const [email, setEmail] = useState(location.state?.email || "");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await resetPassword(email);
      toast.success("Password reset link sent! Check your email.");
      setEmail(""); // clear input
      // Optionally navigate back to login after a delay
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to send reset email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      {/* Toast notifications */}
      <Toaster position="top-center" />

      <h1 className="text-2xl font-bold mb-4 text-center">Reset Password</h1>

      <form className="space-y-4" onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className={`btn btn-primary w-full ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </form>

      <p className="text-center mt-4">
        <button className="text-blue-500 underline" onClick={() => navigate("/login")}>
          Back to Login
        </button>
      </p>
    </div>
  );
}
