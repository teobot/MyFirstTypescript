import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import App from "./views/App_Without";
//import App from "./views/App_With";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);