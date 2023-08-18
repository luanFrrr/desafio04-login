import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./global";
import Login from "./pages/Login";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Login />
  </React.StrictMode>,
  root
);
