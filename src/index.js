import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "materialize-css/dist/css/materialize.min.css";
// import "materialize-css/dist/js/materialize";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
