import React from "react";
import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In </h1>
          <input type="email" placeholder="Email or Phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButtton">Sign In </button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure You're not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}
