import React from "react";
import "./SignUp.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function LoginPage() {
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

        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <button type="submit" className="signin-button">
            Log in
          </button>
        </form>

        <button className="google-signin-button">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="google-icon"
          />
          Sign up with Google
        </button>

        <p className="signup-text">
          Don't have an account? <span className="signup-link">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
