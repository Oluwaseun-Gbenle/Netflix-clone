import React, { useState } from "react";
import "./Login.css";
import SignIn from "./SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login">
      <div className="login-background">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
          alt="netflix Logo"
        />

        <button onClick={() => setSignIn(true)} className="login-button">
          Sign In
        </button>
        <div className="login-gradient" />
      </div>
      <div className="outer-body">
        <div className="login-body">
          {signIn ? (
            <SignIn />
          ) : (
            <div>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="login-input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="login-getStarted"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

