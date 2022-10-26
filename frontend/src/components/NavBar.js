import React, { useEffect, useState } from "react";
import "./styles/NavBar.css";
import mahir from "./mahir.PNG";
import Login from "./Login.js";
import WorkerSignUp from "./WorkerSignUp.js";
import { useNavigate } from "react-router-dom";
function NavBar() {
  let navigate = useNavigate();
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);
  return (
    <div>
      <div className={`container-fluid ${show && "nav_black"}`}>
        <img className="navbar_mahir_logo" src={mahir} alt=""></img>
        <button
          className="NavBar-SignUp-Button"
          onClick={() => {
            navigate("/customer/signup");
          }}
        >
          Sign Up
        </button>
        <button
          className="NavBar-SignIn-Button"
          onClick={() => {
            navigate("/signin");
          }}
        >
          Sign In
        </button>
        <button
          className="Worker-signIn-button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Become a Worker
        </button>
      </div>
    </div>
  );
}

export default NavBar;
