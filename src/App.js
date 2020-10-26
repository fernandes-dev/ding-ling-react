import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import Forgot from "./views/Forgot/Forgot";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgot">
          <Forgot />
        </Route>
      </div>
    </Router>
  );
}
