import React from "react";
import "./styles/Login.css";
import NavBar from "./NavBarLogin&SignUp.js";
import mahir from "./mahir.PNG";
import axios from "axios";
import { useNavigate } from "react-router-dom";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  updateusername = (e) => {
    this.setState({ username: e.target.value });
  };
  updatepassword = (e) => {
    this.setState({ password: e.target.value });
  };
  onLogin = async (e) => {
    e.preventDefault();

    const users = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(users);
    try {
      await axios
        .post("http://localhost:3001/worker/login", users)
        .then((res) => {
          console.log(res.data);
        });

      alert("Sign up was successful");
    } catch (e) {
      console.log(e.response);

      alert("errror");
    }
  };
  render() {
    return (
      <div>
        <div className="background">
          <NavBar />
          <div className="Login-form">
            <div className="SignIn">
              <h1>Sign In</h1>
            </div>
            <form className="form-style">
              <h3>Username</h3>
              <input
                placeholder="Enter Your Username"
                required
                value={this.state.username}
                onChange={this.updateusername}
              ></input>
              <h3>Password</h3>
              <input
                placeholder="********"
                type="password"
                required
                value={this.state.password}
                onChange={this.updatepassword}
              ></input>

              <br></br>
              <br></br>
              <a
                href="https://localhost:3000/forgetpassword"
                className="forgetPassword"
              >
                Forget Password
              </a>
              <div className="veritcal-center">
                <button className="Sign-In-Button" onClick={this.onLogin}>
                  SignIn
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
