import "./styles/WorkersProfile.css";
import axios from "axios";
import NavBar from "./NavBarLogin&SignUp.js";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkersProfileSideBar from "./WorkersProfileSideBar.js";
const WorkersProfile = () => {
  let location = useLocation();
  let username = { username: location.state.username };
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

  return (
    <div>
      <div className="sidebar">
        <NavBar />
        <div>
          <WorkersProfileSideBar username={worker.username} />
        </div>
      </div>
      <div className="worker-profile">
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {worker.fname} {worker.lname}
                  </p>
                </div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Username</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{worker.username}</p>
                </div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{worker.pNo}</p>
                </div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Date of Birth</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{worker.dob.substring(0, 10)}</p>
                </div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Domain</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{worker.domain}</p>
                </div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Services</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{worker.service}</p>
                </div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">House No</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{worker.hNo}</p>
                </div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Street</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{worker.street}</p>
                </div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Sector</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{worker.sector}</p>
                </div>
              </div>
              <hr></hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">City</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{worker.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkersProfile;
