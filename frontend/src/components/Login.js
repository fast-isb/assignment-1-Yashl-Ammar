import React from "react";
import "./styles/Login.css";
import mahir from "./mahir.PNG";
class Login extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="Login-form">
          <div className="SignIn">
            <h1>Sign In</h1>
          </div>
          <form className="form-style">
            <h3>Username</h3>
            <input placeholder="Enter Your Username" required></input>
            <h3>Password</h3>
            <input placeholder="********" type="password" required></input>
            <br></br>
            <div className="veritcal-center">
              <button>SignIn</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
