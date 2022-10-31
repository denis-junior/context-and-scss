import React, { useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import "../styles/Login.scss";

const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div className="login-main">
      <div className="login-box-content">
        <input
          onKeyPress={event => event.key === "Enter" ? setShowProfile(true) : <></>}
          className="login-input"
          type="text"
          placeholder="username here..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          className="login-button"
          onClick={() => {
            setShowProfile(true);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
