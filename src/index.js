import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BundleProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <BundleProvider>
      <App />
    </BundleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
