import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../actions";
import Navbar from "./Navbar";

const AddUsers = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();
  const token = useSelector(state => state.loginReducer.token);
  if (token == null) {
    props.history.push("/login");
  }
  const handleAddUser = e => {
    e.preventDefault();
    dispatch(addUser(token, name, email, password, Cpassword, desc, props));
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Add User</h1>
        <form>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={e => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter password"
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Confirm password"
            onChange={e => setCpassword(e.target.value)}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Description"
            onChange={e => setDesc(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" onClick={handleAddUser}>
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
