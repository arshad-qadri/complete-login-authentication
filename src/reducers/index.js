import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import addUesrReducer from "./addUser";
import userListReducer from "./userList";
import memoryReducer from "./memory";
import deleteReducer from "./delete";
import userDetailReducer from "./userDetail";

const rootReducer = combineReducers({
  userReducer,
  loginReducer,
  addUesrReducer,
  userListReducer,
  memoryReducer,
  deleteReducer,
  userDetailReducer,
});

export default rootReducer;
