import React, { useEffect, useState } from "react";
import "./NavBar.css";
import mahir from "./mahir.PNG";

function NavBar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      // window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`container-fluid ${show && "nav_black"}`}>
      <img className="navbar_mahir_logo" src={mahir} alt=""></img>
    </div>
  );
}

export default NavBar;
