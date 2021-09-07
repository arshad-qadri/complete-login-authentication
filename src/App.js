import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AddUsers from "./components/AddUsers";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import Login from "./components/Login";
import Memory from "./components/Memory";
import SignUp from "./components/SignUp";
import UserList from "./components/UserList";
import history from "./history";
const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/addUser" component={AddUsers} />
          <Route path="/userList" component={UserList} />
          <Route path="/memory" component={Memory} />
          <Route path="/update" component={EditUser} />

          {/* <Redirect to="/login" /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
