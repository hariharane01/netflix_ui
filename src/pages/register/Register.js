import React from 'react'
import "./register.scss"

export default function Register() {
  return (
<div className="register">
  <div className="top">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
    <button className="loginButton">SignIn </button>
  </div>
  <div className="container">
    <h1>Unlimited movies, TV shows and more.</h1>
    <h2>Watch anywhere. Cancel Anytime.</h2>
    <p>
      Ready to Watch? Enter your email to create  or restart your membership.
    </p>
    <div className="input">
      <input type="email"  placeholder='email address '/>
      <button className="registerButton">Get Started </button>
    </div>
  </div>
</div>  )
}
