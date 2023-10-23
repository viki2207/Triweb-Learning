import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// const admin = require("firebase-admin");
// const sendEmail = require("./SendEmail.js");
// admin.initializeApp();
// exports.sendEmail = sendEmail;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
