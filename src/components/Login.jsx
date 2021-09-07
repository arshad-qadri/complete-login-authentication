import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logins } from "../actions";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = e => {
    e.preventDefault();
    dispatch(Logins(email, password, props));
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter Your email"
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Your password"
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
      &nbsp; &nbsp; &nbsp;
      <Link to="/signup">SignUp</Link>
    </div>
  );
};

export default Login;
