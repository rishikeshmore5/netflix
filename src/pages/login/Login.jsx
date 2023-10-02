import "./login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const SetUser = () => {
    sessionStorage.setItem("USER", true);
    console.log("login");
    navigate("/");
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <span className="form">
          <h1>Sign In</h1>

          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton" onClick={SetUser}>
            Sign In
          </button>
          <span>
            New to Netflix?
            <Link className="link" to="/register">
              <b>&nbsp; Sign up now.</b>
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </span>
      </div>
    </div>
  );
}
