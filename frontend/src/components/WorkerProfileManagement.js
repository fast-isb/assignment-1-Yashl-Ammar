import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBarLogin&SignUp.js";
import axios from "axios";
import "./styles/WorkerProfileManagement.css";
import WorkersProfileSideBar from "./WorkersProfileSideBar.js";
function WorkerProfileManagement() {
  let location = useLocation();
  let navigate = useNavigate();
  let username = { username: location.state.username };
  let updatefirstName = (e) => {
    setWorker({
      username: worker.username,
      fname: e.target.value,
      lname: worker.lname,
      dob: worker.dob,
      banned: worker.banned,
      domain: worker.domain,
      service: worker.service,
      pNo: worker.pNo,
      hNo: worker.hNo,
      street: worker.street,
      sector: worker.sector,
      city: worker.city,
      password: worker.password,
    });
  };
  let updatelastName = (e) => {
    setWorker({
      username: worker.username,
      fname: worker.fname,
      lname: e.target.value,
      dob: worker.dob,
      banned: worker.banned,
      domain: worker.domain,
      service: worker.service,
      pNo: worker.pNo,
      hNo: worker.hNo,
      street: worker.street,
      sector: worker.sector,
      city: worker.city,
      password: worker.password,
    });
  };
  let updatedomain = (e) => {
    setWorker({
      username: worker.username,
      fname: worker.fname,
      lname: worker.lname,
      dob: worker.dob,
      banned: worker.banned,
      domain: e.target.value,
      service: worker.service,
      pNo: worker.pNo,
      hNo: worker.hNo,
      street: worker.street,
      sector: worker.sector,
      city: worker.city,
      password: worker.password,
    });
  };
  let updateservices = (e) => {
    setWorker({
      username: worker.username,
      fname: worker.fname,
      lname: worker.lname,
      dob: worker.dob,
      banned: worker.banned,
      domain: worker.domain,
      service: e.target.value,
      pNo: worker.pNo,
      hNo: worker.hNo,
      street: worker.street,
      sector: worker.sector,
      city: worker.city,
      password: worker.password,
    });
  };
  let updatephoneNumber = (e) => {
    setWorker({
      username: worker.username,
      fname: worker.fname,
      lname: worker.lname,
      dob: worker.dob,
      banned: worker.banned,
      domain: worker.domain,
      service: worker.service,
      pNo: e.target.value,
      hNo: worker.hNo,
      street: worker.street,
      sector: worker.sector,
      city: worker.city,
      password: worker.password,
    });
  };
  let updateHouseNo = (e) => {
    setWorker({
      username: worker.username,
      fname: worker.fname,
      lname: worker.hNo,
      dob: worker.dob,
      banned: worker.banned,
      domain: worker.domain,
      service: worker.service,
      pNo: worker.pNo,
      hNo: e.target.value,
      street: worker.street,
      sector: worker.sector,
      city: worker.city,
      password: worker.password,
    });
  };
  let updateStreet = (e) => {
    setWorker({
      username: worker.username,
      fname: worker.fname,
      lname: worker.lname,
      dob: worker.dob,
      banned: worker.banned,
      domain: worker.domain,
      service: worker.service,
      pNo: worker.pNo,
      hNo: worker.hNo,
      street: e.target.value,
      sector: worker.sector,
      city: worker.city,
      password: worker.password,
    });
  };
  let updateSector = (e) => {
    setWorker({
      username: worker.username,
      fname: worker.fname,
      lname: worker.lname,
      dob: worker.dob,
      banned: worker.banned,
      domain: worker.domain,
      service: worker.service,
      pNo: worker.pNo,
      hNo: worker.hNo,
      street: worker.street,
      sector: e.target.value,
      city: worker.city,
      password: worker.password,
    });
  };
  let updateCity = (e) => {
    setWorker({
      username: worker.username,
      fname: worker.fname,
      lname: worker.lname,
      dob: worker.dob,
      banned: worker.banned,
      domain: worker.domain,
      service: worker.service,
      pNo: worker.pNo,
      hNo: worker.hNo,
      street: worker.street,
      sector: worker.sector,
      city: e.target.value,
      password: worker.password,
    });
  };
  let updateDate = (e) => {
    setWorker({
      username: worker.username,
      fname: worker.fname,
      lname: worker.lname,
      dob: e.target.value,
      banned: worker.banned,
      domain: worker.domain,
      service: worker.service,
      pNo: worker.pNo,
      hNo: worker.hNo,
      street: worker.street,
      sector: worker.sector,
      city: worker.city,
      password: worker.password,
    });
  };
  const [worker, setWorker] = useState({
    username: "-",
    fname: "-",
    lname: "-",
    dob: "-",
    banned: "-",
    domain: "-",
    service: "-",
    pNo: "-",
    hNo: "-",
    street: "-",
    sector: "-",
    city: "-",
    password: "-",
  });
  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.post(
        "http://localhost:3001/worker/getworker",
        username
      );
      console.log(response);
      setWorker(response.data[0]);
    };
    fetchData();
  }, []);
  let update = () => {
    axios
      .post("http://localhost:3001/worker/update/profile", worker)
      .then((res) => {
        console.log(res.data);
        alert("Information Updated sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let deleteAccount = () => {
    axios
      .post("http://localhost:3001/worker/delete", worker)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <div class="login-page">
          <div class="form">
            <form class="login-form">
              <h6 style={{ textAlign: "left" }}>First Name</h6>
              <input
                type="text"
                placeholder="First Name"
                value={worker.fname}
                onChange={updatefirstName}
              ></input>
              <h6 style={{ textAlign: "left" }}>Last Name</h6>
              <input
                type="text"
                placeholder="Last Name"
                value={worker.lname}
                onChange={updatelastName}
              ></input>
              <h6 style={{ textAlign: "left" }}> Phone</h6>
              <input
                type="Number"
                placeholder="+92"
                value={worker.pNo}
                onChange={updatephoneNumber}
              ></input>
              <h6 style={{ textAlign: "left" }}> Date</h6>
              <input
                type="Date"
                placeholder="DD/MM/YYYY"
                value={worker.dob}
                onChange={updateDate}
              ></input>
              <h6 style={{ textAlign: "left" }}>Domain</h6>
              <input
                type="text"
                placeholder="Enter Your Workin Domain"
                value={worker.domain}
                onChange={updatedomain}
              ></input>
              <h6 style={{ textAlign: "left" }}>Services</h6>
              <input
                type="text"
                placeholder="Your Service"
                value={worker.service}
                onChange={updateservices}
              ></input>
              <h6 style={{ textAlign: "left" }}>House No</h6>
              <input
                type="text"
                placeholder="#"
                value={worker.hNo}
                onChange={updateHouseNo}
              ></input>
              <h6 style={{ textAlign: "left" }}>Street</h6>
              <input
                type="text"
                placeholder="#"
                value={worker.street}
                onChange={updateStreet}
              ></input>
              <h6 style={{ textAlign: "left" }}>Sector</h6>
              <input
                type="text"
                placeholder="Your Sector"
                value={worker.sector}
                onChange={updateSector}
              />
              <h6 style={{ textAlign: "left" }}>City</h6>
              <input
                type="text"
                placeholder="Your City"
                value={worker.city}
                onChange={updateCity}
              ></input>
            </form>
            <button onClick={update} className="update-profile-button">
              Update
            </button>
            <button className="Delete-profile-button" onClick={deleteAccount}>
              Delete Account
            </button>
            <p class="message">
              Leave as it is if you don't want to update that specific Field
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkerProfileManagement;
