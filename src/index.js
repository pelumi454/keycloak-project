import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import App from "./App";
import { configureApp, initKeycloak } from "./context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const app = initKeycloak(renderApp);
configureApp();
