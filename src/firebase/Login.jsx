import { useState } from "react";
import "./SignUp.css";
import Lottie from "lottie-react";
import animationData from "../assets/animations/ani2.json";
import { auth, googleProvider } from "./firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user logged in:", result.user);
      alert("Google login successful!");
      navigate("/");
    } catch (error) {
      console.error("Error with Google login:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="page-container">
      <div className="background-stars"></div>

      <div className="login-box">
        <div className="logo-wrapper">
          <div className="logo-lottie">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{
                width: "100px",
                height: "89px",
                marginLeft: 40,
                marginTop: -7,
              }}
            />
          </div>
        </div>

        <h2 className="login-title">Welcome Back!</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="signin-button">
            Log in
          </button>
        </form>

        <button className="google-signin-button" onClick={handleGoogleLogin}>
          <FcGoogle size={20} />
          Log in with Google
        </button>

        <p className="signup-text">
          Don't have an account?{" "}
          <span className="signup-link" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
