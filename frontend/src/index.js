import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import WorkerSignUp from "./components/WorkerSignUp.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup.js";
// import SideBar from "./components/SideBar.js";
import WorkersProfile from "./components/WorkersProfile.js";
import NavBar from "./components/NavBar.js";
import AdminSearchWorker from "./components/AdminSearchWorker.js";
import AdminViewWorker from "./components/AdminViewWorker.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route path="/" element={<AdminSearchWorker />} />
        <Route path="/worker/pofile" element={<WorkerSignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<WorkerSignUp />} />
        <Route path="/customer/signup" element={<SignUp />} />
        <Route path="/admin/viewworker" element={<AdminViewWorker />} />
      </Routes>
    </Router> */}
    <SignUp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 
