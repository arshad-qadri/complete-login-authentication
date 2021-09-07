import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Home = props => {
  const token = useSelector(state => state.loginReducer.token);
  console.log(props);
  if (token == null) {
    props.history.push("/login");
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
