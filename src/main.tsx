import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

/* Here we are using ReactDOM to render the component tree, lines 7,8,9
inside an element with id of root. Here in the tree, App component is wrapped 
by other component react.StrictMode(its purpose is to identify potential prblems) 
So we are taking this component tree and rendering or displaying it inside and element 
with id of root, and to do that we are using react dom library*/

/* Due to app component wrapped in strict mode, react renders each component twice.
The first render is used for detecting issues with out code, and second render is used 
to update the user interface. This is only for deveopment phase, not for production 
phase.*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
