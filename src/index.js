// libs
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
// components
import App from "./App";
// import store from "./app/store";
import reportWebVitals from "./reportWebVitals";
// others
import "./index.css";
import Multilang from "./context/multilang";

ReactDOM.render(
  <Multilang>
    <Provider store={store}>
      <App />
    </Provider>
  </Multilang>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
