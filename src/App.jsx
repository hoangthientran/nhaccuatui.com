// libs
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
// router
import { routes } from "./router/appRoutes";
// other
import "./App.css";

const App = () => (
  <div>
    <Header />
    <Router>
      <Switch>
        <Redirect from="/nhaccuatui.com" to="/" exact />
        {routes.map((item) => (
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
