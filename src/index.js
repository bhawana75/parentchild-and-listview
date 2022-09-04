import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Child from "./components/ParentChild/Child";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Child />
  </BrowserRouter>,
  document.getElementById("root")
);
