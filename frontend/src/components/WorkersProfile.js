import React from "react";
import "./styles/WorkersProfile.css";
import SideBar from "./SideBar.js";
class WorkersProfile extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <SideBar />
        <div className="profile"></div>
      </div>
    );
  }
}

export default WorkersProfile;
