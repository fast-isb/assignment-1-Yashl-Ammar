import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBarLogin&SignUp.js";
import "./styles/AdminViewCustomer.css";

const customerFeildViewTile = (props) => {
  return (
    <tr>
      <td>{props.field}</td>
      <td>{props.value}</td>
      <td>
        <button className="adminview-customer-data-display-modify-button">
          {" "}
          Modify{" "}
        </button>{" "}
      </td>
    </tr>
  );
};

const AdminViewcustomer = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let userName = { userName: location.state.userName };

  const [customer, setcustomer] = useState({
    userName: "",
    name: "",
    email:"",
    Address:"",
    banned: "",
    phoneNum: "",
    password: "",
  });

  useEffect(() => {
    let fetchData = async () => {
      let response = await axios.post(
        "http://localhost:3001/customer/getcustomer",
       customer
      );
      console.log(response);
      setcustomer(response.data[0]);
    };
    fetchData();
  }, []);

  let checkBanned = () => {
    if (customer.banned === false) {
      return "Ban";
    }
    return "UnBan";
  };

  let banStringConversion = () => {
    if (customer.banned === true) {
      return "Banned";
    }
    return "Not Banned";
  };

  let deletecustomer = () => {
    let requestObejct = { username: customer.username };

    axios
      .post("http://localhost:3001/customer/delete", requestObejct)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // needs to be updated
    navigate("/admin/search/customer");
  };

  let bancustomer = () => {
    let updatedBan = !customer.banned;
    let requestObejct = { username: customer.username, banned: updatedBan };

    console.log(updatedBan);

    axios
      .post("http://localhost:3001/customer/ban", requestObejct)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // needs to be updated
    navigate("/");
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="adminview-customer-data-display">
        <h1 className="adminview-customer-data-display-title">
          {customer.fname} {customer.lname}
        </h1>
        <hr className="adminview-customer-data-display-title-hr" />
        <button
          className="adminview-customer-data-display-button"
          onClick={deletecustomer}
        >
          {" "}
          Delete{" "}
        </button>
        <button
          className="adminview-customer-data-display-button"
          onClick={bancustomer}
        >
          {" "}
          {checkBanned()}{" "}
        </button>

        <div className="adminview-customer-data-display-table">
          <br />
          <table>
            <thead>
              <tr>
                <th className="adminview-customer-data-display-table-th1">
                  Field
                </th>
                <th className="adminview-customer-data-display-table-th1">
                  Value
                </th>
                <th className="adminview-customer-data-display-table-th2">
                  Modify
                </th>
              </tr>
            </thead>
            <tbody>
            <customerFeildViewTile field="Username" value={customer.userName} />
              <customerFeildViewTile field="Fullname" value={customer.name} />
              <customerFeildViewTile field="Email" value={customer.email} />
              <customerFeildViewTile field="Phone Number" value={customer.phoneNum} />
              <customerFeildViewTile field="Address" value={customer.Address} />
         
                field="DOB"
                value={customer.dob.substring(0, 10)}
              
              <customerFeildViewTile
                field="banned"
                value={banStringConversion()}
              />
              <customerFeildViewTile field="Domain" value={customer.domain} />
              <customerFeildViewTile field="Service" value={customer.service} />
              <customerFeildViewTile field="Phone Number" value={customer.pNo} />
              <customerFeildViewTile field="House Number" value={customer.hNo} />
              <customerFeildViewTile field="Street" value={customer.street} />
              <customerFeildViewTile field="Sector" value={customer.sector} />
              <customerFeildViewTile field="City" value={customer.city} />
              <customerFeildViewTile field="Password" value={customer.password} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminViewcustomer;
