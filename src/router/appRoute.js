// libs
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// constants
import { ROUTES } from "../constant/router";

const AppRoute = () => (
  <Router>
    <Switch>
      <Redirect from="/nhaccuatui.com" to="/" exact />
      {ROUTES.map((item) => (
        <Route path={item.path} component={item.component} exact />
      ))}
    </Switch>
  </Router>
);

export default AppRoute;
