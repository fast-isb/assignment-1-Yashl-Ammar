import React from "react";
import "./styles/NavBar.css";
import mahir from "./mahir.PNG";

function NavBar() {
  return (
    <div className="nav_black">
      <div className="container">
        <img className="navbar_mahir_logo" src={mahir} alt=""></img>
      </div>
    </div>
  );
}

export default NavBar;
