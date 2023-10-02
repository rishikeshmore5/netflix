import { useRef } from "react";
import { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
    sessionStorage.setItem("email", emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);

    sessionStorage.setItem("password", passwordRef.current.value);
    sessionStorage.setItem("USER", false);

    navigate("/login");
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          {/* <button className="loginButton">
            <Link to="/login" className="link">
              Sign In
            </Link>
          </button> */}
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <span className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
