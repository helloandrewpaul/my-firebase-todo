import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./styles.css"

import App from "./App";
import {} from "./firebase";

const rootDIV = document.getElementById("root");

ReactDOM.render(
  <>
    <CssBaseline />

    <App />
  </>,
  rootDIV
);
