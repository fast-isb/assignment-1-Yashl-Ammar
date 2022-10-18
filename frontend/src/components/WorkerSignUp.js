import React from "react";
import "./styles/WorkerSignup.css";

class WorkerSignUp extends React.Component {
  render() {
    return (
      <div className="green-background-div">
        <div className="center-div">
          <form>
            <div className="signup">
              <h1>Sign Up</h1>
            </div>
            <div>
              <h3>First Name:</h3>
              <input type="text" placeholder="First Name" required />
              <h3>Last Names:</h3>
              <input type="text" placeholder="Last Name" required />
              <h3>Date of Birth:</h3>
              <input type="date" placeholder="First Name" required />
              <h3>Phone Number:</h3>
              <input type="number" placeholder="Phone Number" required />
            </div>
            <div className="right-text">
              <button>Next</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
