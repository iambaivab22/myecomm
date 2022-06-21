import React, { useState, useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "./Authenticationcontext";
import "./Login.css";

const Login = () => {
  const Navigator = useNavigate();

  const [users, setuser] = useState();
  const [password, setpassword] = useState();
  const data = useContext(Context);
  const loginhandler = () => {
    data.login(users);
    Navigator("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="loginbox">
      <div className="mainbox">
        <label for="username" className="labels">
          Username
        </label>
        <input
          type="text"
          className="inputbox"
          onChange={(e) => setuser(e.target.value)}
        />
        <label for="username" className="labels">
          password
        </label>
        <input
          type="password"
          className="inputbox"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="loginbutton" onClick={loginhandler}>Login</button>
       
      </div>
    </div>
  );
};

export default Login;
