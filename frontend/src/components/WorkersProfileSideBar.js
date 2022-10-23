import React from "react";
import "./styles/WorkerProfileSideBar.css";
import { Link } from "react-router-dom";
function WorkersProfileSideBar(props) {
  return (
    <div>
      <div className="dashboard-wroker-profile">
        <button className="dashboard-worker-button">
          <Link
            to={"/worker/profile/management"}
            className="Link-decoration"
            state={{ username: props.username }}
          >
            Profile Management
          </Link>
        </button>
        <button className="dashboard-worker-button">Post Service AD's</button>
        <button className="dashboard-worker-button">Remove Profile Adds</button>
        <button className="dashboard-worker-button">Update Profile Adds</button>
        <button className="dashboard-worker-button">
          Accept Current Order
        </button>
        <button className="dashboard-worker-button">View Order Requests</button>
      </div>
    </div>
  );
}

export default WorkersProfileSideBar;
