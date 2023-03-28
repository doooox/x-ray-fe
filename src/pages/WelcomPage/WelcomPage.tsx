import React from "react";
import { Link } from "react-router-dom";
import "./WelcomPage.css";

const WelcomPage = () => {
  return (
    <div className="container">
      <div className="welcomeButton">
        <Link to={"/register"} className="linkButton">
          <button>Register</button>
        </Link>
      </div>
      <div className="welcomeButton">
        <Link to={"/login"} className="linkButton">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomPage;
