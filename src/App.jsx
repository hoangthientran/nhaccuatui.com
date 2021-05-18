// libs
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// components
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
// other
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
