import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memory } from "../actions/memory";
import Navbar from "./Navbar";

const Memory = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const data = useSelector(state => state.memoryReducer);

  const handleMem = e => {
    e.preventDefault();
    console.log(data);
    dispatch(memory(title, img, desc));
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Memory</h1>
        <div className="row">
          <div className="col-lg-8">
            data
            {data &&
              data.data.length > 0 &&
              data.data.map(e => {
                return (
                  <div>
                    <h1>{e.title} </h1>
                    <img src={e.img} />
                  </div>
                );
              })}
          </div>
          <div className="col-lg-4">
            <form>
              <input
                type="text"
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
              />
              <br />
              <br />
              <input type="File" onChange={e => setImg(e.target.value)} />
              <br />
              <br />
              <textarea
                placeholder="Description"
                cols="25"
                rows="5"
                onChange={e => setDesc(e.target.value)}
              ></textarea>
              <br />
              <br />
              <button onClick={handleMem}>Add Memory</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memory;
