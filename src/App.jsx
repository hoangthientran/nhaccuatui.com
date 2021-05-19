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
import { ROUTES } from "./router/appRoute";
// other
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Redirect from="/nhaccuatui.com" to="/" exact />
          {ROUTES.map((item) => (
            <Route path={item.path} component={item.component} exact />
          ))}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
