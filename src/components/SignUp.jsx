import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions";

const SignUp = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [C_password, setC_Password] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();
  // const global = useSelector(state => state.userReducer);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(name, email, password, C_password, desc, file, props));
  };
  return (
    <div className="container">
      <h1>Registration</h1>
      <form>
        <input
          type="text"
          placeholder="Enter Your name"
          onChange={e => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your Password"
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your Confirm Password"
          onChange={e => setC_Password(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Your Desc"
          onChange={e => setDesc(e.target.value)}
        />
        <br />
        <br />
        <input
          type="file"
          // placeholder="Enter Your "
          onChange={e => setFile(e.target.value)}
        />
        <br /> <br />
        <button onClick={handleSubmit}>Submit</button>
        &nbsp; &nbsp; &nbsp;
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
