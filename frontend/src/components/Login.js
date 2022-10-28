import React, { useState } from "react";
import "./styles/Login.css";
import NavBar from "./NavBarLogin&SignUp.js";
import mahir from "./mahir.PNG";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";
function Login() {
  let navigate = useNavigate();
  let [worker, setworker] = useState({
    username: "",
    password: "",
    workerList: [],
  });
  let updateusername = (e) => {
    setworker({ username: e.target.value, password: worker.password });
  };
  let updatepassword = (e) => {
    setworker({ username: worker.username, password: e.target.value });
  };
  let onLogin = async (e) => {
    e.preventDefault();
    const users = {
      username: worker.username,
      password: worker.password,
    };
    console.log(users);

    try {
      let response = await axios.post(
        "http://localhost:3001/worker/login",
        users
      );
      console.log(users);
      if (response.data[0].username === worker.username) {
        if (response.data[0].password === worker.password) {
          navigate("/worker/profile", {
            state: {
              username: worker.username,
            },
          });
        }
      }
    } catch (e) {
      alert("Your Credentials are not correct");
    }
  };
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
              value={worker.username}
              onChange={updateusername}
            ></input>
            <h3>Password</h3>
            <input
              placeholder="********"
              type="password"
              required
              value={worker.password}
              onChange={updatepassword}
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
              <button className="Sign-In-Button" onClick={onLogin}>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
