// libs
import React from "react";
// other
import "./App.css";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoute from "./router/appRoute";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import { routes } from "./Router/AppRoute";
// import NotFound from "./components/NotFound";
// router
// import routes from "./router/appRoute";

function App() {
  return (
    <div>
      <Header />
      <AppRoute />
      {/* <Switch>
          <Redirect from="/nhaccuatui.com" to="/" exact />
          {
            routes.map((item) => (
              <Route path={item.path} component={item.component} exact />
            ))
          }
        </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
