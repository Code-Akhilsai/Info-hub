import React, { useState } from "react";
import "./SignUp.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { auth, googleProvider } from "./firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle Email/Password Login
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
      navigate("/"); // Redirect to home page after login
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
      navigate("/"); // Redirect to home page after login
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
            <DotLottieReact
              src="https://lottie.host/92c28373-d339-4e51-a0d6-5fd38e6f62cf/StGC9ZVZGM.lottie"
              loop
              autoplay
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
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signin-button">
            Log in
          </button>
        </form>

        <button className="google-signin-button" onClick={handleGoogleLogin}>
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="google-icon"
          />
          Log in with Google
        </button>

        <p className="signup-text">
          Don't have an account?{" "}
          <span
            className="signup-link"
            onClick={() => navigate("/signup")} // Navigate to signup page
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
