// libs
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
// components
import App from "./App";
// import store from "./app/store";
import reportWebVitals from "./reportWebVitals";
// contexts
import Multilang from "./context/multilang";
import ThemeContextProvider from "./context/ThemeContext";
// others
import "./index.css";

ReactDOM.render(
  <Multilang>
    <ThemeContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContextProvider>
  </Multilang>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
