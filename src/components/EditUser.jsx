import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userEdit } from "../actions";
import Navbar from "./Navbar";

const EditUser = props => {
  const token = useSelector(state => state.loginReducer.token);
  const [names, setName] = useState();
  const [descp, setDesc] = useState();
  const [file, setFile] = useState();
  const [ids, setId] = useState();
  const data = useSelector(state => state.userDetailReducer.data.data.data);
  const name = data.name;
  const desc = data.description;
  const id = data.id;
  const pic = data.profile_photo;
  const dispatch = useDispatch();

  useEffect(() => {
    setName(name);
    setDesc(desc);
    setId(id);
    setFile(pic);
  }, [name]);
  const handleEdit = e => {
    e.preventDefault();
    dispatch(userEdit(file, token, name, desc, ids, props));
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Edit user</h1>
        <form>
          <img src={data.profile_photo} />
          <input
            type="text"
            placeholder="Enter Name"
            onChange={e => setName(e.target.value)}
            value={names}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Description"
            onChange={e => setDesc(e.target.value)}
            value={descp}
          />
          <br />
          <br />
          <input
            type="file"
            // value={data.profile_photo}
            onChange={e => setFile(e.target.value)}
          />
          <br />
          <br />
          <button type="submit" onClick={handleEdit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
