import React from "react";
import "./Signup.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Signup() {
  return (
    <div className="page-container">
      <div className="background-stars"></div>

      <div className="login-box">
        <div className="logo-wrapper">
          <div className="logo-lottie">
            <DotLottieReact
              src="https://lottie.host/ff3edc04-8601-44c7-9642-eb0dba847e73/Kfqzs4kDEA.lottie"
              loop
              autoplay
            />
          </div>
        </div>

        <h2 className="login-title">Create an account</h2>

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
            Sign up
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
          Already have an account? <span className="signup-link">log in</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
