import React, { useRef, useState } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")  
  const passwordRef = useRef();
  const emailRef = useRef();
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish =()=>{
    setPassword(passwordRef.current.value)
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
          <button className="loginButton">Sign In </button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel Anytime.</h2>
        <p>
          Ready to Watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address " ref={emailRef} />
            <button onClick={handleStart} className="registerButton">
              Get Started{" "}
            </button>
          </div>
        ) : (
          <div className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button onClick={handleFinish} className="registerButton">
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
