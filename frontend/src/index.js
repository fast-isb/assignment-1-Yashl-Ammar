import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals.js";
import WorkerSignUp from "./components/WorkerSignUp.js";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerSignUp from "./signup.js";
// import SideBar from "./components/SideBar.js";
import WorkersProfile from "./components/WorkersProfile.js";
import WorkerProfileManagement from "./components/WorkerProfileManagement.js";
import NavBar from "./components/NavBar.js";
import AdminSearchWorker from "./components/AdminSearchWorker.js";
import AdminViewWorker from "./components/AdminViewWorker.js";
import AdminViewCustomer from "./components/AdminViewCustomer.js";
import AdminHomePage from "./components/AdminHomePage.js";
import AdminSearchCustomer from "./components/AdminSearchCustomer.js";
import AdminSearchcustomer from "./components/AdminSearchCustomer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worker/profile" element={<WorkersProfile />} />
        <Route path="/adminhomepage" element={<AdminHomePage />} />
        <Route path="/adminsearchworker" element={<AdminSearchWorker />} />
        <Route path="/adminsearchcustomer" element={<AdminSearchcustomer />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<WorkerSignUp />} />
        <Route path="/customer/signup" element={<CustomerSignUp />} />
        <Route path="/admin/viewworker" element={<AdminViewWorker />} />
        <Route path="/admin/viewcustomer" element={<AdminViewCustomer />} />
        <Route
          path="/worker/profile/management"
          element={<WorkerProfileManagement />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
