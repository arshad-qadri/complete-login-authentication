import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, userDetails, userList } from "../actions";
import Navbar from "./Navbar";

const UserList = props => {
  const token = useSelector(state => state.loginReducer.token);
  const data = useSelector(state => state.userListReducer.data.data.data);
  const userDetaidata = useSelector(state => state.userDetailReducer);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userList(token, props));
  }, []);

  console.log(props);
  if (token === null) {
    props.history.push("/login");
  }
  const handleDelete = id => {
    dispatch(deleteUser(id, token, props));
  };
  const handleEdit = id => {
    dispatch(userDetails(id, token));
    console.log("dadad", userDetaidata);
    props.history.push("/update");
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>User List</h1>
        <div className="card p-4">
          {data === null
            ? false
            : data.map(elem => {
                return (
                  <div className="row" key={elem.id}>
                    <div className=" d-flex justify-content-center align-items-center">
                      <div className="col-lg-3">
                        <h1>{elem.name}</h1>
                      </div>
                      <div className="col-lg-3">
                        <p>{elem.email} </p>
                      </div>

                      <div className="col-lg-3">
                        {!elem.profile_photo ? (
                          <p>No image</p>
                        ) : (
                          <img
                            style={{
                              width: "70px",
                              height: "70px",
                              borderRadius: "50%",
                            }}
                            className="img-fluid"
                            src={elem.profile_photo}
                            alt={elem.name}
                          />
                        )}
                      </div>
                      <div className="col-lg-3">
                        <button onClick={() => handleEdit(elem.id)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(elem.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default UserList;
