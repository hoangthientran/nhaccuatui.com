// libs
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// router
import { appRoutes } from "./router/appRoutes";
// other
import "./App.css";

const App = () => (
  <div>
    <Header />
    <Router>
      <Switch>
        <Redirect from="/nhaccuatui.com" to="/" exact />
        {appRoutes.map((item) => (
          <Route
            key={item.id}
            path={item.path}
            component={item.component}
            exact
          />
        ))}
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
