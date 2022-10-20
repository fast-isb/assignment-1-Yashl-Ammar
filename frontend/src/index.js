import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignIn from "./signIn";
import reportWebVitals from "./reportWebVitals.js";
import SignUp from "./signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <WorkerSignUp4 /> */}
    <SignUp/>
    <SignIn/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
