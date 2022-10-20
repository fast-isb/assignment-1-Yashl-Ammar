import React from "react";
import "./styles/SideBar.css";
import NavBar from "./NavBarLogin&SignUp.js";
class SideBar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="sidebar">
          <NavBar />
          <div className="dashboard">
            <button className="dashboard-button">Profile Management</button>
            <button className="dashboard-button">Post Service AD's</button>
            <button className="dashboard-button">Remove Profile Adds</button>
            <button className="dashboard-button">Update Profile Adds</button>
            <button className="dashboard-button">Accept Current Order</button>
            <button className="dashboard-button">View Order Requests</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
