import React, { useState } from "react";
import "./Signup.css";
import Lottie from "lottie-react"; // Import Lottie
import animationData from "../assets/animations/ani.json"; // Path to your Lottie JSON file

import { auth, googleProvider } from "./firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const nav = useNavigate();
  const loginp = () => {
    nav("/login");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Email/Password Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
      alert("Signup successful!");
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert(error.message);
    }
  };

  // Handle Google Signup
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google user signed up:", result.user);
      alert("Google signup successful!");
    } catch (error) {
      console.error("Error with Google signup:", error.message);
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
                height: "100px",
                marginLeft: 40,
                marginTop: -7,
              }} // Adjust size as needed
            />
          </div>
        </div>

        <h2 className="login-title">Create an account</h2>

        <form className="login-form" onSubmit={handleSignup}>
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
            Sign up
          </button>
        </form>

        <button className="google-signin-button" onClick={handleGoogleSignup}>
          <FcGoogle size={20} />
          Sign up with Google
        </button>

        <p className="signup-text">
          Already have an account?{" "}
          <span className="signup-link" onClick={loginp}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
