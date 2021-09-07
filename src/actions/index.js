import axios from "axios";

// ================= login ========================
const loginSuccess = (token, id) => {
  return {
    type: "Login",
    token: token,
    id: id,
  };
};
const loginFailed = err => {
  return {
    type: "Login_Failed",
    error: err,
  };
};

export const Logins = (email, pass, props) => {
  return dispatch => {
    axios
      .post("http://dignizant.com/practical-task-api-doc/public/api/login", {
        email: email,
        password: pass,
      })
      .then(res => {
        console.log("log", email, pass);
        const token = res.data.access_token;
        const id = res.data.data.id;
        dispatch(loginSuccess(token, id));
        props.history.push("/");
      })
      .catch(err => {
        console.log(err);
        dispatch(loginFailed(err));
      });
  };
};

// =============== signup =========================
const regSuccess = data => {
  return {
    type: "Register",
    data: data,
  };
};
const regFailed = err => {
  return {
    type: "Failed",
    error: err,
  };
};

export const register = (
  name,
  email,
  password,
  conformpassword,
  description,
  file,
  props
) => {
  return dispatch => {
    axios
      .post("http://dignizant.com/practical-task-api-doc/public/api/register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: conformpassword,
        description: description,
        profile_photo: file,
      })
      .then(res => {
        console.log("res", props);
        const data = res.data.data;
        dispatch(regSuccess(data));
        props.history.push("/login");
      })
      .catch(err => {
        dispatch(regFailed(err));
      });
  };
};

// ===================== create user =====================
const add_user_success = res => {
  return {
    type: "Add_User",
    data: res,
  };
};
const add_user_failed = err => {
  return {
    type: "Failed_User",
    error: err,
  };
};

export const addUser = (
  token,
  name,
  email,
  password,
  confirmPassword,
  description,
  props
) => {
  return dispatch => {
    axios
      .post(
        "http://dignizant.com/practical-task-api-doc/public/api/create-user",
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
          description: description,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(res => {
        console.log(res);
        dispatch(add_user_success(res));
        alert("Successful");
        props.history.push("/userList");
        console.log("prp", props);
      })
      .catch(err => {
        dispatch(add_user_failed(err));
      });
  };
};
// =============== Edit user==================

const editSuccess = res => {
  return {
    type: "User_Edit",
    data: res,
  };
};
const editFailed = err => {
  return {
    type: "Edit_Failed",
    error: err,
  };
};

export const userEdit = (file, token, name, desc, id, props) => {
  const formdata = new FormData();
  formdata.append("profile_photo", file);
  formdata.append("description", desc);
  formdata.append("name", name);
  formdata.append("user_id", id);
  return dispatch => {
    axios
      .post(
        "http://dignizant.com/practical-task-api-doc/public/api/edit-user",
        formdata,
        { headers: { Authorization: `Bearer${token}` } }
      )
      .then(res => {
        dispatch(editSuccess(res));
        dispatch(userList(token, props));
        props.history.push("/userList");
      })
      .catch(err => {
        dispatch(editFailed(err));
      });
  };
};

// ============== user details ===============

const userDetailcuccess = data => {
  return {
    type: "User_Details",
    data: data,
  };
};
const userDetailFailed = err => {
  return {
    type: "user_Failed",
    error: err,
  };
};

export const userDetails = (id, token, props) => {
  return dispatch => {
    axios
      .post(
        "http://dignizant.com/practical-task-api-doc/public/api/user-detail",
        {
          user_id: id,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(res => {
        console.log(res);
        dispatch(userDetailcuccess(res));

        // props.history.push("/Userlist");
      })

      .catch(err => {
        dispatch(userDetailFailed(err));
      });
  };
};

// ================= delete user =================
const deleteSuccess = data => {
  return {
    type: "Delete_Success",
    data: data,
  };
};

const deleteFailed = err => {
  return {
    type: "Delete_Failed",
    error: err,
  };
};

export const deleteUser = (id, token, props) => {
  return dispatch => {
    axios
      .post(
        "http://dignizant.com/practical-task-api-doc/public/api/delete-user",
        {
          user_id: id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(res => {
        dispatch(deleteSuccess(res));
        dispatch(userList(token, props));
      })
      .catch(err => dispatch(deleteFailed(err)));
  };
};
// ================ user list===================

const User_List_Success = res => {
  return {
    type: "User_List",
    data: res,
  };
};

const User_List_Failed = err => {
  return {
    type: "User_Failed",
    error: err,
  };
};

export const userList = (token, prpos) => {
  return dispatch => {
    axios
      .post(
        "http://dignizant.com/practical-task-api-doc/public/api/user-list",
        "",
        { headers: { Authorization: `Bearer${token}` } }
      )
      .then(res => {
        dispatch(User_List_Success(res));
        // props
      })
      .catch(err => {
        dispatch(User_List_Failed(err));
      });
  };
};

// ====================logout=====================

const logoutSuccess = res => {
  return {
    type: "Logout",
    data: res,
  };
};
const logutFailed = err => {
  return {
    type: "Logout_Failed",
    error: err,
  };
};

export const Logout = (token, props) => {
  return dispatch => {
    axios
      .post(
        "http://dignizant.com/practical-task-api-doc/public/api/logout",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )

      .then(res => {
        console.log(res);
        dispatch(logoutSuccess(res));
        props.history.push("/login");
      })
      .catch(err => {
        dispatch(logutFailed(err));
      });
  };
};
